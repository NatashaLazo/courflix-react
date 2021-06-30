import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Pages/Inicio/App";
import Serie from "./Pages/Serie/index";
import Temporada from "../src/Pages/Temporada/index";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Route exact path="/">
      <App />
    </Route>
    <Route exact path="/serie">
      <Serie />
    </Route>
    <Route exact path="/temporada">
      <Temporada />
    </Route>
  </Router>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
