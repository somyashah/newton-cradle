
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var rope1,rope2,rope3,rope4,rope5;
var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	bobObject1=new bob(300,550,40);
  roof=createSprite(410,180,390,30);
  roof.shapeColor=color("orange");
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
 
  bobObject1.display();
}



