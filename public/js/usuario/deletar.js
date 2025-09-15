document.addEventListener("DOMContentLoaded", () => {
  let btnExcluir = document.querySelectorAll(".btn-excluir");

  //Para cada btn no array
  for (let i = 0; i < btnExcluir.length; i++) {
    btnExcluir[i].addEventListener("click", excluir);
    
  }

  function excluir() {
    //Pega o id do dataset do botao que foi clicado
    let id = this.dataset.id;
    if (confirm("Tem certeza que quer excluir?")) {
      if (id) {
        fetch("/usuario/excluir", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id: id })
        })
          .then((res) => {
            return res.json();
          })
          .then((corpo) => {
            alert(corpo.msg);
            if (corpo.ok) {
              window.location.reload();
            }
          });
      } else {
        alert("ID do usuario nao existe.");
      }
    }
  }
});
