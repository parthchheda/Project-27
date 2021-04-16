
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	bobDiameter=50
	//Create the Bodies Here.
	roof1=new Roof(400,75,600,25)
	Bob1=new Bob(200,500,50)
	Bob2=new Bob(300,500,50)
	Bob3=new Bob(400,500,50)
	Bob4=new Bob(500,500,50)
	Bob5=new Bob(600,500,50)
	rope1=new Rope(Bob1.body,roof1.body,-bobDiameter*4,0)
	rope2=new Rope(Bob2.body,roof1.body,-bobDiameter*2,0)
	rope3=new Rope(Bob3.body,roof1.body,0,0)
	rope4=new Rope(Bob4.body,roof1.body,bobDiameter*2,0)
	rope5=new Rope(Bob5.body,roof1.body,bobDiameter*4,0)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof1.display()
  Bob1.display()
  Bob2.display()
  Bob3.display()
  Bob4.display()
  Bob5.display()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{ x:-500, y: 0})

}
}

