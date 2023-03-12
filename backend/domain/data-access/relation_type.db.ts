import { Relation_type } from "../model/relation_type";
import { Prisma, PrismaClient } from "@prisma/client";
import { mapToRelationType, mapToRelationTypes } from "./relation_type.mapper";



let currentid = 0;

const relationTypes: Relation_type[] = [
    Relation_type.create(currentid++, "is", false),
    Relation_type.create(currentid++, "goes", false),
    Relation_type.create(currentid++, "takes", false)
]

const database = new PrismaClient();


// searches for type. If not found makes a new one and returns it.
const getRelationType = ({type_name, is_unique}: {type_name: string, is_unique: boolean}): Relation_type => {
    const result = relationTypes.find(type => type.type_name === type_name && type.is_unique === is_unique);
    if (result === undefined){
        return Relation_type.create(currentid++, type_name, is_unique);
    } else return result;
    
}

const findType = async ({type_name, is_unique}: {type_name: string, is_unique: boolean}): Promise<Relation_type> => {
    try {
        const relationTypePrisma = await database.relation_type.findFirst({
            where: {
                type_name: type_name,
                is_unique: is_unique
            },
        })
        if (!relationTypePrisma){
            return null;
        }
        const relationType = mapToRelationType(relationTypePrisma)
        return relationType
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

const createType = async ({type_name, is_unique}: {type_name: string, is_unique: boolean}): Promise<Relation_type> =>{
    try{
        const type = await database.relation_type.create({
            data: {
                type_name,
                is_unique
            }
        })
        return mapToRelationType(type)
    } catch (error){
        console.error(error);
        throw new Error('Database error. See server log for details.')
    }
}

// keep at void, or return list, or the made item?
const createRelationType = ({type_name, is_unique}: {type_name: string, is_unique: boolean}): void => {
    const newType = Relation_type.create(currentid++, type_name, is_unique);
    relationTypes.push(newType);
}

const findTypeM = ({type_name, is_unique}: {type_name: string, is_unique: boolean}): Relation_type => {
    const result = relationTypes.find(type => type.type_name === type_name && type.is_unique === is_unique);
    if (result === undefined){return null}
    else return result;
    }

export default{getRelationType, createRelationType, findType, createType};