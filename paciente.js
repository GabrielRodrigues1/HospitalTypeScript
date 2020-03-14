"use strict";
var pessoa;
(function (pessoa) {
    class Paciente extends pessoa.Pessoa {
        getcodPaciente() {
            return this.codPaciente;
        }
        setcodPaciente(cod) {
            this.codPaciente = cod;
        }
    }
    pessoa.Paciente = Paciente;
})(pessoa || (pessoa = {}));
