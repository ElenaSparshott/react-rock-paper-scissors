import './App.css';
import { useState } from 'react'

function App() {
  const [computerChoice, setComputerChoice] = useState(null)
  const [userChoice, setUserChoice] = useState(null)
  const [result, setResult] = useState(null)

  const choices = ['rock', 'paper', 'scissors']

  const handleClick = (value) => {
      setUserChoice(value)
      generateComputerChoice()
      checkResult()
  }

  const generateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  const checkResult = () => {
    if(userChoice === computerChoice){
      setResult("You Draw")
    }
    switch(userChoice){
      case "rock":
        switch(computerChoice){
          case 'paper': setResult("You Lose")
          break
          case 'scissors': setResult("You Win")
          break
        }
      case "paper":
        switch(computerChoice){
          case 'scissors': setResult("You Lose")
          break
          case 'rock': setResult("You Win")
          break
        } 
      case "scissors":
        switch(computerChoice){
          case "rock": setResult('You Win')
          break
          case "paper": setResult('You Lose')
          break
        }
    }
  }

  return (
    <div>
      <h1>user choice is: {userChoice}</h1>
      {choices.map((choice, index) => <button key={index}onClick={() => handleClick(choice)}>{choice}</button>)}

      <h1>computer choice is: {computerChoice}</h1>

      <h1>{result}</h1>
      
      
    </div>
  );
}

export default App;
