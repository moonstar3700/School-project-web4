import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { employeeRouter } from '../backend/controller/employee.routes';
import { relationRouter } from '../backend/controller/relation.routes';
import { articleRouter } from '../backend/controller/article.routes';
import { authRouter } from '../backend/controller/auth.routes';
import { expressjwt } from 'express-jwt';

import YAML from 'yamljs';
const app = express();
dotenv.config();
const port = process.env.APP_PORT || 3000;
const jwtSecret = process.env.JWT_SECRET;

const swaggerDocument = YAML.load('./swagger.yaml');

app.use(cors());
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(
    expressjwt({ secret: jwtSecret, algorithms: ['HS256'] }).unless({
        path: ['/auth/login', '/status', '/auth/register'],
    })
);
app.get('/status', (req, res) => {
    res.json({ message: 'Back-end is running...' });
});

app.use('/auth', authRouter);
app.use('/employee', employeeRouter);
app.use('/relation', relationRouter);
app.use('/article', articleRouter);

app.listen(port || 3000, () => {
    console.log(`Back-end is running on port ${port}.`);
});
