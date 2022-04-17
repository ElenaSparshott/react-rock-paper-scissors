import './App.css';
import { useState } from 'react'
function App() {

  const [userChoice, setuserChoice] = useState(null)
  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
      setuserChoice(value)
  }

  const generateComputerChoice = () => {
    
  }



  return (
    <div>
      <h1>user choice is: </h1>
      <h1>computer choice is: {userChoice}</h1>
      {/* <button onClick={() => handleclick('rock')}>Rock</button>
      <button onClick={() => handleclick('paper')}>Paper</button>
      <button onClick={() => handleclick('scissors')}>Scissors</button> */}
      {choices.map((choice, index) => <button key={index}onClick={() => handleClick(choice)}>{choice}</button>)}
    </div>
  );
}

export default App;
