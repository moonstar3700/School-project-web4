import { Prisma } from '@prisma/client';
import { Relation } from '../model/relation';
import { Relation_type } from '../model/relation_type';
import { Relation as RelationPrisma } from '@prisma/client';
import { Relation_type as RelationTypePrisma } from '@prisma/client';
import articleService from '../../service/article.service';
import { mapToRelationType } from '../data-access/relation_type.mapper';
import { resourceUsage } from 'process';

const mapToRelation = ({
    relation_id,
    sentence,
    subject_entity,
    object_entity,
    relation_type_id,
    article_id,
    relation_type,
}: RelationPrisma & {
    relation_type: RelationTypePrisma;
}) =>
    new Relation(
        relation_id,
        sentence,
        subject_entity,
        object_entity,
        mapToRelationType(relation_type)
    );

const mapToRelations = (list: any[]): Relation[] => {
    const result: Relation[] = [];
    list.forEach((object) => {
        result.push(mapToRelation(object));
    });
    return result;
};

export { mapToRelation, mapToRelations };
