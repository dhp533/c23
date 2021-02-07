const Engine = Matter.Engine; // laws of Physics
const World = Matter.World; //apply laws of physics onto all bodies
const Bodies = Matter.Bodies;

var engine, world;
var box1, ball, ground;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(200,200,50,70)
  box2 = new Box(220, 100, 50, 80);

  ground = new Ground(200, 390, width, 20);


 

 
}

function draw() {
  background(220,255,255);  
  Engine.update(engine); 

  box1.display();
  box2.display();

  ground.display();
  
}