import React, { useState } from 'react';
import './App.css'
const App = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ['Pierre', 'Feuille', 'Ciseaux'];

  const handleChoice = choice => {
    setPlayerChoice(choice);

    // Generate a random choice for the computer
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);

    // Determine the result of the game
    if (choice === computerChoice) {
      setResult('C\'est\' une égalité.');
    } else if (
      (choice === 'Pierre' && computerChoice === 'Ciseaux') ||
      (choice === 'Feuille' && computerChoice === 'Pierre') ||
      (choice === 'Ciseaux' && computerChoice === 'Feuille')
    ) {
      setResult('Gagné !');
    } else {
      setResult('Perdu...');
    }
  };

  return (
    <div>
      <h1>Choisissez votre coup.</h1>
      <div>
        <button onClick={() => handleChoice('Pierre')}>PIERRE</button>
        <button onClick={() => handleChoice('Feuille')}>FEUILLE</button>
        <button onClick={() => handleChoice('Ciseaux')}>CISEAUX</button>
      </div>
      <div>
        <p>Vous avez joué : {playerChoice}</p>
        <p>L'odinateur a joué : {computerChoice}</p>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default App;
