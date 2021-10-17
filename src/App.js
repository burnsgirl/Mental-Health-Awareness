import React from "react";
import './App.css';
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/ contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;