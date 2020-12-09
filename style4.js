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




var intialsbox = document.getElementById("inputBox");
var scoresEl =document.getElementById("scores");
scoresEl.innerHTML = " "
var score

intialsbox.style.visibility = "hidden";
scoresEl.style.visibility = "hidden";




//time variables

var countdown = 30;
var countdownInterval;



questionEl.innerHTML = "This quiz will ask Coding questions as soon as you press the button. Once you do a timer and question will appear. If you get the answer right you will be presented the next question but get it wrong and time will be deducted from your clock. The game is over when you finish the quiz or timer gets to 0. If you finish in time you could be on the High Score board!";

// scorebox
function userInput () {
    intialsbox.value;
    scoresEl.innerHTML = initialsbox;
  }





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

console.log (quizQuestions.answer)


//Time functions




function setTime() {



  var countdownInterval = setInterval(function () {
    countdown--;
    countdownEl.textContent = countdown;

    if (countdown === 0) {
        endQuiz()
      countdownInterval = ""

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

    // var correctAnswer = quizQuestions[questionNumber].answer

    console.log (userChoice);
    
    if (userChoice === correctAnswer){
        userScore++; 
        console.log (userScore);
        timeBonus();

        console.log (correctAnswer)
        // countdown +=5;
        console.log(countdown)





        //questionNumber++;

        if (questionNumber < 4) {
           questionNumber++;
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


        // questionNumber++;

        if (questionNumber < 4){
            questionNumber++;
            codeQuiz();
        } else{
            endQuiz ();
            stopCountdown ();
           
        
            countdown.style.visibility = "hidden";
        }

    }
    
    }
});

var highscoreUsers = {}; 
  
function endQuiz() {

    countdownEl.style.visibility = "hidden"
    
    buttonOptions.innerHTML = "";


    intialsbox.style.visibility = "visible";
    scoresEl.style.visibility = "visible";

    questionEl.innerHTML = ( " Your score is " +  (parseInt(userScore) + parseInt (countdown)));

    // function userInput () {
    //     intialsbox.value = textContent
    //     scoresEl.innerHTML = initialsbox;
    //   }



    var submit = document.createElement("button");
    submit.innerHTML = ("submit");
    buttonOptions.appendChild(submit)

    // intialsbox.value;
    // scoresEl.innerHTML = initialsbox + (questionEl.innerHTML);

    var inputData = intialsbox.value.trim();
    if (inputData === "") {
      return;
    }


    scoresEl.innerHTML = inputData + (questionEl.innerHTML);

    scoresEl.innerHTML.appendChild(scoresEl)

    submit.addEventListener("click", function () {

      // var inputData = intialsbox.value;
      scoresEl.innerHTML.appendChild(scoresEl)

        // intialsbox.value;
        // scoresEl.innerHTML = inputData + (questionEl.innerHTML);


        buttonOptions.innerHTML = "";

        stor ();




    });


   
  };

// local storage


function storeHighscores() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("high scores", JSON.stringify(scoresEl.innerHTML));
}

function init() {
  // Stored from localStorage
  // Parsing the JSON string to an object
  var storedHighscores = JSON.parse(localStorage.getItem(scoresEl.innerHTML));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedHighscores !== null) {
    scoresEl.innerHTML = storedHighscores;
  }



};
