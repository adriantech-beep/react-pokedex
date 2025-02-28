import PropTypes from "prop-types";
import styles from "./PokemonItems.module.css";
function PokemonItems({ pokemon }) {
  const statName = pokemon.stats.map((stat) => stat);
  const moveName = pokemon.moves.map((move) => move);
  const abilityName = pokemon.abilities.map((ability) => ability);
  const typesName = pokemon.types.map((type) => type);
  return (
    <li className={styles.wrapperOuter}>
      <div className={styles.wrapperInner}>
        <div className={styles.nameWrapper}>
          <h3 className={styles.name}>{pokemon.name}</h3>
          <div className={styles.hpWrapper}>
            <p className={styles.hp}>{statName[0].name}</p>
            <p className={styles.value}>{statName[0].value}</p>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={pokemon.image}
            alt={`A sample image of pokemon ${pokemon.name}`}
          />
        </div>
        <div>
          <p>moves : {moveName[0].move.name}</p>
          <p>ability : {abilityName[0].ability.name}</p>
          <p>type : {typesName[0]}</p>
        </div>
      </div>
    </li>
  );
}
PokemonItems.propTypes = {
  pokemon: PropTypes.array.isRequired,
};
export default PokemonItems;
