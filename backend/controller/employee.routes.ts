import express, { Request, Response, Handler } from 'express';
//import * as Employee from '../model/employee';
import { EmployeeType } from '../types';
import employeeService from '../service/employee.service'
const employeeRouter = express.Router()

// get all employees
employeeRouter.get('/', async (req: Request, res: Response) => {
    try {
        const employees = await employeeService.getAllEmployees();
        res.status(200).json(employees);
    } catch (error){
        res.status(500).json({status: 'error'});
    }
});

// get all employees and articles
employeeRouter.get('/all', async (req: Request, res: Response) => {
    try {
        const employees = await employeeService.getAllEmployeesArt();
        res.status(200).json(employees);
    } catch (error){
        res.status(500).json({status: 'error'});
    }
});


// find employee
employeeRouter.get('/find/:email/:password', async (req: Request, res: Response) => {
    try {
        var email:string = req.params.email;
        var password:string = req.params.password;
        const employee = await employeeService.getEmployeesWithEmailPass({email, password});
        res.status(200).json(employee);
    } catch (error){
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

employeeRouter.post('/login', async (req: Request, res: Response) => {
    console.log("called")
    try {
        var email:string = req.body.email;
        var password:string = req.body.password;
        const employee = await employeeService.getEmployeesWithEmailPass({email, password});
        res.status(200).json(employee);
    } catch (error){
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

// add employee
employeeRouter.post('/add', async (req: Request, res: Response) => {
    try {
    var name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const employee = await employeeService.createEmployee({name, email, password});
    res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

export {employeeRouter};