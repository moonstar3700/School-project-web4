import { Relation_type } from "./relation_type";

class Relation {
    readonly relation_id: number;
    subject_entity: string;
    object_entity: string;
    relation_type: Relation_type;
}

export {Relation}