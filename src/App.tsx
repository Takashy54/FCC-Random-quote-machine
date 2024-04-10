import { useState } from 'react';
import quotes from "./assets/quotes.json";

import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomcolor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomcolor(getRandomColor());
  };

  return (
    <div className="background" style={{ backgroundColor: randomColor }}>
    <div id="quote-box">
      <div className="quote-content" style={{ color: randomColor }}>
       
        <h2 id="text">{quote.quote}</h2>
      
        <h4 id="author">- {quote.author}</h4>
      </div>
      <div className="buttons">
        <button id="new-quote" onClick={changeQuote} style={ { backgroundColor: randomColor}}>Change Quote</button>
      </div>
    </div> 
  </div> 
  );
}

export default App;
