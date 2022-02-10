//nameSpacing
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world,ground,ball


function setup() {
  createCanvas(800,800);
 engine=Engine.create();
 world=engine.world;
 var option={
   isStatic:true
 }
 ground=Bodies.rectangle(400,780,800,20,option);
 World.add(world,ground);
 var B={
   restitution:1
 }
 ball=Bodies.circle(200,400,10,B);
 World.add(world,ball);
}

function draw() {
  background("black");  
 Engine.update(engine);
 rectMode(CENTER);
 rect (ground.position.x,ground.position.y,800,20)
 ellipseMode(RADIUS)
 ellipse(ball.position.x,ball.position.y,10,10)
}