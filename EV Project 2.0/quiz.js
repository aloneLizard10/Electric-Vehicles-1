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
    question: "What is the most common type of battery used in EVs?",
    options: ["a) Lead-acid","b) Nickel-cadmium","c) Lithium-ion","d) Alkaline"],
    answer: "c) Lithium-ion"
    },
    {
    question: "Which of the following is not a type of EV?",
    options: ["a) Hybrid Electric Vehicle(HEV)","b) Plug-in Hybrid Electric Vehicle (PHEV)","c) Fuel Cell Electric Vehicle (FCEV)","d) Combustion Electric Vehicle (CEV)"],
    answer: "d) Combustion Electric Vehicle (CEV)"
    },
    {
    question: "What does the acronym EV stand for?",
    options: ["a) Efficient Vehicle","b) Electric Vehicle","c) Eco-friendly Vehicle","d) Energy-efficient Vehicle"],
    answer: "b) Electric Vehicle"
    },
    {
        question: "What is the range of the Tesla Model S Plaid+?",
        options: ["a) 250 miles","b) 350 miles","c) 500 miles","d) 550 miles"],
        answer: "c) 500 miles"
    }
    ,
    {
        question: "Which of the following is not an advantage of electric vehicles over traditional gasoline-powered vehicles?",
        options: ["a) Lower emissions","b) Quieter operation","c) Faster acceleration","d) Lower maintenance costs"],
        answer: "c) Faster acceleration"
    }
    ,
    {
        question: "What is regenerative braking?",
        options: ["a) A braking system that uses gasoline to slow down the vehicle","b) A braking system that converts kinetic energy into electrical energy","c) A braking system that uses hydraulic fluid to slow down the vehicle","d) A braking system that uses air resistance to slow down the vehicle"],
        answer: "b) A braking system that converts kinetic energy into electrical energy"
    }
    ,
    {
        question: "What is the most important factor affecting an EV's range?",
        options: ["a) The capacity of the battery","b) The efficiency of the electric motor","c) The weight of the vehicle","d) The outside temperature"],
        answer: "a) The capacity of the battery"
    }
    ,
    {
        question: "What is the name of the electric car manufacturer founded by Elon Musk?",
        options: ["a) Faraday Future","b) Fisker Automotive","c) Lucid Motors","d) Tesla, Inc."],
        answer: "a) Faraday Future"
    }
    ,
    {
        question: "What is the average cost of a Level 2 home EV charging station?",
        options: ["a) $100","b) $500","c) $1,000","d) $2,500"],
        answer: "c) $1,000"
    }
    ,
    {
        question: "Which automaker introduced the first mass-produced electric car in 2010?",
        options: ["a) Nissan","b) Chevrolet","c) Tesla","d) BMW"],
        answer: "a) Nissan"
    }


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

    
