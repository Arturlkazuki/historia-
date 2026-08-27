const caixaPincipal = document.querySelector(".caixa-principal")
const caixaPergunta = document.querySelector(".caixa-pergunta")
const caixaAlternetivas = document.querySelector(".caixa-resultado")
const caixaResultado = document.querySelector(".caixa-resultado")
const textoResultado = document.querySelector(".texto-principal")




const perguntas = [
    {
        enunciado: "É o dia da grande final do campeonato escolar de vôlei. O ginásio está lotado e o técnico chama você para entrar no primeiro set como titular. Qual o seu primeiro pensamento?",
        alternativas: [
            {
                texto: "Estou muito nervoso com a torcida!",
                afirmacao: "No início sentiu a pressão da torcida e o peso do jogo decisivo."
            },
            {
                texto: "Essa é a minha chance de dar o meu melhor!",
                afirmacao: "Entrou em quadra motivado e focado em dar o seu melhor a cada ponto."
            }
        ]
    },
    {
        enunciado: "O jogo começa equilibrado. O levantador do seu time faz um levantamento perfeito para você no ataque, mas o bloqueio adversário é alto e bem posicionado. O que você faz?",
        alternativas: [
            {
                texto: "Manda uma cortada com força máxima tentando explorar o bloqueio ou furar a defesa.",
                afirmacao: "Decidiu arriscar nos ataques potentes para impor ritmo no ataque."
            },
            {
                texto: "Aposta em uma largadinha estratégica no vazio da quadra adversária.",
                afirmacao: "Mostrou inteligência tática ao usar a visão de jogo para surpreender a defesa."
            }
        ]
    },
    {
        enunciado: "No terceiro set, o jogo fica muito tenso e o time adversário começa a provocar para desestabilizar sua equipe. Como você reage nessa situação?",
        alternativas: [
            {
                texto: "Conversa com o time, pede calma e foca no próximo ponto sem responder às provocações.",
                afirmacao: "Manteve a cabeça fria e ajudou a unir o time no momento mais crítico da partida."
            },
            {
                texto: "Comemora o próximo ponto vibrando forte para mostrar a força da sua equipe.",
                afirmacao: "Usou a energia da provocação como combustível para vibrar e incendiar o time."
            }
        ]
    },
    {
        enunciado: "O quarto set está no final e o atacante principal do outro time manda uma cortada pesada na sua direção. É um lance de defesa rápido. O que você faz?",
        alternativas: [
            {
                texto: "Se joga de peito no chão (peixinho) para não deixar a bola cair.",
                afirmacao: "Demonstrou raça e entrega total ao se jogar em todas as bolas na defesa."
            },
            {
                texto: "Se posiciona bem para fazer uma manchete firme e direcionada ao levantador.",
                afirmacao: "Destacou-se pela precisão técnica e boa leitura de jogo na defesa."
            }
        ]
    },
    {
        enunciado: "Estamos no tie-break (set desempate) e o placar está 14 a 14: match point para os dois lados. É a sua vez de sacar. Qual estratégia você escolhe?",
        alternativas: [
            {
                texto: "Manda um saque flutuante tático, buscando o ponto fraco da recepção deles.",
                afirmacao: "Manteve a precisão nos momentos decisivos e garantiu a vitória com jogadas inteligentes."
            },
            {
                texto: "Solta o braço em um saque viagem potente para tentar fechar o jogo com um ace.",
                afirmacao: "Apostou na coragem e na ousadia até o último segundo para conquistar o campeonato."
            }
        ]
    },
];

let atual = 0
let perguntaAtual;
let historiaFinal = ""

function mostrarPergunta() {
    if (atual >= perguntas.length){
        mostrarResultado()
    return
    }
    perguntaAtual = perguntas[atual]
    caixaPergunta.textContent =perguntaAtual
    caixaAlternativas.textContent = "";
    mostrarAlternativa()
}
function mostrarAlternativa(){
    for (const alternativas of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button")
        botaoAlternativas.textContent = alternativas.texto
        botaoAlternativas. addEventListener ("click", ()=> respostaSelecionada(alternativas))
        caixaAlternativas.appendChild(botaoAlternativas)
}
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao
        historiaFinal += afirmacoes + " "
        atual++
        MostraPergunta()
}
function mostrarResultado(){
    caixaPergunta.textContent="em 2049 ..."
    textoResultado.textContent = historiaFinal 
    caixaAlternativa.textContent ="";
}






mostrarPergunta()