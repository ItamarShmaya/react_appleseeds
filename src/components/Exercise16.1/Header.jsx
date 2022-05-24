import React from "react";
import { NavLink } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <NavLink to="/">Homepage</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
    );
  }
}
