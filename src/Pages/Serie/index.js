import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "../../Components/Nav/index";
import Cover from "./coverWrapper";
import Catalog from "../../Components/Catalog/index";

function Serie() {
  return (
    <div className="App">
      <Link to="/temporada">
        <Nav />
      </Link>

      <Cover />

      <Catalog />
    </div>
  );
}

export default Serie;
