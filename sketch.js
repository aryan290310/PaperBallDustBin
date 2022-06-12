const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {}

function setup() {
  createCanvas(800, 800);

  engine = Engine.create();
  world = engine.world;
  ground = new Ground(400, 790, 800, 10);
  box1 = new Box(600, 735, 10, 100);
  box2 = new Box(420, 735, 10, 100);
  ball = new Ball(100, 735, 50);
  Engine.run(engine);
}

function draw() {
  background(0);

  ground.display();
  box1.display();
  box2.display();
  ball.display();
  if (keyDown(UP_ARROW)) {
    balljump();
  }
}

function balljump() {
  Matter.Body.applyForce(ball.ball, ball.ball.position, { x: 0.01, y: -0.01 });
}
