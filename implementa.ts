namespace pessoa{

    let p = new Paciente("","");
        p.setNome("Jussimar");
        p.setCpf("001.001.001-01");
        p.setCodPaciente(1);
    
    let p1 = new Paciente("","");
        p1.setNome("Oswaldo");
        p1.setCpf("002.002.002-02");
        p1.setCodPaciente(2);

    let p2 = new Paciente("","");
        p2.setNome("Augusto");
        p2.setCpf("003.003.003-03");
        p2.setCodPaciente(3);

    let e = new Enfermeiro("","");
        e.setNome("Boris");
        e.setCpf("111.111.111-11");
        e.setCodFuncionario(1);
        e.setCoren(11);
    
    let e1 = new Enfermeiro("","");
        e1.setNome("Nycolas");
        e1.setCpf("222.222.222-22");
        e1.setCodFuncionario(3);
        e1.setCoren(12);

    let e2 = new Enfermeiro("","");
        e2.setNome("Gabriela");
        e2.setCpf("333.333.333-33");
        e2.setCodFuncionario(3);
        e2.setCoren(13);
    
    let m = new Medico("","","");
        m.setNome("Jesus");
        m.setEspecialidade ("Operações");
        m.setCrm(123);
        m.setCpf("123.123.123-11");
        m.setCodFuncionario(21);

    let m1 = new Medico("","","");
        m1.setNome("Perna Quebrada");
        m1.setEspecialidade ("Ortopedista");
        m1.setCrm(456);
        m1.setCpf("123.123.123-12");
        m1.setCodFuncionario(22);
    
    let m2 = new Medico("","","");
        m2.setnome("Pateta");
        m2.setespecialidade ("Pediatra");
        m2.setcrm(789);
        m2.setcpf("123.123.123-13");
        m2.setcodFuncionario(23);

    let h = new Hospital ("");
        h.setnome ("Hopistar")
        h.addEnfermeiros(e);
        h.addEnfermeiros(e1);
        h.addEnfermeiros(e2);
        h.addMedicos(m);
        h.addMedicos(m1);
        h.addMedicos(m2);
        h.addPacientes(p);
        h.addPacientes(p1);
        h.addPacientes(p2);

        document.getElementById("hospital").textContent=h.getnome();

        let tbMedico = document.getElementById("tbMedico");
        h.getmedicos().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let crm = h.getcrm();
            let especialidade = h.getespecialidade();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+crm+"</td><td>"+especialidade+"</td></tr>";
            tbMedico.innerHTML += html;
        })
        let tbEnfermeiras = document.getElementById("tbEnfermeiras");
        h.getEnfermeiros().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let corem = h.getcoren();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+corem+"</td></tr>";
            tbMedico.innerHTML += html;
        })
        let tbPacientes = document.getElementById("tbPacientes");
        h.getpacientes().forEach(h=>{
            let nome = h.getnome();
            let cpf = h.getcpf();
            let cod = h.getcodPaciente();
            let html = "<tr><td>"+nome+"</td><td>"+cpf+"</td><td>"+cod+"</td></tr>";
            tbMedico.innerHTML += html;
        })

}


    
