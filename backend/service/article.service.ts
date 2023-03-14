import articleDB from '../domain/data-access/article.db';
import {Article} from '../domain/model/article';
import { ArticleType } from '../types';

// article overview
const getAllArticles = (): Article[] => {
    articleDB.getAllArticlesT();
    return articleDB.getAllArticles();
}


// find article
const findArticle = ({article_id}: {article_id: number}): Article => {
   return  articleDB.findArticle({article_id});
}

// create article
const createArticle = ({content, title}: {content: string, title: string}): Article => {
    return articleDB.createArticle({content, title});
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


export default{getAllArticles, findArticle, createArticle, deleteArticle}


