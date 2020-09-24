import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./pages/main";
import Products from "./pages/products";
import Product from "./pages/product/";
import Header from "./components/header";

const Routes = () => (
  <BrowserRouter>
    <Header></Header>
    <Switch>
      <Route exact path="/" component={Main}></Route>
      <Route exact path="/products" component={Products}></Route>
      <Route exact path="/products/:id" component={Product}></Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
