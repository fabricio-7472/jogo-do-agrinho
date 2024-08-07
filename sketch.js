// posição e diametro da bolinha
let xbolinha = 300;
let ybolinha = 200;
let diametro = 25;
let raio = 12.5;

// movimento da bolinha
let velocidadeXbolinha = 4;
let velocidadeYbolinha = 4;

// variáveis da posição e tamanho da minha raquete
let xraquete = 5;
let yraquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 90;

// variáveis da raquete do oponente

let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let colidiu = false;

//variáveis placar
let meusPontos = 0;
let pontosOponente = 0;
//Criar o cenario
function setup() {
  createCanvas(600, 400);
}
// Função principal
function draw() {
  background(0, 50, 12);
  mostrarBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verficaColisaoRaquete();
  mostraRaqueteOponente();
  movimentaRaqueteOponente();
  verificaColisaoRaqueteOponente();
  exibirPlacar();
  marcaPontos();
}
//função mostrar bolinha
function mostrarBolinha() {
  circle(xbolinha, ybolinha, diametro);
}
//função movimentaBolinha
function movimentaBolinha() {
  xbolinha += velocidadeXbolinha;
  ybolinha += velocidadeYbolinha;
}

function verificaColisaoBorda() {
  if (xbolinha > width || xbolinha < 0) {
    velocidadeXbolinha *= -1;
  }

  if (ybolinha > height || ybolinha < 0) {
    velocidadeYbolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xraquete, yraquete, larguraRaquete, alturaRaquete);
}

function movimentaRaquete() {
 if(keyIsDown(87)){
    yraquete += 10;
  }
  if(keyIsDown(83)){
    yraquete -= 10;
  }
}

function verficaColisaoRaquete() {
  if (
    xbolinha - raio < xraquete + larguraRaquete &&
    ybolinha - raio < yraquete + alturaRaquete &&
    ybolinha + raio > yraquete
  ) {
    velocidadeXbolinha *= -1;
  }
}

function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, larguraRaquete, alturaRaquete);
}

function movimentaRaqueteOponente() {
  if (keyIsDown(RIGHT_ARROW)) {
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(UP_ARROW)) {
    yRaqueteOponente += 10;
  }
}

function verificaColisaoRaqueteOponente() {
    colidiu = collideRectCircle(
    xRaqueteOponente,
    yRaqueteOponente,
    larguraRaquete,
    alturaRaquete,
    xbolinha,
    ybolinha,
    raio
  );

  if (colidiu == true) {
    velocidadeXbolinha *= -1;
  }
}

function exibirPlacar() {
  fill(255);
  textSize(20);
  text("Meus Pontos " +meusPontos, 90, 26);
  text("Pontos Oponente "+pontosOponente, 300, 26);
}

function marcaPontos() {
  if (xbolinha > 595){
    meusPontos += 1;
    xbolinha = 30;
    ybolinha = 200;
  }
  if (xbolinha < 1){
    pontosOponente += 1;
    xbolinha = 570;
    ybolinha = 200;
  }
}