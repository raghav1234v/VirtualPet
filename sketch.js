//Create variables here
 var dog, happyDog, database, foodS, foodStock;
function preload()
{
	//load images here
  dog=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500, 500);
  dog=new Sprite();
  dog.addImage(dog);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
 background(46, 139, 87)
 if (keyWentDown(UP_ARROW)){
   writeStock(foodS)
   dog.addImage(dogHappy)
 }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val();

}
function writeStock(x){
  if (x<=0){
    x=0
  }else{
    x=x-1
  }
 database.ref('/').update({
Food:x
 })

 
}

