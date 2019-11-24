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
  lc = [];

//Outros
var bg, player, countframe = 0,
  FR = 0,
  caixa = 0,
  q1 = 0,
  ask = 0,
  time = 0,
  logo,
  XP = 12000,
  sonsON,
  stage = 0,
  pontos = [],
  x1,
  lista = '',
  N = 15; //LEMBRAR var N E A VELOCIDADE, TIRAR DEPOIS

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
  upc[0] = loadImage('https://diegohvp.github.io/Cpl/-up00.png')
  upc[1] = loadImage('https://diegohvp.github.io/Cpl/-up01.png')
  upc[2] = loadImage('https://diegohvp.github.io/Cpl/-up02.png')
  upc[3] = loadImage('https://diegohvp.github.io/Cpl/-up01.png')
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

  //FUNDO
  bg = loadImage('https://diegohvp.github.io/ceneraio (1).png');
}
function setup() {
  createCanvas(900, 580);
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
      case 5:
      fase3()
      break;
      case 6:
      fase4()
      break;
      case 7:
      fase5()
      break;
    case 99:
      gameover();
      break;
    case 100:
      win()
      break;
  }


  //O 'countframe' REGULA O NUMERO
  //DE FRAMES NOS SPRITES
  //O 'FR' EA VARIACAO DOS FRAMES
  countframe++
  if (countframe > 9)
    countframe = 0, FR++
  if (FR > 3)
    FR = 0;
}
function menu() {
  //RESTAURAR DADOS
  if (q1 != 0)
    q1 = 0, q2 = 0, x = 30, y = 450, XP = 12000, stage++, caixa = 0, sonsON = undefined
  
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
  image(logo, 130, 200, 680, 60);
  textSize(12);
  text('A vida nunca foi tão emocionante.', 588, 270);
  textSize(32);
  stroke(0);
  text('Jogar', 390, 355);
  text('Regras', 376, 425);
  text('Sobre', 386, 498);

  noFill();
  strokeWeight(5)
  stroke(255, 0, 0);
  rect(xo, yo, 130, 65, 30);
  if (sonsON == undefined) {
    sonsON = 1
    sons[0].setVolume(0.1);
    sons[0].play();
    //RANKIAR JOGADORES
    for (let i = 0, lista = ''; pontos[i] != undefined; i++)
      for (let ii = 0, rank; pontos[ii] != undefined; ii++) {
        if (pontos[i] >pontos[ii]) {
          rank = pontos[i]
          pontos[i] = pontos[ii]
          pontos[ii] = rank
        }
      }
    lista = ''
    //LISTA
    for (let i = 4; i > -1 ; i--) {
      if (pontos[i] != undefined)
        lista = (i + 1) + '. ' + pontos[i] + '\n' + lista
    }
  }
  if (lista == '')
    lista = '.....'
  textSize(18)
  fill(0)
  stroke('grey')
  strokeWeight(1)
  text('RANKING:\n\n' + lista, 40, 340)
}
function regras() {
  //R, G, B
  background('#7FDBFF');
  fill(0);
  stroke('grey');
  strokeWeight(1);
  textSize(32);
  text('REGRAS',370, 40)
  textSize(18)
  text('O Jogador não pode conjurar magias, lançar raios, usar telepatia, se transformar\nno flash, fazer o curso com um carro, usar patins, usar ki, nem, stand, mantra,\nchakara, usar mochiila a jato, usar cavalo, telepoter, truques ou qualquer outro\ntipo de poder que possa lhe dar vantagem\nno jogo.', 100, 80);

  textSize(18)
  text('Pressione ESPAÇO para voltar ao menu.', 290, 500);
  if (keyCode == 32)
    cena = 0

}
function sobre() {
  background(80, 80, 200);
  textSize(32);
  fill(0)
  text('OBJETIVO DO JOGO', 300, 40);
  textSize(18);
  text('O jogo consiste em ajudar o caminhoneiro a encher o caminhão no menor\ntempo possivel usando sua habilidade de matemática, enfrentando problemas\nde soma, frações e subtrações.', 100, 80);
  text('', 80, 100);
  stroke('blue');
  strokeWeight(1);
  textSize(18)
  text('Pressione ESPAÇO para voltar ao menu.', 290, 500);
  if (keyCode == 32)
    cena = 0

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
function fase1() {
  if (pontos[stage]==undefined)
    pontos[stage] = 0
  //TELA
  background(bg);
  fill('grey');
  stroke('black');
  strokeWeight(1);
  if(q1>=10)
    rect(838, 400, 70, 40, 6)
  else
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
  text('Pressione Z para pegar a caixa no deposito.\nPressione X para pegar as caixas que já estão no caminhão.\nPressione ESPAÇO para verificar a resposta.', 510, 145)

  ////////////////////
  XP--
  textSize(22)
  fill(255)
  stroke('grey')
  strokeWeight(3)
  //pontos
  rect(720, 90, 185, 40, 10)
  //score
  rect(20, 90, 145, 40, 10)
  strokeWeight(1)
  fill(0)
  text('SCORE: '+pontos[stage],  725, 118)
  text('Pontos: ' + parseInt(XP / 100), 26, 118)
  if(parseInt(XP / 100)==0)
    cena = 99
  //////////////////

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
      if (sonsON == 1) {
        sonsON = undefined
        sons[0].stop()
        sons[1].setVolume(0.1);
        sons[1].play()
        pontos[stage] = parseInt(XP / 100)
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
    x -= N;
    countframe++
    if (caixa == 0)
      player = r[FR]
    if (caixa == 1)
      player = rc[FR]
  }
  if (keyIsDown(RIGHT_ARROW) && x < 730) {
    x += N;
    countframe++
    if (caixa == 0)
      player = l[FR]
    if (caixa == 1)
      player = lc[FR]
  }
  if (keyIsDown(UP_ARROW) && y > 350) {
    y -= N;
    countframe++
    if (caixa == 0)
      player = up[FR]
    if (caixa == 1)
      player = upc[FR]
  }
  if (keyIsDown(DOWN_ARROW) && y < 500) {
    y += N;
    countframe++
    if (caixa == 0)
      player = down[FR]
    if (caixa == 1)
      player = downc[FR]
  }


  if (keyCode == 81)
    cena = 99
  if (keyCode == 71)
    cena = 100
}
function fase2() {
  if(x1==undefined)
    XP = 12000, x = 30, y = 450, q1 = 0, sonsON=undefined, x1 = 0
  //TELA
  background(bg);
  fill('grey');
  stroke('black');
  strokeWeight(1);
      if(q1>=10)
    rect(838, 400, 70, 40, 6)
  else
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
  text('02', 150, 34)
  fill(0);
  strokeWeight(0)
  textSize(18)
  text(': SHREK VIROU CAMNHONEIRO ELE PRECISA DE 3+3+3 VOCÊ\nPODE AJUDA-LO?', 170, 34)
  textSize(12)
  stroke(255);
  text('Pressione Z para pegar a caixa no deposito.\nPressione X para pegar as caixas que já estão no caminhão.\nPressione ESPAÇO para verificar a resposta.', 510, 145)

  ////////////////////
  XP--
  textSize(22)
  fill(255)
  stroke('grey')
  strokeWeight(3)
  //pontos
  rect(720, 90, 185, 40, 10)
  //score
  rect(20, 90, 145, 40, 10)
  strokeWeight(1)
  fill(0)
  text('SCORE: '+pontos[stage],  725, 118)
  text('Pontos: ' + parseInt(XP / 100), 26, 118)
  if(parseInt(XP / 100)==0)
    cena = 99
  //////////////////

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
    if (q1 == 9) {
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
      if (sonsON == undefined) {
        sonsON = 1
        sons[0].stop()
        sons[1].setVolume(0.1);
        sons[1].play()
        pontos[stage] += parseInt(XP / 100)
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
  if (keyCode == 83 && q1 == 9) {
    cena = 5
  }


  //PLAYER
  image(player, x, y, 80, 150);

  //CONTROLES E ANIMAÇÕES
  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= N;
    countframe++
    if (caixa == 0)
      player = r[FR]
    if (caixa == 1)
      player = rc[FR]
  }
  if (keyIsDown(RIGHT_ARROW) && x < 730) {
    x += N;
    countframe++
    if (caixa == 0)
      player = l[FR]
    if (caixa == 1)
      player = lc[FR]
  }
  if (keyIsDown(UP_ARROW) && y > 350) {
    y -= N;
    countframe++
    if (caixa == 0)
      player = up[FR]
    if (caixa == 1)
      player = upc[FR]
  }
  if (keyIsDown(DOWN_ARROW) && y < 500) {
    y += N;
    countframe++
    if (caixa == 0)
      player = down[FR]
    if (caixa == 1)
      player = downc[FR]
  }
}
function fase3() {
    if(x1!=2)
    XP = 12000, x = 30, y = 450, q1 = 0, sonsON=undefined, x1 = 2
  
  //TELA
  background(bg);
  fill('grey');
  stroke('black');
  strokeWeight(1);
      if(q1>=10)
    rect(838, 400, 70, 40, 6)
  else
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
  text('03', 150, 34)
  fill(0);
  strokeWeight(0)
  textSize(18)
  text(': O BATIMAM COMPROU 12-8+2 CAIXAS COM BAT-EQUPAMENTOS,\nQUANTAS CAIXAS DEVEM SER COLOCADAS NO CAMINHÃO?', 170, 34)
  textSize(12)
  stroke(255);
  text('Pressione Z para pegar a caixa no deposito.\nPressione X para pegar as caixas que já estão no caminhão.\nPressione ESPAÇO para verificar a resposta.', 510, 145)

  ////////////////////
  XP--
  textSize(22)
  fill(255)
  stroke('grey')
  strokeWeight(3)
  //pontos
  rect(720, 90, 185, 40, 10)
  //score
  rect(20, 90, 145, 40, 10)
  strokeWeight(1)
  fill(0)
  text('SCORE: '+pontos[stage],  725, 118)
  text('Pontos: ' + parseInt(XP / 100), 26, 118)
  if(parseInt(XP / 100)==0)
    cena = 99
  //////////////////

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
    if (q1 == 6) {
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
      if (sonsON == undefined) {
        sonsON = 1
        sons[0].stop()
        sons[1].setVolume(0.1);
        sons[1].play()
        pontos[stage] += parseInt(XP / 100)
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
  if (keyCode == 83 && q1 == 6) {
    cena = 6
  }


  //PLAYER
  image(player, x, y, 80, 150);

  //CONTROLES E ANIMAÇÕES
  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= N;
    countframe++
    if (caixa == 0)
      player = r[FR]
    if (caixa == 1)
      player = rc[FR]
  }
  if (keyIsDown(RIGHT_ARROW) && x < 730) {
    x += N;
    countframe++
    if (caixa == 0)
      player = l[FR]
    if (caixa == 1)
      player = lc[FR]
  }
  if (keyIsDown(UP_ARROW) && y > 350) {
    y -= N;
    countframe++
    if (caixa == 0)
      player = up[FR]
    if (caixa == 1)
      player = upc[FR]
  }
  if (keyIsDown(DOWN_ARROW) && y < 500) {
    y += N;
    countframe++
    if (caixa == 0)
      player = down[FR]
    if (caixa == 1)
      player = downc[FR]
  }

}
function fase4() {
  if(x1!=3)
    XP=12000, x = 30, y = 450, q1 = 0, sonsON=undefined, x1 = 3
  //TELA
  background(bg);
  fill('grey');
  stroke('black');
  strokeWeight(1);
    if(q1>=10)
    rect(838, 400, 70, 40, 6)
  else
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
  text('04', 150, 34)
  fill(0);
  strokeWeight(0)
  textSize(18)
  text(': UM LOJA DE CAIXAS COMPROU 12+12-12 CAIXAS,\nQUANTAS CAIXAS DE VEM IR NO CAMINHÃO?', 170, 34)
  textSize(12)
  stroke(255);
  text('Pressione Z para pegar a caixa no deposito.\nPressione X para pegar as caixas que já estão no caminhão.\nPressione ESPAÇO para verificar a resposta.', 510, 145)

  ////////////////////
  XP--
  textSize(22)
  fill(255)
  stroke('grey')
  strokeWeight(3)
  //pontos
  rect(720, 90, 185, 40, 10)
  //score
  rect(20, 90, 145, 40, 10)
  strokeWeight(1)
  fill(0)
  text('SCORE: '+pontos[stage],  725, 118)
  text('Pontos: ' + parseInt(XP / 100), 26, 118)
  if(parseInt(XP / 100)==0)
    cena = 99
  //////////////////

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
    if (q1 == 12) {
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
      if (sonsON == undefined) {
        sonsON = 1
        sons[0].stop()
        sons[1].setVolume(0.1);
        sons[1].play()
        pontos[stage] += parseInt(XP / 100)
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
  if (keyCode == 83 && q1 == 12) {
    cena = 7
  }


  //PLAYER
  image(player, x, y, 80, 150);

  //CONTROLES E ANIMAÇÕES
  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= N;
    countframe++
    if (caixa == 0)
      player = r[FR]
    if (caixa == 1)
      player = rc[FR]
  }
  if (keyIsDown(RIGHT_ARROW) && x < 730) {
    x += N;
    countframe++
    if (caixa == 0)
      player = l[FR]
    if (caixa == 1)
      player = lc[FR]
  }
  if (keyIsDown(UP_ARROW) && y > 350) {
    y -= N;
    countframe++
    if (caixa == 0)
      player = up[FR]
    if (caixa == 1)
      player = upc[FR]
  }
  if (keyIsDown(DOWN_ARROW) && y < 500) {
    y += N;
    countframe++
    if (caixa == 0)
      player = down[FR]
    if (caixa == 1)
      player = downc[FR]
  }

}
function fase5() {
   if(x1 !=4)
     XP = 12000,x = 30, y = 450, q1 = 0, sonsON = undefined, x1 = 4;
  
  //TELA
  background(bg);
  fill('grey');
  stroke('black');
  strokeWeight(1);
  if(q1>=10)
    rect(838, 400, 70, 40, 6)
  else
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
  text('05', 150, 34)
  fill(0);
  strokeWeight(0)
  textSize(18)
  text(': UMA FAMILIA DE ZUMBI COMPROU 9-2-4+7 CAIXAS COM CEREBROS EM LATA,\nQUANTAS CAXAS DEVEM IR NO CAMINHÃO?', 170, 34)
  textSize(12)
  stroke(255);
  text('Pressione Z para pegar a caixa no deposito.\nPressione X para pegar as caixas que já estão no caminhão.\nPressione ESPAÇO para verificar a resposta.', 510, 145)

  ////////////////////
  XP--
  textSize(22)
  fill(255)
  stroke('grey')
  strokeWeight(3)
  //pontos
  rect(720, 90, 185, 40, 10)
  //score
  rect(20, 90, 145, 40, 10)
  strokeWeight(1)
  fill(0)
  text('SCORE: '+pontos[stage],  725, 118)
  text('Pontos: ' + parseInt(XP / 100), 26, 118)
  if(parseInt(XP / 100)==0)
    cena = 99
  //////////////////

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
    if (q1 == 10) {
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
      if (sonsON == undefined) {
        sonsON = 1
        sons[0].stop()
        sons[1].setVolume(0.1);
        sons[1].play()
        pontos[stage] += parseInt(XP / 100)
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
  if (keyCode == 83 && q1 == 10) {
    cena = 100
  }


  //PLAYER
  image(player, x, y, 80, 150);

  //CONTROLES E ANIMAÇÕES
  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= N;
    countframe++
    if (caixa == 0)
      player = r[FR]
    if (caixa == 1)
      player = rc[FR]
  }
  if (keyIsDown(RIGHT_ARROW) && x < 730) {
    x += N;
    countframe++
    if (caixa == 0)
      player = l[FR]
    if (caixa == 1)
      player = lc[FR]
  }
  if (keyIsDown(UP_ARROW) && y > 350) {
    y -= N;
    countframe++
    if (caixa == 0)
      player = up[FR]
    if (caixa == 1)
      player = upc[FR]
  }
  if (keyIsDown(DOWN_ARROW) && y < 500) {
    y += N;
    countframe++
    if (caixa == 0)
      player = down[FR]
    if (caixa == 1)
      player = downc[FR]
  }


  if (keyCode == 81)
    cena = 99
  if (keyCode == 71)
    cena = 100
}
function gameover() {
  background('grey');
  textSize(45)
  fill(0)
  text('GAME OVER', (width * 5) / 14 - 20, height / 2)
  textSize(18)
  strokeWeight(1)
  stroke('grey')
  text('Pontos: ' + pontos[stage], (width * 5) / 14 + 50, height / 2 + 100)
  text('\nNão desamine você pode tentar novamente.', (width * 5) / 14 - 30, height / 2 + 100)
  if (keyCode == ENTER)
    cena = 0

}
function win() {
  background(220);
  textSize(32)
  fill(0)
  text('VOCE GANHOU!!', (width * 5) / 14 - 20, height / 2 + 30)
  textSize(45)
  text('PARABENS', (width * 5) / 14 - 20, height / 2 - 30)
  textSize(18)
  strokeWeight(1)
  stroke('grey')
  text('Pontos: ' + pontos[stage], (width * 5) / 14 + 50, height / 2 + 100)
  text('\nVocê consegue ir mais rapido que isso?', (width * 5) / 14 - 30, height / 2 + 100)
  if (keyCode == ENTER)
    cena = 0
}
