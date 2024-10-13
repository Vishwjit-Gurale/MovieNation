import React from "react";
import "./Header.css";
function Header() {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
    Movies Nation
    </span>
  );
}

export default Header;
