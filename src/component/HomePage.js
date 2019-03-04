import React from "react";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Link to="/products">Products</Link>
        <br />
        <Link to="/checkout">Checkout</Link>
      </div>
    );
  }
}

export default HomePage;
