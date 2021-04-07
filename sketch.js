
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1;
var bobObject2;
var bobObject3;
var bobObject4;
var bobObject5;
var rope1;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bob1 = new BobObject1(200,180,20,20)
	bob2 = new BobObject2(220,150,20,20)
	bob3 = new BobObject3(230,160,20,20)
	bob4 = new BobObject4(240,170,20,20)
	bob5 = new BobObject5(250,190,20,20)
	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



