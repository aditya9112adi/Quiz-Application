 let questions = [
      {
       q: "Which animal says \"moo\"?", 
       options: ["Dog", "Cat", "Cow", "Sheep"], 
       answer: 2 
      },
      {
       q: "What color is the sky?", 
       options: ["Green", "Blue", "Red", "Yellow"], 
       answer: 1 
      },
      { 
       q: "How many legs does a spider have?", 
       options: ["6", "8", "4", "10"],
       answer: 1 
      },
      { 
       q: "What is 2 + 2?", 
       options: ["3", "4", "5", "2"], 
       answer: 1 
      },
      { 
       q: "What is the opposite of hot?", 
       options: ["Cold", "Warm", "Boiling", "Humid"], 
       answer: 0 
      }
    ];

    let currentQuestion = 0;
    let difficulty = 'easy';

    function setDifficulty(level) {
      difficulty = level;
    }

    function startQuiz() {
      document.getElementById('start-screen').classList.add('hide');
      document.getElementById('quiz-screen').classList.remove('hide');
      let displayDifficulty = '';

      if (difficulty === 'easy') {
        displayDifficulty = 'Easy';
      } else if (difficulty === 'medium') {
        displayDifficulty = 'Medium';
      } else if (difficulty === 'hard') {
        displayDifficulty = 'Hard';
      } else {
        displayDifficulty = difficulty;
      }

      document.getElementById('difficulty').textContent = displayDifficulty;
      loadQuestion();

      loadQuestion();
      startTimer();
    }

    function loadQuestion() {
      let q = questions[currentQuestion];
      let questionElement = document.getElementById('question');

      let questionText = "Question " + (currentQuestion + 1) + " of 5";
      questionText += "\n\n" + q.q;
      questionElement.textContent = questionText;

      let i = 0;
      let letters = ['A', 'B', 'C', 'D'];

      while (i < 4) {
        document.getElementById('opt' + i).textContent = letters[i] + ". " + q.options[i];
        i++;
      }
      updateProgress();
    }

    function selectOption(index) {
      if (index === questions[currentQuestion].answer) {
        score++;
      }
      currentQuestion++;
      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {
        clearInterval(timer);
        showResult();
      }
    }

    let timeLeft = 90;
    let timer;
    function startTimer() {
      updateTimer();
      timer = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 0) {
          clearInterval(timer);
          showResult();
        }
      }, 1000);
    }

    function updateTimer() {
      let mins = Math.floor(timeLeft / 60);
      let secs = timeLeft % 60;
      let timer = document.getElementById('timer');
      let minutes = mins < 10 ? "0" + mins : mins;
      let seconds = secs < 10 ? "0" + secs : secs;
      timer.textContent = minutes + ":" + seconds;
    }

    function updateProgress() {
      let percent = (currentQuestion / questions.length) * 100;
      document.getElementById('progress-bar').style.width = percent + '%';
    }

    function showResult() {
      document.getElementById('quiz-screen').classList.add('hide');
      document.getElementById('result-screen').classList.remove('hide');
      document.getElementById('score').textContent = `${score} / ${questions.length} \n${(score / questions.length) * 100}%`;
      document.getElementById('final-difficulty').textContent = difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
    }

    let score = 0;
    function saveHighScore() {
        let name = document.getElementById('name').value;
        if (name == '') {
          return;
        }
        let scores = localStorage.getItem('highScores');
        if (scores == null) {
          scores = []; 
        } else {
          scores = JSON.parse(scores);
        }
        scores.push({ name: name, score: score, difficulty: difficulty });
        localStorage.setItem('highScores', JSON.stringify(scores));
        alert("High score saved!");
    }

    function viewHighScores() {
      let scores = JSON.parse(localStorage.getItem('highScores')) || [];
      let message = "High Scores:\n";
      scores.forEach(s => {
        message += `${s.name} - ${s.score}/5 (${s.difficulty})\n`;
      });
      alert(message);
    }
