import React from "react";
import productData from "../products.json";
import Product from "./Product";
import { Link } from "react-router-dom";

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: productData
    };
  }
  sortPrice = event => {
    console.log(event.target.value);
    if (event.target.value === "1") {
      this.setState(
        productData.sort(function(obj1, obj2) {
          return obj2.price - obj1.price;
        })
      );
    } else {
      this.setState(
        productData.sort(function(obj1, obj2) {
          return obj1.price - obj2.price;
        })
      );
    }
  };
  render() {
    var products = productData.map(function(product) {
      return (
        <li key={product.id}>
          <Product data={product} />
        </li>
      );
    });

    return (
      <div>
        <Link to="/">HomePage</Link>
        <select onChange={this.sortPrice}>
          <option value="1">Highest to lowest</option>
          <option value="2">Lowest to highest</option>
        </select>
        {products}
      </div>
    );
  }
}

export default ProductPage;
