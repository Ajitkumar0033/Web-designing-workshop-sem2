const quizData = [
{
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "High Text Machine Language",
    c: "Hyper Tool Markup Language",
    d: "Home Text Markup Language",
    correct: "a"
},
{
    question: "Which language is used for styling web pages?",
    a: "HTML",
    b: "Python",
    c: "CSS",
    d: "Java",
    correct: "c"
},
{
    question: "Which language is used for web page functionality?",
    a: "JavaScript",
    b: "C++",
    c: "Java",
    d: "Python",
    correct: "a"
}
];

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    const current = quizData[currentQuiz];

    document.getElementById("question").innerText = current.question;
    document.getElementById("a_text").innerText = current.a;
    document.getElementById("b_text").innerText = current.b;
    document.getElementById("c_text").innerText = current.c;
    document.getElementById("d_text").innerText = current.d;

    const answers = document.getElementsByName("answer");

    answers.forEach(answer => {
        answer.checked = false;
    });
}

function getSelected(){
    const answers = document.getElementsByName("answer");

    for(let answer of answers){
        if(answer.checked){
            return answer.value;
        }
    }
    return null;
}

function submitQuiz(){
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        } else {
            document.querySelector(".quiz-box").innerHTML =
            `<h2>Your Score: ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Restart Quiz</button>`;
        }
    }
}