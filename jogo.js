//MENU
var xo = 365,yo = 315;
//COR MENU RGB
var L = 10, S = 100, D = 200;
//Posicao player
var x = 30, y = 450;
//TELA
var cena = 0, aux = 1;
//Sprites
var down = [], up = [], rl = [];
//Outros
var bg, player, countframe = 0, FR = 0;

function preload() {
  //SPRITES
  down[0] = loadImage('https://diegohvp.github.io/pl/down01.png');
  down[1] = loadImage('https://diegohvp.github.io/pl/down02.png');
  down[2] = loadImage('https://diegohvp.github.io/pl/down00.png');

  up[0] = loadImage('https://diegohvp.github.io/pl/up01.png');
  up[1] = loadImage('https://diegohvp.github.io/pl/up02.png');
  up[2] = loadImage('https://diegohvp.github.io/pl/up00.png');

  rl[0] = loadImage('https://diegohvp.github.io/pl/rl01.png');
  rl[1] = loadImage('https://diegohvp.github.io/pl/rl02.png');
  rl[2] = loadImage('https://diegohvp.github.io/pl/rl00.png');
  player = down[1];
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
    default:
      menu()
      break;
  }
  
  
  //O 'countframe' REGULA O NUMERO
  //DE FRAMES NOS SPRITES
  //O 'FR' EA VARIACAO DOS FRAMES
  countframe++
  if (countframe>15) {
    countframe=0;
    FR++
    if (FR>2) {
      FR=0;
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

  text('Aqui vao as regras', 40, 55);
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
  if (yo==385)
    aux=2;
  if (yo==315)
    aux=1;
  if (yo==455)
    aux=3;
  
}


function sobre() {
  background(80, 80, 200);
  textSize(32);
  text('REGRAS DO JOGO', 300, 40);
  textSize(15);
  text('O jogo consiste em ajudar o caminhoneiro a encher o caminhão', 100, 80);
  text('usando sua habilidade de matemática. Enfrentado problemas de', 80, 100);
  text('soma é frações.', 80, 120);

}

function fase1() {
  background(bg);
  strokeWeight(2);
  fill(255);
  stroke(0);

  image(player, x, y, 80, 150);


  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) && x < 775) {
    x += 5;
    player = rl[FR];
  }
  if (keyIsDown(UP_ARROW) && y > 350) {
    y -= 5;
    player = up[FR];
  }
  if (keyIsDown(DOWN_ARROW) && y < 500) {
    y += 5;
    player = down[FR];
  }
}


//SPRITE_PLAYER
/*down[0] = loadImage('/pl/down01.png')
  down[1] = loadImage('/pl/down02.png')
  down[2] = loadImage('/pl/down00.png')

  up[0] = loadImage('/pl/up01.png')
  up[1] = loadImage('/pl/up02.png')
  up[2] = loadImage('/pl/up00.png')

  rl[0] = loadImage('/pl/rl01.png')
  rl[1] = loadImage('/pl/rl02.png')
  rl[2] = loadImage('/pl/rl00.png')*/
