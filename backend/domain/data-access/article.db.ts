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

const getAllArticlesFromEmployee = async ({employee_id}: {employee_id: number}): Promise<Article[]> => {
    try {
        const articlesPrisma = await database.article.findMany({
            where: {
                employees: {
                    some: {
                        employee_id: employee_id
                    }
                }
            },
            include: {
                relations: {
                    include: {
                        relation_type: true
                    }
                }
            }
        })
        const articles = mapToArticles(articlesPrisma)
        return articles
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const createArticle = async ({content, title, employee_id}: {content: string, title: string, employee_id: number}): Promise<Article> => {
    try {
        const articlesPrisma = await database.article.create({
            data: {
                title: title,
                content: content,
                employees: {connect: {employee_id: employee_id}}
            },
            include: {
                relations: {
                    include: {
                        relation_type: true
                    }
                }
            }
        })
        const article = mapToArticle(articlesPrisma)
        return article
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}


//-----------------------------------------------------------------
const getAllArticlesM = (): Article[] => {return articles};

const findArticle = ({article_id}: {article_id: number}): Article => {
    const article = articles.filter(art => art.article_id === article_id);
    return article[0]
}

const deleteArticle = ({article_id}: {article_id: number}): Article => {
    const article = articles.filter(art => art.article_id === article_id);
    articles = articles.filter(art => art !== article[0])
    return article[0]
}

export default {getAllArticles, createArticle, findArticle, deleteArticle, getAllArticlesFromEmployee}