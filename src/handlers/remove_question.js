function removeQuestionHandler() {

    const userAction = confirm("Do you want to remove this question from the list?");
    if (userAction === false) {
        return;
    }

    const questionArticle = document.getElementsByClassName("question")[0];
    const questionParagraph = questionArticle.querySelector('p');

    const answerArticle = document.getElementsByClassName("answers")[0];
    const answers = answerArticle.querySelectorAll('button');


    const currentQuestion = removeCurrentQuestion(questionParagraph.innerHTML, state.questions);

    if (currentQuestion === null) {
        questionParagraph.innerHTML = "There are no questions at the moment. Add some by clicking 'Add new question' button";
        questionParagraph.style.fontStyle = 'italic';

        answers.forEach(item => item.remove());

        this.disabled = true;

    } else {
        questionParagraph.innerHTML = currentQuestion.text;

        currentQuestion.answers.forEach((item, index) => {

            answers[index].classList.remove('incorrect');
            answers[index].innerHTML = item;

        });


    }

}