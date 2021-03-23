const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    ground1 = new Ground(600,570,1200,30);
  stone1 = new Stone(600,500,60,60);
  iron1 = new Iron(300,500,50,20);
  rubber1 = new Rubber(800,500,10,10);
  

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    ground1.display();
    stone1.display();
    stone1.display();
    iron1.display();
    rubber1.display();
       
 
}