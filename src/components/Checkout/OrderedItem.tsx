import React from "react";

type Props = {};

// icons
import { AiOutlineDelete } from "react-icons/ai";

// images
import itemImage from "./../../assets/images/Image 1.png";

const OrderedItem = (props: Props) => {
  return (
    <div className="ordered-item">
      <div className="info">
        <div className="item-information">
          <div className="img-box">
            <img src={itemImage} alt="item-image" />
          </div>
          <div className="text-box">
            <p className="title">Spicy seasoned chicken</p>
            <p className="price-number">$ 2.29</p>
          </div>
        </div>
        <div className="qty">
          <p>2</p>
        </div>
        <div className="price">$ 4.57</div>
      </div>
      <div className="actions">
        <div className="specials">
          <input type="text" placeholder="A little more spicy.." />
        </div>
        <div className="delete">
          <AiOutlineDelete />
        </div>
      </div>
    </div>
  );
};

export default OrderedItem;
