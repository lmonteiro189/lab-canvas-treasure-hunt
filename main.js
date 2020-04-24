// main.js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const w = canvas.width;
const h = canvas.height;
imageRight = new Image();
imageRight.src = 'images/character-right.png' 
imageLeft = new Image();
imageLeft.src = 'images/character-left.png' 
imageDown = new Image();
imageDown.src = 'images/character-down.png' 
imageUp = new Image();
imageUp.src = 'images/character-up.png' 

const player = {
  x: 0,
  y: 0,
};

// Iteration 1, put the background
function drawGrid() {
  for (let i = 0; i < 500; i += 50) {
    ctx.strokeRect(i, 0, 50, 50);
    ctx.strokeRect(i, 100, 50, 50);
    ctx.strokeRect(i, 200, 50, 50);
    ctx.strokeRect(i, 300, 50, 50);
    ctx.strokeRect(i, 400, 50, 50);
    ctx.strokeRect(i, 500, 50, 50);
    ctx.strokeRect(0, i, 50, 50);
    ctx.strokeRect(100, i, 50, 50);
    ctx.strokeRect(200, i, 50, 50);
    ctx.strokeRect(300, i, 50, 50);
    ctx.strokeRect(400, i, 50, 50);
    ctx.strokeRect(500, i, 50, 50);
  }
}


// Methods
function clearCanvas() {
    ctx.clearRect(0, 0, w, h);
}

function drawPlayer() {
  let imageDefault = new Image();
  imageDefault.src = 'images/character-right.png';
  imageDefault.addEventListener('load', () =>{
    ctx.drawImage(imageDefault,player.x, player.y)
  })
  ctx.drawImage(imageDefault,player.x, player.y)
  console.log(imageDefault)
}

// function drawTreasure(){
//   ctx.fillRect(treasure.x,treasure.y,50,50);
// }

 class Treasure {
   constructor($canvas, ctx){
     this.canvas = $canvas;
     this.ctx = ctx;
     this.col = Math.floor(Math.random() * 10);
     this.row = Math.floor(Math.random() * 10);
    this.treasureImage = new Image ();
     this.treasureImage.src = "/images/treasure.png";
   }
  
draw(){
    const width = this.canvas.width;
    const height = this.canvas.height;
    this.treasureImage.addEventListener('load', () => {
      this.ctx.drawImage(this.treasureImage, this.col * 50, this.row * 50, 50, 50)
    })
    this.ctx.drawImage(this.treasureImage, this.col * 50, this.row * 50, 50, 50)
  }
  getRandom(){
    this.col = Math.floor(Math.random() * 10);
     this.row = Math.floor(Math.random() * 10);
     drawEverything();
  }
}

// function getRandomIntInclusive (min, max) {
  //     min = Math.ceil(50);
//     max = Math.floor(500);
//     return treasure.x === (Math.floor(Math.random() * (max - min + 50)) + 50);
//   }


const treasure = new Treasure(canvas, ctx)

  function positions () {
    if (player.x / 50 === treasure.col && player.y /50 === treasure.row){
    treasure.getRandom()
    }
}




window.addEventListener("keydown", event => {
  clearCanvas();
  //Direita
  if (event.keyCode === 39 && player.x < 500) {
    player.x += 50;
    ctx.drawImage(imageRight, player.x, player.y)
    drawEverything();

  } else if (event.keyCode === 39 && player.x >= 500) {
    player.x = 0;
    drawEverything();
  
    //esquerda
  } else if (event.keyCode === 37 && player.x > 0) {
    player.x -= 50;
    ctx.drawImage(imageLeft, player.x, player.y)
    drawEverything()
  } else if (event.keyCode === 37 && player.x === 0) {
    player.x = 500;
    drawEverything()
    //baixo
  } else if (event.keyCode === 40 && player.y < 500) {
    player.y += 50;
    ctx.drawImage(imageDown, player.x, player.y)
    drawEverything()
  } else if (event.keyCode === 40 && player.y === 500) {
    player.y = 0;
    drawEverything()
    
    
    //cima
  } else if (event.keyCode === 38 && player.y > 0) {
    player.y -= 50;
    ctx.drawImage(imageUp, player.x, player.y)
    drawEverything()
    
  } else if (event.keyCode === 38 && player.y === 0) {
    player.y = 0;
    
    drawEverything()
    
  } else {
     drawEverything() 
      
      
  }
});

// Iniciar o jogo
function drawEverything(){
  drawGrid();
drawPlayer();
positions();
treasure.draw();
console.log("player x", player.x/50, "treasure.col",treasure.col)
}

drawEverything()