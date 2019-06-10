var gameQuestions =[
    {
        question:"which came first?",
        answers: {
            a: "xbox",
            b: "Nes",
            c: "Nitendo 64",
            d: "GameBoy Color"
        },
        correctAnswer:"b"
    },

    {
        question:"which of these dose not have an X button",
        answers: {
            a: "Playstation controller",
            b: "GameCube controller",
            c: "Nintendo 64 controller",
            d: "Nintendo Switch pro controller"
        },
        correctAnswer:"c"
    }
];
console.log(gameQuestions[1].question)

function gameStart(){
    displayQuestion()
    displayBubbles()
}

gameStart()

//write a function that displays the question on the dom
function displayQuestion(){
 var question1 = gameQuestions[0].question;
  $("#question").text(question1);
   
}

//write a function that displays 4 input bubbles
function displayBubbles(){

    for (i = 0; i < 4; i++) {
        console.log(output[1])
        var button = $('<button class="btn btn-primary bt-lg"> </button>')
        button.appendTo(".quizContainer")

        
    }
}

function displaAnswers(){
    var answer1 = [];
    answer1.push(gameQuestions[0].answers)
    for(i = 0; i < answer1.length; i++){
        
    }
}


//write a function that checks if the user input is correct or inccorect 
    // then changes the question.


