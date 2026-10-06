import {aleatorio} from "./aleatorio.js";
import {pergunta} from "./pergunta.js";
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoIniciar = document.querySelector(".iniciar-btn")
const telaInicial = document.querySelector(".tela-inicial")


let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener("click", iniciar jogo)

function iniciarJogo(){
    atual = 0;
    historiaFinal =""
    telaInicial.style.display = "none"
    caixaPerguntas.classList.remove("mostrar")
    caixaAlternativas.classList.remove("motrar")
    caixaResultado.classList.remove("mostrar")
    mostraPergunta()

}


function mostraPergunta() {
    if(atual >= pergunta.length){
        mostraResultado();
        return;
    }
    perguntaAtual = pergunta[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}



