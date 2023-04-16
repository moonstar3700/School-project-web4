import articleDB from '../domain/data-access/article.db';
import {Article} from '../domain/model/article';
import { ArticleType } from '../types';

// article overview
const getAllArticles = (): Promise<Article[]> => {
    return articleDB.getAllArticles();
}

const getAllArticlesFromEmployee = async ({employee_id}: {employee_id: number}): Promise<Article[]> => {
    if (!employee_id || Number.isNaN(Number(employee_id))){
        throw new Error('Employee id is invalid')
    }
    return articleDB.getAllArticlesFromEmployee({employee_id})
}

// find article
const findArticle = async ({article_id}: {article_id: number}): Promise<Article> => {
    if (!article_id || Number.isNaN(Number(article_id))){
        throw new Error('Article id is invalid')
    }
    return articleDB.findArticle({article_id});
}

// create article
const createArticle = ({content, title, employee_id}: {content: string, title: string, employee_id: number}): Promise<Article> => {
    if (!content || !content.trim()){
        throw new Error('content can\'t be empty');
    } 
    if (!title || !title.trim()){
        throw new Error('title can\'t be empty');
    } 
    if (!employee_id || Number.isNaN(Number(employee_id))){
        throw new Error('Employee id is invalid')
    }
    return articleDB.createArticle({content, title, employee_id});
}

// delete article
const deleteArticle = async ({article_id}: {article_id: number}): Promise<Article> => {
    if (!article_id || Number.isNaN(Number(article_id))){
        throw new Error('Article id is invalid')
    }
    return articleDB.deleteArticle({article_id});
}

//---------------------------------------------------------
/*const getAllArticlesM = (): Article[] => {
    articleDB.getAllArticlesT();
    return articleDB.getAllArticles();
}*/

export default{getAllArticles, findArticle, createArticle, deleteArticle, getAllArticlesFromEmployee}


