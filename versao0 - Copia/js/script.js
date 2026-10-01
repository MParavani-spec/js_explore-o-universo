//Selecionar todos os cards

let cards = document.querySelectorAll(".card-destino")

/* Percorrer todos os cards selecionados e para cada um (separadamente) pegar os botões (botão curiosidade e botão favorito) */
cards.forEach(function (card) {

    let botaoCuriosidade = card.querySelector(".botao-curiosidade")
    let botaoFavorito = card.querySelector(".botao-favoritar")
    let curiosidade = card.querySelector(".curiosidade")

    botaoCuriosidade.addEventListener('click', function () {
        if (curiosidade.hidden) {
            curiosidade.hidden = false

            botaoCuriosidade.setAttribute("aria-expanded", "true")

            botaoCuriosidade.textContent = "Ocultar Curiosidade"
        }

        else {
            curiosidade.hidden = true

            botaoCuriosidade.setAttribute("aria-expanded", "false")

            botaoCuriosidade.textContent = "Ver Curiosidade"
        }
    })

    botaoFavorito.addEventListener("click", function () {
        //Aplicar ou Remover a Classe "Favoritado"
        //Classe foi aplicada? True
        //Classe foi removida? False
        let favoritado = card.classList.toggle("favoritado")

        //Atualizar o estado do botão (aria-pressed)
        botaoFavorito.setAttribute("aria-pressed", favoritado);

        //Atualizar o texto do botão (☆ Favoritar ou ★ Favoritado)
        if (favoritado) {
            botaoFavorito.textContent = "★ Favoritado"
        }

        else {
            botaoFavorito.textContent = "☆ Favoritar"
        }
    })
})

