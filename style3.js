//main document variables

var highScoresEl = document.getElementById("highscores");
var buttonStart = document.querySelector("#btnStart");
var questionEl = document.querySelector("#question");
console.log (questionEl);
var countdownEl = document.querySelector("#timer");


var buttonOptions = document.getElementById("btnOptions");

console.log (buttonOptions);

//time variables

var countdown = 100;
var countdownInterval;



questionEl.innerHTML = "This quiz will ask Coding questions as soon as you press the button. Once you do a timer and question will appear. If you get the answer right you will be presented the next question but get it wrong and time will be deducted from your clock. The game is over when you finish the quiz or timer gets to 0. Good luck on getting the High Score!";


//Questions to plug in//


var quizQuestions = [

 {question: "1. Whats your favorite color",

  options: 
  ["red", 
  "blue",
  "green"],

  answer: "red", },


  {question: "2. qq",

  options: 
  ["red", 
  "blue",
  "green"],

  answer: "blue",},


  {question: "3. qq",

  options: 
  ["red", 
  "blue",
  "green"],

  answer: "green",},

  {question: "4. qq",

  options: 
  ["red", 
  "blue",
  "green"],

  answer: "blue",},



  {question: "5. QQ",

  options: 
  ["red", 
  "blue",
  "green"],


  answer: "red",},

]

console.log(quizQuestions)




//Time functions

function setTime() {

  var countdown = 100;

  var countdownInterval = setInterval(function () {
    countdown--;
    countdownEl.textContent = countdown;

    if (countdown === 0) {
      clearInterval(countdownInterval);

    }

  }, 1000);


};

console.log(setTime);

function timeDeduction(){
    countdown-=30

};

console.log (timeDeduction)






var questionNumber = 0;
var userScore = 0;
var correctAnswer = "";

function codeQuiz() {
 

    console.log (quizQuestions[questionNumber])
  
    questionEl.innerHTML = quizQuestions[questionNumber].question;
  
    
  
  
  
  
    for ( var i = 0; i < quizQuestions[questionNumber].options.length; i++) {
  
      
  
  
      var option = document.createElement("button");
      option.innerHTML = quizQuestions[questionNumber].options[i];
     
      buttonOptions.appendChild(option)
  
      console.log (option)

      correctAnswer = quizQuestions[questionNumber].correct;
      
      console.log(quizQuestions[questionNumber])
  
      
    }
    //  Create an IF ELSE statement if USER chooses correct answer 5 seconds added if choose another then minus 5 seconds
  
  };
  
  
  buttonStart.addEventListener("click", function () {
    
    
    buttonStart.style.visibility = "hidden";
  
   
    setTime();
    codeQuiz();
  
  
  });
  



  buttonOptions.addEventListener("click", function(e){
      

    // var element = e.target;

    // console.log (element)

    var userChoice = e.target.innerHTML;

    console.log (userChoice);


    if (element.matches ("button") === true && e.innerHTML === correctAnswer){
        ++userScore;
        console.log (userScore);


        questionNumber++;

        if (questionNumber < 5) {
            codeQuiz();
        } else {

            // create End function
        }

    }
    else{

    if (element.matches("button")){
        if (userScore > 0){
            --userScore;
        }
        console.log(userScore);
        timeDeduction();
        questionNumber++;

        if (questionNumber < 5){
            codeQuiz();
        } else{
            //end function
        }

    }
    
    }
});
  