var universo, universoImg;
var perdeu, perdeuImg
var nave, naveImg
var tripulante2Img, TripulanteImg, tripulante3Img
var MeteoroImg, Meteoro2Img, metImg
var cashG
var diamondsG
var jwelleryG
var swordGroup
var treasureCollection = 0

//Esttados de Jogo
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  universoImg = loadImage("universo.png");
  perdeuImg = loadImage("Perdeu.png");
  naveImg = loadImage("nave.png");
  TripulanteImg = loadImage("Tripulante1.png")
  tripulante2Img = loadImage("branco.webp")
  tripulante3Img = loadImage("Fantasma.webp")
  MeteoroImg = loadImage("meteoro.png")
  Meteoro2Img = loadImage("meteoro 2.png")
  metImg = loadImage("met3.png")
}

function setup(){
  
//crie uma tela

// createCanvas(window,window);
 createCanvas(600,600);
// createCanvas(width,height);
// createCanvas(200,200);

//plano de fundo se movendo

universo=createSprite(width/2,200);
universo.addImage(universoImg);
universo.velocityY = 4;


//crie o menino correndo
nave = createSprite(width/2,height-20,20,20);
nave.addImage("nave.png",naveImg);
nave.scale=0.2;
  
  
cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  nave.x = World.mouseX;
  
  edges= createEdgeSprites();
  nave.collide(edges);
  
  //código para reiniciar o plano de fundo

  // if(path.x > height ){
  //   path.x = height/2;
  // }

  // if(path.y > height ){
  //   path.x = height/2;
  // }

  // if(path.x > height ){
  //   path.y = height;
  // }

   if(universo.y > height ){
     universo.y = height/2;
   }
  
    createtripulante();
    createtripulante2();
    createtripulante3();
    createSword();

    if (cashG.isTouching(nave)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection + 1;
    }
    else if (diamondsG.isTouching(nave)) {
      diamondsG.destroyEach();
      treasureCollection=treasureCollection + 1;
      
    }else if(jwelleryG.isTouching(nave)) {
      jwelleryG.destroyEach();
      treasureCollection= treasureCollection + 1;
      
    }else{
      if(swordGroup.isTouching(nave)) {
        gameState=END;
        
        var toma
        toma = createSprite(300,300);
        //toma=width/2;
        //toma.y=height/2;
        toma.addImage("Perdeu.png",perdeuImg)
        toma.scale = 0.6

        nave.x=width/2;
        nave.y=height/2;
        nave.scale=0.1;
        
        
        cashG.destroyEach();
        diamondsG.destroyEach();
        jwelleryG.destroyEach();
        swordGroup.destroyEach();
        
        cashG.setVelocityYEach(0);
        diamondsG.setVelocityYEach(0);
        jwelleryG.setVelocityYEach(0);
        swordGroup.setVelocityYEach(0);

        treasureCollection = 0

        
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Tripulantes: "+ treasureCollection,width-200,30);
  }

}

function createtripulante() {
  if (World.frameCount % 200 == 0) {
  var met = createSprite(Math.round(random(50, width-50),40, 10, 10));
  met.addImage(TripulanteImg);
  met.scale=0.12;
  met.velocityY = 5;
  met.lifetime = 200;
  cashG.add(met);
  }
}

function createtripulante2() {
  if (World.frameCount % 350 == 0) {
  var meto = createSprite(Math.round(random(50, width-50),40, 10, 10));
  meto.addImage(tripulante2Img);
  meto.scale=0.12;
  meto.velocityY = 5;
  meto.lifetime = 200;
  diamondsG.add(meto);
  }
}

function createtripulante3() {
  if (World.frameCount % 500 == 0) {
  var metor = createSprite(Math.round(random(50, width-50),40, 10, 10));
  metor.addImage(tripulante3Img);
  metor.scale=0.2;
  metor.velocityY = 5;
  metor.lifetime = 200;
  jwelleryG.add(metor);
  }
}

function createSword(){
  if (World.frameCount % 250 == 0) {
  var met3 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  met3.addImage(metImg);
  met3.scale=0.1;
  met3.velocityY = 4;
  met3.lifetime = 200;
  swordGroup.add(met3);
  }
}

function  createJwellery() {
  if (World.frameCount % 200 == 0) {
  var met2 = createSprite(Math.round(random(50, width-50),40, 10, 10));
  met2.addImage(Meteoro2Img);
  met2.scale=0.1;
  met2.velocityY = 4;
  met2.lifetime = 200;
  swordGroup.add(met2);
  }
}

function createSword(){
  if (World.frameCount % 150 == 0) {
  var sword = createSprite(Math.round(random(50, width-50),40, 10, 10));
  sword.addImage(MeteoroImg);
  sword.scale=0.05;
  sword.velocityY = 4;
  sword.lifetime = 200;
  swordGroup.add(sword);
  }
}