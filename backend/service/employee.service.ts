import EmployeeDB from '../domain/data-access/employee.db';
import {Employee} from '../domain/model/employee';
import { EmployeeType } from '../types';

const getAllEmployees = (): Employee[] => EmployeeDB.getAllEmployees();

export default {getAllEmployees};