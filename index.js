//selecting all required elements
const quizBox = document.querySelector(".quiz_box");
const resultBox = document.querySelector(".result_box");
const optionList = document.querySelector(".option_list");
const questionsLine = document.querySelector(".quiz_header .questions_line");
let widthQuizBox = (quizBox.offsetWidth)-1;

window.onload = function() {myFunction1()};
window.onscroll = function() {myFunction2()};

function myFunction1(){
    quizBox.classList.add("activeQuiz"); //show quiz box
    showQuestions(0); //calling showQuestions function
    questionCounter(1); //passing 1 parameter to questionCounter
}

function noop(){};

function myFunction2() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    MathJax.typeset();
    myFunction2 = noop;}
}

let questionCount = 0;
let questionNumber = 1;
let userScore = 0;
let widthValue = 0;

const restartQuiz = resultBox.querySelector(".buttons .restart");

// Event handler for Try again button
restartQuiz.onclick = () => {
    quizBox.classList.remove("inactiveQuiz"); //show quiz box
    resultBox.classList.remove("activeResult"); //hide result box
    questionCount = 0;
    questionNumber = 1;
    userScore = 0;
    widthValue = 0;
    questionsLine.style.width = "0%";
    showQuestions(questionCount); //calling showQuestions function
    questionCounter(questionNumber); //passing questionNumber value to questionCounter
    nextBtn.classList.remove("show"); //hide the next button
}

const nextBtn = document.querySelector(".quiz_footer .next_btn");
const bottomQuesCounter = document.querySelector(".quiz_footer .question_counter");

// Event handler for Next Button
nextBtn.onclick = () => {
    if(questionCount < questions.length - 1){ 
        questionCount++; 
        questionNumber++; 
        showQuestions(questionCount); //getting next question
        questionCounter(questionNumber); //passing questionNumber value to questionCounter
        nextBtn.classList.remove("show"); //hide the next button
    }else{
        showResult(); //calling showResult function
    }
}

// Get questions and options from array
function showQuestions(index){
    const currentQuestion = document.querySelector(".current_question");

    //Spans and divs for question and options and passing the value using array index
    let questionContent = `<span>${questions[index].numb}. ${questions[index].question}</span>`;
    let optionsContent = `<div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]} </span></div>
    <div class="option"><span>${questions[index].options[2]} </span></div>
    <div class="option"><span>${questions[index].options[3]} </span></div>`;
    currentQuestion.innerHTML = questionContent; //rendering question
    optionList.innerHTML = optionsContent; //rendering options
    
    const option = optionList.querySelectorAll(".option");

    // set onclick attribute to all available options
    for (i=0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
    
    //Render MathJax equations dynamically
    MathJax.typeset();
}

//When an option clicked
function optionSelected(answer) {
    startQuestionLine(); //calling startQuestionLine function
    let userAns = answer.textContent[0]; //getting letter of selected option
    console.log(userAns);
    let correctAns = questions[questionCount].answer; //getting letter of correct answer from array
    const allOptions = optionList.children.length; //getting all options
    
    if(userAns == correctAns){ //if selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding style to correct selected option
        answer.insertAdjacentHTML("beforeend", `<span class="checkCorrect">✓</span>`); //adding tick icon to correct selected option
        
    }else{
        answer.classList.add("incorrect"); //adding style to incorrect selected option
        answer.insertAdjacentHTML("beforeend", `<span class="checkIncorrect">X</span>`); //adding cross icon to incorrect selected option
        
        //find correct answer, set style and add tick icon to it
        for (i=0; i < allOptions; i++) {
            if(optionList.children[i].textContent[0] == correctAns){ 
                optionList.children[i].setAttribute("class", "option correct"); 
                optionList.children[i].insertAdjacentHTML("beforeend", `<span class="checkCorrect">✓</span>`); 
            }
        }
    }

    //disable all options after one option selected
    for(i=0; i < allOptions; i++){
        optionList.children[i].classList.add("disabled"); 
    }

    nextBtn.classList.add("show"); //show next button
}

function showResult(){
    quizBox.classList.add("inactiveQuiz"); //hide quiz box
    resultBox.classList.add("activeResult"); //show result box
    const scoreText = resultBox.querySelector(".score_text");

    //Show user score number, total question number, and message based on user score

    if (userScore > 3){
        let scoreTag = `<span>and congratulations! 🎉, you got <p>${userScore}</p> correct out of <p>${questions.length}</p></span>`;
        scoreText.innerHTML = scoreTag; 
    }
    else if(userScore > 1){
        let scoreTag = `<span>and well done 😎, you got <p>${userScore}</p> correct out of <p>${questions.length}</p></span>`;
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = `<span>and sorry 😐, you only got <p>${userScore}</p> correct out of <p>${questions.length}</p></span>`;
        scoreText.innerHTML = scoreTag;
    }
}


//Shows a progress line
function startQuestionLine(){
        widthValue += 100/(questions.length); //width of line for each question
        questionsLine.style.width = widthValue + "%"; //increase width of questionsLine by % of progress
        if(widthValue > 100){ //if % more than 100
            widthValue = 100; //clear questionLine
        }
}

//shows question counter on footer
function questionCounter(index){
    let questionsCounterTag = `<span>Question<p>&nbsp; ${index} </p> of <p>${questions.length} </p></span>`;
    bottomQuesCounter.innerHTML = questionsCounterTag; 
}


