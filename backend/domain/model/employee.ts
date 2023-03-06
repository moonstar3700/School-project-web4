import { Article } from "./article";

class Employee {
    readonly employee_id : number;
    readonly name: string;
    readonly password: string;
    readonly email: string;
    articles: Article[];

    get get_employee_id() {
        return this.employee_id;
    }

    get get_name() {
        return this.name;
    }

    get get_password() {
        return this.password;
    }

    get get_email(){
        return this.email;
    }

    get get_articles(){
        return this.articles;
    }

    constructor(id: number, name: string, password: string, email: string) {
        this.employee_id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }

    equals({ email,  password}): boolean {
        if (this.email === email && this.password === password) {
            return true;
        } else return false;
    }

    static create(id, name, password, email){
        return new Employee(id, name, password, email);
    }
    
}

export {Employee}