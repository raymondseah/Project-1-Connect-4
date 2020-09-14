$(document).ready(function(){

    var count = 0
    var score = 0     
            //using ajax, random get a set of data, in our case is a question with alot of objects
        $.ajax({
            url:'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple', //Using jQuery AJAX, make an API call to "headlines" endpoint.,
            error:function(){   
                alert('Api Failed')
            }, success:function(data){
                console.log(data.results)
 
    
    
            }
        })
    
    let numberOfQuestion = data.results.length
    console.log(numberOfQuestion)

        //add event listener to interact with the choices
            //create a win condition 
            //win or lose must prompt something
    
    
    
        function populateQuestion(){

            for (i = 0; i< numberOfQuestion ; i++) {
                            //Append the question property to the question class
            $('.question').append(data.results[0].question)
    
            //the correct and incorrect answer is give as an object and array respectively
            //what i want to do is update the choices text randomly
            //merge the correct answer and incorrect answer into an array
            //use said array to populate the choices text randomly via for loop
            let incorrectAnswerArr = data.results[0].incorrect_answers
            console.log(incorrectAnswerArr)
            let b = data.results[0].correct_answer
            console.log(b)
            incorrectAnswerArr.push(b)
            console.log(incorrectAnswerArr)
    
            //get the length to use in the iteration 
            let numberOfChoices = incorrectAnswerArr.length
    
            //define the choices into an array of class
            //now all 4 of the same class is in an array
            let choices = $('.choice-actual-text')
            console.log(choices)
    
        //populate the classes
            for ( i = 0 ; i <numberOfChoices; i++){
            choices[i].append(incorrectAnswerArr[i])
    
            }
            }

        }
    
        function checkAnswer() {
            // let wholePage = $('.container')
            // console.log(wholePage)
            $('.choice-actual-text').on('click', function(e){
            e.preventDefault()
    
            if (e.target.className === 'choice-actual-text') {
                
                
                // console.log('true')
                // console.log(e.target.innerHTML)
    
                if (e.target.innerHTML === data.results[0].correct_answer) {
                    console.log(e.target.innerHTML)
                    // console.log('correct')
                    $(this).css('background','green')
                    score = score + 1
    
    
                     } else {
                    console.log('wrong answer')
                    console.log('Correct answer is ' + data.results[0].correct_answer)
                    $(this).css('background','red')
                    $('p:contains(data.results[0].correct_answer)').css('background','green')
    
                    
    
       
                    }
                
                }
            })
        }
        populateQuestion()
        checkAnswer()
        
    })
    
    


    // console.log(data)
    //         console.log(data.results[0].question)        

    //         //Append the question property to the question class
    //         $('.question').append(data.results[0].question)

    //         //the correct and incorrect answer is give as an object and array respectively
    //             //what i want to do is update the choices text randomly
    //             //merge the correct answer and incorrect answer into an array
    //             //use said array to populate the choices text randomly via for loop
    //         let incorrectAnswerArr = data.results[0].incorrect_answers
    //         console.log(incorrectAnswerArr)
    //         let b = data.results[0].correct_answer
    //         console.log(b)
    //         incorrectAnswerArr.push(b)
    //         console.log(incorrectAnswerArr)

    //         //get the length to use in the iteration 
    //         let numberOfChoices = incorrectAnswerArr.length

    //         //define the choices into an array of class
    //             //now all 4 of the same class is in an array
    //         let choices = $('.choice-actual-text')
    //         console.log(choices)

    //         //populate the classes
    //         for ( i = 0 ; i <numberOfChoices; i++){
    //             choices[i].append(incorrectAnswerArr[i])

    //         }
    
    //         // let wholePage = $('.container')
    //         // console.log(wholePage)
    //         $('.choice-actual-text').on('click', function(e){
    //             e.preventDefault()

    //             if (e.target.className === 'choice-actual-text') {
                    
                    
    //                 // console.log('true')
    //                 // console.log(e.target.innerHTML)

    //                 if (e.target.innerHTML === data.results[0].correct_answer) {
    //                     console.log(e.target.innerHTML)
    //                     // console.log('correct')
    //                     $(this).css('background','green')
    //                     score = score + 1


    //                 } else {
    //                     console.log('wrong answer')
    //                     console.log('Correct answer is ' + data.results[0].correct_answer)
    //                     $(this).css('background','red')
    //                     $('p:contains(data.results[0].correct_answer)').css('background','green')

                        

           
    //                 }
                    
    //             }
    //         })