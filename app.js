$(document).ready(function(){



startNextQuestion()

   function startNextQuestion () {
        //using ajax, random get a set of data, in our case is a question with alot of objects
        $.ajax({
            url:'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple', //Using jQuery AJAX, make an API call to "headlines" endpoint.,
            error:function(){   
                alert('Api Failed')
            }, success:function(data){


                //define starting count, score and questionCount
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
                
                console.log(data.results[count].correct_answer)
                
                //populate the question and choices function
                var populateQuestionAndOption = function (count) {


                    //end quiz condition, occur when max number of question is true
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
                                // activate timer
                                timer()


                                //populate the question and choice containers
                                // concat the incorrect answer array with the correct answers
                                // for loop to randomly 
                                questionPrefix.innerHTML = questionCount
                      
                                $('.question').append(data.results[count].question)
             
                                let incorrectAnswerArr = data.results[count].incorrect_answers
              
                                console.log(incorrectAnswerArr)

                                let b = data.results[count].correct_answer
              
                                console.log(b)
                  


                                let allOption = incorrectAnswerArr.concat(b)
                                console.log(allOption)

                                var shufflearr = allOption

                                // shuffle function Fisher-Yates (aka Knuth) Shuffle
                                shuffle(shufflearr);
                                console.log(shufflearr);
               
                                
                                let numberOfChoices = allOption.length
      
                                let choices = $('.choice-actual-text')
                                
                                console.log(choices)
                    
            
                                for ( i = 0 ; i <numberOfChoices; i++){
         

                                choices[i].append(shufflearr[i])
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

                $('.next-button-container').on('click',function(e){
              
                    forceNextButtonFunction()
                    return
                  })
                

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


                function forceNextButtonFunction () {
                    count++
                    questionCount++
                    clearQuestionAndOption()
                    clearClickedClass()
                    console.log(count)
                    populateQuestionAndOption(count)
                    
  


                }
            


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




                function timer() {
                    var timeLeft = 5;
                    var elem = document.getElementById('some_div');
                    var timerId = setInterval(countdown, 1000);


                        $('.next-button-container').on('click',function(e){
                            stopTimer()
                            return
                        })
                
 
                        function countdown() {
                            if (timeLeft == -1) {
                            clearTimeout(timerId);
                            timerId = null;
                            forceNextButtonFunction();

                            
                            
    
                                } else {
                            elem.innerHTML = timeLeft + ' seconds remaining';
                            timeLeft--;
        
                            }
                        }
                        
                        function stopTimer(){
                            clearTimeout(timerId)
                            timerId = null
                        }

                        
                }

                function shuffle(array) {
                    var currentIndex = array.length, temporaryValue, randomIndex;
                  
                    // While there remain elements to shuffle...
                    while (0 !== currentIndex) {
                  
                      // Pick a random remaining element...
                      randomIndex = Math.floor(Math.random() * currentIndex);
                      currentIndex -= 1;
                  
                      // And swap random index with the current element.
                      temporaryValue = array[currentIndex];
                      array[currentIndex] = array[randomIndex];
                      array[randomIndex] = temporaryValue;
                    }
                  
                    return array;
                  }



            }
        })



    }

})

