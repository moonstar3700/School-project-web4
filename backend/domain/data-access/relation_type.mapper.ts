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

export  {mapToRelationType}