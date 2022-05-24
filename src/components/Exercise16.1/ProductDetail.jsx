import React from "react";
import { NavLink } from "react-router-dom";
import productsData from "./store";
import NotFound from "./NotFound";

export default class ProductDetail extends React.Component {
  state = { product: {} };

  componentDidMount = () => {
    this.getProduct();
  };

  getProduct = () => {
    for (let product of productsData) {
      if (product.id === +this.props.match.params.id) {
        this.setState({ product });
        break;
      }
    }
  };

  render() {
    const { product } = this.state;
    const exist = Object.keys(product).length !== 0;

    return (
      <>
        {exist ? (
          <div className="product">
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <img alt="something" src={product.imageUrl} />
          </div>
        ) : (
          <NotFound item="Product" />
        )}
        <NavLink className="backButton" to="/products">
          Back
        </NavLink>
      </>
    );
  }
}
