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

const getAllRelationsM = (): Relation[] => {
    return relations;
}
const getAllRelations = async (): Promise<Relation[]> => {
    try {
            const relationsPrisma = await database.relation.findMany({
                include: {
                    relation_type: true
                },
        })             
        //console.log(relationsPrisma)
        const relations = mapToRelations(relationsPrisma)
        //console.log(relation)
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
        //console.log(relationsPrisma)
        const relations = mapToRelations(relationsPrisma)
        //console.log(relation)
        return relations;
         
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const createRelation = ({subject_entity, object_entity, relation_type}: {subject_entity: string, object_entity: string, relation_type: Relation_type}): Relation => {
    const newRelation = Relation.create(currentid++, subject_entity, object_entity, relation_type)
    relations.push(newRelation);
    return newRelation;
}

const findRelation = ({relation_id}: {relation_id: number}): Relation => {
    const relation = relations.filter(rel => rel.relation_id === relation_id)
    return relation[0];
}

const deleteRelation = ({relation_id}: {relation_id: number}): Relation => {
    const relation = relations.filter(rel => rel.relation_id === relation_id)
    relations = relations.filter(rel => rel.relation_id !== relation_id)
    return relation[0];
}

export default {getAllRelationsFromArticle, getAllRelations, createRelation, findRelation, deleteRelation}