//main document variables

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

var countdown = 100;
var countdownInterval;



questionEl.innerHTML = "This quiz will ask Coding questions as soon as you press the button. Once you do a timer and question will appear. If you get the answer right you will be presented the next question but get it wrong and time will be deducted from your clock. The game is over when you finish the quiz or timer gets to 0. If you finish in time you could be on the High Score board!";


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

  answer: "The <body> section",},


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
    countdown-=30;

};

console.log (timeDeduction)

function timeBonus(){
    countdown+=10;

};

console.log (timeBonus)




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


    //   correctAnswer = quizQuestions[questionNumber].answer;
      
    //   console.log(correctAnswer)
  
      
    }
    //  Create an IF ELSE statement if USER chooses correct answer 5 seconds added if choose another then minus 5 seconds
  
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

    // buttonOptions.value = text


    // var userChoice = $("btnOptions").val(); 
    
    
    // console.log(element.value);
    

    console.log (userChoice);
    
    if (element.matches ("button") === true && userChoice === correctAnswer){
        ++userScore;
        console.log (userScore);
        timeBonus();


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
// <!-- <form action="action_page.php">
// <div class="highScoresContainer">
//   <h1>Highscores</h1>
//   <p>Please fill in intials</p>
//   <hr>

//   <input type="text" placeholder="Enter Initials" name="email" id="email" required>
//   <button type="submit" class="registerbtn">submit</button>
// </div>


// </form> -->