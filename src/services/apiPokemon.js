const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

async function fetchPokemon(id) {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch Pokemon #${id}`);
  }
  return response.json();
}

export async function getPokemons(count = 20) {
  try {
    const pokemonIds = Array.from({ length: count }, (_, i) => i + 1);
    const pokemons = await Promise.all(pokemonIds.map(fetchPokemon));

    return pokemons.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      abilities: pokemon.abilities.map((ability) => ability),
      moves: pokemon.moves.map((move) => move),
      types: pokemon.types.map((type) => type.type.name),
      image: pokemon.sprites.other["official-artwork"].front_default,
      stats: pokemon.stats.map((stat) => ({
        name: stat.stat.name,
        value: stat.base_stat,
      })),
    }));
  } catch (error) {
    throw new Error(`"Failed to fetch Pokemon data"${error}`);
  }
}

export async function loader() {
  const pokemons = await getPokemons();
  return pokemons;
}
export function increasePokemonCount(currentCount, increment = 10) {
  return currentCount + increment;
}
