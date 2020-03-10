"use strict";
var hospital;
(function (hospital) {
    class Funcionario extends hospital.Pessoa {
        getCodFuncionario() {
            return this.codFuncionario;
        }
        setCodFuncionario(cod) {
            this.codFuncionario = cod;
        }
    }
    hospital.Funcionario = Funcionario;
})(hospital || (hospital = {}));
