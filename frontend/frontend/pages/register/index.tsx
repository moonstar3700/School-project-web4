import { Article, Relation, Relation_type, Employee } from '../../types';
import React from 'react';
import RelationService from '@/services/relationService';
import { relative } from 'path';
import { useState, useEffect } from 'react';
import EmployeeService from '@/services/authService';
import { parseArgs } from 'util';
import { ReactSession } from 'react-client-session';

const RegisterForm: React.FC = () => {
    const [emailInput, setEmailInput] = useState<string>('');
    const [passwordInput, setPasswordInput] = useState<string>('');
    const [nameInput, setNameInput] = useState<string>('');

    const registerEmployee = async (emailInput: string, passwordInput: string, name: string) => {
        const response = await EmployeeService.register(emailInput, passwordInput, name).then(
            (res) => res.json()
        );
        if (response.token) {
            sessionStorage.setItem('token', response.token); // set token in session
            sessionStorage.setItem('employee', response.employee);
            window.location.href = '/';
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        registerEmployee(emailInput, passwordInput, nameInput);
    };

    return (
        <div className="flex  justify-center items-center  bg-gray-50  h-[100vh]">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
                <div className="px-6 py-12 bg-white shadow sm:rounded-lg sm:px-12">
                    <h3>Register</h3>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={emailInput}
                                    onChange={(event) => setEmailInput(event.target.value)}
                                    required
                                    className="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Password
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={passwordInput}
                                    onChange={(event) => setPasswordInput(event.target.value)}
                                    required
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                                Name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="name"
                                    autoComplete="current-name"
                                    value={nameInput}
                                    onChange={(event) => setNameInput(event.target.value)}
                                    required
                                    className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
