import { PokemonCardSkeleton } from "../molecules/PokemonCardSkeleton";

export const PokemonGridSkeleton = () => {
  return (
    <div className="pokemon-grid">
      {Array.from({ length: 12 }).map((_, index) => (
        <PokemonCardSkeleton key={index} />
      ))}
    </div>
  );
};

