$(document).ready(function(){



startNextQuestion()

   function startNextQuestion () {
        //using ajax, random get a set of data, in our case is a question with alot of objects
        $.ajax({
            url:'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple', //Using jQuery AJAX, make an API call to "headlines" endpoint.,
            error:function(){   
                alert('Api Failed')
            }, success:function(data){
                var score = 0
                var count = 0
                var questionCount = 1
                console.log(data)
                let numberOfQuestion = data.results.length
                console.log(numberOfQuestion)
                

                let answerContainer = document.querySelectorAll('.choice-actual-text')
                let answerContainerArray = Array.prototype.slice.call(answerContainer)
                let questionPrefix = document.querySelector('.question-prefix')
                
                console.log(answerContainer)
                console.log(answerContainerArray)
        
                // checkAnswer()
                
                console.log(data.results[count].correct_answer)
                    
                var populateQuestionAndOption = function (count) {
                    
                    if (checkCurrentQuestionCount(count) == true){
                        

                            let resultSentence = $('<p>')
                            resultSentence.addClass('result-sentence')
                            resultSentence.text("Game have ended!")

                            let scoreSentence = $('<p>')
                            scoreSentence.text("You have scored: " + score + " points!.")

                            let restartButton = $('<button>')
                            restartButton.addClass('restart-button')
                            restartButton.html(`<a class="button" href="index.html">Restart Game!</a>`)

                            $('.content').append(resultSentence)
                            $('.content').append(scoreSentence)
                            $('.content').append(restartButton)
                            
                            let cover = $('.result-cover')
                            
                            cover.css('display','block')



                    } else {    

                                questionPrefix.innerHTML = questionCount
                                //Append the question property to the question class
                                $('.question').append(data.results[count].question)
                    
                                //the correct and incorrect answer is give as an object and array respectively
                                //what i want to do is update the choices text randomly
                                //merge the correct answer and incorrect answer into an array
                                //use said array to populate the choices text randomly via for loop
                                let incorrectAnswerArr = data.results[count].incorrect_answers
                                console.log(incorrectAnswerArr)
                                let b = data.results[count].correct_answer
                                console.log(b)

                                let allOption = incorrectAnswerArr.concat(b)
                                console.log(allOption)
                                // let allOption = incorrectAnswerArr.push(b)
                                // console.log(incorrectAnswerArr)
                                // console.log(allOption)
                    
                                //get the length to use in the iteration 
                                let numberOfChoices = allOption.length
                    
                                //define the choices into an array of class of choice-actual-text
                                //now all 4 of the same class is in an array
                                let choices = $('.choice-actual-text')
                                console.log(choices)
                    
                                //populate the classes
                                for ( i = 0 ; i <numberOfChoices; i++){
                                choices[i].append(allOption[i])
                                }
                            }


                }
                
                populateQuestionAndOption(count)       

                var checkAnswer = function (count) {
                    $('.choice-actual-text').on('click', function(e){
                            e.preventDefault()
                
                            if (e.target.className === 'choice-actual-text') {

                                console.log(count)
                            

                                    if (e.target.innerHTML === data.results[count].correct_answer) {
    
                                        console.log(e.target.innerHTML)
                                        // console.log('correct')
                                        $(this).css('background','green')
                                        
                                        count++
                                        score ++
                                        addClickedClass()
                                        setTimeout (timeOutAlert,500)
                                        return


                    
                                    } else {
                                                console.log('wrong answer')
                                                console.log('Correct answer is ' + data.results[count].correct_answer)
                                                $(this).css('background','red')
                                                
                                                count++
                                                addClickedClass()
                                                setTimeout (timeOutAlert,500)
                                                return
  
                                    
                
                                                
                                            }


                            
                                
                            }   

                    })
                }

                checkAnswer(count)
                

                function clearQuestionAndOption() {
                    let question = document.querySelector('.question')
                    question.innerHTML = ''

                    for (i = 0 ; i < answerContainerArray.length ; i ++) {
                        answerContainerArray[i].innerHTML = ''
                        answerContainerArray[i].style.background = ''
                    }
                }


                function clearClickedClass (){
                    for (i = 0;i<answerContainerArray.length;i++){
                        if (answerContainerArray[i].classList.contains('clicked')) {

                            console.log('got the class')
                            answerContainerArray[i].classList.remove('clicked')
                        }
                    }
                }

            
                $('.next-button-container').on('click',function(e){
                        count++
                        questionCount++
                        clearQuestionAndOption()
                        clearClickedClass()
                        console.log(count)
                        populateQuestionAndOption(count)
      



                })


                function addClickedClass (){

                    $('.choice-actual-text').addClass('clicked')
                }

                function timeOutAlert (){
                    alert('Please go to next question')
                }

                function checkCurrentQuestionCount (count) {
                    if (count >= numberOfQuestion) {
                        console.log('reached max question')
                        return true

                    } else {
                        return false
                    }
                }

            }
        })



    }

})

