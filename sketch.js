var database;
var gameState=0;
var contestantCount=0;

var question,contestant,quiz;

var allContestants;


function setup(){
  database = firebase.database();
quiz = new Quiz()
quiz.getState()
quiz.start();
  createCanvas(850,400);

  
}
function draw(){

  if(contestantCount===4){
    quiz.update(1);
  }
 if(gameState===1){
   clear();
   quiz.play();
 }
 
 }
