import Pokemon from './Pokemon';
import data from './data';
import './App.css';

function App() {
  return (
    <div className="pokedex">
      {data.map(pokemon => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
    </div>
  )
}

export default App;
