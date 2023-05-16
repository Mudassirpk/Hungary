import { useState } from "react";

const ContentMenu = () => {
  const [selectedOption, setSelectedOption] = useState<number>(1);

  function handleSelection(option: number) {
    setSelectedOption(option);
  }

  return (
    <div className="content-menu">
      <ul className="options-list">
        <li
          onClick={() => handleSelection(1)}
          className={selectedOption === 1 ? "selected" : ""}
        >
          Hot Dishes
        </li>
        <li
          onClick={() => handleSelection(2)}
          className={selectedOption === 2 ? "selected" : ""}
        >
          Cold Dishes
        </li>
        <li
          onClick={() => handleSelection(3)}
          className={selectedOption === 3 ? "selected" : ""}
        >
          Soup
        </li>
        <li
          onClick={() => handleSelection(4)}
          className={selectedOption === 4 ? "selected" : ""}
        >
          Grill
        </li>
        <li
          onClick={() => handleSelection(5)}
          className={selectedOption === 5 ? "selected" : ""}
        >
          Appetizer
        </li>
        <li
          onClick={() => handleSelection(6)}
          className={selectedOption === 6 ? "selected" : ""}
        >
          Dessert
        </li>
      </ul>
      <div className="progress-line"></div>
    </div>
  );
};

export default ContentMenu;
