const getAllArticles = () => {
    console.log('service get')
    return fetch(process.env.NEXT_PUBLIC_API_URL+'/article')
}

const ArticleService = {
    getAllArticles
}

export default ArticleService
