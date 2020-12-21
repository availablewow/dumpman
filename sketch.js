
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);
  engine=Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(700,700,10,40)
	box2 = new Box(750,700,10,40)
	box3 = new Box(700,700,40,10)
  ground=new Ground(800,350,1000,10)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  drawSprites();
 
}




