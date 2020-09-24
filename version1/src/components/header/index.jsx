import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <header>
    <nav>
      <ul>
        <Link to={"/"} className="link">Principal</Link>
        <Link to={"/contact"} className="link">Contatos</Link>
        <Link to={"/products"} className="link">Lista de produtos</Link>
      </ul>
    </nav>
  </header>
);
export default Header;
