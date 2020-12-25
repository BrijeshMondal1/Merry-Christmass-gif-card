const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world, engine;

var santa, santaImg
var tree, treeImg;
var backgroundImg;
var snow, snowImg;
var sound;

let x, x1;
let y, y1;

function preload(){
  
  treeImg = loadAnimation("Tree/1.png", "Tree/2.png", "Tree/3.png");
  santaImg = loadAnimation("santa/1.png", "santa/2.png", "santa/3.png", "santa/4.png")
  backgroundImg = loadImage("bg.jpg");
  snowImg = loadAnimation("Snow/1.png", "Snow/2.png", "Snow/3.png", "Snow/4.png", "Snow/5.png", "Snow/6.png", "Snow/7.png", "Snow/8.png", "Snow/9.png", "Snow/10.png", "Snow/11.png", "Snow/12.png", "Snow/13.png", "Snow/14.png", "Snow/15.png", "Snow/16.png", "Snow/17.png", "Snow/18.png", "Snow/19.png", "Snow/20.png");
  sound = loadSound("jingle-bell.mp3");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  gift1 = new gift(width/2 + 100, height/2 - 50);

  santa = createSprite(width/2, height / 2 + 50);
  santa.addAnimation("santa", santaImg);
  santa.scale = 0.65;
  santa.depth = 1
  
  snow = createSprite(width/2, height/2, width, height);
  snow.addAnimation("snow", snowImg);
  snow.scale = 1.3;
  snow.depth = 2
  
  tree = createSprite((width - width) + 60, height/4 - 50);
  tree.addAnimation("tree2", treeImg);
  tree.scale = 0.3;
  tree.depth = 3

  if(windowWidth > 800){
    
    santa.scale = 1.4;
    santa.y = height/2 - 50
    
    x = santa.x + 200;
    y = santa.y - 100;
    
    x1 = x + 40;
    y1 = y + 20;

   Matter.Body.setPosition(gift1.body, {x: width/2 + 100,y: height/2 - 50});
    
  }else if(windowWidth < 550){
    
    tree.scale = 0.23;
    tree.y = height/4 - 80;
    
    x = santa.x;
    y = santa.y + 85;
    
    x1 = x - 40;
    y1 = y + 20;

    Matter.Body.setPosition(gift1.body, {x: width/2 + 50, y: height/2 + 50});
    
  }else{
    
    x = santa.x + 100;
    y = santa.y - 40;
    
    x1 = x + 40;
    y1 = y + 20;

    Matter.Body.setPosition(gift1.body, {x: width/2 + 50,y: height/2 + 50});
    
  }
   
  sound.play();
  sound.loop();

}

function draw() {
  background(backgroundImg);
  
  Engine.update(engine);
  
   
  gift1.display();

  drawSprites();
  
  fill("red");
  textStyle("bold");
  textSize(15);
  textFont("comic sans ms");
  text("Made by", x, y);
  fill("blue");
  textSize(20);
  text("Brijesh Mondal", x1, y1);
  
  if(gift1.body.position.y > height){
    
    if(windowWidth > 800){

      Matter.Body.setPosition(gift1.body, {x: width/2 + 100, y: height/2 - 50});

    }else{

      Matter.Body.setPosition(gift1.body, {x: width/2 + 50, y: height/2 + 50});

    }
  
    Matter.Body.setStatic(gift1.body, true);

    }

   setTimeout(function(){
 
    Matter.Body.setStatic(gift1.body, false);

    if(windowWidth > 550){

      gift1.body.position.x = gift1.body.position.x + 0.4;

    }

   }, 400);
    
  }
