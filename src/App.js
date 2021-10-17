import React from "react";
import './App.css';
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/ contact";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>

      <Header />
      <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />

      </Switch>
      <Footer />

    </Router>
  );
}

export default App;