namespace hospital{
     export class Medico extends Funcionario{
        private crm: number;
        private especialidade: number;

         getCrm(): number{
            return this.crm;
        }

        setCodPaciente(crm:number): void{
            this.crm = crm;
        }

        getEspeciliadade(): number{
            return this.especialidade;
        }

        setEspecialidae(especialidade:number): void{
            this.especialidade = especialidade
        }
    }
}