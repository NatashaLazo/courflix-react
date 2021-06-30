import { Link } from "react-router-dom";
import { useState } from "react";
import img from "../Nav/Bitmap.png";
import "../Nav/style.scss";

function Nav() {
  return (
    <div className="header">
      <Link className="logo-wrapper" href="#">
        <img className="logo" src={img}></img>
      </Link>

      <nav className="links-wrapper">
        <Link className="link" href="#">
          Inicio
        </Link>
        <Link className="link" href="#">
          Series
        </Link>
        <Link className="link" href="#">
          Peliculas
        </Link>
        <Link className="link" href="#">
          Agregados Recientemente
        </Link>
        <Link className="link" href="#">
          Mi Lista
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
