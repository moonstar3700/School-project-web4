import express, { Request, Response, Handler } from 'express';
import { ArticleType } from '../types';
import articleService from '../service/article.service'

const articleRouter = express.Router()

//get all articles
articleRouter.get('/', async (req: Request, res: Response) => {
    try {
        const articles = await articleService.getAllArticles();
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({status: 'error'});
    }
})

articleRouter.get('/allFrom/:id', async(req: Request, res: Response) =>{
    try {
        const employee_id = Number(req.params.id)
        const articles = await articleService.getAllArticlesFromEmployee({employee_id})
        res.status(200).json(articles);
    } catch (error) {
        res.status(500).json({status: 'error'});
    }
})

// find article with id --> should be title?
articleRouter.get('/findId/:id', async(req: Request, res: Response) =>{
    try {
        const article_id = Number(req.params.id)
        const article = await articleService.findArticle({article_id})
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({status: 'error'});
    }
})

// create new article
articleRouter.post('/add', async(req: Request, res: Response) => {
    try {
        var content: string = req.body.content
        var title: string = req.body.title
        var employee_id: number = req.body.employee_id
        const article = await articleService.createArticle({content, title, employee_id});
        res.status(200).json(article);
    } catch (error) {
        res.status(500).json({status: 'error'});
    }
})

// delete article
articleRouter.delete('/delete/:id', async(req: Request, res: Response) =>{
    try {
        const article_id = Number(req.params.id)
        const article = await articleService.deleteArticle({article_id})
        res.status(200).json(article);
    }  catch (error){
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

export {articleRouter}