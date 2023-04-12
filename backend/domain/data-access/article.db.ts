import { Article } from "../model/article";
import { Prisma, PrismaClient } from "@prisma/client";
import { mapToArticle, mapToArticles } from "./article.mapper";



let currentID = 0;

let articles: Article[] = [
    Article.create(currentID++, "lorem", "title1", new Date("2015-03-25")),
    Article.create(currentID++, "lorem", "title2", new Date("2015-03-26"))

]

const database = new PrismaClient();


const getAllArticles = async (): Promise<Article[]> => {
    try {
            const articlesPrisma = await database.article.findMany({
                include: {
                    relations: {
                        include: {
                            relation_type: true
                        }
                    }
                }
            })
            const articles = mapToArticles(articlesPrisma)
            return articles;
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
};

const getAllArticlesT = async (): Promise<Article[]> => {
    try {
        const articlesPrisma = await database.article.findMany({

        })
        console.log(articlesPrisma)
        return null
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const createArticle = ({content, title}: {content: string, title: string}): Article => {
    const article = Article.create(currentID++, content, title, Date.now())
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
//-----------------------------------------------------------------
const getAllArticlesM = (): Article[] => {return articles};

export default {getAllArticles, createArticle, findArticle, deleteArticle, getAllArticlesT}