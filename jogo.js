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
//Sprites sem caixa
var down = [],
  up = [],
  r = [],
  l = [];
//Sprites com caixa
var downc = [],
  upc = [],
  rc = [],
  lc = []

//Outros
var bg, player, countframe = 0,
  FR = 0,
  caixa = 0,
  q1 = 0,
  q2 = 0,
  time = 0,
  logo,
  XP = 12000,
  fase = 1,
    sonsON,
  pontos = [];
  //SOM
  var sons = []

function preload() {
  soundFormats('ogg');
  //Menu
  sons[1] = loadSound('https://diegohvp.github.io/Got Item! (Internal Percussion).ogg')
  //GANHOU
  sons[0] = loadSound('https://diegohvp.github.io/Cave Story.ogg')

 //PLAYER SEM A CAIXA
  down[0] = loadImage('https://diegohvp.github.io/pl/Down00.png')
  down[1] = loadImage('https://diegohvp.github.io/pl/Down01.png')
  down[2] = loadImage('https://diegohvp.github.io/pl/Down02.png')
  down[3] = loadImage('https://diegohvp.github.io/pl/Down03.png')

  up[0] = loadImage('https://diegohvp.github.io/pl/up00.png')
  up[1] = loadImage('https://diegohvp.github.io/pl/up01.png')
  up[2] = loadImage('https://diegohvp.github.io/pl/up02.png')
  up[3] = loadImage('https://diegohvp.github.io/pl/up03.png')

  l[0] = loadImage('https://diegohvp.github.io/pl/L00.png')
  l[1] = loadImage('https://diegohvp.github.io/pl/L01.png')
  l[2] = loadImage('https://diegohvp.github.io/pl/L02.png')
  l[3] = loadImage('https://diegohvp.github.io/pl/L03.png')

  r[0] = loadImage('https://diegohvp.github.io/pl/R00.png')
  r[1] = loadImage('https://diegohvp.github.io/pl/R01.png')
  r[2] = loadImage('https://diegohvp.github.io/pl/R02.png')
  r[3] = loadImage('https://diegohvp.github.io/pl/R01.png')


  //PLAYER COM A CAIXA
  downc[0] = loadImage('https://diegohvp.github.io/Cpl/-Down00.png')
  downc[1] = loadImage('https://diegohvp.github.io/Cpl/-Down01.png')
  downc[2] = loadImage('https://diegohvp.github.io/Cpl/-Down02.png')
  downc[3] = loadImage('https://diegohvp.github.io/Cpl/-Down01.png')

  upc[0] = loadImage('https://diegohvp.github.io/Cpl/up00.png')
  upc[1] = loadImage('https://diegohvp.github.io/Cpl/up01.png')
  upc[2] = loadImage('https://diegohvp.github.io/Cpl/up02.png')
  upc[3] = loadImage('https://diegohvp.github.io/Cpl/up01.png')

  lc[0] = loadImage('https://diegohvp.github.io/Cpl/Diegohvp.github.io-l00.png')
  lc[1] = loadImage('https://diegohvp.github.io/Cpl/Diegohvp.github.io-L01.png')
  lc[2] = loadImage('https://diegohvp.github.io/Cpl/Diegohvp.github.io-L02.png')
  lc[3] = loadImage('https://diegohvp.github.io/Cpl/Diegohvp.github.io-L01.png')

  rc[0] = loadImage('https://diegohvp.github.io/Cpl/Diegohvp.github.io-r00.png')
  rc[1] = loadImage('https://diegohvp.github.io/Cpl/Diegohvp.github.io-r01.png')
  rc[2] = loadImage('https://diegohvp.github.io/Cpl/Diegohvp.github.io-r02-1.png')
  rc[3] = loadImage('https://diegohvp.github.io/Cpl/Diegohvp.github.io-r01.png')
  
  
  logo = loadImage('https://diegohvp.github.io/logo.png')
  player = down[0];
}

function setup() {
  createCanvas(900, 580);
  //FUNDO
  bg = loadImage('https://diegohvp.github.io/ceneraio (1).png');
  

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
    case 4:
      fase2();
      break;
      case 99:
      gameover();
      break;
  }


  //O 'countframe' REGULA O NUMERO
  //DE FRAMES NOS SPRITES
  //O 'FR' EA VARIACAO DOS FRAMES
  countframe++
  if (countframe > 20) {
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
  text('REGRAS', 340, 30)
  textSze(14)
  text('O Jogador não pode conjurar magias, lançar raios, usar telepatia ou qualquer\noutro tipo de poder que possa lhe dar vantagem no jogo.', 40, 55);

  textSize(12)
  text('Pressione ESPAÇO para Voltar ao menu.', 350, 500);
  if (keyCode == 32)
    cena = 0

}

function menu() {
  //RESTAURAR DADOS
  if(q1!=0)
    q1 = 0, q1 = 0, x = 30, y = 450, XP = 12000, fase = 1

  //TELA
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
  image(logo, 130, 200, 680,60);
  textSize(12);
  text('A vida nunca foi tão emocionante.', 588, 270);
  textSize(32);
  stroke(0);
  text('Jogar', 390, 355);
  text('Regras', 380, 425);
  text('Sobre', 386, 498);

  noFill();
  strokeWeight(5)
  stroke(255, 0, 0);
  rect(xo, yo, 130, 65, 30);
  if(sonsON==undefined) {
    sonsON = 1
  sons[0].setVolume(0.1);
  sons[0].play();
}

}

function keyPressed() {
  if (cena == 0) {
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
  
}


function sobre() {
  background(80, 80, 200);
  textSize(32);
  fill(0)
  text('OBJETIVO DO JOGO', 300, 40);
  textSize(15);
  text('O jogo consiste em ajudar o caminhoneiro a encher o caminhão usando sua', 100, 80);
  text(' habilidade de matemática. Enfrentado problemas de soma com frações.', 80, 100);
  stroke('blue');
  strokeWeight(1);
  textSize(12)
  text('Pressione ESPAÇO para Voltar ao menu.', 350, 500);
  if (keyCode == 32)
    cena = 0

}


////////////////////////////////////////////////////////////////////////////////////////////
//FASE 1//////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
function fase1() {
  //TELA
  background(bg);
  fill('grey');
  stroke('black');
  strokeWeight(1);
  rect(838, 400, 40, 40, 20)
  fill('white')
  strokeWeight(5)
  stroke(255, 0, 0);
  rect(70, 11, 800, 65);
  strokeWeight(1);
  fill(0);
  stroke(0);
  textSize(12)
  text('Caixas no\ncaminhão:', 830, 380)
  fill('blue')
  textSize(32)
  text(q1, 850, 430)
  fill('black')
  textSize(16)
  text('Questão ', 78, 34)
  fill('red')
  text('01', 150, 34)
  fill(0);
  strokeWeight(0)
  textSize(18)
  text(': O CAMINHÃO DE JOÃOZINHO ESTA VAZIO, ELE PRECISA DE 5 CAIXAS, VOCÊ\nPODE ENCHER O CAMINHÃO PARA ELE?', 170, 34)
  textSize(12)
  stroke(255);
  text('Pressione Z para pegar a caixa no deposito.\nPressione X para pegar as caixas que já estão no caminhão.\nPressione ESPAÇO para verificar a resposta.', 570, 145)

  //CONDIÇÕES
  if (keyCode == 90 && x >= 5 && x <= 195 && y < 360)
    caixa = 1, player = upc[1]
  if (keyCode == 90 && x >= 705 && y <= 435 && caixa == 1)
    caixa = 0, q1++, player = r[1]
  if (keyCode == 88 && x >= 705 && y <= 435 && caixa == 0 && q1 > 0)
    caixa = 1, q1--, player = rc[1]
  if (keyCode == 88 && x >= 5 && x <= 195 && y < 360 && caixa == 1)
    caixa = 0, player = up[1]

  //RESOLUÇÃO DA QUESTÃO
  if (keyCode == 32)
    if (q1 == 5) {
      textSize(14)
      fill('white');
      strokeWeight(1)
      stroke('black');
      ellipse(x + 10, y + 10, 10, 10)
      ellipse(x + 10, y - 10, 12, 12)
      ellipse(x + 22, y - 20, 14, 14)
      strokeWeight(1);
      rect(x + 30, y - 35, 100, 20, 10);
      fill(0)
      stroke(0);
      text('CONSEGUI!!', x + 35, y - 20)
      textSize(32)
      text('PARABENS!!', 345, 259)
      textSize(12);
      text('Pressione S para ir para a proxima fase.', 343, 270);
      if (sonsON==1) {
        sonsON=undefined
      sons[0].stop()
      sons[1].setVolume(0.1);
      sons[1].play()
      };
    }
  else
  if (time < 4000) {
    time++
    textSize(14)
    fill('white');
    stroke('black')
    strokeWeight(1);
    ellipse(x + 10, y + 10, 10, 10)
    ellipse(x + 10, y - 10, 12, 12)
    ellipse(x + 22, y - 20, 14, 14)
    rect(x + 30, y - 55, 150, 50, 10)
    fill(0)
    text('ACHO QUE TEM\nALGUM DE ERRADO', x + 35, y - 37)
  } else
    time = 0
  if (keyCode == 83 && q1 == 5) {
    cena = 4
  }


  //PLAYER
  image(player, x, y, 80, 150);

  //CONTROLES E ANIMAÇÕES
  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= 10;
    countframe++
    if (caixa == 0)
      player = r[FR]
    if (caixa == 1)
      player = rc[FR]
  }
  if (keyIsDown(RIGHT_ARROW) && x < 730) {
    x += 10;
    countframe++
    if (caixa == 0)
      player = l[FR]
    if (caixa == 1)
      player = lc[FR]
  }
  if (keyIsDown(UP_ARROW) && y > 350) {
    y -= 10;
    countframe++
    if (caixa == 0)
      player = up[FR]
    if (caixa == 1)
      player = upc[FR]
  }
  if (keyIsDown(DOWN_ARROW) && y < 500) {
    y += 10;
    countframe++
    if (caixa == 0)
      player = down[FR]
    if (caixa == 1)
      player = downc[FR]
  }
  
  
  if (keyCode==81)
    cena = 99
}

function fase2() {
  if(x != 30 || y != 450)
    x = 30, y = 450
  background('grey');
  textSize(22)
  text('Não a nada aqui', 200, 400);
  text('pressione ENTER para ir para o menu',200, 450)
  if (keyCode==ENTER)
    cena = 0
  
}
function gameover() {
  background('grey');
  textSize(45)
  fill(0)
  text('GAME OVER', (width*5)/14, height/2)
  if (keyCode==ENTER)
    cena = 0

}
