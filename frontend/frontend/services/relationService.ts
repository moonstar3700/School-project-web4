const deleteRelation = (id: number) => {
    // get token from session storage
    const token = sessionStorage.getItem('token');
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/relation/delete/${id}`, {
        method: 'DELETE',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    });
};

const addRelation = (
    article_id: number,
    sentence: string,
    subject: string,
    type: string,
    object: string,
    is_unique: boolean
) => {
    console.log('add relation function');
    const jsonData = {
        sentence: sentence,
        article_id: article_id,
        subject: subject,
        object: object,
        type: {
            name: type,
            unique: is_unique,
        },
    };

    const token = sessionStorage.getItem('token');
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/relation/add`, {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify(jsonData),
        headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token,
        },
    });
};

const updateRelation = (
    relation_id: number,
    sentence: string,
    subject: string,
    type: string,
    object: string,
    is_unique: boolean
) => {
    console.log('update relation function');
    const token = sessionStorage.getItem('token');
    const jsonData = {
        sentence: sentence,
        id: relation_id,
        subject: subject,
        object: object,
        type: {
            name: type,
            unique: is_unique,
        },
    };

    return fetch(process.env.NEXT_PUBLIC_API_URL + `/relation/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
        mode: 'cors',
        body: JSON.stringify(jsonData),
    });
};

const RelationService = {
    deleteRelation,
    addRelation,
    updateRelation,
};

export default RelationService;
