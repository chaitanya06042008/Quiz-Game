class Quiz{
    constructor(){
    }
    getState(){
        var gameStateRef= database.ref("gameState")
     gameStateRef.on("value",function(data){
         gameState=data.val();
     
     } )
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if(gameState===0){
            contestant= new Contestant()
            contestant.getContestantCount()
question=new Question
            question.display()
        }
    }
    play(){
        question.hide()
textSize(30)
text("Results of the quiz", 340, 50)  
Contestant.getContestantInfo()   
if (allContestants!== undefined) {
    console.log(allContestants)
    var displayposition=230
    for(var cont in allContestants){
        var correctAnswer=2
        if (correctAnswer===allContestants[cont].answer){
            
            fill("green")
        }
        else{
          fill("red")
        }
        displayposition+=30
        textSize(25)
        text(allContestants[cont].name+": "+ allContestants[cont].answer, 250, displayposition)
    }
}  

    }









}
