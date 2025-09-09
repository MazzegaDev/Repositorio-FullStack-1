document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("gravar");
  btn.addEventListener("click", gravar);
  function gravar() {
    //Fazer a leitura do form
    const nome = document.getElementById("txtNome");
    const email = document.getElementById("txtEmail");
    const senha = document.getElementById("txtSenha");
    const perfil = document.getElementById("selPerfil");
    const ativo = document.getElementById("cbAtivo");

    //So entra na lista se tiver errado
    let listaValidacao = [];

    if(nome.value == ""){
        listaValidacao.push(nome);
    }else{
        nome.style.borderColor = "";
    }
    
    if(email.value == ""){
        listaValidacao.push(email);
    }else{
        email.style.borderColor = "";
    }

    if(senha.value == ""){
        listaValidacao.push(senha);
    }else{
        senha.style.borderColor = "";
    }

    if(perfil.value == "0"){
        listaValidacao.push(perfil);
    }else{
        perfil.style.borderColor = "";
    }

    if(listaValidacao.length == 0){
        //Montar o objeto generico com os dados do usuario
        //Esse objeto sera transformado em string e sera enviado ao servidor
        let obj = {
            nome: nome.value,
            email: email.value,
            senha: senha.value,
            perfil: perfil.value,
            ativo: ativo.checked,
        }
        //No primeiro parametro e qual rota vai manipular a comunicação
        fetch("/usuario/cadastrar", {
            //Qual metodo vai se comunicar com a rota
            method: "POST",
            //Informações do pacote que estamos enviando
            headers: {
                //O tipo de conteudo que estamos enviando ao backend -> ou seja um json.
                "Content-Type": "application/json"
            },
            body: JSON.stringify(obj) //Transformamos esse objeto generico que contem os dados do usuario em uma string

        })

    }else{
        alert("Preencha corretamente esses campos");
        listaValidacao.forEach(e => {
            e.style.borderColor = "red";
        });
    }

  }
});
