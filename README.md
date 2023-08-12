# TrivIQ
A timed quiz with multiple-choice questions to test an end-user's fun facts knowledge.

## Description
The end-user (quiz taker) will be provided a timed quiz application that will store scores so (s)he can gauge his/her progress with past scores.

### Usage
A fun application for the quiz taker and an application to display my Javascript capabilities.

### Tasks Completed
```
HTML & CSS: 
* Created new HTML and CSS files

JavaScript:
*Activated the quiz when end-user clicks the Start button
*Enabled cards to display questions after every end-user choice
*Included a timer that starts after end-user clicks the Start button 
*Enhanced the timer which is reactive to answer choices: an incorrect answer will reduce the timer
*Replaced questions with next question after answers are evaluated
*Included a score tracker for correct answers
*Instructed JavaScript to present multiple options after the end of quiz - save score, view past scores, clear local storage of scores, start quiz again
```

## Links
[My Deployed Website](https://mewing0328.github.io/TrivIQ/)

[My Code Repository](https://github.com/mewing0328/TrivIQ)

## Demonstration 
### GIFS 
The following GIFs demonstrate the web application's appearance and functionality:
*note: this demo does not show questions to avoid seeing answers before taking quiz

#### TrivIQ Demo Below: From the start of the quiz to the end. 
    For this GIF demo, I demonstrate the following:
    - Buttons are functional.
    - The timer is functional.
    - End-user can only choose one choice for each question. The buttons are disabled after a choice is made.
    - Custom replies for each question are shown after each question.
    - Correct and Incorrect answers are providing input logic to score and timer.
    - Alerts when the user input does not meet initials criteria.
    - Initials, score, date, and time are stored in local storage as unique keys.
    - The local storage keys are displayed on the application when the end-user clicks the designated button.
    - The local storage clears when the end-user clicks the designated button.

<img src=./assets/media/TrivIQ.gif style="width:40rem">
<br></br>

### TrivIQ Screenshots
The web application on the browser: Intro card, example question, save score, and scores list.
<br></br>
<img src=./assets/media/TrivIQ.jpg style="width:20rem">
<img src=./assets/media/Question.jpg style="width:20rem">
<img src=./assets/media/Save.jpg style="width:20rem">
<img src=./assets/media/ScoreList.jpg style="width:20rem">

## Credit: References and Tutorials Utilized
1. [Trivia Questions](https://www.today.com/life/inspiration/trivia-questions-rcna39101): I am not creative with fun facts so used these trivia questions.
2. [W3docs](https://www.w3docs.com/): Referenced multiple sources in w3docs for javascript.
3. [Image Repository Website](https://pixabay.com/): I downloaded image(s)
4. [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random): Tutorial on how to utilize random numbers
5. George Washington University instructor for GitLab repository with tutorials and this project's specifications. MiniProject files utilized to create the frame of the application.
6. [techformist website](https://techformist.com/delete-array-elements-iteration-javascript/): Provided a solution to my random numbers repeating for index. Demo of splice for array in a for loop.
7. [coeinwp](https://www.codeinwp.com/snippets/add-event-listener-to-multiple-elements-with-javascript/): forEach loop for allowing the event listener to click on all the option buttons.
8. [Stack Overflow](https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance): Utilized to understand clearing the local storage from the browser using a button
9. [Stack Overflow](https://stackoverflow.com/questions/17745292/how-to-retrieve-all-localstorage-items-without-knowing-the-keys-in-advance): Utilized the advice for how to get all local storage arrays
10. [w3 Resource](https://www.w3resource.com/javascript/form/all-letters-field.php): How to only check for letters in Javascript input.
11. [freecodecamp.org](https://www.freecodecamp.org/news/javascript-get-current-date-todays-date-in-js/#:~:text=In%20JavaScript%2C%20we%20can%20easily,%2C%20time%2C%20and%20time%20zone.): How to obtain the current date.
12. [Stack Overflow](https://stackoverflow.com/questions/70338345/when-a-user-clicks-a-button-how-do-you-store-a-variable-that-can-be-used-later): Used this approach to convert user input as a variable.

<br></br>
## Future Contributions
Pull requests are welcome for recommendations for optimizing my JavaScript file. 
Do you have recommendations for functions that will reduce the number of functions and methods I utilized?
<br></br>

## License
MIT License

Copyright (c) 2022 M. Ewing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



