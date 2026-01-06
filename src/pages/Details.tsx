import { useParams, useNavigate } from "react-router-dom";
import { useQuery } from "@apollo/client/react";
import { GET_POKEMONS_DETAILS } from "../graphql/queries";
import type { GetPokemonDetailsResponse, GetPokemonVariable } from "../utils/types";
import { PokemonNumber } from "../components/atoms/PokemonNumber";
import { STATS_LABELS, TYPE_COLORS } from "../utils/const";
import "../styles/details.css";
import { DetailsSkeleton } from "../components/organisms/DetailsSkeleton";
/** Images imports */
import arrowBack from "../assets/arrow-back.svg";
import backgroundPokeball from "../assets/background-pokeball.svg";
import arrowLeftWhite from "../assets/arrow-left-white.svg";
import arrowRightWhite from "../assets/arrow-right-white.svg";
import notFoundImage from "../assets/not-found-image.svg";
import weightIcon from "../assets/weight-icon.svg";
import heightIcon from "../assets/height-icon.svg";


export const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, loading, error } = useQuery<
    GetPokemonDetailsResponse,
    GetPokemonVariable
  >(GET_POKEMONS_DETAILS, {
    variables: { id: Number(id) },
  });

  if (loading) return <DetailsSkeleton />;
  if (error || !data?.pokemon[0]) return <p>Error al cargar Pokémon</p>;

  const pokemon = data.pokemon[0];

  const lightenBackground = "color-mix(in srgb, " + (!pokemon.pokemonspecy?.pokemoncolor.name || pokemon.pokemonspecy?.pokemoncolor.name === "white" ? "#999999" : pokemon.pokemonspecy?.pokemoncolor.name) + " 70%, transparent)";
  const lightenBackgroundBar = "color-mix(in srgb, " + (!pokemon.pokemonspecy?.pokemoncolor.name || pokemon.pokemonspecy?.pokemoncolor.name === "white" ? "#999999" : pokemon.pokemonspecy?.pokemoncolor.name) + " 20%, transparent)";

  return (
    <div className="container">
      <div className="details-page" style={{ backgroundColor: lightenBackground }}>
        <img src={backgroundPokeball} alt="Background Pokeball" className="background-image" />
        <div className="header-page">
          <img src={arrowBack} alt="Back button" className="header-page__back-button" onClick={() => navigate("/")}/>
          <h1 className="header-page__pokemon-name">{pokemon.name}</h1>
          <span className="header-page__pokemon-number"><PokemonNumber id={pokemon.id} /></span>
        </div>
        <div className="image-container">
          {pokemon.id > 1
            ? ( <img src={arrowLeftWhite} alt="Arrow left" className="image-container__arrow" onClick={() => navigate(`/pokemon/${pokemon.id - 1}`)}/>)
            : (<div style={{width: "16px", height: "16px"}}></div>)
          }
          <div className="picture">
            <img src={pokemon.pokemonsprites[0].sprites ?? notFoundImage} alt={pokemon.name} className="picture__image" />
          </div>
          <img src={arrowRightWhite} alt="Arrow right" className="image-container__arrow" onClick={() => navigate(`/pokemon/${pokemon.id + 1}`)}/>
        </div>
        <div className="details-card">
            <div className="chips-abilities">
              {pokemon.pokemontypes.map(({ type }) => (
                <div key={type.name} className="chips-abilities__chip-ability" style={{ backgroundColor: TYPE_COLORS[type.name] ?? "#999" }}>
                  {type.name}
                </div>
              ))}
            </div>
            <div className="about-info">
              <h2 className="about-info__title" style={{ color: lightenBackground }}>About</h2>
              <div className="about-info-grid">
                <div className="about-info-grid-item">
                  <span className="about-info-grid-item-value">
                    <img src={weightIcon} alt="Weight icon" className="about-info-grid-item-value__icon" />
                    <label className="about-info-grid-item-value__text">{pokemon.weight / 10} kg</label>
                  </span>
                  <p className="about-info-grid-item__label">Weight</p>
                </div>
                <div className="about-info-grid-item">
                  <span className="about-info-grid-item-value">
                    <img src={heightIcon} alt="Height icon" className="about-info-grid-item-value__icon" />
                    <label className="about-info-grid-item-value__text">{pokemon.height / 10} m</label>
                  </span>
                  <p className="about-info-grid-item__label">Height</p>
                </div>
                <div className="about-info-grid-item">
                  <span className="about-info-grid-item-value about-info-grid-item-value--column">
                    {pokemon.pokemonabilities.map(({ ability }) => (
                      <label className="about-info-grid-item-value__text">{ability.name}</label>
                    ))}
                  </span>
                  <p className="about-info-grid-item__label">Moves</p>
                </div>
              </div>
              <p className="about-info__description">
                There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.
              </p>
              <div className="base-stats">
                <h2 className="base-stats__title" style={{ color: lightenBackground }}>Base Stats</h2>
                <div className="base-stats-list">
                  {pokemon.pokemonstats.map(({ stat, base_stat }) => (
                    <div className="base-stats-list-item">
                      <div className="base-stats-list-item__name" style={{ color: lightenBackground }}>{STATS_LABELS[stat.name]}</div>
                      <div className="base-stats-list-item__value">{base_stat.toString().padStart(3, "0")}</div>
                      <div className="base-stats-list-item-bar" style={{ backgroundColor: lightenBackgroundBar }}>
                        <div
                          className="base-stats-list-item-bar__fill"
                          style={{ width: `${(base_stat / 255) * 100}%`, backgroundColor: lightenBackground }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};
