namespace empresa{
    export class Pessoa{
       
        private nome:string;
        private cpf:string;

        constructor(nome:string, cpf:string){
            this.cpf = cpf;
            this.nome = nome;
        }

      
        getCpf():string{
            return this.cpf;
        }

          setCpf(nome:string):void{
            this.cpf = cpf;
        }

        getNome():string{
            return this.nome;
        }

        setNome(nome:string):void{
            this.nome = nome;
       
    }
}
