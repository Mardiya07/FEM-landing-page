import React from "react";

function Navlink({ name, url }) {
  return (
    <div className="navlink">
      <a href={url}>{name}</a>
    </div>
  );
}

export default Navlink;
