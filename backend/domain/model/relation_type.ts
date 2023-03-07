class Relation_type {
    readonly type_id: number;
    readonly type_name: string;
    readonly is_unique: boolean;

    constructor(type_id: number, type_name: string, is_unique: boolean){
        this.type_id = type_id;
        this.type_name = type_name;
        this.is_unique = is_unique;
    }

    equals({type_name, is_unique}){
        if (this.type_name === type_name && this.is_unique === is_unique){
            return true
        }
        return false;
    }

    static create(type_id ,type_name, is_unique){
        return new Relation_type(type_id, type_name, is_unique);
    }
}

export {Relation_type}