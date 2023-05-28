import express, { Request, Response, Handler } from 'express';
//import  as Employee from '../model/employee';
import { EmployeeType } from '../types';
import employeeService from '../service/employee.service';
import authService from '../service/auth.service';
import bcrypt from 'bcrypt';
const employeeRouter = express.Router();

employeeRouter.get('/', async (req: Request, res: Response) => {
    try {
        const employees = await employeeService.getAllEmployeesArt();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ status: 'error' });
    }
});

employeeRouter.get('/all', async (req: Request, res: Response) => {
    try {
        const employees = await employeeService.getAllEmployeesArt();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ status: 'error' });
    }
});

employeeRouter.get('/find/:email/:password', async (req: Request, res: Response) => {
    try {
        const email: string = req.params.email;
        const password: string = req.params.password;
        const encryptedPassword = await bcrypt.hash(password, 10);
        const employee = await employeeService.getEmployeesWithEmailPass({ email, password });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

employeeRouter.post('/asignArticle', async (req: Request, res: Response) => {
    try {
        const article_id = req.body.article_id;
        const employee_id = req.body.employee_id;
        const employee = await employeeService.connectArticle({ employee_id, article_id });
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

// return all employees who have not been assigned an article based on the article_id
employeeRouter.get('/notAsigned/:article_id', async (req: Request, res: Response) => {
    try {
        const article_id = req.params.article_id;
        const employees = await employeeService.getEmployeesNotAsigned(article_id);
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

export { employeeRouter };
