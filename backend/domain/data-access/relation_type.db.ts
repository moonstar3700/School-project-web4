import { Relation_type } from "../model/relation_type";


let currentid = 0;

const relationTypes: Relation_type[] = [
    Relation_type.create(currentid++, "is", false),
    Relation_type.create(currentid++, "goes", false),
    Relation_type.create(currentid++, "takes", false)
]

// searches for type. If not found makes a new one and returns it.
const getRelationType = ({type_name, is_unique}: {type_name: string, is_unique: boolean}): Relation_type => {
    const result = relationTypes.find(type => type.type_name === type_name && type.is_unique === is_unique);
    if (result === undefined){
        return Relation_type.create(currentid++, type_name, is_unique);
    } else return result;
    
}

// keep at void, or return list, or the made item?
const createRelationType = ({type_name, is_unique}: {type_name: string, is_unique: boolean}): void => {
    const newType = Relation_type.create(currentid++, type_name, is_unique);
    relationTypes.push(newType);
}

const findType = ({type_name, is_unique}: {type_name: string, is_unique: boolean}): Relation_type => {
    const result = relationTypes.find(type => type.type_name === type_name && type.is_unique === is_unique);
    if (result === undefined){return null}
    else return result;
    }

export default{getRelationType, createRelationType, findType};