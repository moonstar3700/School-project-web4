import { Article } from "../model/article";

let currentID = 0;

let articles: Article[] = [
    Article.create(currentID++, "lorem", "title1", new Date("2015-03-25")),
    Article.create(currentID++, "lorem", "title2", new Date("2015-03-26"))

]

const getAllArticles = (): Article[] => {return articles};

const createArticle = ({constent, title, date}: {constent: string, title: string, date: Date}): Article => {
    const article = Article.create(currentID++, constent, title, date)
    articles.push(article);
    return article;
}

const findArticle = ({article_id}: {article_id: number}): Article => {
    const article = articles.filter(art => art.article_id === article_id);
    return article[0]
}

const deleteArticle = ({article_id}: {article_id: number}): Article => {
    const article = articles.filter(art => art.article_id === article_id);
    articles = articles.filter(art => art !== article[0])
    return article[0]
}

export default {getAllArticles, createArticle, findArticle, deleteArticle}