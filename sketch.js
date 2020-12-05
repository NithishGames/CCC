
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1707, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(856,690,1707,20)
	ground2 = new Ground(806,425,500,20)
	ground3 = new Ground(1445,330,500,20)

	// creating the boxes : Box1 //

	box1 = new Box1 (581,390,50,50)
	box2 = new Box1 (631,390,50,50)
	box3 = new Box1 (681,390,50,50)
	box4 = new Box1 (731,390,50,50)
	box5 = new Box1 (781,390,50,50)
	box6 = new Box1 (831,390,50,50)
	box7 = new Box1 (881,390,50,50)
	box8 = new Box1 (931,390,50,50)
	box9 = new Box1 (981,390,50,50)
	box10 = new Box1 (1031,390,50,50)

	box01 = new Box1 (1220,295,50,50)
	box02 = new Box1 (1270,295,50,50)

	//creating the boxes : Box2

	box11 = new Box2 (606,340,50,50)
	box12 = new Box2 (656,340,50,50)
	box13 = new Box2 (706,340,50,50)
	box14 = new Box2 (756,340,50,50)
	box15 = new Box2 (806,340,50,50)
	box16 = new Box2 (856,340,50,50)
	box17 = new Box2 (906,340,50,50)
	box18 = new Box2 (956,340,50,50)
	box19 = new Box2 (1006,340,50,50)

	//creating the boxes :: box3
	box20 = new Box3 (631,290,50,50)
	box21 = new Box3 (681,290,50,50)
	box22 = new Box3 (731,290,50,50)	
	box23 = new Box3 (781,290,50,50)
	box24 = new Box3 (831,290,50,50)
	box25 = new Box3 (881,290,50,50)
	box26 = new Box3 (931,290,50,50)
	box27 = new Box3 (981,290,50,50)
	
	//creating the boxes :: box4
	
	box28 = new Box4 (656,240,50,50)
	box29 = new Box4 (706,240,50,50)
	box30 = new Box4 (756,240,50,50)
	box31 = new Box4 (806,240,50,50)
	box32 = new Box4 (856,240,50,50)
	box33 = new Box4 (906,240,50,50)
	box34 = new Box4 (956,240,50,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  ground1.display();
  ground2.display();
  ground3.display();

  // displaying the boxes : box1 //
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  box01.display();
  box02.display();

	// displaying the boxes : box2 //
	
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();

	//displaying the boxes : box3 //

	box20.display();
	box21.display();
	box22.display();
	box23.display();
	box24.display();
	box25.display();
	box26.display();
	box27.display();
	
	//displaying the boxes : box4 //

	box28.display();
	box29.display();
	box30.display();
	box31.display();
	box32.display();
	box33.display();
	box34.display();
  drawSprites();
 
}



