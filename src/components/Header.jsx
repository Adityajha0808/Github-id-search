import React from "react";
import DehazeIcon from "@material-ui/icons/Dehaze";

function Header() {
  return (
    <div>
      <header>
        <h1>
          <DehazeIcon className="icon" />
          <div className="myinfo">- Developed by Aditya</div> GitHub Profile
          Search
        </h1>
      </header>
    </div>
  );
}

export default Header;
