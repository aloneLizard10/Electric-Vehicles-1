const smileEmoji = String.fromCodePoint(0x1F600);
console.log(smileEmoji); // 😄
let timeLeft = 20;
let timer;

function startTimer() {
    timeLeft = 20;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("time").innerText = `Time Left: ${timeLeft}s`;
      if (timeLeft === 0) {
        clearInterval(timer);
        document.getElementById("options").style.pointerEvents = "none";
        document.getElementById("next").style.display = "block";
      }
    }, 1000);
  }
  


// Define the questions and answers
var questions = [
    
    {
        question: "Which of the following is an advantage of owning an EV?",
        options: ["a) Higher fuel costs","b) Lower maintenance costs","c) Limited driving range","d) Slow charging times"],
        answer: "b) Lower maintenance costs"
    },
    {
        question: "What is the primary source of energy for an EV?",
        options: ["a) Gasoline","b) Diesel","c) Electricity","d) Propane"],
        answer: "c) Electricity"
    },
    {
        question: "What is a commonly used unit to measure the range of an EV?",
        options: ["a) Kilograms","b) Miles per gallon","c) Kilowatt-hours","d) Cubic centimeters"],
        answer: "c) Kilowatt-hours"
    },
    {
        question: "What is the primary environmental benefit of driving an EV?",
        options: ["a) Reduced emissions of greenhouse gases","b) Increased noise pollution","c) More air pollution","d) Increased use of fossil fuels"],
        answer: "a) Reduced emissions of greenhouse gases"
    },
    {
        question: "Which of the following is an example of a plug-in hybrid electric vehicle (PHEV)?",
        options: ["a) Tesla Model S","b) Nissan Leaf","c) Chevrolet Volt","d) BMW i3"],
        answer: "c) Chevrolet Volt"
    },
    {
        question: "Which of the following statements about EV charging is true?",
        options: ["a) Charging an EV is more expensive than fueling a gasoline car","b) EVs can only be charged at specialized charging stations","c) EVs can be charged using a standard household outlet","d) EVs can only be charged during off-peak hours"],
        answer: "c) EVs can be charged using a standard household outlet"
    },
    {
        question: "Which country has the largest number of electric vehicles on the road as of 2023?",
        options: ["a) China","b) United States","c) Norway","d) Germany"],
        answer: "a) China"
    },
    {
        question: "Which of the following factors can affect the range of an EV?",
        options: ["a) Tire pressure","b) Temperature","c) Driving style","d) All of the above"],
        answer: "d) All of the above"
    },
    {
        question: "What is the average cost of an EV in the United States as of 2023?",
        options: ["a) $20,000","b) $30,000","c) $40,000","d) $50,000"],
        answer: "c) $40,000"
    },
    {
        question: "Which of the following is a type of electric vehicle that uses hydrogen fuel cells to generate electricity?",
        options: ["a) Battery electric vehicle (BEV)","b) Plug-in hybrid electric vehicle (PHEV)","c) Hybrid electric vehicle (HEV)","d) Fuel cell electric vehicle (FCEV)"],
        answer: "d) Fuel cell electric vehicle (FCEV)"
    },    
    

    ];
    
    // Define variables to keep track of the game state
    var usedQuestions = [];
    var score = 0;
    
    // Get a random question from the list of available questions
    function getRandomQuestion() {
    var remainingQuestions = questions.filter(function(question) {
    return usedQuestions.indexOf(question) === -1;
    });
    
    if (remainingQuestions.length === 0) {
    return null;
    }
    
    var randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    var question = remainingQuestions[randomIndex];
    usedQuestions.push(question);
    return question;
    }
    
    // Display the question and answer choices
    function displayQuestion(question) {
    var questionElement = document.getElementById("question");
    questionElement.innerHTML = question.question;
    
    var options = document.getElementById("options").querySelectorAll(".option");
    for (var i = 0; i < question.options.length; i++) {
    options[i].innerHTML = question.options[i];
    }
    }
    
    // Check if the selected answer is correct
    function checkAnswer(selectedOption) {
    var answer = selectedOption.innerHTML;
    var question = usedQuestions[usedQuestions.length - 1];
    
    if (answer === question.answer) {
    selectedOption.style.backgroundColor = "#7FFF7F";
    score++;
    } else {
    selectedOption.style.backgroundColor = "#FF7F7F";
    }
    
    var options = document.getElementById("options").querySelectorAll(".option");
    for (var i = 0; i < options.length; i++) {
    options[i].disabled = true;
    if (options[i].innerHTML === question.answer) {
    options[i].style.backgroundColor = "#7FFF7F";
    }
    }
    
    var nextButton = document.getElementById("next");
    nextButton.style.display = "block";
    }
    
    // Move on to the next question or end the game
    function nextQuestion() {
    var question = getRandomQuestion();
    if (question) {
    displayQuestion(question);
    var options = document.getElementById("options").querySelectorAll(".option");
    for (var i = 0; i < options.length; i++) {
    options[i].style.backgroundColor = "#ddd";
    options[i].disabled = false;
    }
    var nextButton = document.getElementById("next");
    nextButton.style.display = "none";
    } else {
    var scoreElement = document.getElementById("score");
    scoreElement.innerHTML = "Your final score is " + score + "/10 " + "   thanks for playing " + smileEmoji ;
    var questionElement = document.getElementById("question");
    questionElement.style.display = "none";
    var optionsElement = document.getElementById("options");
    optionsElement.style.display = "none";
    var nextButton = document.getElementById("next");
    nextButton.style.display = "none";
    }
    }
    // Start the game by displaying the first question
    var question = getRandomQuestion();
    displayQuestion(question);
    startTimer();

    
