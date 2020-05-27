var car_img, enemycar_img;
var car;
var lines;
var enemycar, enemycar1;
var group, group1, group2;
var score = 0, gamestate = "play";
function preload()
{
    car_img = loadImage("playercar.png");
    enemycar_img = loadImage("othercar.png");
}
function setup()
{
    createCanvas(500,window.innerHeight);
    group = new Group();
    group1 = new Group();
    group2 = new Group();
    car = createSprite(90,500,30,50);
    car.addImage(car_img);
    car.scale = 0.2;
    group1.add(car);
    enemycar = createSprite(Math.round(random(15,480)),Math.round(random(150,577)),50,50);
    enemycar.addImage(enemycar_img);
    enemycar.scale = 0.2;
    group.add(enemycar);
    enemycar1 = createSprite(Math.round(random(15,480)),Math.round(random(150,577)),50,50);
    enemycar1.addImage(enemycar_img);
    enemycar1.scale = 0.2;
    group2.add(enemycar1);
    
}
function draw()
{
    background(0);
    if(gamestate==="play")
    {
    movecar();
    movecar1();
    fill(255);
    if(frameCount%10===0)
    {
        score += 1;
    }
    for(var i=0;i<group.length;i++)
    {
        if(group1.isTouching(group))
        {
          console.log("hello")
          group.get(i).destroy();
          gamestate="end";
        }
        else
        {

        }
    }
    for(var i=0;i<group2.length;i++)
    {
        if(group1.isTouching(group2))
        {
          group2.get(i).destroy();
          gamestate="end";
        }
        else
        {

        }
    }
    if(keyCode == RIGHT_ARROW && car.x < 485)
  {
    car.x += 5;
    console.log("right");
  }
  if(keyCode == LEFT_ARROW && car.x > 15)
  {
    car.x -= 5;
    console.log("left");
  }
  if(keyCode == UP_ARROW && car.y > 150)
  {
    car.y  = car.y-5;
    console.log("top");
  }
  if(keyCode == DOWN_ARROW && car.y < 577)
  {
    car.y  = car.y+5;
    console.log("down");
  }
  console.log(mouseY);
}
if(gamestate==="end")
{
    text("gameover",200,200);
}
    text("Score: "+score,200,30);
    drawSprites();
}
function movecar()
{
    if(frameCount%30 === 0)
    {
        if(enemycar.y >= 534)
        {
            enemycar.y -=600;
            enemycar.x = Math.floor(Math.random()*350);
        }
    }
    enemycar.y += 5;
}
function movecar1()
{
    if(frameCount%30 === 0)
    {
        if(enemycar1.y >= 534)
        {
            enemycar1.y -=600;
            enemycar1.x = Math.floor(Math.random()*350);
        }
    }
    enemycar1.y += 5;
}