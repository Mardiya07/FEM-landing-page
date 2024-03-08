import React from "react";
import Logo from "./Logo";
import { navlink } from "../assets/data";
import Navlink from "./Navlink";

function Navigation() {
  return (
    <div className="navigation">
      <Logo />
      {/* create a wrapper here to fix spacing out of individual navlinks */}
      <div className="navlinksContainer">
        {navlink.map((linkItem, index) => {
          return (
            <Navlink key={linkItem} name={linkItem.name} url={linkItem.url} />
          );
        })}
      </div>
    </div>
  );
}

export default Navigation;
