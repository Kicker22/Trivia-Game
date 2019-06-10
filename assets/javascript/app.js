const quiz = {
    question : "this is a question",
    answer:['a', 'b' , 'c' , 'd'],
    corectAnswer: 'a' 
}

console.log(quiz.question)

// function that displays questoion 
function displayQuestion(){
    var display = $('<div>' + quiz.question + '</div>')
    $('.game-container').append(display)
}

// function that displays choices as buttons
function displayAnswers(){
    var choices = quiz.answer
    //cycle through the answers array
    for( i = 0; i < choices.length ; i++){
        var answerChoices = choices[i]
        var display = $('<button>' + answerChoices + '</button>')
        $('.game-container').append(display)
        // console.log(answerChoices)
    }
    
}

function setBtnValues(){
    var values = quiz.answer
    for(i = 0; i < values.length; i++){
        var value = values[i];
        $('button').val(value)
        console.log( $('button').val())
    }
}

function onClick(){
    $('button').on('click', function(){
        console.log($('button').val())
    })
}

displayQuestion()
displayAnswers()
setBtnValues()
onClick()