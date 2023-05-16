// temp imports
import dishImage from "./../../../assets/images/Image 1.png";

const Listing = () => {
  return (
    <div className="listing">
      <div className="image-box">
        <img src={dishImage} alt="dish" />
      </div>
      <div className="info-box">
        <p className="title">Spicy seasoned seafood noodles</p>
        <p className="price">$ 2.29</p>
        <p className="stock">20 Bowls avaiable</p>
      </div>
    </div>
  );
};

export default Listing;
