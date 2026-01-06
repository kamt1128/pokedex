export type GetPokemonsSearchResponse = {
  pokemon: Pokemon[];
};

export type GetPokemonDetailsResponse = {
  pokemon: PokemonDetails[];
};

export type Pokemon = {
  id: number;
  name: string;
  pokemonsprites: PokemonSprite[];
};

export type PokemonSprite = {
  sprites: string;
};

export type GetPokemonsSearchVariables = {
  page: number;
  limit: number;
  name?: string | null;
  id?: number | null;
  orderBy: {
    name?: "asc" | "desc";
    id?: "asc" | "desc";
  }[];
};

export type GetPokemonVariable = {
  id: number | null;
};

export type PokemonDetails = {
  id: number;
  name: string;
  height: number;
  weight: number;

  pokemontypes: {
    type: {
      name: string;
    };
  }[];

  pokemonabilities: {
    ability: {
      name: string;
    };
  }[];

  pokemonstats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];

  pokemonspecy: {
    pokemoncolor: {
      name: string;
    };
  } | null;

  pokemonsprites: {
    sprites: string | null;
  }[];
};