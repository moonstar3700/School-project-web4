import relationDb from '../domain/data-access/relation.db';
import relationDB from '../domain/data-access/relation.db';
import relation_typeDb from '../domain/data-access/relation_type.db';
import { Relation } from "../domain/model/relation";


const getAllRelations = (): Relation[] => relationDB.getAllRelations();

// create relation
const createRelation = ({subject_entity, object_entity, type_name, is_unique}: {subject_entity: string, object_entity: string, type_name: string, is_unique: boolean}): Relation => {
    if (!subject_entity || !subject_entity.trim()){
        subject_entity = "/";
    } 
    if (!object_entity || !object_entity.trim()){
        object_entity = "/";
    }
    if (!type_name || !type_name.trim()){
        type_name = "/";
    }
    const relation_type = relation_typeDb.getRelationType({type_name, is_unique})
    return relationDB.createRelation({subject_entity, object_entity, relation_type})
}

// adjust relation
const updateRelation = ({relation_id, subject_entity, object_entity, type_name, is_unique}: {relation_id: number, subject_entity: string, object_entity: string, type_name: string, is_unique: boolean}): Relation => {
    if (!subject_entity || !subject_entity.trim()){
        subject_entity = "/";
    } 
    if (!object_entity || !object_entity.trim()){
        object_entity = "/";
    }
    if (!type_name || !type_name.trim()){
        type_name = "/";
    }
    const relation_type = relation_typeDb.getRelationType({type_name, is_unique})
    const relation = relationDB.findRelation({relation_id});
    relation.adjust({subject_entity, object_entity, relation_type})
    return relation;
}


// delete relation
const deleteRelation = ({relation_id}: {relation_id: number}): Relation => {
    const relation = relationDB.deleteRelation({relation_id});
    if (relation === undefined) {
        throw new Error('relation doesn\'t exist')
    }
    return relation
}


export default {getAllRelations, createRelation, updateRelation, deleteRelation}

