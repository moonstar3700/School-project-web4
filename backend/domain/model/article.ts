import { Employee } from "./employee";
import { Relation } from "./relation";

class Article {
    readonly article_id: number;
    readonly title: string;
    readonly content: string;
    readonly date_published: Date;
    readonly employees: Employee[];
    relations: Relation[];

}

export {Article}