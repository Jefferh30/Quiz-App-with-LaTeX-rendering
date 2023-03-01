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
    showQuetions(0); //calling showQestions function
    queCounter(1); //passing 1 parameter to queCounter
}

function noop(){};

function myFunction2() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    MathJax.typeset();
    myFunction2 = noop;}
}

let que_count = 0;
let que_numb = 1;
let userScore = 0;
let widthValue = 0;

const restart_quiz = resultBox.querySelector(".buttons .restart");
const quit_quiz = resultBox.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quizBox.classList.remove("inactiveQuiz"); //show quiz box
    resultBox.classList.remove("activeResult"); //hide result box
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    questionsLine.style.width = "0%";
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    next_btn.classList.remove("show"); //hide the next button
}

const next_btn = document.querySelector(".quiz_footer .next_btn");
const bottom_ques_counter = document.querySelector(".quiz_footer .question_counter");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){ //if question count is less than total question length
        que_count++; //increment the que_count value
        que_numb++; //increment the que_numb value
        showQuetions(que_count); //calling showQestions function
        queCounter(que_numb); //passing que_numb value to queCounter
        next_btn.classList.remove("show"); //hide the next button
    }else{
        showResult(); //calling showResult function
    }
}

// getting questions and options from array
function showQuetions(index){
    const current_question = document.querySelector(".current_question");

    //creating a new span and div tag for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    current_question.innerHTML = que_tag; //adding new span tag inside que_tag
    optionList.innerHTML = option_tag; //adding new div tag inside option_tag
    
    const option = optionList.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
        MathJax.typeset();
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    startTimerLine(); //calling startTimerLine function
    let userAns = answer.textContent.slice(0, 2);; //getting user selected option
    console.log(userAns);
    let correcAns = questions[que_count].answer; //getting correct answer from array
    const allOptions = optionList.children.length; //getting all option items
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //adding green color to correct selected option
        answer.insertAdjacentHTML("beforeend", `<span class="checkCorrect">✓</span>`); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //adding red color to correct selected option
        answer.insertAdjacentHTML("beforeend", `<span class="checkIncorrect">X</span>`); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(optionList.children[i].textContent.slice(0, 2) == correcAns){ //if there is an option which is matched to an array answer 
                optionList.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                optionList.children[i].insertAdjacentHTML("beforeend", `<span class="checkCorrect">✓</span>`); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        optionList.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    quizBox.classList.add("inactiveQuiz"); //hide quiz box
    resultBox.classList.add("activeResult"); //show result box
    const scoreText = resultBox.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>e parabéns! 🎉, você conseguiu <p>'+ userScore +'</p> corretas de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>e muito bem 😎, você conseguiu <p>'+ userScore +'</p> corretas de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>e que ruim 😐, você só conseguiu <p>'+ userScore +'</p> corretas de <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}



function startTimerLine(){
        widthValue += 100/(questions.length); //upgrading time value with 1
        questionsLine.style.width = widthValue + "%"; //increasing width of questions_line with px by time value
        if(widthValue > 100){ //if time value is greater than 549
            widthValue = 100; //clear counterLine
        }
}

function queCounter(index){
    //creating a new span tag and passing the question number and total question
    let totalQueCounTag = '<span>Pergunta<p>&nbsp;'+ index +'</p> de <p>'+ questions.length +'</p></span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}


