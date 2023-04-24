
export interface Employee{
    employee_id : number;
    name: string;
    password: string;
    email: string;
    articles: Array<Article> | null;
}

export interface Article{
    article_id: number;
    title: string;
    content: string;
    date_published: Date;
    relations: Array<Relation> | null;
}

export interface Relation{
    relation_id: number;
    subject_entity: string;
    object_entity: string;
    relation_type: Relation_type;
}

export interface Relation_type{
    type_id: number;
    type_name: string;
    is_unique: boolean;
}