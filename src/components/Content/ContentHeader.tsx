import React from "react";

// icons
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
//

type Props = {};

function ContentHeader({}: Props) {
  return (
    <div className="content-header">
      <div className="information">
        <h1>Ms Khan</h1>
        <p>Thursday, 13 April 2023</p>
      </div>
      <div className="search">
        <div className="search-box">
          <BiSearch />
          <input placeholder="search for food, coffee etc" type="text" />
        </div>
        <div className="menu-icons">
          <RxHamburgerMenu className="hb-icon" />
          <AiOutlineShoppingCart className="cart-icon" />
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
