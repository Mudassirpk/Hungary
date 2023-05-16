import React from "react";
import { BiSearch } from "react-icons/bi";

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
      </div>
    </div>
  );
}

export default ContentHeader;
