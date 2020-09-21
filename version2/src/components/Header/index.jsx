import React from "react";
import {Link} from "react-router-dom";

const Header = () => (
  <div>
    <h1> Links</h1>
    <Link to={"/product"}>Product</Link>
    <Link to={"/Contact"}>Contact</Link>
    <Link to={"/"}>Main</Link>
  </div>
);

export default Header;
