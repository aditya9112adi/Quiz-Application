// questions.js
const quizData = {
  easy: [
    {
      question: "What is the capital of France?",
      answers: [
        { text: "Paris", correct: true },
        { text: "Madrid", correct: false },
        { text: "Berlin", correct: false },
        { text: "Rome", correct: false },
      ],
    },
    {
      question: "Which planet is known as the Red Planet?",
      answers: [
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Saturn", correct: false },
      ],
    },
  ],

  medium: [
    {
      question: "What is the square root of 144?",
      answers: [
        { text: "12", correct: true },
        { text: "14", correct: false },
        { text: "10", correct: false },
        { text: "16", correct: false },
      ],
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      answers: [
        { text: "William Shakespeare", correct: true },
        { text: "Mark Twain", correct: false },
        { text: "Jane Austen", correct: false },
        { text: "Leo Tolstoy", correct: false },
      ],
    },
  ],

  hard: [
    {
      question: "What is the value of Planck's constant?",
      answers: [
        { text: "6.626 × 10⁻³⁴ Js", correct: true },
        { text: "9.81 m/s²", correct: false },
        { text: "3.00 × 10⁸ m/s", correct: false },
        { text: "1.60 × 10⁻¹⁹ C", correct: false },
      ],
    },
    {
      question: "Which element has the atomic number 92?",
      answers: [
        { text: "Uranium", correct: true },
        { text: "Plutonium", correct: false },
        { text: "Radon", correct: false },
        { text: "Thorium", correct: false },
      ],
    },
  ]
};
