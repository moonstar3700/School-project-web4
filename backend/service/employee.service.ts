import EmployeeDB from '../domain/data-access/employee.db';
import {Employee} from '../domain/model/employee';
import { EmployeeType } from '../types';

const getAllEmployees = async (): Promise<Employee[]> => {
    return EmployeeDB.getAllEmployees();
}

const getEmployeesWithEmailPass = ({email, password}: {email: string, password: string} ): Employee => {
    if (!email || !email.trim()){
        throw new Error('email is empty')
    }

    return EmployeeDB.getEmployeesWithEmailPass({email, password})
}

const createEmployee = ({name, password, email}: {name: string, password: string, email: string}): Employee => 
{
    if (!name || !name.trim()){
        throw new Error('name is incorrect or empty')
    }

    return EmployeeDB.createEmployee({name, password, email})
}


export default {getAllEmployees, getEmployeesWithEmailPass, createEmployee};