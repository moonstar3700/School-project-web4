import express, { Request, Response, Handler } from 'express';
import { ArticleType, RelationType } from '../types';
import RelationService from '../service/relation.service';
import relationService from '../service/relation.service';
const relationRouter = express.Router();

relationRouter.get('/all', async (req: Request, res: Response) => {
    try {
        const relations = await relationService.getAllRelations();
        res.status(200).json(relations);
    } catch (error) {
        res.status(500).json({ status: 'error' });
    }
});

relationRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const article_id = Number(req.params.id);
        const relations = await relationService.getRelationsFromArticle({ article_id });
        res.status(200).json(relations);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

relationRouter.post('/add', async (req: Request, res: Response) => {
    try {
        const article_id = req.body.article_id;
        const subject_entity = req.body.subject;
        const object_entity = req.body.object;
        const type_name = req.body.type.name;
        const is_unique = req.body.type.unique;
        const sentence = req.body.sentence;
        const relation = await relationService.createRelation({
            subject_entity,
            object_entity,
            type_name,
            is_unique,
            article_id,
            sentence,
        });
        res.status(200).json(relation);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

relationRouter.put('/update', async (req: Request, res: Response) => {
    try {
        const relation_id = req.body.id;
        const subject_entity = req.body.subject;
        const sentence = req.body.sentence;
        const object_entity = req.body.object;
        const type_name = req.body.type.name;
        const is_unique = req.body.type.unique;
        const relation = await relationService.updateRelation({
            relation_id,
            sentence,
            subject_entity,
            object_entity,
            type_name,
            is_unique,
        });
        res.status(200).json(relation);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

relationRouter.delete('/delete/:id', async (req: Request, res: Response) => {
    try {
        console.log('called');
        const relation_id = Number(req.params.id);
        const relation = await relationService.deleteRelation({ relation_id });
        res.status(200).json(relation);
    } catch (error) {
        res.status(500).json({ status: 'error', errorMessage: error.message });
    }
});

export { relationRouter };
