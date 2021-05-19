var player , playerImage , playerJump , playerRun , playerDead , playerHealth = 100;
var path1 , path2 , path3 , path4 , path5 , path6 , path7 , path8 , path9 , path10;
var bullet1 , bullet1Group , bullet2 , bullet2Group , bullet3 , bullet3Group , bullet4 , bullet4Group
var gameState = 0;
var enemy1 , enemy1Health = 100;
var enemy2 , enemy2Health = 100;
var enemy3 , enemy3Health = 100;
var enemy4 , enemy4Health = 100;
var gun , gunPickup = 0 , gun2 , gunImage;
var gunBullet

function preload()
{
        playerImage = loadImage("Images/Hero/Idle (1).png");
        playerJump = loadAnimation("Images/Hero/Jump (1).png","Images/Hero/Jump (2).png","Images/Hero/Jump (3).png","Images/Hero/Jump (4).png","Images/Hero/Jump (5).png","Images/Hero/Jump (6).png","Images/Hero/Jump (7).png","Images/Hero/Jump (8).png","Images/Hero/Jump (9).png")
        playerRun = loadAnimation("Images/Hero/Run (1).png","Images/Hero/Run (2).png", "Images/Hero/Run (3).png","Images/Hero/Run (4).png","Images/Hero/Run (5).png","Images/Hero/Run (6).png","Images/Hero/Run (7).png","Images/Hero/Run (8).png");
        playerIdle = loadAnimation("Images/Hero/Idle (1).png");
}

//----------------------------------------------------------------------------//
//----------------------------------------------------------------------------//

function setup()
{
        createCanvas(10000 , 700);
        
        
        player = createSprite(-4000,150,10,10);
        player.addImage(playerImage);
        player.addAnimation("Run",playerRun);
        player.addAnimation("Idle",playerIdle);
        player.addAnimation("Jump",playerJump);
        player.scale = 0.2;
        camera.y = player.y;

        

        ball1=createSprite(-2000 , 150 , 10 , 10)
        ball1.setVelocity(player.x, player.y)

        
        player.debug = true;
        player.setCollider("rectangle",50,0,300,450)

        path1 = createSprite(-4000,random(230,160),500,50);
        path2 = createSprite(path1.x+600,random(230,160),500,50);
        path3 = createSprite(path2.x+600,random(230,160),500,50);
        path4 = createSprite(path3.x+600,random(230,160),500,50);
        path5 = createSprite(path4.x+600,random(230,160),500,50);
        path6 = createSprite(path5.x+600,random(230,160),500,50);
        path7 = createSprite(path6.x+600,random(230,160),500,50);
        path8 = createSprite(path7.x+600,random(230,160),500,50);
        path9 = createSprite(path8.x+600,random(230,160),500,50);
        path10 = createSprite(path9.x+600,random(230,160),500,50);


        bullet1Group = createGroup()
        bullet2Group = createGroup()
        bullet3Group = createGroup()
        bullet4Group = createGroup()

       


}


function draw()
{   
        background("white");
        
        textSize(20)
        text("Health : "+ playerHealth , player.x , 400)

        bulletDamage();
        Enemies1();
        Enemies2();
        Enemies3();
        Enemies4();
        gravity();
        cameraMovement();
        movement();
        colliding();

       

        drawSprites();
}

