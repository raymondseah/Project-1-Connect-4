# Project-1-Trivia Quiz


Idea is to create a trivia Quiz game from a open trivia Quiz API data base.

Uses HTML, CSS & Javascript.

HTML for basic content
CSS for making the content appeal to users
Javacript for creating the logic and approach to the Quiz, how to get the quiz data, populate the DOM and winning condition


Git Page Link : https://raymondseah.github.io/

Intallation: none

Approach:
1. Uses ajax to pull a fix number of quesiton from API database, in this project there is 10 questions
2. Define a element to track the index of the data pulled from ajax
    2a. Used count to track the index
    2b. count will be use to populate the tags in HTML. Questions and All 4 choices after every count

3. Merge the incorrect and correct choices into an array in order to populate the 4 div tag in the HTML via for loop or else the correct answer will always be in the same option.

4. Created a function to populate the question and choices based on the index count.
    4a. In this function there is a ending quiz condition, which is when the count reach max number of questions, there will be a score page and a restart button
    4b. if count have not reaches the max number of question, populate the HTML

5. Created a check answer function
    5a. on click event listener, will check the option clicked using fi condition with the correct answer text
    5b. changes the background to either green or red for correct or incorrect choices respectively
    5c. correct answer will increase element score by 1
    5d. added alert with remarks for "proceeding to next question"
    5e. added class clicked to prevent double click on the same question

6. Add timer function 
    6a. timer function active during populate function
    6b. 2 different condition to reset the timer, one is when time ran out , another is when next button is pressed.
    6c. both condition will activate the forceNextButtonFunction
    6d. This next button function, increate the count by 1 and activate the clear quuestion and choices function, clear clicked class function, clear current timer, then reactivate the populate question function



unsolved problems:
is the clicked class a bootstrap function? cause i did not add anything to the clicked class in CSS to prevent the extra click per question.

Unable to remove the special characters, %20 etc in the choices.....when populating the question and choices

Making quiz game other screen size friendly. this quiz can't scale down to different screen size
