import express, { Request, Response, Handler } from 'express';
import { ArticleType, RelationType } from '../types';
import RelationService from '../service/relation.service'
import relationService from '../service/relation.service';
const relationRouter = express.Router()
// get all relations
relationRouter.get('/', async (req: Request, res: Response) => {
    try {
        const relations = await relationService.getAllRelations();
        res.status(200).json(relations);
    } catch (error) {
        res.status(500).json({status: 'error'});
    }
})

// create 
relationRouter.post('/add',async (req: Request, res: Response) => {
    try {
        const subject_entity = req.body.subject
        const object_entity = req.body.object
        const type_name = req.body.type.name
        const is_unique = req.body.type.unique
        const relation = await relationService.createRelation({subject_entity, object_entity, type_name, is_unique})
        res.status(200).json(relation);
    } catch (error) {
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

//update
relationRouter.put('/update', async (req: Request, res: Response) => {
    try {
        const relation_id = req.body.id
        const subject_entity = req.body.subject
        const object_entity = req.body.object
        const type_name = req.body.type.name
        const is_unique = req.body.type.unique
        const relation = await relationService.updateRelation({relation_id, subject_entity, object_entity, type_name, is_unique})
        res.status(200).json(relation);
    } catch (error){
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

// delete
relationRouter.delete('/delete',async (req :Request, res: Response) => {
    try {
        const relation_id = req.body.id
        const relation = await relationService.deleteRelation({relation_id})
        res.status(200).json(relation);
    } catch (error) {
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

export {relationRouter};