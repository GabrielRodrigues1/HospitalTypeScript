"use strict";
var pessoa;
(function (pessoa) {
    class Pessoa {
        getnome() {
            return this.nome;
        }
        setnome(nome) {
            this.nome = nome;
        }
        getcpf() {
            return this.cpf;
        }
        setcpf(cpf) {
            this.cpf = cpf;
        }
    }
    pessoa.Pessoa = Pessoa;
})(pessoa || (pessoa = {}));
