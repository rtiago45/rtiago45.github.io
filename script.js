
const questions = [
    {
        question: "Qual foi a data que saímos pela primeira vez ?",
        answers: [
            { text: "21.07.2022", correct: false},
            { text: "20.07.2022", correct: true},
            { text: "23.07.2022", correct: false},
            { text: "26.07.2022", correct: false},
        ]
    },
    {
        question: "Qual foi o destino da nossa primeira viagem juntos?",
        answers: [
            { text: "Praia Grande", correct: false},
            { text: "Praia Ilha Bela", correct: false},
            { text: "Campos do Jordão", correct: false},
            { text: "Sorocaba", correct: true},
        ]
    },
    {
        question: "Há quanto tempo estamos juntos?",
        answers: [
            { text: "10 meses", correct: false},
            { text: "8 meses", correct: false},
            { text: "9 meses", correct: true},
            { text: "11 meses", correct: false},
        ]
    },
    {
        question: "Onde foi o local que eu disse “Eu te amo” pela primeira vez?",
        answers: [
            { text: "Seu quarto", correct: true},
            { text: "No whatsApp", correct: false},
            { text: "Na cozinha", correct: false},
            { text: "Em uma viagem juntos", correct: false},
        ]
    },
    {
        question: "Qual foi a situação mais constrangedora que já vivemos juntos?",
        answers: [
            { text: "Você arrastando o pé no meu condominio", correct: false},
            { text: "Pegando o trem sentido errado", correct: false},
            { text: "Uber chamando pra tomar café", correct: true},
            { text: "Você peidando do meu lado", correct: false},
        ]
    },
    {
        question: "Onde foi o nosso primeiro beijo?",
        answers: [
            { text: "Si senior", correct: false},
            { text: "Cinema", correct: false},
            { text: "No Mc Donalds", correct: false},
            { text: "No seu quarto", correct: true},
        ]
    },
    {
        question: "Qual foi a primeira mensagem que te mandei no zap ?",
        answers: [
            { text: "Oi gostosa", correct: false},
            { text: "Salva como predente, beleza ?", correct: true},
            { text: "Pode salvar como pretendente ?", correct: false},
            { text: "O zap eu já tenho, vai conhecer minha cama quando ?", correct: false},
        ]
    },
    {
        question: "Qual era minha primeira ideia para o pedido de namoro?",
        answers: [
            { text: "Madero", correct: false},
            { text: "Outback", correct: true},
            { text: "Si Senior", correct: true},
            { text: "Milk Shake", correct: false},
        ]
    },
    {
        question: "Onde foi o local que se conhecemos ? ",
        answers: [
            { text: "Instagram k", correct: true},
            { text: "Barueri k", correct: true},
            { text: "Academia", correct: false},
            { text: "Eu já te conhecia", correct: false},
        ]
    },
    {
        question: "Qual nosso lugar preferido?",
        answers: [
            { text: "Hannover Fondue", correct: false},
            { text: "Outback", correct: false},
            { text: "Chalezinho", correct: false},
            { text: "MC Donalds", correct: true},
        ]
    }
    
];

const questionElement = document.getElementById("question"); 
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuis(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion() {
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);

        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer)
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBnt = e.target;
    const isCorrect = selectedBnt.dataset.correct === "true";
    if(isCorrect) {
        selectedBnt.classList.add("correct")
        score++;
    } else {
        selectedBnt.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "treu") {
            button.classList.add("correct")
        }
        button.disabled = true
    })

    nextButton.style.display = "block"
    
}

function showScore() {
    resetState()
    questionElement.innerHTML = `Seus pontos ${score}/${questions.length}!`;
    questionElement.innerHTML = 'Parabéns, você não fez mais que sua obrigação em acertar! <br><br><br> Como recompensa, assista a esse vídeo clicando: ';
    nextButton.innerHTML = ' <a href="">aqui</a>';
    nextButton.style.display = "block";
    nextButton.style.width = "200px"
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuis();
    }
})

startQuis()