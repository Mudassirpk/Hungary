import { useState } from "react";

// icons
import { BiChevronDown } from "react-icons/bi";

const ListingsHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  return (
    <div className="listings-header">
      <h1 className="listings-heading">Choose Dishes</h1>
      <div className="listings-filter">
        <div className="selected-filters">
          <BiChevronDown
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="chev-down"
          />
          <p>Dine In</p>
        </div>
        {isDropdownOpen ? (
          <div className="filter-options">
            <p>Take out</p>
            <p>Drive thru</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ListingsHeader;
