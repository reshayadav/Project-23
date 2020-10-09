var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var board1,board2,board3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	board1 = createSprite(width/2,650,200,20);
	board1.shapeColor=("red");

	board2= createSprite(300,610,20,100);
	board2.shapeColor=("red");

	board3=createSprite(500,610,20,100);
	board3.shapeColor=("red");

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0,isStatic:true});
	World.add(world, packageBody);
	
	board1 = Bodies.rectangle(width/2,650,200,20,{isStatic:true});
	World.add(world,board1);

	board2 = Bodies.rectangle(300,610,20,100,{isStatic:true});
	World.add(world,board2);

	board3 = Bodies.rectangle(500,620,20,100,{isStatic:true});
	World.add(world,board3);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	
	Matter.Body.setStatic(packageBody,false);
	

  }
}



