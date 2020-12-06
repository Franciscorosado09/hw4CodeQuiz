//main document variables

var highScoresEl = document.getElementById("highscores");
var buttonStart = document.querySelector("#btnStart");
var
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var countdownEl = document.querySelector("#timer");



//hide buttons for quesitons
buttonOption.style.visibility ="hidden"



//time variables

var countdown = 100;
var countdownInterval;


// 








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



var quizQuestions = 0;
var chosenAnswer = "";


function startQuiz() {



  for (i = 0; i < 5; i++) {

    var option = document.createElement("button");
    option.getElementById("btn").innerHTML = " ";
    document.buttonEl.appendChild(option);

    var option = document.createElement("button");
    option.getElementById("btn").innerHTML = " ";
    document.buttonEl.appendChild(optionA);


    var option = document.createElement("button");
    option.getElementById("btn").innerHTML = " ";
    document.buttonEl.appendChild(optionA);

  }
  //  Create an IF ELSE statement if USER chooses correct answer 5 seconds added if choose another then minus 5 seconds

};


buttonStart.addEventListener("click", function () {
  buttonStart.style.visibility = "hidden";
  setTime();
  startQuiz();


});
// button.addeventlistener("click", startQuiz);


// var quizQuestions = {

//   var question = {
//     question: "Whats your favorite color",
//     option: ["red", "blue", "green", ];
//     answer: "red",


//   };

//   var q2 = {
//     question: "Whats your favorite color",
//     option: ["red", "blue", "green", ];
//     answer: "red",
//   };

//   var q3 = {
//     question: "Whats your favorite color",
//     option: ["red", "blue", "green", ];
//     answer: "red",
//   };
//   var q4 = {
//     question: "Whats your favorite color",
//     option: ["red", "blue", "green", ];
//     answer: "red",
//   };
//   var q5 = {
//     question: "Whats your favorite color",
//     option: ["red", "blue", "green", ];
//     answer: "red",
//   };
// }