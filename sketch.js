const Engine= Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world, box, heroine, ground, rope;
function preload(){
  bg=loadImage("GamingBackground.png")
}

function setup() {
  createCanvas(3000,800);
  engine = Engine.create();
  world= engine.world;

  ground = new Ground(600,600,1200,20);

  heroine = new Heroine(200,200,80);
  rope = new Rope(heroine.body,{x:500,y:50});
  
  box1= new Box(700,100);
  box2= new Box(700,100);
  box3= new Box(700,100);
  box4= new Box(700,100);
  box5= new Box(700,100);
  box6= new Box(700,100);
  box7= new Box(700,100);

  box8= new Box(700,100);
  box9= new Box(800,100);
  box10= new Box(800,100);
  box11= new Box(800,100);
  box12= new Box(800,100);
  box13= new Box(800,100);
  box14= new Box(800,100);
  box15= new Box(900,100);
  box16= new Box(900,100);
  box17= new Box(900,100);
  box18= new Box(900,100);
  box19= new Box(900,100);
  box20= new Box(900,100);
  monster=new Monster(1150,100,30);
  

  
}

function draw() {
  background(bg);  
  Engine.update(engine);

ground.display();
heroine.display();
rope.display();
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
monster.display();


}





function mouseDragged(){
  Matter.Body.setPosition(heroine.body,{x:mouseX,y:mouseY});
}

