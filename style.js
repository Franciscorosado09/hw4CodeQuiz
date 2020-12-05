


//main variables

var highScoresEl= document.getElementById("highscores");
var buttonEl = document.querySelector("#btn");
var mainEl = document.getElementById("main");
var questionEl = document.querySelector("#question");
var answersEl = document.querySelector("#answers");
var countdownEl = document.querySelector("#timer");


//time variables

var countdown = 100;
var countdownInterval;


// Question varaibles

var q1El = document.getElementById("q1").style.visibility = "hidden";
var q2El = document.getElementById("q2").style.visibility = "hidden";
var q3El = document.getElementById("q3").style.visibility = "hidden";
var q4El = document.getElementById("q4").style.visibility = "hidden";
var q5El = document.getElementById("q5").style.visibility = "hidden";

var qbtnEl = document.getElementById("qbtn");



function setTime() {

    var countdown = 100;

  var countdownInterval = setInterval(function() {
    countdown--;
    countdownEl.textContent = countdown;

    if(countdown === 0) {
      clearInterval(countdownInterval);
      
    }

  }, 1000);


};

console.log(setTime);



function startQuiz (){

    var question1 = ("Question 1 BLahahahha");

    var optionA= document.createElement("BUTTON");
    optionA.innerHTML = "Answer";
    document.body.appendChild(optionA);               

    var optionB= document.createElement("BUTTON");
    optionB.innerHTML = "Answer";
    document.body.appendChild(optionB);


    var optionC= document.createElement("BUTTON");
    optionC.innerHTML = "Answer";
    document.body.appendChild(optionC);




//  Create an IF ELSE statement if USER chooses correct answer 5 seconds added if choose another then minus 5 seconds

};


buttonEl.addEventListener ("click",function() {
    setTime();
    startQuiz();

 alert ("hello")
});
// button.addeventlistener("click", startQuiz);





var q1 = {
    question: "Whats your favorite color",
    a: "red",
    b: "blue",
    c: "green"
};

var q2 = {
    question: "Whats your favorite color",
    a: "red",
    b: "blue",
    c: "green"
};

var q3 = {
    question: "Whats your favorite color",
    a: "red",
    b: "blue",
    c: "green"
};
var q4 = {
    question: "Whats your favorite color",
    a: "red",
    b: "blue",
    c: "green"
};
var q5 = {
    question: "Whats your favorite color",
    a: "red",
    b: "blue",
    c: "green"
};
