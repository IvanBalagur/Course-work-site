(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `Правильных ответов ${numCorrect} из ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Какая скорость у урагана на земле?",
      answers: {
        a: "60 м/ч",
        b: "300 км/ч",
        c: "200 км/ч"
      },
      correctAnswer: "c"
    },
    {
      question: "Как оценивают опасность урагана?",
      answers: {
        a: "На глаз",
        b: "По кол-ву летающих объектов",
        c: "По пятибальной шкале"
      },
      correctAnswer: "c"
    },
    {
      question: "Какой процент от всех стихийных бедствий составляют наводнения?",
      answers: {
        a: "7%",
        b: "33.3%",
        c: "25%",
        d: "19%"
      },
      correctAnswer: "d"
    },
	{
	question: "В какому году произошло самое сильное наводнение в Австралии?",
      answers: {
        a: "1948 год",
        b: "2000 год",
        c: "1900 год",
        d: "2015 год"
      },
      correctAnswer: "b"
	},
	{
	question: "Как предотвращают наводнения?",
      answers: {
        a: "Взрывают лёд на реках",
        b: "Откачивают насосом",
        c: "Впитывают губкой",
        d: "Быстро построить платину"
      },
      correctAnswer: "a"
	},
	{
	question: "С чем раньше связывали извержение вулканов?",
      answers: {
        a: "Гнев Шаманов",
        b: "Немилость Богов",
        c: "Земля злиться",
        d: "Земельный прыщ"
      },
      correctAnswer: "b"
	},
	{
	question: "Как с греческого переводится кратер?",
      answers: {
        a: "Емкость",
        b: "Яма",
        c: "Чаша",
        d: "Тазик"
      },
      correctAnswer: "c"
	},
	{
	question: "Что часто предшествует извержению?",
      answers: {
        a: "Торнадо",
        b: "Метеоритный дождь",
        c: "Засуха",
        d: "Землетрясения"
      },
      correctAnswer: "d"
	},
	{
	question: "Какой высоты подъема может достигать вулканический пепел?",
      answers: {
        a: "3 км",
        b: "5 км",
        c: "10 км",
        d: "1 км"
      },
      correctAnswer: "b"
	},
	{
	question: "На какие группы разделяют вулканы?",
      answers: {
        a: "Действующие и потухшие",
        b: "Горящие и тухлые",
        c: "Опасный и спящие",
        d: "кричащие и умолкшие"
      },
      correctAnswer: "a"
	},
	
	
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();