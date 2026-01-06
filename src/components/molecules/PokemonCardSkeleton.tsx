import { SkeletonBlock } from "../atoms/SkeletonBlock";

export const PokemonCardSkeleton = () => {
  return (
    <div className="pokemon-card">
      <SkeletonBlock width="40px" height="10px" radius="5px" align="flex-end" />
      <SkeletonBlock width="72px" height="72px" radius="5px" />
      <SkeletonBlock width="70px" height="10px" radius="5px" />
    </div>
  );
};

