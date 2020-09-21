import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Product from "./pages/product";
import Contact from "./pages/contact";
import Header from "./components/Header";

const Routes = () => (
    
  <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route path="/product" component={Product}></Route>
      <Route path="/contact" component={Contact}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
