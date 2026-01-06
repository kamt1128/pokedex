/** Images imports */
import searchIcon from "../../assets/search-icon.svg";
import clearIcon from "../../assets/clear-icon.svg";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div className="search-container">
      <img src={searchIcon} alt="Search Icon" className="search-icon" />
      <input
        className="search-input"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      { value !== "" ? (
          <img src={clearIcon} alt="Clear input icon" className="clear-icon" onClick={() => onChange("")} />
        ) : null
      }
    </div>
    
  );
};
