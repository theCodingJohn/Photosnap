import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";


function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
