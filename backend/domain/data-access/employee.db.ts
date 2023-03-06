import { Employee } from "../model/employee";

let currentid = 0;

const employees: Employee[] = [
    Employee.create(currentid++, "user", "t", "test@mail.com"),
    Employee.create(currentid++, "user2", "t", "test2@mail.com"),
    Employee.create(currentid++, "user3", "t", "test3@mail.com")
]

let employeeslength:number = employees.length;

const getAllEmployees = (): Employee[] => {return employees}; 

//############## TODO #################
const getEmployeesWithEmailPass = ({email, password}: {email: string, password: string} ): Employee => {
    return Employee.create(currentid++, "login", "t", "logintest@mail.com")
}

//############## TODO #################
const createEmployee = ({name, password, email}: {name: string, password: string, email: string}): Employee => {
    return Employee.create(currentid++, "new", "t", "newtest@mail.com")
}

export default {getAllEmployees, getEmployeesWithEmailPass, createEmployee}