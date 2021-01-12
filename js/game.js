class Game{
    constructor(){

    }
    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState = val()
        })
    }
    update(state){
        datebase.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState === 0){
            player = new player()
            player.getCount()
            form = new Form()
            form.display()
        }
    }
}
