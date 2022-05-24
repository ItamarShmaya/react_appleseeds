import React from "react";
import productsData from "./store.js";
import { NavLink } from "react-router-dom";
import ProductDetail from "./ProductDetail.jsx";

export default class Products extends React.Component {
  state = { productsData: [] };

  componentDidMount = () => {
    this.setState({ productsData });
  };

  renderProductsLinks = () => {
    const { pathname: currentPath } = this.props.location;
    return this.state.productsData.map(({ id, title }) => {
      return (
        <NavLink key={id} to={`${currentPath}/${id}`}>
          {title}
        </NavLink>
      );
    });
  };
  render() {
    return <div className="products">{this.renderProductsLinks()}</div>;
  }
}
