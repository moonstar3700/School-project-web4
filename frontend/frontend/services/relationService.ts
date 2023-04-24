const deleteRelation = (id: number) => {
    
    return fetch(process.env.NEXT_PUBLIC_API_URL+`/relation/delete/${id}`, {method: 'DELETE', mode: 'cors'})
}


const RelationService = {
    deleteRelation
}

export default RelationService