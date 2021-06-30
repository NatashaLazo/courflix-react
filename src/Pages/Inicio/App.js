import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Nav from "./../../Components/Nav/index";
import CoverWrapper from "./../../Components/Coverwrapper/index";
import Catalog from "./../../Components/Catalog/index";

function App() {
  return (
    <div className="App">
      <Link to="/serie">
        <Nav />
      </Link>

      <CoverWrapper />

      <Catalog />
    </div>
  );
}

export default App;
