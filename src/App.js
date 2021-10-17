import React from "react";
import './App.css';
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/ contact";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import About from "./Pages/About/about";
import Resources from "./Pages/Resources/resources";
import GetHelp from "./Pages/Get-Help/get-help";
import WarningSigns from "./Pages/Warning-Signs/warning-signs";
import HowToHelp from "./Pages/How-To-Help/how-to-help";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>

      <Header />
      <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/resources" component={Resources} />
      <Route exact path="/about" component={About} />
      <Route exact path="/how-to-help" component={HowToHelp} />
      <Route exact path="/warning-signs" component={WarningSigns} />
      <Route exact path="/get-help" component={GetHelp} />

      </Switch>
      <Footer />

    </Router>
  );
}

export default App;