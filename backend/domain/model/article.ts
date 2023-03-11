import { Employee } from "./employee";
import { Relation } from "./relation";

class Article {
    readonly article_id: number;
    readonly title: string;
    readonly content: string;
    readonly date_published: Date;
    relations: Relation[];

    constructor(article_id: number, title: string, content: string, date_published: Date){
        this.article_id =article_id;
        this.title = title;
        this.content = content;
        this.date_published = date_published;
    }

    static create(article_id, title, content, date_published){
        return new Article(article_id, title, content, date_published);
    }

    

}

export {Article}