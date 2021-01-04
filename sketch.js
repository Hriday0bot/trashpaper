const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
function setup(){
    var canvas = createCanvas(1600,700);
   
    engine = Engine.create();
    World=engine.world;

    Engine.run(engine);
    paper1 = new Paper(100,200,30,30);
    ground = new Ground(800,690,1600,20);
    trashCan1 = new TrashCan(1550,590,20,180);
    trashCan2 = new TrashCan(1400,670,280,20);
    trashCan3 = new TrashCan(1250,590,20,180);
    keyPressed();
}

function draw(){
   rectMode(CENTER);
   background(0);
   paper1.display();
   ground.dispaly();
   trashCan1.display();
   trashCan2.display();
   trashCan3.display();

   drawSprites();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper1.body,paper1.body.position,{x:105,y:-105});
    }
}