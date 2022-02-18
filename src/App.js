import React, { useState } from "react";
import './App.css';

function App() {
  const [emotion, setEmotion] = useState("happy");

  return (
    <>
    <h1>Current emotion is {emotion}.</h1>
    <button onClick={() => setEmotion("Happy")}>Happy</button>
    <button onClick={() => setEmotion("Frustrated")}>Frustrate</button>
    <button onClick={() => setEmotion("enthusiastic")}>Enthuse</button>
    </>
  )

 
}

export default App;
