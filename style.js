//main document variables

var highScoresEl = document.getElementById("highscores");
var buttonStart = document.querySelector("#btnStart");
var questionEl = document.querySelector("#question");
console.log (questionEl);
var countdownEl = document.querySelector("#timer");
// var buttonOption1 = document.querySelector("#btnOption1")
// var buttonOption2 = document.querySelector("#btnOption2")
// var buttonOption3 = document.querySelector("#btnOption3")
// var buttonOptions = document.querySelectorAll("#btnOption")

//hide buttons for quesitons
// buttonOptions.forEach(function (button){
//   button.style.visibility = "hidden"
// });


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


  {question: "1. Whats your favorite color",

  options: 
  ["red", 
  "blue",
  "green"],

  answer: "blue",},


  {question: "1. Whats your favorite color",

  options: 
  ["red", 
  "blue",
  "green"],

  answer: "green",},

  {question: "1. Whats your favorite color",

  options: 
  ["red", 
  "blue",
  "green"],

  answer: "blue",},



  {question: "1. Whats your favorite color",

  options: 
  ["red", 
  "blue",
  "green"],


  answer: "red",},

]

console.log(quizQuestions)






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



var questionNumber = 0;
var correctAnswer = "";


function startQuiz() {
 

  console.log (quizQuestions[questionNumber])

  questionEl.innerHTML = quizQuestions[questionNumber].question;

  




  for ( var i = 0; i < quizQuestions[questionNumber].options.length; i++) {

    // questionEl.innerHTML = currentQuestion.question;

    // buttonOptions.innerHTML = currentQuestion.options[i]

    // console.log(buttonOptions.innerHTML)

    // console.log (currentQuestion.options[i])


    var option = document.createElement("button");
    option.innerHTML = quizQuestions[questionNumber].options[i];
    
    // option.appendChild(button)
    buttonOptions.appendChild(option)

    console.log (option)

    // var option = document.createElement("button");
    // option.getElementById("btn").innerHTML = " ";
    // document.buttonEl.appendChild(optionA);


    // var option = document.createElement("button");
    // option.getElementById("btn").innerHTML = " ";
    // document.buttonEl.appendChild(optionA);
    

  }
  //  Create an IF ELSE statement if USER chooses correct answer 5 seconds added if choose another then minus 5 seconds

};


buttonStart.addEventListener("click", function () {
  
  
  buttonStart.style.visibility = "hidden";

  // buttonOptions.forEach(function (button){
  //   button.style.visibility = "visible"
  // });



  setTime();
  startQuiz();


});
// button.addeventlistener("click", startQuiz);



