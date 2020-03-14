"use strict";
var pessoa;
(function (pessoa) {
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
    empresa.Pessoa = Pessoa;
})(empresa || (empresa = {}));
