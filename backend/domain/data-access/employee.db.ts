import { Employee } from "../model/employee";
import { Prisma, PrismaClient } from "@prisma/client";
import { transcode } from "buffer";
import {mapToEmployee, mapToEmployees} from './employee.mapper'

const database = new PrismaClient();

let currentid = 0;

const employees: Employee[] = [
    Employee.create(currentid++, "user", "t", "test@mail.com"),
    Employee.create(currentid++, "user2", "t", "test2@mail.com"),
    Employee.create(currentid++, "user3", "t", "test3@mail.com")
]



let employeeslength:number = employees.length;

const getAllEmployeesM = (): Employee[] => {return employees}; 

const getAllEmployees = async (): Promise<Employee[]> => {
    try {
        const employeesPrisma = await database.employee.findMany()
        console.log(employeesPrisma)
        const employees = mapToEmployees(employeesPrisma)
        console.log(employees)
        return employees
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const getEmployeesWithEmailPass = async ({email, password}: {email: string, password: string} ): Promise<Employee> => {
    try {
        const employeesPrisma = await database.employee.findFirst({
            where: {
                email: email,
                password: password
            }
        }) 
        if (!employeesPrisma){
            return null
        } else {
            return mapToEmployee(employeesPrisma);
        }
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const getEmployeesWithEmail = async ({email}: {email: string} ): Promise<Employee> => {
    try {
        const employeesPrisma = await database.employee.findFirst({
            where: {
                email: email,
            }
        }) 
        if (!employeesPrisma){
            return null
        } else {
            return mapToEmployee(employeesPrisma);
        }
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const createEmployee = async ({name, password, email}: {name: string, password: string, email: string}): Promise<Employee> => {
    try {
        const employeePrisma = await database.employee.create({
            data: {
                name,
                password,
                email
            }
        })
        return mapToEmployee(employeePrisma)
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}


//############## TODO #################
const getEmployeesWithEmailPass1 = ({email, password}: {email: string, password: string} ): Employee => {
    return Employee.create(currentid++, "login", "t", "logintest@mail.com")
}

//############## TODO #################
const createEmployee1 = ({name, password, email}: {name: string, password: string, email: string}): Employee => {
    return Employee.create(currentid++, "new", "t", "newtest@mail.com")
}

export default {getAllEmployees, getEmployeesWithEmailPass, createEmployee, getEmployeesWithEmail}