const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var pig1, log1;
var box3, box4, box5;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    
    pig1 = new pig(810,350);
    log1 = new Log(810,260,300,PI/2);
    
    box3 = new Box(700, 240, 70, 70);
    box4 = new Box(920, 240, 70, 70);

    pig2 = new pig(810, 220);
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
}