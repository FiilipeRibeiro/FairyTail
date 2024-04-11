const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");
let indiceAtual = 0;

function selecionarProximoBotao() {
  desselecionarBotao();
  desselecionarPersonagem();

  indiceAtual = (indiceAtual + 1) % botoes.length;
  botoes[indiceAtual].classList.add("selecionado");
  personagens[indiceAtual].classList.add("selecionado");
}

const intervalo = setInterval(selecionarProximoBotao, 2000);

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

botoes.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    clearInterval(intervalo);
    desselecionarBotao();
    desselecionarPersonagem();

    botao.classList.add("selecionado");
    personagens[indice].classList.add("selecionado");
  });
});
