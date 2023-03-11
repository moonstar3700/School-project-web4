import { Prisma } from '@prisma/client';
import { RowDataPacket } from 'mysql2';
import { Employee } from "../model/employee";
import { Employee as employeePrisma} from '@prisma/client'
import { Article as articlePrisma} from '@prisma/client'
import employeeService from '../../service/employee.service';
 

/*const mapToEmployee = ({
    employee_id,
    name,
    password,
    email,
    articles,
}: employeePrisma & {
    articles?: articlePrisma[] 
}): Employee => 
    new Employee(
        employee_id,
        name,
        password,
        email,
        articles,
    )


const mapToEmployees = (employees_prisma: employeePrisma[]): Employee[] => employees_prisma.map(mapToEmployee)

export default {mapToEmployee, mapToEmployees}*/