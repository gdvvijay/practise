import React from 'react';
import Accordion from './Accordion';
import './App.css'

const items = [
  {
    title: 'What is React?',
    content: 'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components.',
  },
  {
    title: 'What is JSX?',
    content: 'JSX stands for JavaScript XML. It is a syntax extension for JavaScript, and it allows you to write HTML-like code in your React components.',
  },
  {
    title: 'What is state in React?',
    content: 'State is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders.',
  },
];


function App() {
  return (
    <div className="App">
      <h1>Buggy Accordion</h1>
      <Accordion items={items} />
    </div>
  );
}

export default App;