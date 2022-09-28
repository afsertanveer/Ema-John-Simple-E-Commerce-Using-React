import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';
import './Product.css';
const Product = ( { handleAddToCart,product }) => {
  const { img, name, price, seller, ratings } = product;
    return (
      <div className="product">
        <img src={img? img:'No Data Found'} alt="" />
        <div className="product-info">
          <p className="product-name">{name}</p>
          <p>Price:${price}</p>
          <p>
            <small>Seller:{seller}</small>
          </p>
          <p>
            <small>Ratings:{ratings}</small>
          </p>
        </div>
        <button className="button-cart" onClick={()=>handleAddToCart(product)}>
          <p className='btn-text'>Add To Cart</p>
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    );
};

export default Product;