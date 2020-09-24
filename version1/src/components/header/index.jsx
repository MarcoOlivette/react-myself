import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => (
  <header>
    <h1>Links</h1>
    <nav>
      <ul>
        <Link to={"/"}>Principal</Link>
        <Link to={"/contact"}>Contatos</Link>
        <Link to={"/products"}>Lista de produtos</Link>
      </ul>
    </nav>
  </header>
);
export default Header;
