const login = (emailInput: string, passwordInput: string) => {
    const credentials = {
        "email": emailInput,
        "password": passwordInput
    }
    
    console.log(credentials)
    console.log(JSON.stringify(credentials))
    
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/employee/login', { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors', 
        body: JSON.stringify(credentials) 
      })

}


const EmployeeService = {
    login
}

export default EmployeeService