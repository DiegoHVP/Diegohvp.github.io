//MENU
var xo = 365,
  yo = 315;
//COR MENU RGB
var L = 10,
  S = 100,
  D = 200;
//Posicao player
var x = 30,
  y = 450;
//TELA
var cena = 0,
  aux = 1;
//Sprites
var down = [],
  up = [],
  r = [],
  l = [];
//Outros
var bg, player, countframe = 0,
  FR = 0,
  caixa = 0,
  q1 = 0,
  time = 0;
//SOM
var somjogo, somcaixa, somwin

function preload() {
  down[0] = loadImage('/pl/Down00.png')
  down[1] = loadImage('/pl/Down01.png')
  down[2] = loadImage('/pl/Down02.png')
  down[3] = loadImage('/pl/Down03.png')

  up[0] = loadImage('/pl/up00.png')
  up[1] = loadImage('/pl/up01.png')
  up[2] = loadImage('/pl/up02.png')
  up[3] = loadImage('/pl/up03.png')

  l[0] = loadImage('/pl/L00.png')
  l[1] = loadImage('/pl/L01.png')
  l[2] = loadImage('/pl/L02.png')
  l[3] = loadImage('/pl/L03.png')

  r[0] = loadImage('/pl/R00.png')
  r[1] = loadImage('/pl/R01.png')
  r[2] = loadImage('/pl/R02.png')
  r[3] = loadImage('/pl/R01.png')


  player = down[0];
}

function setup() {
  createCanvas(900, 580);
  //FUNDO
  bg = loadImage('/ceneraio (1).png');

}

function draw() {
  switch (cena) {
    case 0:
      menu();
      break;
    case 1:
      fase1();
      break;
    case 2:
      regras();
      break;
    case 3:
      sobre()
      break;
    default:
      menu()
      break;
  }


  //O 'countframe' REGULA O NUMERO
  //DE FRAMES NOS SPRITES
  //O 'FR' EA VARIACAO DOS FRAMES
  countframe++
  if (countframe > 10) {
    countframe = 0;
    FR++
    if (FR > 3) {
      FR = 0;
    }
  }
}



function regras() {
  //R, G, B
  background('#7FDBFF');

  fill('white');
  stroke('black');
  strokeWeight(1);

  textSize(28);
  fill('black');

  text('VAI TER ALGUMA COISA AQUI, EU ACHO...', 40, 55);
  if (keyCode == ENTER)
    cena = 0

}

function menu() {
  L++
  S++
  D++
  if (L >= 255)
    L = random(0, 255);
  if (S >= 255)
    S = random(0, 255);
  if (D >= 255)
    D = random(0, 255);
  background(L, S, D);
  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(370, 320, 120, 55, 120);
  rect(370, 390, 120, 55, 120);
  rect(370, 460, 120, 55, 120);

  textSize(32);
  fill('black');
  stroke(255);
  text('ENTREGADOR DE MERCADORIAS', 200, 200);
  textSize(12);
  text('A vida nunca foi tão emocionante.', 548, 220);
  textSize(32);
  stroke(0);
  text('Jogar', 390, 355);
  text('Regras', 380, 425);
  text('Sobre', 386, 498);
  textSize(12);
  text('X: ' + mouseX, 30, 40);
  text('Y: ' + mouseY, 30, 55);

  noFill();
  strokeWeight(5)
  stroke(255, 0, 0);
  rect(xo, yo, 130, 65, 30);


}

function keyPressed() {
  if (keyCode === ENTER)
    cena = aux;
  if (keyCode === DOWN_ARROW) {
    if (yo >= 315 && yo < 455)
      yo += 70;
  }
  if (keyCode === UP_ARROW) {
    if (yo > 315 && yo <= 455)
      yo -= 70;
  }
  if (yo == 385)
    aux = 2;
  if (yo == 315)
    aux = 1;
  if (yo == 455)
    aux = 3;

}


function sobre() {
  background(80, 80, 200);
  textSize(32);
  text('OBJETIVO DO JOGO', 300, 40);
  textSize(15);
  text('O jogo consiste em ajudar o caminhoneiro a encher o caminhão usando sua', 100, 80);
  text(' habilidade de matemática. Enfrentado problemas de soma com frações.', 80, 100);

}

function fase1() {
  //TELA
  background(bg);
  strokeWeight(1);
  fill(0);
  stroke(0);
  textSize(12)
  text('X: ' + x, 30, 40);
  text('Y: ' + y, 30, 55);
  textSize(12)
  text('Caixas no caminhão: ' + q1, 30, 70)
  text('Questão ', 180, 30)
  fill('red')
  text('01', 231, 30)
  fill(0)
  text(': O CAMINHÃO DE JOÃOZINHO ESTA VAZIO, ELE PRECISA DE 5 CAIXAS, VOCÊ PODE ENCHER O\nCAMINHÃO PARA ELE?', 245, 30)
  textSize(14)
  text('Pressione Z para pegar a caixa no deposito.', 450, 150)
  text('Pressione X para pegar as caixas que já estão no caminhão', 450, 175)


  console.log(keyCode + ' ' + caixa)

  //CONDIÇÕES
  if (keyCode == 90 && x >= 5 && x <= 195 && y < 360)
    caixa = 1
  if (keyCode == 90 && x >= 705 && y <= 435 && caixa == 1)
    caixa = 0, q1++
  if (keyCode == 88 && x >= 705 && y <= 435 && caixa == 0 && q1 > 0)
    caixa = 1, q1--
  if (keyCode == 88 && x >= 5 && x <= 195 && y < 360 && caixa == 1)
    caixa = 0
  if (keyCode == 32)
    if (q1 == 5) {
      textSize(14)
      fill('white');
      stroke('black');
      ellipse(x+10, y+10, 10, 10)
      ellipse(x+10, y-10, 12, 12)
      ellipse(x+22, y-20, 14, 14)
      strokeWeight(1);
      rect(x+30, y-35, 100, 50, 10);
      fill(0)
      text('CONSEGUI!!',x+35,y-20)
    }
  else {
    if (time<2000) {
      time++
      textSize(14)
      fill('white');
      stroke('black');
      ellipse(x+10, y+10, 10, 10)
      ellipse(x+10, y-10, 12, 12)
      ellipse(x+22, y-20, 14, 14)
      strokeWeight(1);
      rect(x+30, y-55, 150, 50, 10);
      fill(0)
      text('ACHO QUE TEM\nALGUM DE ERRADO',x+35,y-37)
    }
      else
        time= 0
  }
  

  //PLAYER
  image(player, x, y, 80, 150);

  //CONTROLES E ANIMAÇÕES
  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= 5;
    if (caixa == 0)
      player = r[FR]
    if (caixa == 1)
      player = r[0]
  }
  if (keyIsDown(RIGHT_ARROW) && x < 730) {
    x += 5;
    if (caixa == 0)
      player = l[FR]
    if (caixa == 1)
      player = l[0]
  }
  if (keyIsDown(UP_ARROW) && y > 350) {
    y -= 5;
    if (caixa == 0)
      player = up[FR]
    if (caixa == 1)
      player = up[0]
  }
  if (keyIsDown(DOWN_ARROW) && y < 500) {
    y += 5;
    if (caixa == 0)
      player = down[FR]
    if (caixa == 1)
      player = down[0]
  }
}
