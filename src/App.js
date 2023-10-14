import './App.css';
import React, { useState } from 'react';
//import Fun from "./components/fun";
function App() {
  const [text, setText] = useState('');
  
  const handleTextChange = (event) => {
    const inputText = event.target.value;
    setText(inputText);
  };

  const wordCount = text.trim().split(/\s+/).filter(word => word !== '').length;
  return (
    <div className="App">
      <h1> React Task 1<br/></h1>
      <h1>Responsive Paragraph<br/>Word Counter</h1>
      <textarea
        rows="4"
        cols="50"
        onChange={handleTextChange}
        value={text}
      ></textarea>
      <p>Word Count: {wordCount}</p>
    </div>
  );
}

export default App;
