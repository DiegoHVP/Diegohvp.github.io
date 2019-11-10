  //Outros
    var bg, player;
  //MENU
    var xo = 365, yo = 455, cena = 1, aux;
  //COR MENU RGB
    var L = 10, S = 100, D = 200;
  //Posicao player
    var x = 30, y = 500, aux = 1, cena = 1;
  //Sprites
    var down = [], up = [], rl = [];

function setup() {  
    createCanvas(900, 580);
    bg = loadImage('/ceneraio (1).png');
    down[0] = loadImage('/pl/down01.png');
    down[1] = loadImage('/pl/down02.png');
    down[2] = loadImage('/pl/down00.png');

    up[0] = loadImage('/pl/up01.png');
    up[1] = loadImage('/pl/up02.png');
    up[2] = loadImage('/pl/up00.png');

    rl[0] = loadImage('/pl/rl01.png');
    rl[1] = loadImage('/pl/rl02.png');
    rl[2] = loadImage('/pl/rl00.png');
    player = down[1];
}

function draw() {
    switch (cena) {
      case 1:
        menu();
      break;
      case 2:
        fase1();
      break;
      case 3:
        fase1();
      break;
      default:
        menu()
      break;
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
    L = random(0, 255)
  if (S >= 255)
    S = random(0, 255)
  if (D >= 255)
    D = random(0, 255)
  background(L, S, D);
  fill('white');
  stroke('black');
  strokeWeight(1);
  rect(370, 320, 120, 55, 120);
  rect(370, 390, 120, 55, 120);
  rect(370, 460, 120, 55, 120);

  textSize(32);
  fill('black');
  stroke(255)
  text('ENTREGADOR DE MERCADORIAS', 200, 200)
  textSize(12);
  
  text('~', 670, 215)
  text('A vida nunca foi tão emocionante.', 548, 220);
  textSize(32)
  stroke(0)
  text('Jogar', 390, 355);
  text('Regras', 380, 425);
  text('Sobre', 386, 498);

  noFill();
  strokeWeight(5)
  stroke(255, 0, 0);
  rect(xo, yo, 130, 65);
}

function keyPressed() {
 
  if (cena == 2 || cena == 3)
    cena = 1;

  if (keyCode === ENTER)
    cena = aux;

  if (keyCode === DOWN_ARROW) {
    if (yo < 450) {
      yo += 70;
      if (aux == 1)
        aux = 2;
      else
      if (aux == 2)
        aux = 3;
    }

  } else if (keyCode === UP_ARROW) {
    if (yo > 380) {
      yo -= 70;
      if (aux == 2) {
        aux = 1;
      } else {
        if (aux == 3) {
          aux = 2;
        }
      }
    }

  }
}
function sobre() {
  background(80,80,200)
  textSize(32)
  text('<b>REGRAS DO JOGO</b>', 300, 40)
  textSize(15)
  text('O jogo consiste em ajudar o caminhoneiro a encher o caminhão', 100, 80)
  text('usando sua habilidade de matemática. Enfrentado problemas de', 80, 100)
  text('soma é frações.', 80, 120)
  
}

function fase1() {
  background(bg)
  strokeWeight(2)
  fill(255)
  stroke(0)

//PLAYER
  image(player, x, y, 30, 140)


  if (keyIsDown(LEFT_ARROW) && x > 0) {
    x -= 5;
  }
  if (keyIsDown(RIGHT_ARROW) && x < 775) {
    x += 5;
  }
  if (keyIsDown(UP_ARROW) && y > 450) {
    y -= 5;
  }
  if (keyIsDown(DOWN_ARROW) && y < 540) {
    y += 5;
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
