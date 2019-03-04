import React from "react";
let productPrice = 0;
class Product extends React.Component {
  constructor(props) {
    super(props);
    var data = this.props.data;
    this.state = {
      products: data
    };
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct = () => {
    if (!this.state.products.isInCart) {
      alert("Item added");
      productPrice += this.state.products.price;
      this.setState(Object.assign(this.state.products, { isInCart: true }));
      sessionStorage.setItem("data", productPrice);
    } else {
      alert("Item Removed");
      productPrice -= this.state.products.price;
      this.setState(Object.assign(this.state.products, { isInCart: false }));
      sessionStorage.setItem("data", productPrice);
    }
  };
  render() {
    return (
      <div>
        <h3>{this.state.products.name}</h3>
        <div>{this.state.products.price}</div>
        <div>
          <button onClick={this.addProduct}>
            {this.state.products.isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    );
  }
}
export default Product;
