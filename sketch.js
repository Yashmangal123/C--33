const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1700,800);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(width/2,790,1700,20)


    box1 = new Box(900,760,70,70);
    box2 = new Box(970,760,70,70);
    box3 = new Box(1040,760,70,70);
    box4 = new Box(1110,760,70,70);
    box5 = new Box(1180,760,70,70);

    box6 = new Box(900,690,70,70);
    box7 = new Box(970,690,70,70);
    box8 = new Box(1040,690,70,70);
    box9 = new Box(1110,690,70,70);
    box10 = new Box(1180,690,70,70);

    box11 = new Box(900,620,70,70);
    box12 = new Box(970,620,70,70);
    box13 = new Box(1040,620,70,70);
    box14 = new Box(1110,620,70,70);
    box15 = new Box(1180,620,70,70);

    box16 = new Box(900,550,70,70);
    box17 = new Box(970,550,70,70);
    box18 = new Box(1040,550,70,70);
    box19 = new Box(1110,550,70,70);
    box20 = new Box(1180,550,70,70);

    box21 = new Box(900,480,70,70);
    box22 = new Box(970,480,70,70);
    box23 = new Box(1040,480,70,70);
    box24 = new Box(1110,480,70,70);
    box25 = new Box(1180,480,70,70);

    
    ball = new Ball(0,50);
    rope = new Rope(ball.body,{x:500,y:50});

}

function draw(){
    background(0);
    Engine.update(engine);
    //console.log(ground);
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

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
   
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
   
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
   

    ground.display();
   
    rope.display();
    ball.display();


}