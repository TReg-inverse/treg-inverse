import React from 'react';
import './App.css';

import Header from "./sections/Header";

import { MathJaxContext } from 'better-react-mathjax';
import Abstract from './sections/Abstract';
import Footer from './sections/Footer';
import Motivation from './sections/Motivation';
import Result1 from './sections/Result1';
import Result2 from './sections/Result2';
import Result3 from './sections/Result3';
import Result4 from './sections/Result4';
import Result5 from './sections/Result5';
import Result6 from './sections/Result6';

const config = {
  loader: { load: ["[tex]/html"]},
  tex: {
    packages: { "[+]": ["html"] },
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"]
    ]
  }
};

function App() {
  return (
    <MathJaxContext version={3} config={config}>
      <div className='body'>
        <Header />
        <Abstract />
        <Motivation />
        <Result1 />
        <Result2 />
        <Result3 />
        <Result4 />
        <Result5 />
        <Result6 />
      </div>
      <Footer />
    </MathJaxContext>
  );
}

export default App;