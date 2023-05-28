import relationDb from '../domain/data-access/relation.db';
import relationDB from '../domain/data-access/relation.db';
import articleDB from '../domain/data-access/article.db';
import relation_typeDb from '../domain/data-access/relation_type.db';
import { Relation } from '../domain/model/relation';

const getAllRelations = (): Promise<Relation[]> => relationDB.getAllRelations();

const getRelationsFromArticle = ({ article_id }: { article_id: number }): Promise<Relation[]> => {
    if (!article_id || Number.isNaN(Number(article_id))) {
        throw new Error('Article id is invalid');
    }
    if (articleDB.findArticle({ article_id }) === null) {
        throw new Error('Corresponding article does not exist');
    }

    return relationDB.getAllRelationsFromArticle({ article_id });
};

const createRelation = async ({
    subject_entity,
    object_entity,
    type_name,
    sentence,
    is_unique,
    article_id,
}: {
    sentence: string;
    subject_entity: string;
    object_entity: string;
    type_name: string;
    is_unique: boolean;
    article_id: number;
}): Promise<Relation> => {
    if (articleDB.findArticle({ article_id }) === null) {
        throw new Error('Corresponding article does not exist');
    }
    const errors = [];
    if (!type_name || type_name === undefined) {
        errors.push('type name is invalid');
    }
    if (is_unique === undefined) {
        errors.push('is unique is invalid');
    }
    if (!subject_entity || !subject_entity.trim()) {
        errors.push('subject entity is invalid');
    }
    if (!sentence || !sentence.trim()) {
        errors.push('sentence is invalid');
    }
    if (!object_entity || !object_entity.trim()) {
        object_entity = '/';
    }

    if (errors.length > 0) {
        throw new Error(errors.join(' AND '));
    }

    let relation_type = await relation_typeDb.findType({ type_name, is_unique });
    if (relation_type === null) {
        relation_type = await relation_typeDb.createType({ type_name, is_unique });
    }
    return relationDB.createRelation({
        subject_entity,
        sentence,
        object_entity,
        relation_type,
        article_id,
    });
};

// adjust relation
const updateRelation = async ({
    relation_id,
    sentence,
    subject_entity,
    object_entity,
    type_name,
    is_unique,
}: {
    relation_id: number;
    sentence: string;
    subject_entity: string;
    object_entity: string;
    type_name: string;
    is_unique: boolean;
}): Promise<Relation> => {
    const relationExists = await relationDB.findRelation({ relation_id });
    if (!relationExists) {
        throw new Error('relation does not exist');
    }
    const errors = [];
    if (!type_name || type_name === undefined) {
        errors.push('type name is invalid');
    }
    if (is_unique === undefined) {
        errors.push('is unique is invalid');
    }
    if (!sentence || !sentence.trim()) {
        errors.push('sentence is invalid');
    }
    if (!subject_entity || !subject_entity.trim()) {
        errors.push('subject entity is invalid');
    }
    if (!object_entity || !object_entity.trim()) {
        object_entity = '/';
    }

    if (errors.length > 0) {
        throw new Error(errors.join(' AND '));
    }

    // check to see if article with id exists

    let relation_type = await relation_typeDb.findType({ type_name, is_unique });
    if (relation_type === null) {
        relation_type = await relation_typeDb.createType({ type_name, is_unique });
    }
    const relation_type_id = relation_type.get_id;
    const relation = await relationDB.updateRelationAll({
        relation_id,
        sentence,
        subject_entity,
        object_entity,
        relation_type_id,
    });
    return relation;
};

const deleteRelation = async ({ relation_id }: { relation_id: number }): Promise<Relation> => {
    const relationExists = await relationDB.findRelation({ relation_id });
    if (!relationExists) {
        throw new Error('relation does not exist');
    }

    const relation = await relationDB.deleteRelation({ relation_id });
    return relation;
};

export default {
    getRelationsFromArticle,
    getAllRelations,
    createRelation,
    updateRelation,
    deleteRelation,
};
