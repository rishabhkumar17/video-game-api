import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [gameTitle, setGameTitle] = useState('');
  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}`)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search For A Game</h1>
        <input
          type="text"
          placeholder="Minecraft.."
          onChange={(e) => setGameTitle(e.target.value)}
        />
        <button onClick={searchGame}>Search Game Title</button>
      </div>
      <div className="dealsSection">
        <h1>Latest Deals</h1>
      </div>
    </div>
  );
}

export default App;
