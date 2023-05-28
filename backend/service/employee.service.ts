import e from 'express';
import EmployeeDB from '../domain/data-access/employee.db';
import { Employee } from '../domain/model/employee';
import { EmployeeType } from '../types';
import articleDB from '../domain/data-access/article.db';
import bcrypt from 'bcrypt';

const getAllEmployees = async (): Promise<Employee[]> => {
    return EmployeeDB.getAllEmployees();
};

const getAllEmployeesArt = async (): Promise<Employee[]> => {
    return EmployeeDB.getAllEmployeesArt();
};

// get all articles from one user//

const getEmployeesWithEmailPass = async ({
    email,
    password,
}: {
    email: string;
    password: string;
}): Promise<Employee> => {
    if (!email || !email.trim()) {
        throw new Error('email is empty');
    }
    if (!password || !password.trim()) {
        throw new Error('password is empty');
    }

    const employeeExists = await EmployeeDB.getEmployeesWithEmail({ email });
    if (employeeExists === null) {
        throw new Error('user does not exist');
    }
    if (!(await bcrypt.compare(password, employeeExists.password))) {
        throw new Error('password is incorrect');
    }
    return employeeExists;
};

const createEmployee = async ({
    name,
    password,
    email,
}: {
    name: string;
    password: string;
    email: string;
}): Promise<Employee> => {
    if (!name || !name.trim()) {
        throw new Error("name can't be empty");
    }
    if (!password || !password.trim()) {
        throw new Error("password can't be empty");
    }
    if (!email || !email.trim()) {
        throw new Error("email can't be empty");
    }

    const employeeExists = await EmployeeDB.getEmployeesWithEmail({ email });
    if (employeeExists) {
        throw new Error('This email is already in use');
    }
    password = await bcrypt.hash(password, 10);
    return EmployeeDB.createEmployee({ name, password, email });
};

const connectArticle = async ({
    employee_id,
    article_id,
}: {
    employee_id: number;
    article_id: number;
}) => {
    if (
        !article_id ||
        Number.isNaN(Number(article_id)) ||
        articleDB.findArticle({ article_id }) === null
    ) {
        throw new Error('Article id is invalid');
    }
    if (!employee_id || Number.isNaN(Number(employee_id))) {
        throw new Error('Employee id is invalid');
    }
    return EmployeeDB.connectArticle({ employee_id, article_id });
};

const getEmployeesNotAsigned = async (article_id): Promise<Employee[]> => {
    return EmployeeDB.getEmployeesNotAsigned(article_id);
};

export default {
    getAllEmployees,
    getEmployeesWithEmailPass,
    createEmployee,
    getAllEmployeesArt,
    connectArticle,

    getEmployeesNotAsigned,
};
