type Props = {
  value: string;
  onChange: (value: string) => void;
};

export const SearchInput = ({ value, onChange }: Props) => {
  return (
    <div className="search-container">
      <img src="src/assets/search-icon.svg" alt="Search Icon" className="search-icon" />
      <input
        className="search-input"
        placeholder="Search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      { value !== "" ? (
          <img src="src/assets/clear-icon.svg" alt="Clear input icon" className="clear-icon" onClick={() => onChange("")} />
        ) : null
      }
    </div>
    
  );
};
