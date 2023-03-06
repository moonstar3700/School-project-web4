import EmployeeDB from '../domain/data-access/employee.db';
import {Employee} from '../domain/model/employee';
import { EmployeeType } from '../types';

const getAllEmployees = (): Employee[] => EmployeeDB.getAllEmployees();

const getEmployeesWithEmailPass = ({email, password}: {email: string, password: string} ): Employee => {
    if (email !== null){
        throw new Error('email is empty')
    }

    return EmployeeDB.getEmployeesWithEmailPass({email, password})
}

const createEmployee = ({name, password, email}: {name: string, password: string, email: string}): Employee => EmployeeDB.createEmployee({name, password, email})

export default {getAllEmployees, getEmployeesWithEmailPass, createEmployee};