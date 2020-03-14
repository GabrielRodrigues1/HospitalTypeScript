"use strict";
var pessoa;
(function (pessoa) {
    class Hospital {
        constructor() {
            this.enfermeiros = [];
            this.medicos = [];
            this.pacientes = [];
        }
        getnome() {
            return this.nome;
        }
        setnome(nome) {
            this.nome = nome;
        }
        addEnfermeiros(enfermeiros) {
            this.enfermeiros.push(enfermeiros);
        }
        getEnfermeiros() {
            return this.enfermeiros;
        }
        addMedicos(medicos) {
            this.medicos.push(medicos);
        }
        getmedicos() {
            return this.medicos;
        }
        addPacientes(pacientes) {
            this.pacientes.push(pacientes);
        }
        getpacientes() {
            return this.pacientes;
        }
    }
    pessoa.Hospital = Hospital;
})(pessoa || (pessoa = {}));
