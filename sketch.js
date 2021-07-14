
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world, paper1, dustbin1, dustbin,  ground, dustbinimage;

function preload(){

	dustbinimage = loadImage("dustbingreen.png")

}

function setup() {
	createCanvas(1333, 700);


	engine = Engine.create();
	world = engine.world;

	paper1 = new Paper(100,5,40);
	ground = new Ground(400,650,1900,20);

	Rope= new Rope(paper1.body,{x:200,y:100});
   
	dustbin = createSprite(650,555,150,180)
	dustbin.addImage(dustbinimage)
	dustbin.scale = 0.5
	
	leftdustbin = new Dustbin(729,564,10,150)
	rightdustbin = new Dustbin(578,565,10,150)
	bottomdustbin = new Dustbin(650,635,150,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  
  Engine.update(engine);

  drawSprites();
  ground.display();
  rightdustbin.display();
  paper1.display();
  dustbin.display()
  leftdustbin.display();
  bottomdustbin.display();
  Rope.display();
 
}



function mouseDragged(){
	Matter.Body.setPosition(paper1.body,{x:mouseX,y:mouseY})
   
   }
   
   function mouseReleased(){
	   Rope.fly()
	  
   }