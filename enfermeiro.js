"use strict";
var hospital;
(function (hospital) {
    class Enfermeiro extends hospital.Funcionario {
        getCoren() {
            return this.coren;
        }
        setCoren(coren) {
            this.coren = coren;
        }
    }
    hospital.Enfermeiro = Enfermeiro;
})(hospital || (hospital = {}));
