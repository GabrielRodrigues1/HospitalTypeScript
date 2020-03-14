"use strict";
var pessoa;
(function (pessoa) {
    class Funcionario extends pessoa.Pessoa {
        getcodFuncionario() {
            return this.codFuncionario;
        }
        setcodFuncionario(cod) {
            this.codFuncionario = cod;
        }
    }
    pessoa.Funcionario = Funcionario;
})(pessoa || (pessoa = {}));
