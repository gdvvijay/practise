import React from 'react';
import Survey from './Survey';
import './App.css';

// A simple tree structure for our survey questions
const surveyData = {
  q1: {
    question: 'Do you enjoy programming?',
    options: {
      'Yes': 'q2_yes',
      'No': 'q2_no',
    },
  },
  q2_yes: {
    question: 'What is your favorite language?',
    options: {
      'JavaScript': 'end',
      'Python': 'end',
      'Other': 'end',
    },
  },
  q2_no: {
    question: 'What is your favorite hobby?',
    options: {
      'Reading': 'end',
      'Sports': 'end',
      'Gaming': 'end',
    },
  },
  end: {
    text: 'Thank you for completing the survey!',
  },
};

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Conditional Survey</h1>
        <p>Your answer to the first question will determine the second question.</p>
      </header>
      <main>
        <Survey questions={surveyData} />
      </main>
    </div>
  );
}

export default App;