"use strict";
var hospital;
(function (hospital) {
    class Paciente extends hospital.Pessoa {
        getCodPaciente() {
            return this.codPaciente;
        }
        setCodPaciente(cod) {
            this.codPaciente = cod;
        }
    }
    hospital.Paciente = Paciente;
})(hospital || (hospital = {}));
