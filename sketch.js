//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball;
var engine, world;
var object;
var box1,box2

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic: true
  }
  object = Bodies.rectangle(400, 390, 800, 20, options);
  console.log(object);
  console.log(object.label);
  console.log(object.position.x);
  console.log(object.position.y);

  World.add(world, object)
  var ballOptions = {
    restitution: 1
  }
  ball = Bodies.circle(400, 100,30,ballOptions);
  World.add(world, ball)
  box1=new Box(200,300,50,50);
  box2=new Box(240,200,50,100);
  //JSON - Java Script Object Notation
  /*
  {
    key1 : value1,
    key2 : value2,
    key3 :value3
  }*/


  
}

function draw() {
  background(200);  

  Engine.update(engine);

  rectMode(CENTER);
  rect(object.position.x, object.position.y, 800, 20);
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,30,30);
 box1.display();
 box2.display();
}
