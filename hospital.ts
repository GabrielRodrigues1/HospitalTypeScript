namespace pessoa{
    export class Hospital{
        private nomeHospital:string;
        private funcionario: Array<Funcionario> = [];
        private medico: Array<Medico> = [];
        private paciente: Array<Paciente> = [];

        getNomeHospital():string{
            return this.nomeHospital;
        }

        setNomeHospital(nome:string):void{
            this.nomeHospital = nome;
        }

        addFuncionario(funcionario:Funcionario):void{
            this.funcionario.push(funcionario);
        }

        addMedico(medico:Medico):void{
            this.medico.push(medico);
        }

        addPaciente(paciente:Paciente):void{
            this.paciente.push(paciente);
        }

        getFuncionario(){
            return this.funcionario;
        }

        getPaciente(){
            return this.paciente;
        }
            
    }

}