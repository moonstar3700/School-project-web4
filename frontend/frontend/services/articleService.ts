import { ReactSession } from 'react-client-session';
const getAllArticles = async () => {
    // fetch(process.env.NEXT_PUBLIC_API_URL + '/article') and give JWT token in header
    const token = sessionStorage.getItem('token');
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/article', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
        mode: 'cors',
    });
};

const ArticleService = {
    getAllArticles,
};

export default ArticleService;
