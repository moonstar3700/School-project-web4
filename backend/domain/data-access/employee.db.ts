import { Employee } from "../model/employee";

let currentid = 0;

const employees: Employee[] = [
    Employee.create(currentid++, "user", "t", "test@mail.com"),
    Employee.create(currentid++, "user2", "t", "test2@mail.com"),
    Employee.create(currentid++, "user3", "t", "test3@mail.com")
]

const getAllEmployees = (): Employee[] => {return employees}; 

export default {getAllEmployees}