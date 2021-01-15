
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rubber,stone,hammer;
var ground

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    rubber = new Rubber(700,320,70,70);
    stone = new Stone(920,320,70,70);
    hammer = new Hammer(100,100);

    

}

function draw(){
    background(0);
	Engine.update(engine);
	
	console.log(stone.body.position.x);
    console.log(stone.body.position.y);
    console.log(stone.body.angle);

    ground.display();
    rubber.display();
    stone.display();

	hammer.display();
}



