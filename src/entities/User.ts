// Importando a lib Uuidv4 que gera um Id único.
import { uuid } from "uuidv4"

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        Object.assign(this, props) // Ele pega todos as props e itera o this.
        
        // Criando o id a partir da lib, para não deixar essa responsabilidade para o banco de dados.
        if (!id) {
            this.id = uuid()
        }
    }
}