document.addEventListener("DOMContentLoaded", function() {


    let btnsExcluir = document.querySelectorAll(".btnExcluir");

    for(let i = 0; i < btnsExcluir.length; i++) {
        btnsExcluir[i].addEventListener("click", excluir);
    }

    function excluir() {
        let id = this.dataset.id
        if(id) {

            if(confirm("Tem certeza que deseja excluir esse usuário")) {
                fetch("/usuario/excluir", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({id: id})
                })
                .then(function(resposta) {
                    return resposta.json();
                })
                .then(function(corpo) {
                    alert(corpo.msg);
                    if(corpo.ok) {
                        //jeito preguiçoso
                        window.location.reload();

                        //jeito correto
                        //btn.parentElement.parentElement.remove()
                    }
                })
            }
            

        }
        else {
            alert("ID do usuário não encontrado");
        }
    }
})