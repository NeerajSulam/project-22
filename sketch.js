var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 505);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale = 0.25;
	
	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	engine = Engine.create();
	world = engine.world;
	starBody = Bodies.circle(650, 30, 5, {restitution :0.5,isStatic:true});
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  keyPressed();
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyDown("LEFT_ARROW")){
		fairy.x = fairy.x - 2;
	 }
	if(keyDown("RIGHT_ARROW")){
		 fairy.x = fairy.x + 2
	 }
	if(keyDown("DOWN_ARROW")){
		star.velocityY = 3;
	}
	if(star.y > 470){
		star.velocityY = 0;
		fairyVoice.stop();
	}
}

