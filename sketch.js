
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground;
var stone;
var mango1,mango2,mango3;
var platform1;
var slingshot;
var tree2,tree2img,boy2,boy2img;
var stone;

function preload()
{
  tree2img=loadImage("tree.png");
  boy2img = loadImage("boy.png");
  
}

function setup() {
	createCanvas(1200, 600);
   

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


    ground = new Ground(600,height,1200,20);
    //platform1 = new Ground(400,350,50,10);
    mango1 = new Mango(650,250,50,50);
    mango2 = new Mango(900,100,50,50);
    mango3 = new Mango(800,300,50,50);
    stone = new Stone(300,500,50,50);
  slingshot = new SlingShot(stone.body,{x:250,y:480});
	Engine.run(engine);
  tree2 = createSprite(900,300,300,400);
  boy2 = createSprite(300,540,100,200);
  boy2.addImage("boy2",boy2img);
  boy2.scale = 0.1;
  tree2.addImage("tree",tree2img);
  tree2.scale = 0.5;
}


function draw() {
  rectMode(CENTER);
  background(200);
  detectcollision(stone,mango1);
   detectcollision(stone,mango2);
   detectcollision(stone,mango3);


  drawSprites();
  
   
   ground.display();
   //platform1.display();
   mango1.display();
   slingshot.display();
   stone.display();
   mango2.display();
   mango3.display();

   detectcollision(stone,mango1);
   detectcollision(stone,mango2);
   detectcollision(stone,mango3);

}
function mouseDragged(){
    
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
 
}
function mouseReleased(){
  slingshot.fly();
  mouseDragged = false;
}
function detectcollision(lstone,lmango)
{
    mangoBodyPosition= lmango.body.position;
    stoneBodyPosition = lstone.body.position;
    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y) ;
    if(distance<=lmango.width + lstone.width)
    {
        Matter.Body.setStatic(lmango.body,false);
    }
}

function keyPressed()
{
  if(keyCode === 32)
  {
    Matter.Body.setPosition(stone.body,{x:250,y:480})
    slingshot.attach(stone.body);
  }
}
/*function attach(lstone.body){
  if(this.sling.lstone){
    var pointA=this.sling.lstone.position;
    var pointB=this.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}*/



