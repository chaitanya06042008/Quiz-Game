class Question {
    constructor(){
    this.title=createElement('h1');
    this.input1 = createInput("Enter your name");
this.input2 = createInput("Enter the correct option")
    this.button = createButton('Submit');
    this.question = createElement("h3")
    this.option1 = createElement("h4")
    this.option2 = createElement("h4")
    this.option3 = createElement("h4")
    this.option4 = createElement("h4")

}
hide(){
    this.title.hide()
    this.input1.hide()
    this.input2.hide()
        this.button.hide()
    
}
display(){
    this.title.html("Quiz Game")
    this.title.position(350, 0)
    this.question.html("Which letter comes after K")
    this.question.position(150, 80)
    this.option1.html("1:A")
this.option1.position(150, 100)
    this.option2.html("2:L")
    this.option2.position(150, 120)

    this.option3.html("3:M")
    this.option3.position(150, 140)

    this.option4.html("4:O")
    this.option4.position(150, 160)
this.input1.position(150, 230)
this.input2.position(350, 230)
this.button.position(290, 300)

this.button.mousePressed(()=>{
    console.log("hello hi")
    this.input1.hide();
    this.input2.hide()
          //hide input
          this.button.hide();
           contestant.name=this.input1.value();
           contestant.answer=this.input2.value();
          //the name written by the player in the input box is now a variable 'name'
          
          contestantCount+=1
          contestant.index=contestantCount;
          //incrementing player count by 1
          contestant.updateCount(contestantCount)
          //updating playerCount in the database
          contestant.update()
          //updating name of the player in the database
          

      }
      )
}



}