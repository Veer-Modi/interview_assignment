import React from 'react';
import Accordion from './Accordion';

const data = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'What is useState?',
    answer: 'useState is a React Hook that allows state variables in functional components.',
  },
  {
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript that looks like HTML and is used in React.',
  },
];

function App() {
  return (
    <div>
      <h1>FAQ Accordion</h1>
      <Accordion items={data} />
    </div>
  );
}

export default App;
