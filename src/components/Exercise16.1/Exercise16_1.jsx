import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Header from "./Header";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import NotFound from "./NotFound";
import "./style.css";

export default class Exercise16_1 extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/products" exact component={Products} />
            <Route path="/products/:id" exact component={ProductDetail} />
            <Route path="*" component={NotFound} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
