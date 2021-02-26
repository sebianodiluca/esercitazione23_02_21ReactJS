import React from "react";
import { PropTypes } from "prop-types";

import "./Body.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProducts: false,
    };
  }

  makeProductsVisible() {
    this.setState({ showProducts: true });
  }

  render() {
    const { image, title, products } = this.props;
    const { showProducts } = this.state;

    return (
      <main className="Body">
        <img src={image} alt={title} />
        <div className="content">
          <h1>{title}</h1>
          <div className="products-container">
            {showProducts ? (
              products.map ((product) => {
                return <h1>ciao</h1> 
              })
            ) : (
              <button onClick={() => this.makeProductsVisible()}>
                Show products2
              </button>
            )}
          </div>
        </div>
      </main>
    );
  }
}

Product.propTypes = {
  image: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
};

export default Product;