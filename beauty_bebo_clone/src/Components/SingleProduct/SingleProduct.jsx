import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import axios from "axios";
import { BsCheckLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import {TiShoppingCart} from 'react-icons/ti'
import {AiFillHeart} from "react-icons/ai"
import {FiChevronUp,FiChevronDown}from "react-icons/fi"
export const SingleProduct = () => {
  const [data, setdata] = useState({});
  const [qty,setqty]=useState(1)
  const getdata = (page = 1) => {
    return axios
      .get(`http://localhost:8080/products/1?_limit=20&_page=${page}`)
      .then((re) => setdata(re.data))
      .catch((err) => console.log(err));
  };
  console.log(data);
  useEffect(() => {
    getdata();
  }, []);
  const image = data?.api_featured_image;
  const name = data?.name;
  const price = data?.price;
  const color=data?.product_colors?.splice(0,2)
  console.log(color)
  return (
    <div className="single-container">
      <div className="single-product">
        <div className="product-img">
          <img src={image} alt="" />
        </div>
        <div className="single-product-details">
          <div className="single-product-name">{name}</div>
          <p>(1 pieces)</p>
          <div className="single-details">
            <div className="single-product-rating">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <div className="in-stock">
              <BsCheckLg />
              In stock
            </div>
            <div>
            <div className="sku-number">SKU <span>BBJ0004077</span></div>
            <div>(Inclusive of all taxes)</div>
            </div>
            <div className="brand">
              `Brand : ${data.brand}`
            </div>
            <div className="quantity">
              <div>Qty</div>
              <div className="qty-btn">
              <FiChevronDown/>
              <div>{qty}</div>
              <FiChevronUp/>
              </div>
              <button className="add-to-cart">
              <TiShoppingCart className="cart-icon" />
              Add to Cart
              </button>
              <button className="like-btn">
            <AiFillHeart />
          </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
