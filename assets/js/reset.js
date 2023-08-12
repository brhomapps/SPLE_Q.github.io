var questionEl = document.querySelector("#question");
var choiceAEl = document.querySelector("#A");
var choiceBEl = document.querySelector("#B");
var choiceCEl = document.querySelector("#C");
var choiceDEl = document.querySelector("#D");
var responseEl = document.querySelector("#response");
var startBtnEl = document.querySelector(".start-button");
var saveBtnEl = document.querySelector(".saveButton");
var tryAgainBtnEl = document.querySelector(".tryAgainButton");
var tryAgainBtn2El = document.querySelector(".tryAgainButton2");
var nextBtnEl = document.querySelector(".nextButton");
var introCardEl = document.querySelector("#introCard");
var cardEl = document.querySelector("#card");
var cardEndQuizEl = document.querySelector("#cardEndQuiz");
var cardHighScoresEl = document.querySelector("#cardHighScores");
var greetingEl = document.querySelector("#greeting");
var instructEl = document.querySelector("#instruct");
var timerEl = document.querySelector(".timer-count");
var currentScoreEl = document.querySelector("#currentScore");
var highScoresListEl = document.querySelector(".highScoresList");
var clearHighScoresEl = document.querySelector(".clearHighScores");
var viewAllHSEl = document.querySelector(".viewAllHighScores");
var myFormEl = document.querySelector("#myForm");
var userInitialsEl = document.querySelector("#userInitials");
var userInputEl = document.querySelector("#userInput");
var pickedEl = document.querySelector("#picked");
var theScore = 0;
var userChoice = "";
var secondsLeft = 60;
var minutesLeft = 60;



// ---- ARRAY "cards" ---- shows all the questions and answers. Please see README for source of the questions
var cards = [
    {questionEl : "Pt was prescribed hypnotic anxiolytic and is to be taken before bedtime, when she wakes up she is still drowsy, what is the most likely drug?",
    choiceAEl : "A) Ramelteon",
    choiceBEl : "B) midazolam",
    choiceCEl : "C) Diazepam",
    choiceDEl : "D) Zolpidem",   
    answer : "D", 
},
    {questionEl : "Which of the following of the hypertensive therapies is preferred to be used during the acute phase of ischemic stroke if elevated blood pressure should be treated?",
        choiceAEl : "A) Lisinopril",
        choiceBEl : "B) nicardipine",
        choiceCEl : "C) hydrochlorothiazide",
        choiceDEl : "D) metoprolol",       
        answer : "B", 
    },{questionEl : "A 23-year-old drug addict man was brought to the Emergency Room with severe agitation and excitement. He was administered intravenous diazepam, with no improvement in his condition. Which of the following is the mostly likely drug the patient was addicted on?",
        choiceAEl : "A) Opioids",
        choiceBEl : "B) Cocaine",
        choiceCEl : "C) Pregabalin",
        choiceDEl : "D) tetrahydrocannabinol",       
        answer : "D", 
    },{questionEl : "Which one of the follow best to be avoid before surgery?",
        choiceAEl : "A) Isoflourane",
        choiceBEl : "B) Diazepam",
        choiceCEl : "C) Fentanyl",
        choiceDEl : "D) Desflurane",       
        answer : "B", 
    },{questionEl : "An addicted patient with MRSA and the patient being treated with home injections at home so we can discharge him?",
        choiceAEl : "A) Don't discharge him because he's addicted and must treated in the hospital",
        choiceBEl : "B) Give the pt oral vancomycin q24h for 2 weeks",
        choiceCEl : "C) Give the pt vancomycin q24h for 2 weeks",
        choiceDEl : "D) Give the pt vancomycin q12h for 2 weeks",       
        answer : "A", 
    },{questionEl : "Female patient with asthma came to clinic , she's well controlled on Saba her only compliant is chest tightness and Wheezing I think . What can be added to resolve the issue?",
        choiceAEl : "A) Add salbutamol to albuterol",
        choiceBEl : "B) No change in therapy",
        choiceCEl : "C) Omalizumab",
        choiceDEl : "D) Budesonide ( ICS )",       
        answer : "D", 
    },{questionEl : "Case 87 old man with HTN on amlodipine but not control what can add?",
        choiceAEl : "A) Propranolol",
        choiceBEl : "B) Irbesartan",
        choiceCEl : "C) Furosemide",
        choiceDEl : "D) Atenolol",       
        answer : "B", 
    },{questionEl : "Old women depression history of arrhythmia and CV problem?",
        choiceAEl : "A) Amitriptyline",
        choiceBEl : "B) Imipramine",
        choiceCEl : "C) Sertraline",
        choiceDEl : "D) Fluoxetine",       
        answer : "C", 
    },{questionEl : "- How long to stop mycophenolate before pregnancy?",
        choiceAEl : "A) 6 weeks",
        choiceBEl : "B) 4 weeks",
        choiceCEl : "C) 2 weeks",
        choiceDEl : "D) 1 weeks",       
        answer : "A", 
    },{questionEl : "69- Which of the following medications to be used under caution is in patients with ischemic heart disease?",
        choiceAEl : "A) lisinopril",
        choiceBEl : "B) metoprolol",
        choiceCEl : "C) simvastatin",
        choiceDEl : "D) celecoxib",       
        answer : "D", 
    },
];
// ---- END OF THE ARRAY "cards"

// ACCEPTANCE CRITERIA: WHEN I click the start button THEN a timer starts and I am presented with a question
startQuiz();
function startQuiz (){
    //Click event listener: disable the start button, hide introCard, show the questions card, timer on, show next question
    startBtnEl.addEventListener("click", function(event) {
        event.preventDefault();
        startBtnEl.disabled = true;
        startBtnEl.style.display="none";
        introCardEl.style.display="none";
        cardEl.style.display="block";

        //function for timer to automatically start when event listener above is clicked
        setTime();
        function setTime(){
            var timerInterval = setInterval(function(){
            minutesLeft--;
            timerEl.textContent = "Time Remaining: " + minutesLeft;
            currentScoreEl.textContent = "Your current score is " + theScore;
            
            if(minutesLeft <= 0) {
                clearInterval(timerInterval);
                endQuiz();
            }
            }
        , 1000);

        nextQuestion();
        };
    });
};

// FUNCTION nextQuestion satisfies these 
// ACCEPTANCE CRITERIA: WHEN I answer a question THEN I am presented with another question 
// && WHEN all questions are answered or the timer reaches 0 THEN the game is over
// && WHEN I answer a question incorrectly THEN time is subtracted from the clock
function nextQuestion(){
    if(minutesLeft <= 0 || cards.length === 0) {
        endQuiz();
    } else {
        //current question from array is i. I am using cards.length-1 for i since my conditionals are looking for (cards.length === 0) in order to endQuiz
        var i = (cards.length - 1);
        console.log(i);
        var correctAnswer = cards[i].answer;

        //call functions to replace the innerText in html with the array elements in js dependent on i
        showQuestion(cards[i]);
        showChoiceA(cards[i]);
        showChoiceB(cards[i]);
        showChoiceC(cards[i]);
        showChoiceD(cards[i]);
        function showQuestion (question){questionEl.innerText = question.questionEl;}
        function showChoiceA (A){choiceAEl.innerText = A.choiceAEl;}
        function showChoiceB (B){choiceBEl.innerText = B.choiceBEl;}
        function showChoiceC (C){choiceCEl.innerText = C.choiceCEl;}
        function showChoiceD (D){choiceDEl.innerText = D.choiceDEl;}

        //provide a value for variable userChoice after event listener
        choiceAEl.onclick = function (){
            userChoice = "A";
            checkAnswer();
        };
        choiceBEl.onclick = function (){
            userChoice = "B";
            checkAnswer();
        };
        choiceCEl.onclick = function (){
            userChoice = "C";
            checkAnswer();
        };
        choiceDEl.onclick = function (){
            userChoice = "D";
            checkAnswer();
        };

        //check if the userChoice matches the current correctAnswer dependent on i
        //show if they are correct or incorrect, show next button, disable choices when userChoice is defined
        function checkAnswer(){   
            //if correct, add a point to the score  
            if (userChoice === correctAnswer) {
                theScore++;
                responseEl.style.display="block";
                responseEl.textContent = "Correct!"
                responseEl.style.color = "rgb(24, 151, 56)";
                nextBtnEl.style.display="block";
                disableChoices();
            //if incorrect, remove time from timer 
            } else{
                minutesLeft = minutesLeft - 0;
                responseEl.style.display="block";
                responseEl.textContent = "Wrong! Correct answer is " + correctAnswer + "!";
                responseEl.style.color = "rgb(185, 88, 88)";
                nextBtnEl.style.display="block";
                disableChoices();
            };    
            //function to disable choices when userChoice is defined; prevents answer changing
            function disableChoices(){
                choiceAEl.disabled = true;
                choiceBEl.disabled = true;
                choiceCEl.disabled = true;
                choiceDEl.disabled = true;
            }
        };

        //Event listener to show the next question
        nextBtnEl.addEventListener("click", function(event) {
            event.preventDefault();
            responseEl.style.display="none";
            nextBtnEl.style.display="none";

            //if there is no time or the array is 0 in length, end quiz
            if(minutesLeft <= 0 || cards.length === 0) {
                endQuiz();
            //if there still is time and questions, splice (remove) the i number used and create a new array
            }else{
                cards.splice(i, 1);
                console.log(cards);
                //activate the choices buttons again
                choiceAEl.disabled = false;
                choiceBEl.disabled = false;
                choiceCEl.disabled = false;
                choiceDEl.disabled = false;
                nextQuestion();
            };
        });
    };
};

//ACCEPTANCE CRITERIA: WHEN the game is over THEN I can save my initials and my score
function endQuiz (){
    //hide the question card, remove the timer, hide current score, show endQuiz card, provide instructions 
    timerEl.remove();
    cardEl.style.display="none";    
    currentScoreEl.style.display="none";  
    cardEndQuizEl.style.display="flex";
    timerEl.style.display = "none";
    greetingEl.textContent = "THE END. Your score is " + theScore + " points!";
    instructEl.textContent= "Please save your initials. Then more options will appear.";
};

//Event listener button: store player data in local storage
saveBtnEl.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    storePlayerData();

    //describes how to set the date in local storage
    function storePlayerData (){

        //For the initials, trim white space and change to uppercase
        var inputInitials = userInputEl.value.trim();
        var theInitials = inputInitials.toUpperCase();
        var playerInfo = {
            score: theScore.valueOf(),
            initials: theInitials,
        };
        var letters = /^[A-Za-z]+$/;

        //define what initials are acceptable; needs to be only 2 letters
        if (theInitials.length === 2 && theInitials.match(letters)){
            
            //grab the data for the current date
            var date = new Date();

            //save the key as a unique initial by adding the date and score. Reduces any duplicate initials overriding data
            localStorage.setItem(("Player " + theInitials + " earned a score of " + theScore + " on " + date), JSON.stringify(playerInfo));
            alert("Your score has been saved! \n Click on 'View All Scores button' to see past scores.")
            
            //After player enters their score, they cannot resubmit - prevents multiple sets in local storage
            saveBtnEl.disabled = true;
            viewAllHSEl.style.display="flex";
            tryAgainBtnEl.style.display="block";
            saveBtnEl.style.display="none";
        }else{
            //Error alert if initials entered is !==2 characters or !=== a letter
            alert("Initials need to be letters and has to be 2 letters.");
        };
    };
});

//Event listener button: view stored keys in local storage
viewAllHSEl.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    cardHighScoresEl.style.display="flex";
    cardEndQuizEl.style.display="none";

    //A loop to get local storage keys: get key, create an li element in html, provide context, and append to list
    getPlayerData();
    function getPlayerData (){
        //Get all players data
        for (var i = 0; i <localStorage.length; i++){
            var key = localStorage.key(i);            
            var list = document.createElement("li");
            var textForList = document.createTextNode(key);
            list.appendChild(textForList);
            highScoresListEl.appendChild(list);
        };
    };
});

//Event listener button: clears the local storage data 
clearHighScoresEl.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    localStorage.clear();
    highScoresListEl.style.display="none";
    clearHighScoresEl.style.display="none";
    cardEndQuizEl.style.display="none";
});

//Event listener button: reloads the page 
tryAgainBtnEl.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    cardEndQuizEl.style.display="none";
    location.reload();
});

//Event listener button: reloads the page 
tryAgainBtn2El.addEventListener("click", function (event){
    event.preventDefault();
    timerEl.remove();
    cardEndQuizEl.style.display="none";
    location.reload();
});