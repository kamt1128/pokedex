import { Link } from "react-router-dom";
import { PokemonGridFavorites } from "../components/organisms/PokemonGridFavorites";
import "../styles/home.css";
/** Images imports */
import homeButton from "../assets/home-button.svg";
import pokeball from "../assets/pokeball.svg";


export const FavoritesPage = () => {

  return (
    <div className="container">
      <div className="home">
        <header className="header">
          <div className="brand">
            <img src={pokeball} alt="Pokeball" className="brand__logo" />
            <h1 className="brand__title">Pokédex</h1>
            <div className="favorites-link">
              <Link to="/">
                <img src={homeButton} alt="Home" className="favorites-link__icon" />
              </Link>
            </div>
          </div>
        </header>

        <PokemonGridFavorites />
      </div>
    </div>
  );
};
