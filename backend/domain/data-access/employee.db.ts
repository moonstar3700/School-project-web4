import { Employee } from "../model/employee";
import { Prisma, PrismaClient } from "@prisma/client";
import { transcode } from "buffer";
import {mapToEmployee, mapToEmployees, mapToEmployeeArt, mapToEmployeesArt} from './employee.mapper'

const database = new PrismaClient();

let currentid = 0;

const employees: Employee[] = [
    Employee.create(currentid++, "user", "t", "test@mail.com"),
    Employee.create(currentid++, "user2", "t", "test2@mail.com"),
    Employee.create(currentid++, "user3", "t", "test3@mail.com")
]



let employeeslength:number = employees.length;



const getAllEmployees = async (): Promise<Employee[]> => {
    try {
        const employeesPrisma = await database.employee.findMany()
        const employees = mapToEmployees(employeesPrisma)
        return employees
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}


//TODO **************************************************
const getAllEmployeesArt = async (): Promise<Employee[]> => {
    try {
        const employeesPrisma = await database.employee.findMany({
            include: {
                articles: {
                    include: {
                        relations: {
                            include: {
                                relation_type: true
                            }
                        }
                    }
                }
            }
        })
        console.log(employeesPrisma)
        const employees = mapToEmployeesArt(employeesPrisma)
        console.log(employees)
        return employees
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const connectArticle = async ({employee_id, article_id}: {employee_id: number, article_id: number}) => {
    try {
        const employeePrisma = await database.employee.update({
            data: {
                articles: {connect: {article_id: article_id}}
            },
            where: {
                employee_id: employee_id
            },
            include: {
                articles: {
                    include: {
                        relations: {
                            include: {
                                relation_type: true
                            }
                        }
                    }
                }
            }

        })
        return mapToEmployeeArt(employeePrisma)
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

const getAllEmployeesM = (): Employee[] => {return employees}; 

const getEmployeesWithEmailPass1 = ({email, password}: {email: string, password: string} ): Employee => {
    return Employee.create(currentid++, "login", "t", "logintest@mail.com")
}


const createEmployee1 = ({name, password, email}: {name: string, password: string, email: string}): Employee => {
    return Employee.create(currentid++, "new", "t", "newtest@mail.com")
}

export default {getAllEmployees, getEmployeesWithEmailPass, createEmployee, getEmployeesWithEmail, getAllEmployeesArt, connectArticle}