
export interface EmployeeType{
    employee_id : number;
    name: string;
    password: string;
    email: string;
    articles: Array<ArticleType> | null;
}

export interface ArticleType{
    article_id: number;
    title: string;
    content: string;
    date_published: Date;
    employees: Array<EmployeeType> | null;
    relations: Array<RelationType> | null;
}

export interface RelationType{
    relation_id: number;
    subject_entity: string;
    object_entity: string;
    relation_type: Relation_typeType;
}

export interface Relation_typeType{
    type_id: number;
    type_name: string;
    is_unique: boolean;
}