import React, { useState } from 'react';
import './Survey.css';

function Survey({ questions }) {
  const [currentQuestionId, setCurrentQuestionId] = useState('q1');
  const [answers, setAnswers] = useState({});
  const currentQuestion = questions[currentQuestionId];

  const handleOptionClick = (option, nextQuestionId , key) => {
    // This logic is missing. It should record the answer and advance to the next question.
    // console.log(nextQuestionId)
    setCurrentQuestionId(nextQuestionId);
    setAnswers(prev=>({...prev,[option]:key}))
  };

  const handleRestart = () => {
    // This should reset the entire survey
    // const newAnswers = answers; // State mutation
    setAnswers({});
    setCurrentQuestionId('q1')
  };
  
  if (!currentQuestion) return <div>Question not found!</div>;


  if (currentQuestionId === 'end') {
    return (
      <div className="survey-container">
        <h3>{currentQuestion.text}</h3>
        <p>Your answers:</p>
        <pre>{JSON.stringify(answers)}</pre> {/* Incorrectly formatted output */}
        <button onClick={handleRestart} className="restart-btn">Take Again</button>
      </div>
    );
  }

  return (
    <div className="survey-container">
      <h3>{currentQuestion.question}</h3>
      <div className="options">
        {Object.entries(currentQuestion.options).map(([key,option]) => (
          <button
            key={key}
            onClick={() => handleOptionClick(currentQuestion.question, option,key)}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Survey;