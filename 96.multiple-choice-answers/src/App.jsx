import React from 'react';
import TriviaQuiz from './TriviaQuiz';
import './App.css';

// The data for our quiz
const quizData = [
  {
    question: "What is the powerhouse of the cell?",
    options: ["Mitochondria", "Nucleus", "Ribosome"],
    correctAnswer: "Mitochondria",
  },

  {
    question: "How many planets are in our solar system?",
    options: ["8", "9", "7"],
    correctAnswer: "8",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo"],
    correctAnswer: "Tokyo",
  }
];


function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Trivia Quiz</h1>
      </header>
      <main>
        <TriviaQuiz questions={quizData} />
      </main>
    </div>
  );
}

export default App;