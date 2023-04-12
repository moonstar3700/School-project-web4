import { Prisma } from '@prisma/client';
import { Relation } from "../model/relation";
import { Article } from "../model/article";
import { Relation as RelationPrisma} from '@prisma/client'
import { Article as ArticlePrisma} from '@prisma/client'
import { mapToRelations } from '../data-access/relation.mapper'

const mapToArticle = ({article_id, title, content, date_published, relations}: ArticlePrisma & {relations: RelationPrisma[]}) =>
new Article(article_id, title, content, date_published, mapToRelations(relations))

const mapToArticles = (
    list: any[]
): Article[] => {
    const result:  Article[] = [];
    list.forEach(object => {result.push(mapToArticle(object)) })
    return result;
}

export {mapToArticle, mapToArticles}