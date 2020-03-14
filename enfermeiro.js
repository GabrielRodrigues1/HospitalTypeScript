"use strict";
var pessoa;
(function (pessoa) {
    class Enfermeiro extends pessoa.Funcionario {
        getcoren() {
            return this.coren;
        }
        setcoren(coren) {
            this.coren = coren;
        }
    }
    pessoa.Enfermeiro = Enfermeiro;
})(pessoa || (pessoa = {}));
