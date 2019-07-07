const quiz = [
{
    question: ["Which video game console came first?"],
    answer: ['Xbox 360', 'Nintendo 64', 'Playstation 1', 'NES'],
    corectAnswer: 'NES'
},
{
    question:['On the Tv show Supernatural, what is the name of their best friend who is also an agnel? '],
    answer:['Azazel','Castiel','Gabriel','Raphael'],
    corectAnswer:'Castiel'

},
{
    question:['In the popular RPG Dungeons & Dragons,  What dice roll is an automatic success? '],
    answer:['Natural 20', 'Natural 1'],
    corectAnswer: 'Natural 20'

},
{
    question:[" Drizzt Do'Urden is a popular character created by the author R.A Salvatore. what magical race is he? "],
    answer:['Drow', 'Elf', 'Dwarf', 'Barbarian' ],
    corectAnswer:'Drow'
}


];
// This var will be used to iterate through my array of objects
// its updated when the user guesses the right answer.
var questionIndex = 0;


// write a function that displays buttons with reflected values
function buttons() {
    var buttonValues = quiz[questionIndex].answer;
    console.log(buttonValues);
    for (let i = 0; i < buttonValues.length; i++) {
        var button = $('<button>')
        button.addClass('btn btn-lg btn-primary mb-2 choices')
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
}


// this function clears the dom so questions dont overlap
function clearElement(){
    $('.buttons').empty();
    $('.questions').empty();
}

// this on click fucntion checks if the user guess equals is correct or incorect
$('body').on('click', '.btn', function () {
    var answer = quiz[questionIndex].corectAnswer;
    var userChoice = $(this).val()
    console.log(userChoice)
    if (userChoice === answer) {
        alert('you win!')
        questionIndex++
    }else{
        alert('that is incorect')
        questionIndex++
    }
    clearElement()
    displayQuestion()
    buttons()

})

displayQuestion()
buttons()



