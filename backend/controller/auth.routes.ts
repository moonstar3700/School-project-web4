import express, { Request, Response, NextFunction } from 'express';
import { EmployeeType } from '../types';
import employeeService from '../service/employee.service';
import authService from '../service/auth.service';

const authRouter = express.Router();

authRouter.post('/login', async (req: Request, res: Response) => {
    try {
        const email: string = req.body.email;
        const password: string = req.body.password;

        const employee = await employeeService.getEmployeesWithEmailPass({
            email,
            password,
        });

        const token = authService.generateJwtToken(employee.get_email);
        console.log(token, employee.get_name, employee.get_role);

        res.status(200).json({
            message: 'authenticated successfully',
            token: token,
            name: employee.get_name,
            role: employee.get_role,
        });
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

authRouter.post('/register', async (req: Request, res: Response, next: NextFunction) => {
    try {
        var name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const employee = await employeeService.createEmployee({ name, email, password });
        const token = authService.generateJwtToken(employee.get_email);
        res.status(200).json({
            message: 'authenticated successfully',
            token: token,
            name: employee.get_name,
            role: employee.get_role,
        });
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

export { authRouter };
