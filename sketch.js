
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var g,b1,b2,b3,b4,b5,b6;

function preload()
{
	
}

function setup() {
	createCanvas(3000, 800);


	engine = Engine.create();
	world = engine.world;

	g = new Ground(400,770,3000,15);

	b1 = new Blocks(700,100);
	b2 = new Blocks(700,100);
	b3 = new Blocks(700,100);
	b4 = new Blocks(700,100);
	b5 = new Blocks(700,100);

	b6 = new Blocks(800,100);
	b7 = new Blocks(800,100);
	b8 = new Blocks(800,100);
	b9 = new Blocks(800,100);
	b10 = new Blocks(800,100);
	b11 = new Blocks(800,100);

	ball = new Ball(500,300);

	rope = new Rope(ball.body,{x:500,y:300});




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  g.display();

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  

  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();

  ball.display();

  rope.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}



