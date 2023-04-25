const deleteRelation = (id: number) => {
    
    return fetch(process.env.NEXT_PUBLIC_API_URL+`/relation/delete/${id}`, {method: 'DELETE', mode: 'cors'})
}

const addRelation = (article_id: number, subject: string, type: string, object: string, is_unique: boolean) => {
    console.log("add relation function")
    const jsonData = 
        {
            "article_id": article_id,
            "subject": subject,
            "object": object,
            "type": {
                "name": type,
                "unique": is_unique
                }
        }
    


    return fetch(process.env.NEXT_PUBLIC_API_URL+`/relation/add`, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors', 
        body: JSON.stringify(jsonData) 
      })
}

const RelationService = {
    deleteRelation, addRelation
}

export default RelationService