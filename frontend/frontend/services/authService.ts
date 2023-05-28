const login = (emailInput: string, passwordInput: string) => {
    const credentials = {
        email: emailInput,
        password: passwordInput,
    };

    return fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(credentials),
    });
};
const register = (emailInput: string, passwordInput: string, name: string) => {
    const credentials = {
        email: emailInput,
        password: passwordInput,
        name: name,
    };

    return fetch(process.env.NEXT_PUBLIC_API_URL + '/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(credentials),
    });
};

const EmployeeService = {
    login,
    register,
};

export default EmployeeService;
