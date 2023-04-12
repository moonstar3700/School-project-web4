import e from 'express';
import EmployeeDB from '../domain/data-access/employee.db';
import {Employee} from '../domain/model/employee';
import { EmployeeType } from '../types';

const getAllEmployees = async (): Promise<Employee[]> => {
    return EmployeeDB.getAllEmployees();
}

const getAllEmployeesArt =async (): Promise<Employee[]> => {
    return EmployeeDB.getAllEmployeesArt();
}

// get all articles from one user//

const getEmployeesWithEmailPass = async ({email, password}: {email: string, password: string} ): Promise<Employee> => {
    if (!email || !email.trim()){
        throw new Error('email is empty')
    }
    if (!password || !password.trim()){
        throw new Error('password is empty')
    }
    const employeeExists = await EmployeeDB.getEmployeesWithEmailPass({email, password})
    if (employeeExists === null) {
        throw new Error('email or password is wrong')
    }
    return employeeExists
}




const createEmployee = async ({name, password, email}: {name: string, password: string, email: string}): Promise<Employee> => 
{
    if (!name || !name.trim()){
        throw new Error('name can\'t be empty')
    }
    if (!password || !password.trim()){
        throw new Error('password can\'t be empty')
    }
    if (!email || !email.trim()){
        throw new Error('email can\'t be empty')
    }

    const employeeExists = await EmployeeDB.getEmployeesWithEmail({email})
    if (employeeExists) {
        throw new Error('This email is already in use')
    }

    return EmployeeDB.createEmployee({name, password, email})
}


export default {getAllEmployees, getEmployeesWithEmailPass, createEmployee, getAllEmployeesArt};