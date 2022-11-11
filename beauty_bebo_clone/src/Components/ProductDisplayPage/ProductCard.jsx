import React from "react";
import "./ProductDisplay.css";
import { AiFillStar } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
export const ProductCard = ({ products }) => {
  const Name = products?.name;

  const image = products?.api_featured_image;
  console.log(image);
  const price = products?.price;
  const priceSign = products?.price_sign;
  return (
    <div className="product-card">
      <img src={image} alt={Name} className='product-card-img' />
      <div className="product-name">{Name}</div>
      <div className="product-card-details">
        <div className="product-card-rating">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <div className="product-card-price">{`${priceSign} ${price}`}</div>
        <div className="btns">
          <button className="product-card-btn">
            <div className="btn">
              <TiShoppingCart className="cart-icon" />
              Add to Cart
            </div>
          </button>
          <button className="like-btn">
            <AiFillHeart />
          </button>
        </div>
      </div>
    </div>
  );
};
