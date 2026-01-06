import { PokemonCard } from "../molecules/PokemonCard";
import { useFavorites } from "../../context/FavoritesContext";
import type { Pokemon } from "../../utils/types";

export const PokemonGridFavorites = () => {
  const { favorites } = useFavorites();

  return (
    <div className="pokemon-grid">
        <h1 className="pokemon-grid__title">Favorites</h1>
        {favorites.length === 0 
          ? ( <p className="pokemon-grid__no-favorites">No favorites yet</p> ) 
          : (favorites.map((pokemon: Pokemon) => {
              return (
                <PokemonCard
                  key={pokemon.id}
                  pokemon={pokemon}
                />
              );
          }))} 
    </div>
  );
};
