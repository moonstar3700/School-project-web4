const assignEmployee = async (article_id: number, employeeId: number) => {
    const token = sessionStorage.getItem('token');
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/employee/asignArticle', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        body: JSON.stringify({ employee_id: employeeId, article_id: article_id }),
        mode: 'cors',
    });
};
const getEmployeesNotAsigned = async (article_id: number) => {
    const token = sessionStorage.getItem('token');
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/employee/notAsigned/' + article_id, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        mode: 'cors',
    });
};

export { assignEmployee, getEmployeesNotAsigned };
