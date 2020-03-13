namespace pessoa{
    export class Pessoa{
       
        private nome:string;
        private cpf:string;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }
       

        getNome():string{
            return this.nome;
        }

        setNome(nome:string){
            this.nome = nome;
        }

         getCpf():string{
            return this.cpf;
        }

        setCpf(cpf:string){
            this.cpf = cpf;
        }
    }
}
