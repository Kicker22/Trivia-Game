var gameQuestions =[
    {
        questions:"which came first?",
        answers: {
            a: "xbox",
            b: "Nes",
            c: "Nitendo 64",
            d: "GameBoy Color"
        },
        correctAnswer:"b"
    },

    {
        questions:"which of these dose not have an X button",
        answers: {
            a: "Playstation controller",
            b: "GameCube controller",
            c: "Nintendo 64 controller",
            d: "Nintendo Switch pro controller"
        },
        correctAnswer:"c"
    }
];

function initgame(){
    showQuestions()
}

showQuestions()

function showQuestions(questions,quizContainer){
    var outPut = [];
    var answers;

    for(let i = 0; i <questions.length; i++){
        answers = [];
    }
    
    for(letter in questions[i].answers){
        answers.push(
            '<label>'
                + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                + letter + ': '
				+ questions[i].answers[letter]
			+ '</label>'
        );
    }
    output.push(
            '<div class="question">' + questions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
    );
    
    quizContainer.innerHTML = outPut.join('');

    
}