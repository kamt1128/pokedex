import { useState } from "react";
import { SearchInput } from "../components/atoms/SearchInput";
import { PokemonGrid } from "../components/organisms/PokemonGrid";
import { SortButton } from "../components/atoms/SortButton";
import { Link } from "react-router-dom";
import "../styles/home.css";

/** Images imports */
import pokeball from "../assets/pokeball.svg";
import starWhiteIcon from "../assets/star-white-icon.svg";

export const HomePage = () => {
  const [search, setSearch] = useState("");
  const [orderBy, setOrderBy] = useState<"name" | "id">("id");
  const [paginationPage, setPaginationPage] = useState(0);

  const handleOrderByChange = (value: "name" | "id") => {
    setOrderBy(value);
    setPaginationPage(0);
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPaginationPage(0);
  };


  return (
    <div className="container">
      <div className="home">
        <header className="header">
          <div className="brand">
            <img src={pokeball} alt="Pokeball" className="brand__logo" />
            <h1 className="brand__title">Pokédex</h1>
            <div className="favorites-link">
              <Link to="/favorites">
                <img src={starWhiteIcon} alt="Favorites" className="favorites-link__icon" />
              </Link>
            </div>
          </div>
          <div className="controls">
            <SearchInput value={search} onChange={handleSearchChange} />
            <SortButton value={orderBy} onChange={handleOrderByChange} />
          </div>
        </header>

        <PokemonGrid orderBy={orderBy} search={search} paginationPage={paginationPage} setPaginationPage={setPaginationPage} />
      </div>
    </div>
  );
};
