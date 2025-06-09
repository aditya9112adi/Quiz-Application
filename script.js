 const questions = [
      {
        question: 'Which animal says "moo"?',
        options: ['Dog', 'Cat', 'Cow', 'Sheep'],
        answer: 2
      },
      {
        question: 'What color is the sky on a clear day?',
        options: ['Blue', 'Green', 'Red', 'Yellow'],
        answer: 0
      },
      {
        question: 'How many legs does a spider have?',
        options: ['6', '8', '10', '4'],
        answer: 1
      },
      {
        question: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
        answer: 1
      },
      {
        question: 'Which planet is known as the Red Planet?',
        options: ['Earth', 'Mars', 'Jupiter', 'Venus'],
        answer: 1
      }
    ];

    let currentQuestion = 0;
    let score = 0;
    let selectedDifficulty = 'medium';
    let timerInterval;
    let timeLeft = 90;

    function selectDifficulty(level) {
      selectedDifficulty = level;
      document.getElementById('difficulty').textContent = level.charAt(0).toUpperCase() + level.slice(1);
    }

    function startQuiz() {
      document.getElementById('start-screen').classList.add('hidden');
      document.getElementById('quiz-screen').classList.remove('hidden');
      showQuestion();
      startTimer();
    }

    function showQuestion() {
      const q = questions[currentQuestion];
      document.getElementById('question-number').textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
      document.getElementById('question-text').textContent = q.question;
      const optionsDiv = document.getElementById('options');
      optionsDiv.innerHTML = '';
      q.options.forEach((opt, idx) => {
        const btn = document.createElement('div');
        btn.className = 'option';
        btn.textContent = String.fromCharCode(65 + idx) + '. ' + opt;
        btn.onclick = () => selectAnswer(idx);
        optionsDiv.appendChild(btn);
      });
      document.getElementById('progress').style.width = `${(currentQuestion / questions.length) * 100}%`;
    }

    function selectAnswer(idx) {
      const correct = questions[currentQuestion].answer;
      if (idx === correct) score++;
      currentQuestion++;
      if (currentQuestion < questions.length) {
        showQuestion();
      } else {
        endQuiz();
      }
    }

    function startTimer() {
      timerInterval = setInterval(() => {
        timeLeft--;
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        document.getElementById('timer').textContent = `${minutes}:${seconds}`;
        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          endQuiz();
        }
      }, 1000);
    }

    function endQuiz() {
      alert(`Quiz Over! You scored ${score}/${questions.length}`);
      location.reload();
    }