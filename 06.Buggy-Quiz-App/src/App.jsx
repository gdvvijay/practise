import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleAnswerOptionClick = (isCorrect) => {
    // Bug: Asynchronous state update issue
    if (isCorrect) {
      setScore(prev=>prev+1);
      setFeedback('Correct!');
    } else {
      setFeedback('Wrong!');
    }

    // Bug: Logic error in moving to the next question
   
    const nextQuestion = currentQuestion + 1 ;
    // both logic work
    // if (nextQuestion <= questions.length - 1) {
    //   setCurrentQuestion(nextQuestion);
    // } else {
    //   setShowScore(true);
    // }
    setCurrentQuestion((prev)=>{
      const next=prev+1;
      if(next < questions.length){
        return next;
      }
      else{
        setShowScore(true)
      }
    })
  };
  

  
  const handleRestartQuiz = () => {
    // Bug: State is not fully reset
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setFeedback('')
  }


  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion]?.questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption,i) => (
              <button key={i} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
          <div className='feedback-section'>
              {feedback}
          </div>
        </>
      )}
    </div>
  );
}

export default App;