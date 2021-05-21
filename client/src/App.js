import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Home from "./components/Home";
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/registration' component={Registration} />
        <Route exact path='/login' component={Login} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
