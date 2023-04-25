import { Article, Relation, Relation_type, Employee} from '../../types'
import React from 'react'
import RelationService from '@/services/relationService'
import { relative } from 'path'
import { useState, useEffect } from "react"
import AddRelationForm from '../relations/addRelation'
import EmployeeService from '@/services/employeeService'
import { parseArgs } from 'util'
import { ReactSession } from 'react-client-session';


const LoginForm: React.FC = () => {

    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');

    const loginEmployee = async (emailInput: string, passwordInput: string) => {
        const emplo: Employee = await EmployeeService.login(emailInput, passwordInput).then((res) => res.json())
        if (emplo !== null && emplo !== undefined){
            ReactSession.set("user", emplo.name)
            ReactSession.set("user_id", String(emplo.employee_id))
            console.log(ReactSession.get("user"))
            //window.location.reload();
        }
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        loginEmployee(emailInput, passwordInput);
    }

    return (
        <>
            <section className='login-container'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="">email</label>
                    <input 
                        type="text"
                        className='form-control'
                        value={emailInput}
                        onChange={(event) => setEmailInput(event.target.value)}/>
                    <label htmlFor="">password</label>
                    <input 
                        type="text"
                        className='form-control'
                        value={passwordInput}
                        onChange={(event) => setPasswordInput(event.target.value)}/>
                    <input type="submit" value="Log in" />
                </form>
            </section>
        </>
    )
}

export default LoginForm