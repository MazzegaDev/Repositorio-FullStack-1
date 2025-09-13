document.addEventListener("DOMContentLoaded", () => {
  let btnExcluir = document.querySelectorAll(".btnExcluir");

  //Para cada btn no array
  for (const btn of btnExcluir) {
    //Adiciona o evento de click para cada btn
    btn.addEventListener("click", excluir);
  }

  function excluir() {
    //Pega o id do dataset do botao que foi clicado
    let id = this.dataset.id;
    if (id) {
        fetch("/usuario/excluit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(id)
        })
        
    } else {
      alert("ID do usuario nao existe.");
    }
  }
});
