// components
import ListingsHeader from "./ListingsHeader";
import ListingGrid from "./ListingGrid";

// styles
import "./Listings.scss";

const Listings = () => {
  return (
    <section className="listings">
      <ListingsHeader />
      <ListingGrid />
    </section>
  );
};

export default Listings;
