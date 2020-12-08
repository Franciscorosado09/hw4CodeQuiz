//main document variables
var highScoresContainerEl = document.getElementsByClassName("highScoresContainer");

// highScoresContainerEl.style.visibility = "hidden";

var highScoresEl = document.getElementById("highscores");
var buttonStart = document.querySelector("#btnStart");
var questionEl = document.querySelector("#question");
console.log (questionEl);
var countdownEl = document.querySelector("#timer");


var buttonOptions = document.getElementById("btnOptions");
buttonOptions.style.visibility = "hidden";
var option = "";

console.log (buttonOptions);









//time variables

var countdown = 30;
var countdownInterval;



questionEl.innerHTML = "This quiz will ask Coding questions as soon as you press the button. Once you do a timer and question will appear. If you get the answer right you will be presented the next question with bonus time but get it wrong and time will be deducted from your clock. The game is over when you finish the quiz or timer gets to 0. Good luck on getting the High Score!";


//Questions to plug in//


var quizQuestions = [

 {question: "1. Inside which HTML element do we put the JavaScript?",

  options: 
  ["js", 
  "scripting",
  "script"],

  answer: "script", },


  {question: "2. Where is the correct place to insert a JavaScript?",

  options: 
  ["head & body section", 
  "body section",
  "head section"],

  answer: "body section",},


  {question: "3. How do you write 'Hello World' in an alert box?",

  options: 
  ["alert('Hello World')", 
  "alertBox('Hello World')",
  "msg('Hello World')"],

  answer: "alert('Hello World')",},

  {question: "4. How can you add a comment in a JavaScript?",

  options: 
  ["Magic", 
  "Sunshine",
  "//This is a comment"],

  answer: "//This is a comment",},



  {question: "5. Which event occurs when the user clicks on an HTML element?",

  options: 
  ["onmouseclick", 
  "onclick",
  "onmouseover"],


  answer: "onclick",},

]

console.log(quizQuestions)




//Time functions

function setTime() {



  var countdownInterval = setInterval(function () {
    countdown--;
    countdownEl.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);
      //end quiz

    }

  }, 1000);


};

console.log(setTime);

function timeDeduction(){
    countdown -= 5;

};

console.log (timeDeduction)

function timeBonus(){
    countdown += 5;

};

console.log (timeBonus)

function stopCountdown (){
    clearInterval(countdownInterval);
    endQuiz ();

}



//Code Quiz Functions

var questionNumber = 0;
var userScore = 0;
var correctAnswer = "";

function codeQuiz() {
 

    console.log (quizQuestions[questionNumber])
  
    questionEl.innerHTML = quizQuestions[questionNumber].question;
  
    
    buttonOptions.innerHTML = "";

    correctAnswer = quizQuestions[questionNumber].answer;
      
    console.log(correctAnswer)
  
  
    for ( var i = 0; i < quizQuestions[questionNumber].options.length; i++) {
        
        
  
      
  
  
      var option = document.createElement("button");
      option.innerHTML = quizQuestions[questionNumber].options[i];
     
      buttonOptions.appendChild(option)
  
      console.log (option)

      window.option


   
  
      
    }
  
  };
  
  
  buttonStart.addEventListener("click", function () {
    
    
    buttonStart.style.visibility = "hidden";
    buttonOptions.style.visibility = "visible";
  
   
    setTime();
    codeQuiz();
  
  
  });
  


buttonOptions.addEventListener("click", function(e){
      

   var element = e.target;
 
    console.log (element)

    var userChoice = element.textContent

    

    console.log (userChoice);
    
    if (userChoice == quizQuestions[questionNumber].answer){
        userScore++; 
        console.log (userScore);
        timeBonus();

        
        // countdown +=5;
        console.log(countdown)





        questionNumber++;

        if (questionNumber < 5) {
            codeQuiz();
        } else {

           endQuiz();
           
        }

    }
    else{

    if (userChoice != quizQuestions[questionNumber].answer){
        if (userScore > 0){
            --userScore;
        }
        console.log(userScore);
        timeDeduction();
        

        console.log(countdown)


        questionNumber++;

        if (questionNumber < 5){
            codeQuiz();
        } else{
            endQuiz ();
            stopCountdown ();
           
        
            countdown.style.visibility = "hidden";
        }

    }
    
    }
});
  
function endQuiz() {
    countdownEl.style.visibility = "hidden"
    alert( "You scored" +  (parseInt(userScore) + parseInt (countdown)));












}