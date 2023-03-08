import articleDB from '../domain/data-access/article.db';
import {Article} from '../domain/model/article';
import { ArticleType } from '../types';

// article overview
const getAllArticles = (): Article[] => articleDB.getAllArticles();

// find article
const findArticle = ({article_id}: {article_id: number}): Article => {
   return  articleDB.findArticle({article_id});
}

// create article
const createArticle = ({constent, title, date}: {constent: string, title: string, date: Date}): Article => {
    return articleDB.createArticle({constent, title, date});
}

// delete article
const deleteArticle = ({article_id}: {article_id: number}): Article => {
    const article = articleDB.deleteArticle({article_id});
    if (article === undefined) {
        throw new Error('relation doesn\'t exist')
    }
    return article;
}

// add relationships
// delete relations
