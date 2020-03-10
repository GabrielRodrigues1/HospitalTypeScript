"use strict";
var hospital;
(function (hospital) {
    class Medico extends hospital.Funcionario {
        getCrm() {
            return this.crm;
        }
        setCrM(crm) {
            this.crm = crm;
        }
        getEspeciliadade() {
            return this.especialidade;
        }
        setEspecialidae(especialidade) {
            this.especialidade = especialidade;
        }
    }
    hospital.Medico = Medico;
})(hospital || (hospital = {}));
