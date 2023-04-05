import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <div className="product-card">
        <img
          src="https://picsum.photos/200/300"
          alt="product"
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">Product 1</h2>
          <p className="product-description">
            This is a description of product 1.
          </p>
          <p className="product-price">$9.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="product-card">
        <img
          src="https://picsum.photos/200/300"
          alt="product"
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">Product 2</h2>
          <p className="product-description">
            This is a description of product 2.
          </p>
          <p className="product-price">$19.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="product-card">
        <img
          src="https://picsum.photos/200/300"
          alt="product"
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">Product 3</h2>
          <p className="product-description">
            This is a description of product 3.
          </p>
          <p className="product-price">$29.99</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
