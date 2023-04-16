import articleDB from '../domain/data-access/article.db';
import {Article} from '../domain/model/article';
import { ArticleType } from '../types';

// article overview
const getAllArticles = (): Promise<Article[]> => {
    return articleDB.getAllArticles();
}


// find article
const findArticle = ({article_id}: {article_id: number}): Article => {
   return  articleDB.findArticle({article_id});
}

// create article
const createArticle = ({content, title, employee_id}: {content: string, title: string, employee_id: number}): Promise<Article> => {
    return articleDB.createArticle({content, title, employee_id});
}

// delete article
const deleteArticle = ({article_id}: {article_id: number}): Article => {
    const article = articleDB.deleteArticle({article_id});
    if (article === undefined) {
        throw new Error('relation doesn\'t exist')
    }
    return article;
}
// get all articles from employee met ID

// add relationships function

// delete relations function



//---------------------------------------------------------
/*const getAllArticlesM = (): Article[] => {
    articleDB.getAllArticlesT();
    return articleDB.getAllArticles();
}*/

export default{getAllArticles, findArticle, createArticle, deleteArticle}


