"use strict";
var hospital;
(function (hospital) {
    class Hospital {
        constructor() {
            this.funcionario = [];
            this.medico = [];
            this.paciente = [];
        }
        getNomeHospital() {
            return this.nomeHospital;
        }
        setNomeHospital(nome) {
            this.nomeHospital = nome;
        }
        addFuncionario(funcionario) {
            this.funcionario.push(funcionario);
        }
        addMedico(medico) {
            this.medico.push(medico);
        }
        addPaciente(paciente) {
            this.paciente.push(paciente);
        }
        getFuncionario() {
            return this.funcionario;
        }
        getPaciente() {
            return this.paciente;
        }
    }
    hospital.Hospital = Hospital;
})(hospital || (hospital = {}));
