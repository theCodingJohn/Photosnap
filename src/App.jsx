import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Stories from "./components/Stories/Stories";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
          </Route>
          <Route exact path="/stories" component={Stories}>
          </Route>
      </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
