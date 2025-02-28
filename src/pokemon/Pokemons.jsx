import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import PokemonItems from "./PokemonItems";
import { increasePokemonCount, getPokemons } from "../services/apiPokemon";

function Pokemons() {
  const initialPokemons = useLoaderData();
  const [pokemons, setPokemons] = useState(initialPokemons);
  const [count, setCount] = useState(initialPokemons.length);
  const [error, setError] = useState("");

  const handleSummon = async () => {
    try {
      const newCount = increasePokemonCount(count);
      setCount(newCount);
      const newPokemons = await getPokemons(newCount);
      setPokemons(newPokemons);
      setError("");
    } catch (err) {
      setError(`"Failed to fetch Pokemon data. Please try again."${err}`);
    }
  };

  return (
    <>
      <div className="nav">
        <Link to="/" className="backToHome">
          back to home &larr;
        </Link>
        <button onClick={handleSummon} className="moreBtn">
          Summon More Pokémon
        </button>
      </div>
      <ul className="pokemonWrapper">
        {pokemons.map((pokemon) => (
          <PokemonItems key={pokemon.name} pokemon={pokemon} />
        ))}
        <div>Failed to fetch{error}</div>
      </ul>
    </>
  );
}

export default Pokemons;
