/*
    EXERCÍCIO: PAINEL DE MISSÕES ESPACIAIS

    Os botões da página ainda não funcionam.

    Sua tarefa é programar o comportamento dos botões
    "Ver detalhes" utilizando JavaScript.


    PARTE 1

    Ao clicar no botão "Ver detalhes":

    - os detalhes daquela missão devem aparecer;
    - o texto do botão deve mudar para "Ocultar detalhes".

    Ao clicar novamente:

    - os detalhes devem desaparecer;
    - o texto deve voltar para "Ver detalhes".


    ATENÇÃO:

    O botão deve controlar SOMENTE o card em que ele está.

    Você precisará utilizar recursos que já estudamos,
    como:

    - querySelectorAll()
    - forEach()
    - querySelector()
    - addEventListener()
    - hidden
    - if / else


    ---------------------------------------------------


    DESAFIO

    Faça também os botões "Selecionar missão" funcionarem.

    Ao clicar no botão:

    - adicione a classe "selecionada" ao card;

    Ao clicar novamente:

    - remova essa classe.

    DICA:

    Você pode utilizar classList.toggle().


    ---------------------------------------------------

    Escreva seu código abaixo:
*/

// Base

let botoes = document.querySelectorAll (".missao")
let bntdetalhes = document.getElementsByClassName("botao-detalhes")
let bntselecionar = document.getElementsByClassName("botao-selecionar")



botoes.forEach(function(missao) {
    let bnt = missao.querySelector(".botao-detalhes")
    let detalhes = missao.querySelector(".detalhes")
    let selecionar = missao.querySelector(".botao-selecionar")

    // Selecionar

    selecionar.addEventListener("click", function(){
        missao.classList.toggle("selecionada")
        })

        // Detalhes

    bnt.addEventListener("click", function(){

        if (detalhes.hidden){
            detalhes.hidden = false;
            bnt.textContent = "Ocultar Detalhes"
        } else {
            detalhes.hidden = true;
            bnt.textContent = "Ver detalhes"
        }
    })
});