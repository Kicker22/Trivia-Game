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

function gameStart(){
    displayQuestion()
}

gameStart()

//write a function that displays the question on the dom
function displayQuestion(){
    $("#question").text(gameQuestions[0].questions)
    console.log(gameQuestions[0].questions)
    displayAnswers()
   
}

//write a function that displays answer options on the dom
function displayAnswers(){
    const output = [];
    for( let i = 0; i < gameQuestions[0].answers; i++){
        output.push(gameQuestions)
    }
    console.log(output[0])
}

//write a function that checks if the user input is correct or inccorect 
    // then changes the question.


