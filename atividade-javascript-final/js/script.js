/*
    Atividade: Painel de Tarefas Escolares

    Escreva aqui o código JavaScript para programar os recursos da página.
*/

// Contador

let cards = document.querySelectorAll('.tarefa');

function contador () {
    let concluidas = document.querySelectorAll(".tarefa.tarefa-concluida").length
    let elContador = document.querySelector("#contador-tarefas")
    elContador.textContent = (`${concluidas} de 4 tarefas concluidas`)
}

contador ()

// Seção Tarefas
cards.forEach(function (card) {
    console.log(card);

    let bnt = card.querySelector(".botao-avancar")
    let estado = card.querySelector(".indicador-estado")

    bnt.addEventListener("click", clicar)
    function clicar() {

        // Tarefa pendente
        if (card.classList.contains("tarefa-pendente") && estado.classList.contains("estado-pendente")) {

            card.classList.add("tarefa-andamento")
            estado.classList.add("estado-andamento")
            card.classList.remove("tarefa-pendente")
            estado.classList.remove("estado-pendente")

            estado.textContent = ("Em andamento")
            bnt.textContent = ("Concluir Tarefa")

            contador ()
            
        // Tarefa em Andamento
        } else if (card.classList.contains("tarefa-andamento") && estado.classList.contains("estado-andamento")) {

            card.classList.add("tarefa-concluida")
            estado.classList.add("estado-concluida")
            card.classList.remove("tarefa-andamento")
            estado.classList.remove("estado-andamento")

            estado.textContent = ("Concluida")
            bnt.textContent = ("Recomeçar Tarefa")

            contador ()

        // Tarefa Concluida
        }  else if (card.classList.contains("tarefa-concluida") && estado.classList.contains("estado-concluida")) {

            card.classList.add("tarefa-pendente")
            estado.classList.add("estado-pendente")
            card.classList.remove("tarefa-concluida")
            estado.classList.remove("estado-concluida")

            estado.textContent = ("Pendente")
            bnt.textContent = ("Iniciar Tarefa")
            
            contador ()
        } 
    }
})


// Mensagem Motivacional
let mensagens = [
    "Grandes aprendizados começam com pequenos passos.",
    "Você é capaz de conquistar grandes coisas!",
    "Cada tarefa concluída é uma vitória.",
    "Não desista! Seu esforço vai valer a pena.",
    "O segredo do sucesso é continuar tentando.",
    "Um pouco de progresso todos os dias faz a diferença.",
    "Acredite no seu potencial e siga em frente!",
    "Você está mais perto do seu objetivo do que imagina."
];

let bntMotivacao = document.querySelector("#botao-motivacao");
let msgMotivacao = document.querySelector("#mensagem-motivacional");

bntMotivacao.addEventListener("click", clicar);

function clicar() {
    let aleatorio = Math.floor(Math.random() * mensagens.length);

    msgMotivacao.textContent = mensagens[aleatorio];
}
