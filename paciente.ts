namespace pessoa{
    export class Paciente extends Pessoa{
        private codPaciente: number;

        getCodPaciente(): number{
            return this.codPaciente;
        }

        setCodPaciente(cod:number){
            this.codPaciente = cod;
        }
    }
}