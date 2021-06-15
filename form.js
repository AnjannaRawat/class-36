
class Form{
    constructor(){


    }

    shows(){
var title=createElement('h1')
title.html("car racing game")
title.position(280,90)

 var textbox=createInput("name")
textbox.position(280,150)

var button=createButton("press me")
button.position(280,200)

var message=createElement("h2")
message.position(280,250)

button.mousePressed(function()
{ textbox.hide();  
    button.hide();
    
  

    var name=textbox.value();
    PlayerCount=PlayerCount+1
    player.update(PlayerCount)
    player.updateName(name)
      message.html("Hello"+" "+name); });
}

}

