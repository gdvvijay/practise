import React from 'react';
import Accordion from './Accordion';
import './App.css';

const faqData = [
  {
    id: 1,
    question: 'What is React?',
    answer: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.'
  },
  {
    id: 2,
    question: 'What are React components?',
    answer: 'Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.'
  },
  {
    id: 3,
    question: 'What is state in React?',
    answer: 'The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders.'
  },
];

function App() {
  return (
    <div className="container">
      <header>
        <h1>Buggy Accordion FAQ</h1>
        <p>Try to open and close the FAQ items to find the bugs.</p>
      </header>
      <main>
        <Accordion items={faqData} />
      </main>
    </div>
  );
}

export default App;