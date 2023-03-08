import { Relation } from "../model/relation";
import { Relation_type } from "../model/relation_type";

let currentid = 0;

let relations: Relation[] = [
    Relation.create(currentid++, "Joe", "president", null),
    Relation.create(currentid++, "He", "cake", null),
    Relation.create(currentid++, "He", "cake", Relation_type.create(55, "makes", false)),
]

const getAllRelations = (): Relation[] => {
    return relations;
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

export default {getAllRelations, createRelation, findRelation, deleteRelation}