import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';

function Header() {
  return (
    <div>
      <header>
        <h1>
          <GitHubIcon className="icon" />
          <div className="myinfo">- Developed by Aditya</div> GitHub Profile
          Search
        </h1>
      </header>
    </div>
  );
}

export default Header;
