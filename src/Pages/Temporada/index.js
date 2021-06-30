import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Capitulos from "../Temporada/temporada";
import Nav from "../../Components/Nav/index";

function Temporada() {
  return (
    <div className="app">
      <Link to="/">
        <Nav />
      </Link>

      <Capitulos />
    </div>
  );
}

export default Temporada;
