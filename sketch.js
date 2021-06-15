var gameState=0,player,form,PlayerCount,game,database,count=0,state=1;

function setup(){
    createCanvas(500,500);
    database=firebase.database()

    game= new Game();
   
    game.getState();
    game.start();


    
}

function draw(){
if (PlayerCount==2 ){
    game.update(1)

}

}