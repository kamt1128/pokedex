import { useQuery } from "@apollo/client/react";
import { GET_POKEMONS, GET_POKEMONS_SEARCH } from "../../graphql/queries";
import { PokemonCard } from "../molecules/PokemonCard";
import { PokemonGridSkeleton } from "./PokemonGridSkeleton";
import type { GetPokemonsSearchResponse, GetPokemonsSearchVariables, Pokemon } from "../../utils/types";
import { PAGINATION_SIZE } from "../../utils/const";

type Props = {
  orderBy: "name" | "id";
  search: string;
  paginationPage: number;
  setPaginationPage: (page: number) => void;
};

export const PokemonGrid = ({ orderBy, search, paginationPage, setPaginationPage }: Props) => {
  
  const { data, loading } = useQuery<
  GetPokemonsSearchResponse,
  GetPokemonsSearchVariables
>(search ? GET_POKEMONS_SEARCH : GET_POKEMONS, {
    variables: {
      page: paginationPage * PAGINATION_SIZE,
      limit: PAGINATION_SIZE,
      name: "%" + search + "%",
      id: Number(search) || -1,
      orderBy: [{ [orderBy]: "asc" }],
    },
    fetchPolicy: "cache-and-network",
  });

  if (loading || !data) return <PokemonGridSkeleton />;

  return (
    <div className="pokemon-grid">
      {data.pokemon.map((pokemon: Pokemon) => {
        return (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
          />
        );
      })}
      {data.pokemon.length >= PAGINATION_SIZE && (
        <div className="pagination">
          <button className="pagination-button" onClick={() => setPaginationPage(Math.max(paginationPage - 1, 0))} disabled={paginationPage === 0}>
            <img src="/src/assets/arrow-left.svg" alt="" className="pagination-button__icon" />
          </button>
          <button className="pagination-button" onClick={() => setPaginationPage(paginationPage + 1)} disabled={data.pokemon.length < PAGINATION_SIZE}>
            <img src="/src/assets/arrow-right.svg" alt="" className="pagination-button__icon" />
          </button>
        </div>
      )}
    </div>
  );
};
