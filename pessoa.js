"use strict";
var hospital;
(function (hospital) {
    class Pessoa {
        constructor(nome, cpf) {
            this.cpf = cpf;
            this.nome = nome;
        }
        getNome() {
            return this.nome;
        }
        setNome(nome) {
            this.nome = nome;
        }
        getCpf() {
            return this.cpf;
        }
        setCpf(cpf) {
            this.cpf = cpf;
        }
    }
    hospital.Pessoa = Pessoa;
})(hospital || (hospital = {}));
