// This is an array of objects
const quiz = [
{
    question: ["Which video game console came first?"],
    answer: ['Xbox 360', 'Nintendo 64', 'Playstation 1', 'NES'],
    correctAnswer: 'NES'
},
{
    question:['On the Tv show Supernatural, what is the name of their best friend who is also an agnel? '],
    answer:['Azazel','Castiel','Gabriel','Raphael'],
    correctAnswer:'Castiel'

},
{
    question:['In the popular RPG Dungeons & Dragons,  What d20 roll is an automatic success? '],
    answer:['Natural: 20', 'Natural: 1'],
    correctAnswer: 'Natural: 20'

},
{
    question:[" Drizzt Do'Urden is a popular character created by the author R.A Salvatore. what magical race is he? "],
    answer:['Drow', 'Elf', 'Dwarf', 'Barbarian' ],
    correctAnswer:'Drow'
},
{
    question:['In which Super Mario Bros, can the player throw turnips?'],
    answer:['Super Mario Bros', 'Super Mario Bros 2', 'Super Mario 64', 'Mario kart'],
    correctAnswer:'Super Mario Bros 2'
},
{
    question:["Which is the first level of Halo: Combat Evolved?"],
    answer:["Pillar of Autumn","Prologue","Sierra 117","343 Guilty Spark"],
    correctAnswer:"Pillar of Autumn"
},
{
    question:["What is the name of the fictional reserch project on the Tv show Lost?"],
    answer:["DARPA", "Dharma Initiative", "Umbrela Corp","Shadow Moses"],
    correctAnswer:"Shadow Moses"

},
{
    question:["Drizzt do urden, carries a figurine of which animal?"],
    answer:["Owl","Wolverine","Wolf","Panther"],
    correctAnswer:"Panther"

},
{
    question:["In the Diablo series, which game has a mad cow level?"],
    answer:["Diablo","Diablo 2","Diablo 3","None of the above"],
    correctAnswer:"Diablo 2"
}
];



// This var will be used to iterate through my array of objects
// its updated when the user guesses the right answer.
let questionIndex = 0;

let userCorrect = 0;

let userWrong = 0;

var questionNumber = 0

function initGame(){
displayQuestion()
buttons()  
}



initGame()

// write a function that displays buttons with reflected values
function buttons() {
    var buttonValues = quiz[questionIndex].answer;
    console.log(buttonValues);
    for (let i = 0; i < buttonValues.length; i++) {
        var button = $('<button>')
        button.addClass(' btn btn-lg btn-light mb-2 choices')
        button.val(buttonValues[i])
        button.text(buttonValues[i])
        $('.buttons').append(button)
    }
}

// this loop displays the question 
function displayQuestion() {
    var question = quiz[questionIndex].question
    for (let i = 0; i < question.length; i++) {
        var questionDiv = $('<div>');
        questionDiv.text(question)
        questionDiv.addClass('display-4')
        $('.questions').append(questionDiv)
    }
    displayQuestionCount()
}


// this function clears the dom so questions dont overlap
function clearElement(){
    $('.buttons').empty();
    $('.questions').empty();
    $('.questionNumber').empty();
}

// this on click fucntion checks if the user guess equals is correct or incorect
$('body').on('click', '.choices', function () {
    var answer = quiz[questionIndex].correctAnswer;
    var userChoice = $(this).val()
    console.log(userChoice)
    if (userChoice === answer) {
        userCorrect++
        questionIndex++
    }else if(userChoice != answer){
        
        userWrong++
        questionIndex++
    }

    stats();
    clearElement();
    displayQuestion();
    buttons();

});
   



// This function displays the current question number 
function displayQuestionCount(){
    questionNumber++
    $('.questionNumber').append(questionNumber + '/6')
};

// this function displays user stats after quiz is 
function stats(){
    if(questionIndex >=6){
        var correctDiv = $('<div>')
        var correct = $('<div>')
        var incorectDiv = $('<div>')
        var incorect = $('<div>')

        correct.append(userCorrect)
        incorect.append(userWrong)

        correctDiv.text('Correct')
        correctDiv.addClass('stats')
        correctDiv.append(correct)
        incorectDiv.text('Incorect')
        incorectDiv.append(incorect)
        incorectDiv.addClass('stats')

        $('.statsTitle').text("How did you do?")
        $('.userStats').append(correctDiv)
        $('.userStats').append(incorectDiv)

    }
}

function restart(){
    $('body').on('click','.restart',function(){
        questionIndex = 0;
        userCorrect = 0;
        userWrong = 0;
        questionNumber = 0;
        clearElement()
        displayQuestion()
        buttons()
        $('.statsTitle').empty()
        $('.userStats').empty()
    })
}


restart()
