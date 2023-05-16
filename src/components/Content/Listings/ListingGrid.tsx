import "./ListingGrid.scss";

// compnents
import Listing from "./Listing";

const ListingGrid = () => {
  return (
    <div className="listing-grid">
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
      <Listing />
    </div>
  );
};

export default ListingGrid;
