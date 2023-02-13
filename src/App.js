import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [gameTitle, setGameTitle] = useState('');
  const [searchedGames, setSearchedGames] = useState([]);
  const [gameDeals, setGameDeals] = useState([]);

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
      .then((response) => response.json())
      .then((data) => setSearchedGames(data));
  };

  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=100&pageSize=3
    `)
      .then((response) => response.json())
      .then((data) => setGameDeals(data));
  }, []);
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

        <div className="games">
          {searchedGames.map((game, key) => (
            <div className="game" key={key}>
              {game.external}
              <img src={game.thumb} alt={game.external} />
              {game.cheapest} $
            </div>
          ))}
        </div>
      </div>
      <div className="dealsSection">
        <h1>Latest Deals</h1>
        <div className="games">
          {gameDeals.map((game, key) => (
            <div className="game" id="deals" key={key}>
              <h3>{game.title}</h3>
              <p>Normal Price: {game.normalPrice}</p>
              <p>Sale Price: {game.salePrice}</p>
              <h3>YOU SAVE {game.savings.substr(0, 2)}%</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
