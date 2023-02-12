import { useState } from 'react';
import './App.css';

function App() {
  const [gameTitle, setGameTitle] = useState('');
  const searchGame = () => {};
  return (
    <div className="App">
      <div className="searchSection">
        <h1>Search For A Game</h1>
        <input
          type="text"
          placeholder="Minecraft.."
          onChange={(e) => setGameTitle(e.target.value)}
        />
        <button>Search Game Title</button>
      </div>
      <div className="dealsSection">
        <h1>Latest Deals</h1>
      </div>
    </div>
  );
}

export default App;
