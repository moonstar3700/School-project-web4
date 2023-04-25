/**
 * @swagger
 *   components:
 *    schemas: 
 *      Relation:
 *          type: object
 *          properties:
 *            relation_id: 
 *               type: number
 *               format: int64
 *            subject_entity:
 *               type: string
 *               description: The subject of the relation.
 *            object_entity:
 *               type: string
 *               description: The object of the relation
 *            relation_type:
 *               type: Relation_type
 *               description: The action in a relation
 * 
 *      Relation_type:
 *          type: object
 *          properties:
 *            type_id:
 *              type: number
 *              format: int64
 *            type_name: 
 *              type: string
 *              description: The action of a relation
 *            is_unique:
 *              type: boolean
 *              description: Indication whether the type is unique or not
 */



import express, { Request, Response, Handler } from 'express';
import { ArticleType, RelationType } from '../types';
import RelationService from '../service/relation.service'
import relationService from '../service/relation.service';
const relationRouter = express.Router()

/**
 * @swagger
 *   /relation/all:
 *     get:
 *       summary: Get all existing relations
 *       responses:
 *         200:
 *           description: Returns all existing relations
 *           content: 
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Relation'
 *         500:
 *           description: There was an error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   errorMessage:
 *                     type: string
 *                     description: Something went wrong
 *     
 */
relationRouter.get('/all', async (req: Request, res: Response) => {
    try {
        const relations = await relationService.getAllRelations();
        res.status(200).json(relations);
    } catch (error) {
        res.status(500).json({status: 'error'});
    }
})

/**
 * @swagger
 *   /relation/{id}:
 *     get:
 *       summary: Get all relations related to an article
 *       parameters:
 *         - name: id
 *           in: path
 *           description: Article id
 *           required: true
 *           schema: 
 *             type: number
 *             format: int64
 *             default: 99
 *               
 *       responses:
 *         200:
 *           description: Returns all existing relations related to the given article id
 *           content: 
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Relation'
 *         500:
 *           description: There was an error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   errorMessage:
 *                     type: string
 *                     description: Something went wrong       
 */
relationRouter.get('/:id',async (req: Request, res: Response) => {
    try {
        const article_id = Number(req.params.id)
        const relations = await relationService.getRelationsFromArticle({article_id})
        res.status(200).json(relations)
    } catch (error) {
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

/**
 * @swagger
 *   /relation/add:
 *     post:
 *        summary: Adds a relation to an article
 *        requestBody:
 *          required: true
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties: 
 *                  id: 
 *                    type: number
 *                  subject:
 *                    type: string
 *                  object:
 *                    type: string
 *                  type:
 *                    type: object
 *                    properties:    
 *                      name:
 *                        type: string
 *                      unique: 
 *                        type: boolean
 *              examples:
 *                  test:
 *                      summary: adds a relation
 *                      value:
 *                         article_id: 99
 *                         subject: swagger test
 *                         object: swagger object
 *                         type: 
 *                           name: is
 *                           unique: false
 *        responses:
 *          200:
 *             description: Adds a relation to the article with the given id
 *             content: 
 *                application/json:
 *                    schema:
 *                       $ref: '#/components/schemas/Relation'
 * 
 * 
 */ 
relationRouter.post('/add',async (req: Request, res: Response) => {
    console.log(req.body)
    try {
        const article_id = req.body.article_id
        const subject_entity = req.body.subject
        const object_entity = req.body.object
        const type_name = req.body.type.name
        const is_unique = req.body.type.unique
        const relation = await relationService.createRelation({subject_entity, object_entity, type_name, is_unique, article_id})
        res.status(200).json(relation);
    } catch (error) {
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

/**
 * @swagger
 *   /relation/update:
 *     put:
 *        summary: Updates a relation to an article
 *        requestBody:
 *          required: true
 *          content: 
 *            application/json:
 *              schema:
 *                type: object
 *                properties: 
 *                  id: 
 *                    type: number
 *                  subject:
 *                    type: string
 *                  object:
 *                    type: string
 *                  type:
 *                    type: object
 *                    properties:    
 *                      name:
 *                        type: string
 *                      unique: 
 *                        type: boolean
 *              examples:
 *                  test:
 *                      summary: adds a relation
 *                      value:
 *                         id: 99
 *                         subject: swagger test
 *                         object: swagger object
 *                         type: 
 *                           name: is
 *                           unique: false
 *        responses:
 *          200:
 *             description: Adds a relation to the article with the given id
 *             content: 
 *                application/json:
 *                    schema:
 *                       $ref: '#/components/schemas/Relation'
 * 
 * 
 */
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

/**
 * @swagger
 *   /relation/delete/{id}:
 *     delete:
 *       summary: delete a relation
 *       parameters:
 *         - name: id
 *           in: path
 *           description: relation id
 *           required: true
 *           schema: 
 *             type: number
 *             format: int64
 *             default: 99
 *               
 *       responses:
 *         200:
 *           description: Returns all existing relations related to the given article id
 *           content: 
 *              application/json:
 *                  schema:
 *                     $ref: '#/components/schemas/Relation'
 *         500:
 *           description: There was an error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   errorMessage:
 *                     type: string
 *                     description: Something went wrong       
 */
relationRouter.delete('/delete/:id',async (req :Request, res: Response) => {
    try {
        console.log("called")
        const relation_id = Number(req.params.id)
        const relation = await relationService.deleteRelation({relation_id})
        res.status(200).json(relation);
    } catch (error) {
        res.status(500).json({status: 'error', errorMessage: error.message});
    }
})

export {relationRouter};