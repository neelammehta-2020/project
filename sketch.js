const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var target1, target2, target3;
var arrow, bow;
var backgroundImg,platform;
var gameState="stop";

function preload() {
    targetImg = loadImage("sprites/target.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);

    //target1 = new Target(1000, 80, 100, 100);
    //target2 = new Target(600, 150, 100, 100);
    //target3 = new Target(1100, 300, 100, 100);
    //target4 = new Target(850, 200, 100, 100);

    target1 = createSprite(1000, 80, 100, 100);
    target1.addImage(targetImg)
    target1.scale = 0.25;
    target2 = createSprite(600, 150, 100, 100);
    target2.addImage(targetImg)
    target2.scale = 0.25;
    target3 = createSprite(1100, 300, 100, 100);
    target3.addImage(targetImg)
    target3.scale = 0.25;
    target4 = createSprite(850, 200, 100, 100);
    target4.addImage(targetImg)
    target4.scale = 0.25;

    arrow = new Arrow(185, 200, 150, 75);
    bow = new Bow(185, 200, 150, 350);
    Engine.run(engine);
    //bowThread = new BowThread(arrow.body, {x:190, y:200});
}

function draw(){
    background("white");

    drawSprites();

    ground.display();
    //target1.display();
    //target2.display();
    //target3.display();
    //target4.display();

    arrow.display();
    bow.display();
    //bowThread.display();
    
    textSize(30);
    fill("black");
    text("10", 1000, 80);
    text("20", 600, 150);
    text("40", 1100, 300);
    text("50", 850, 200);
if(gameState==="play"){
    if(arrow.body.position.x > 550 && arrow.body.position.y < 200 && arrow.body.position.x < 650 && arrow.body.position.y > 100){
        Matter.Body.setStatic(arrow.body,true);
        console.log("inifcondition");
    }

    if(arrow.body.position.x > 800 && arrow.body.position.y < 250 && arrow.body.position.x < 900 && arrow.body.position.y > 150){
        Matter.Body.setStatic(arrow.body,true);
        console.log("inifcondition");
    }

    if(arrow.body.position.x > 950 && arrow.body.position.y < 130 && arrow.body.position.x < 1050 && arrow.body.position.y > 30){
        Matter.Body.setStatic(arrow.body,true);
        console.log("inifcondition");
    }

    if(arrow.body.position.x > 1050 && arrow.body.position.y < 350 && arrow.body.position.x < 1150 && arrow.body.position.y > 250){
        Matter.Body.setStatic(arrow.body,true);
        console.log("inifcondition");
    }
}

   // console.log(mouseX, mouseY);
  // console.log(arrow.body);

   // Engine.update(engine);
}

//function mouseDragged(){
//    Matter.Body.setPosition(arrow.body, {x: mouseX , y: mouseY});
//}

//function mouseReleased(){
//    bowThread.fly();
//}

function keyPressed(){
    if(keyCode === 32){
        
      gameState="play";
     console.log(arrow.body.position);
     Matter.Body.setStatic(arrow.body,false); 
       Matter.Body.applyForce(arrow.body, arrow.body.position, {x:random(20, 500), y:random(-100,100)});
      // Matter.Body.applyForce(arrow.body, {x:185,y:200}, {x:1000, y:-300});
      
      /*   translation={x:20,y:0}
         Matter.Body.translate(arrow.body,translation);
     */
    }

    if(keyCode === UP_ARROW){
       
        Matter.Body.setPosition(arrow.body, {x:185, y:200});
        Matter.Body.setStatic(arrow.body, true);
       
        gameState="stop";
    }
    
}