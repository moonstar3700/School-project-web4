import { Relation } from "../model/relation";
import { Relation_type } from "../model/relation_type";
import { Prisma, PrismaClient } from "@prisma/client";
import { mapToRelation, mapToRelations } from "./relation.mapper";


let currentid = 0;

let relations: Relation[] = [
    Relation.create(currentid++, "Joe", "president", null),
    Relation.create(currentid++, "He", "cake", null),
    Relation.create(currentid++, "He", "cake", Relation_type.create(55, "makes", false)),
]

const database = new PrismaClient();


const getAllRelations = async (): Promise<Relation[]> => {
    try {
            const relationsPrisma = await database.relation.findMany({
                include: {
                    relation_type: true
                },
        })             
        const relations = mapToRelations(relationsPrisma)
        return relations;
         
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const getAllRelationsFromArticle = async ({article_id}: {article_id: number}): Promise<Relation[]> => {
    try {
            const relationsPrisma = await database.relation.findMany({
                include: {
                    relation_type: true
                },
                where: {
                    article_id: article_id
                }
        })    
        const relations = mapToRelations(relationsPrisma)
        return relations;
         
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}



const createRelation = async ({subject_entity, object_entity, relation_type, article_id}: {subject_entity: string, object_entity: string, relation_type: Relation_type, article_id: number}): Promise<Relation> => {
    try {
        const type_id = relation_type.get_id
        const relationPrisma = await database.relation.create({
            data: {
                subject_entity,
                object_entity,
                relation_type_id: type_id,
                article_id: article_id
            },
            include: {
                relation_type: true
            }
        })
        return  mapToRelation(relationPrisma);
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const findRelation = async ({relation_id}: {relation_id: number}): Promise<Relation> =>{
    try {
        const relationPrisma = await database.relation.findFirst({
            where: {
                relation_id: relation_id
            },
            include: {
                relation_type: true
            }
        })
        if (!relationPrisma){
            return null
        } else {
            return mapToRelation(relationPrisma);
        }
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const updateRelationAll = async ({relation_id, subject_entity, object_entity, relation_type_id}: {relation_id: number, subject_entity: string, object_entity: string, relation_type_id: number}): Promise<Relation> => {
    try {
        const relationPrisma = await database.relation.update({
            where: {
                relation_id: relation_id
            },
            data: {
                subject_entity: subject_entity,
                object_entity: object_entity,
                relation_type_id: relation_type_id,
            },
            include: {
                relation_type: true
            }
        })
        return mapToRelation(relationPrisma)
    }catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
} 

const deleteRelation = async ({relation_id}: {relation_id: number}): Promise<Relation> => {
    try{
        const relationPrisma = await database.relation.delete({
            where: {
                relation_id: relation_id
            },
            include: {
                relation_type: true
            }
        })
        return mapToRelation(relationPrisma)
    }catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const deleteRelationM = ({relation_id}: {relation_id: number}): Relation => {
    const relation = relations.filter(rel => rel.relation_id === relation_id)
    relations = relations.filter(rel => rel.relation_id !== relation_id)
    return relation[0];
}

/** Local **/
const getAllRelationsM = (): Relation[] => {
    return relations;
}
const createRelationM = ({subject_entity, object_entity, relation_type}: {subject_entity: string, object_entity: string, relation_type: Relation_type}): Relation => {
    const newRelation = Relation.create(currentid++, subject_entity, object_entity, relation_type)
    relations.push(newRelation);
    return newRelation;
}
const findRelationM = ({relation_id}: {relation_id: number}): Relation => {
    const relation = relations.filter(rel => rel.relation_id === relation_id)
    return relation[0];
}

export default {updateRelationAll, getAllRelationsFromArticle, getAllRelations, createRelation, findRelation, deleteRelation}