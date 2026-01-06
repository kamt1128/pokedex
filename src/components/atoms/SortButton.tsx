import { useState } from "react";
/** Images imports */
import numeralSymbol from "../../assets/numeral-symbol.svg";
import alphabeticalSymbol from "../../assets/alphabetical-symbol.svg";

type SortType = "id" | "name";

type Props = {
  value: SortType;
  onChange: (value: SortType) => void;
};


export const SortButton = ({ value, onChange }: Props) => {
  const [showModal, setShowModal] = useState(false);
  const [sortSymbol, setSortSymbol] = useState(numeralSymbol);

  return (
    <div className="sort">
      <button onClick={() => setShowModal(!showModal)} className="sort-button">
        <img src={sortSymbol} alt="Sort symbol" className="sort-button__symbol" />
      </button>
      { showModal && 
        ( 
          <div className="sort-modal">
          <div className="sort-modal__backdrop" onClick={() => setShowModal(!showModal)}></div>
            <div className="sort-selector-modal">
              <h2 className="sort-selector-modal__title">Sort by:</h2>
              <div className="radio-buttons-set">
                <div className="radio-button">
                  <input
                    type="radio"
                    name="sort"
                    value="id"
                    checked={value === "id"}
                    className="radio-button__input"
                    onChange={() => { onChange("id"); setShowModal(!showModal); setSortSymbol(numeralSymbol)}} />
                  <label className="radio-button__label">Number</label>
                  </div>
                <div className="radio-button">
                  <input
                    type="radio"
                    name="sort"
                    value="name"
                    checked={value === "name"}
                    className="radio-button__input"
                    onChange={() => { onChange("name"); setShowModal(!showModal); setSortSymbol(alphabeticalSymbol)}} />
                  <label className="radio-button__label">Name</label>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  );
};
