import { Relation_type } from './relation_type';

class Relation {
    readonly relation_id: number;
    subject_entity: string;
    object_entity: string;
    relation_type: Relation_type;
    sentence: string;

    constructor(
        relation_id: number,
        sentence: string,
        subject_entity: string,
        object_entity: string,
        relation_type: Relation_type
    ) {
        this.relation_id = relation_id;
        this.subject_entity = subject_entity;
        this.sentence = sentence;
        this.object_entity = object_entity;
        this.relation_type = relation_type;
    }

    equals({ subject_entity, object_entity, relation_type }) {
        if (
            this.subject_entity === subject_entity &&
            object_entity === this.object_entity &&
            this.relation_type === relation_type
        ) {
            return true;
        }
        return false;
    }

    static create(relation_id, sentence, subject_entity, object_entity, relation_type) {
        return new Relation(relation_id, sentence, subject_entity, object_entity, relation_type);
    }

    public update({ subject_entity, object_entity, relation_type }) {
        this.subject_entity = subject_entity;
        this.object_entity = object_entity;
        this.relation_type = relation_type;
    }

    public setType(relation_type: Relation_type): void {
        this.relation_type = relation_type;
    }

    public adjust({ subject_entity, object_entity, relation_type }) {
        this.subject_entity = subject_entity;
        this.object_entity = object_entity;
        this.relation_type = relation_type;
    }
}

export { Relation };
