import { Link } from "react-router-dom";

function GetStartButton() {
  return (
    <Link to="/pokemons">
      <button className="btn">
        <span className="btn-text-one">Pokemon</span>
        <span className="btn-text-two">Go!</span>
      </button>
    </Link>
  );
}

export default GetStartButton;
