const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world
var ball
var binl
var binr
var ground

function setup() {
	createCanvas(800, 300);
	


	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.

	ground = new Ground(400,290,800,20,"ground_options");
	binl = new Ground(550,325,20,150,"ground_options");
	binr = new Ground(650,325,20,150,"ground_options");

	ball = new Ball(100,100,25)

	Engine.run(engine);
  
}


function draw() {

	background("white");
	Engine.update(engine);
  	ground.show();
  	binl.show();
  	binr.show();
  	ball.display();
 

 	 Key();
 
}

function Key() {

	if ( keyCode === UP_ARROW) {

		Matter.Body.applyForce(ball,{x:0,y:0},{x:10,y:-15})
	
	}

}

