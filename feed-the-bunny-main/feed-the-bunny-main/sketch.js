const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
const Body = Matter.Body
const Composites = Matter.Composites
const Composite = Matter.Composite

var engine, world
var bunny, bunnyImg, bunnyEatImg,bunnyEats
var cut, cutImg
var melon, melonImg
var backgroundImg

function preload(){
 
   bunnyImg = loadAnimation("blink_1.png", "blink_2.png", "blink_3.png") 
   cutImg = loadAnimation("cut_btn.png" , "cut_button.png")
   bunnyEatImg = loadAnimation("eat_0.png","eat_1.png","eat_2.png","eat_3.png","eat_4.png")
   melonImg = loadImage("melon.png")
   backgroundImg = loadImage("background.png")
}


function setup(){
  createCanvas(700,700)
  

  engine = Engine.create()
  world = engine.world
  
  bunny = createSprite(350,600)
  bunny.addAnimation( "blink",bunnyImg)
  bunny.scale= 0.25

  bunny.addAnimation("eat",bunnyEatImg)

  melon = Bodies.circle(20,650,30)
  
  World.add(world,melon)
  
   ground = new Ground(350,690,700,20)

   rope = new Rope(2,{x:350,y:0})
   rope2 = new Rope(2,{x:450,y:0})
   constraint = new Link(rope,melon)
   constraint2 = new Link(rope2,melon)

}

function draw(){
 background(0)
 imageMode(CENTER)
 image(backgroundImg,350,350,700,700)
 Engine.update(engine)
 image(melonImg, melon.position.x, melon.position.y, 60,60)
 image(cutImg, rope.position.x, rope.position.y,10,10)
 
 rope.show()
 rope2.show()

  drawSprites();
}