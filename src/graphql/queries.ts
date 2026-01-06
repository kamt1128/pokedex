import { gql } from '@apollo/client';

export const GET_POKEMONS = gql`
  query GetPokemons($page: Int!, $limit: Int!, $orderBy: [pokemon_order_by!]) {
    pokemon(
      order_by: $orderBy,
      limit: $limit,
      offset: $page,
    ) {
      id
      name
      pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
    }
  }
`;

export const GET_POKEMONS_SEARCH = gql`
  query GetPokemonsSearch($page: Int!, $limit: Int!, $name: String!, $id: Int!, $orderBy: [pokemon_order_by!]) {
    pokemon(
      order_by: $orderBy
      limit: $limit,
      offset: $page,
      where: {_or: [
          {name: {_ilike: $name}}, 
          {id: {_eq: $id}}
        ]
      }
    ) {
      name
      id
      pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
    }
  }
`;

export const GET_POKEMONS_DETAILS = gql`
  query GetPokemonDetails($id: Int!) {
    pokemon(where: {id: {_eq: $id}}) {
      id
      name
      height
      weight
      pokemontypes {
        type {
          name
        }
      }
      pokemonabilities {
        ability {
          name
        }
      }
      pokemonstats {
        base_stat
        stat {
          name
        }
      }
      pokemonspecy {
        pokemoncolor {
          name
        }
      }
      pokemonsprites {
        sprites(path: "other.official-artwork.front_default")
      }
    }
  }
`;