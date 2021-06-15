class Player{ 
    constructor(){ } 
    
    getCount(){ 
        var PlayerCountRef= database.ref('playeraccount');
        PlayerCountRef.on("value",function(data){
            PlayerCount=data.val();
             })
             }
              
              update(count){
             database.ref('/').update({ 
            playeraccount:count }) } 
             
            updateName(name){
                var playerindex="player"+PlayerCount
                database.ref(playerindex).set({
                    name:name
                })
            }
           
                     }
                     
                     