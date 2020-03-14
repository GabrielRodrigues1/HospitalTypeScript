"use strict";
var pessoa;
(function (pessoa) {
    class Medico extends pessoa.Funcionario {
        getcrm() {
            return this.crm;
        }
        setcrm(crm) {
            this.crm = crm;
        }
        getespecialidade() {
            return this.especialidade;
        }
        setespecialidade(esp) {
            this.especialidade = esp;
        }
    }
    pessoa.Medico = Medico;
})(pessoa || (pessoa = {}));
