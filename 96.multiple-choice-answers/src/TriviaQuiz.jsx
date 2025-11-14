import React, { useState } from 'react';
import './TriviaQuiz.css';

function TriviaQuiz({ questions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false); // Should be false

  const handleSelectAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    // This should check the answer, update score, and move to the next question
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      const newScore = score + 1;
      setScore(newScore)
    }
    
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev=>prev+1); // Postfix increment is buggy here
    } else {
      setShowResult(true);
    }
  };
  
  const handleRestartQuiz = () => {
    // Logic to restart the quiz is missing
    setShowResult(false)
    setScore(0)
    setCurrentQuestionIndex(0)
  };

  if (showResult) {
    return (
      <div className="quiz-container result">
        <h2>Quiz Completed!</h2>
        <p>Your score is {score} out of {questions.length}</p>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
      </div>
    );
  }
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="question-header">
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      <div className="question-text">
        <h2>{currentQuestion.question}</h2>
      </div>
      <div className="answer-options">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedAnswer === option ? 'selected' : ''}`}
            onClick={(e)=>handleSelectAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="quiz-footer">
        <button onClick={handleNextQuestion}>Next Question</button>
      </div>
    </div>
  );
}

export default TriviaQuiz;