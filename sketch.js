const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	canvas=createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

  canvasMouse.pixelRatio = pixelDensity();
  let options = {
    mouse:canvasmouse
  };
  mouseConstraint = MouseConstraint.create(engine,options);
  World.add(world,mouseConstraint);

  roof1 = new Roof(600, 50, 1200, 20);
  bob1 = new Bob(300, 300, "royalblue");
  bob2 = new Bob(360,300, "purple");
  bob3 = new Bob(420, 300, "royalblue");
  bob4 = new Bob(480, 300, "purple");
  bob5 = new Bob(540, 300, "royalblue");
  sling1 = new sling(bob1.body, {x:300, y:50}, "purple");
  sling2 = new sling(bob2.body,{x:360, y:50}, "royalblue");
  sling3 = new sling(bob3.body,{x:420, y:50}, "purple");
  sling4 = new sling(bob4.body,{x:480, y:50}, "royalblue");
  sling5 = new sling(bob5.body, {x:540, y:50}, "purple");
	
	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background("turquoise");
  Engine.update(engine);
  fill("#910046");
  textSize(15);
  text("Drag the mouse on the first bob to relaunch", 275, 370);
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function mouseDragged(){
Matter.Body.setPosition(pendulum1.body,{x: mouseX,y:mouseY});
}
