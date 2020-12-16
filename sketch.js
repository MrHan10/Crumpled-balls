
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	box1 = new Box(690,750,20,100) 
	box2 = new Box(800,770,200,20) 
	box3 = new Box(910,750,20,100)
 
	paper = new Paper(100, 750, 20)

	ground = new Ground(600, 790, 1200, 20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();
  box2.display();
  box3.display();
  paper.display();
  ground.display();

  

  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(paper.body,paper.body.position,{x:70,y:-70});
	}
}

