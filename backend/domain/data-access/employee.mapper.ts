import { Prisma } from '@prisma/client';
import { RowDataPacket } from 'mysql2';
import { Employee } from "../model/employee";
import { Employee as employeePrisma} from '@prisma/client'
import { Article as articlePrisma} from '@prisma/client'
import employeeService from '../../service/employee.service';
import { Article } from '../model/article';
import { mapToArticles } from './article.mapper';
 

const mapToEmployee = ({
    employee_id,
    name,
    password,
    email,
}: employeePrisma ): Employee => 
    new Employee(
        employee_id,
        name,
        password,
        email
    )

    const mapToEmployeeArt = ({
        employee_id,
        name,
        password,
        email,
        articles
    }: employeePrisma & {articles: articlePrisma[]}): Employee => 
        new Employee(
            employee_id,
            name,
            password,
            email,
            mapToArticles(articles) 
        )    


const mapToEmployees = (employees_prisma: employeePrisma[]): Employee[] => employees_prisma.map(mapToEmployee)

const mapToEmployeesArt = (employees_prisma: employeePrisma[]): Employee[] => employees_prisma.map(mapToEmployeeArt)
//const mapToEmployeesArt = (employees_prisma: employeePrisma & {articles: articlePrisma[]}[]): Employee[] => employees_prisma.map(mapToEmployeeArt)

export {mapToEmployee, mapToEmployees, mapToEmployeeArt, mapToEmployeesArt}