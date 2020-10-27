const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var divisions, divisions1, divisions2, divisions3, divisions4, divisions5, divisions6, divisions7;
var ground, ground1, ground2;
var plinko;

function preload() {
   
}

var plinko = []
var particles = []
var divisions = [] 

var divisionhHeight=300;

function setup(){
    var canvas = createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,height,600,20);
    ground1 = new Ground(0,300,20,600);
    ground2 = new Ground(400,300,20,600);
    divisions = new Divisions(200, 580, 380, 20);

    plinko = new Plinko();
    
    Engine.run(engine);
}


function draw(){
    background(0);
    Engine.update(engine);
    ground.display();
    ground1.display();
    ground2.display();
    divisions.display();
    divisions1.display();
    divisions2.display();
    divisions3.display();
    divisions4.display();
    divisions5.display();
    divisions6.display();
    divisions7.display();
    plinko.display();
}


