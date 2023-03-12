import { Prisma } from '@prisma/client';
import { Relation_type } from "../model/relation_type";
import { Relation_type as RelationTypePrisma} from '@prisma/client'
import articleService from '../../service/article.service';

const mapToRelationType = ({
    type_id,
    type_name,
    is_unique,
}: RelationTypePrisma) => new Relation_type(
    type_id,
    type_name,
    is_unique
)

const mapToRelationTypes = (
    list: any[]
): Relation_type[] => {
    const result:  Relation_type[] = [];
    list.forEach(object => {result.push(mapToRelationType(object)) })
    return result;
}

export  {mapToRelationType, mapToRelationTypes}