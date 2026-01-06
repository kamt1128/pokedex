import { useLocation, useNavigate } from "react-router-dom";
import { useFavorites } from "../../context/FavoritesContext";
import type { Pokemon } from "../../utils/types";
import { PokemonNumber } from "../atoms/PokemonNumber";

type Props = {
  pokemon: Pokemon;
};

export const PokemonCard = ({ pokemon }: Props) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const favorite = isFavorite(pokemon.id);

  const location = useLocation();

  const navigate = useNavigate();

  const toggleFavorite = () => {
    if (favorite) {
      removeFavorite(pokemon.id);
    } else {
      addFavorite(pokemon);
    }
  };

  const iconFavorite = favorite
    ? "/src/assets/star-yellow-icon.svg"
    : "/src/assets/star-white-icon-border.svg";
  
  return (
    <div className="pokemon-card">
      <div className="header-card">
        {location.pathname === "/favorites"
          ? ( <img src="/src/assets/clear-icon.svg" alt="Delete icon" className="header-card__delete-icon" onClick={toggleFavorite} /> )
          : ( <img src={iconFavorite} alt="Favorites icon" className="header-card__favorite-icon" onClick={toggleFavorite} /> )
        }
        <span className="pokemon-number"><PokemonNumber id={pokemon.id} /></span>
      </div>
      <img src={pokemon.pokemonsprites[0].sprites ?? "/src/assets/not-found-image.svg"} alt={pokemon.name} className="pokemon-img" onClick={() => navigate(`/pokemon/${pokemon.id}`)} />
      <p className="pokemon-name">{pokemon.name}</p>
    </div>
  );
};

