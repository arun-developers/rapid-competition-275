import React, { useEffect, useState } from "react";
import "./SingleProduct.css";
import axios from "axios";
import { BsCheckLg } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { TiShoppingCart } from "react-icons/ti";
import { AiFillHeart } from "react-icons/ai";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  AccordionIcon,
} from "@chakra-ui/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
export const SingleProduct = () => {
  const [data, setdata] = useState({});
  const [qty, setqty] = useState(1);
  const handleQty = (q) => {
    setqty(qty + q);
  };
  const getdata = (page = 1) => {
    return axios
      .get(`http://localhost:8080/products/1042?_limit=20&_page=${page}`)
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
  const color = data?.product_colors?.splice(0, 2);
  console.log(color);
  return (
    <div className="main-container">
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
                <div className="sku-number">
                  SKU <span style={{ color: "grey" }}>BBJ0004077</span>
                </div>
                <div className="price-box">
                  <div className="price">{`$ ${price}`}</div>
                  <div style={{ fontSize: "14px" }}>
                    (Inclusive of all taxes)
                  </div>
                </div>
              </div>
              <div className="brand">{`Brand : ${data.brand}`}</div>
              <div className="quantity">
                <div>Qty</div>
                <div className="qty-btn">
                  <button
                    disabled={qty == 1 ? true : false}
                    onClick={() => handleQty(-1)}
                  >
                    <FiChevronDown className="down-icon" />
                  </button>
                  <div>{qty}</div>
                  <button
                    onClick={() => handleQty(1)}
                    disabled={qty == 10 ? true : false}
                  >
                    <FiChevronUp className="down-icon" />
                  </button>
                </div>
                <button className="add-to-cart">
                  <TiShoppingCart className="cart-icon" />
                  Add to Cart
                </button>
                <button className="like-btn-h">
                  <AiFillHeart className="heart-icon" />
                </button>
              </div>
              <div className="input-area">
                <div className="delivery-check">
                  <p>Check Delivery</p>
                  <input type="text" placeholder="Zipcode" />
                  <button>CHECK</button>
                </div>
                <div className="static-box">
                  <div className="geniune">
                    <img
                      src="https://www.beautybebo.com/pub/media/wysiwyg/genuine_product.png"
                      alt="product-geinuine"
                    />
                    <p>100% GENUINE PRODUCT</p>
                  </div>
                  <div className="geniune">
                    <img
                      src="https://www.beautybebo.com/pub/media/wysiwyg/return_product.png"
                      alt="easy-return"
                    />
                    <p>EASY RETURN POLICY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="accordian">
        <Accordion defaultIndex={[0]} allowMultiple>
          <AccordionItem className="accordian-details">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" className="acc-heading">
                  Details
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="single-product-desc">
                <div>{data?.description}</div>
                <div className="mrp">{`MRP : ${price}`}</div>
                <div>Best Before : FEB 2025</div>
                <div className="acc-text">
                  <span style={{ fontWeight: "500" }}>About the Brand : </span>
                  Started in 2008, {data?.brand} is the world's fastest growing
                  beauty brand with a strong geographical footprint, inspiring
                  woman to stay unique and classy.
                </div>
                <div className="acc-text">Origin: Made In China</div>
                <div className="acc-text">
                  <span style={{ fontWeight: "500" }}>
                    NAME OF MFG / IMPORTER / BRAND :{" "}
                  </span>{" "}
                  yiwu retin-a import and export co.,ltd
                </div>
                <div className="acc-text">
                  <span style={{ fontWeight: "500" }}>
                    ADDRESS OF MFG / IMPORTER / BRAND :{" "}
                  </span>
                  yiwu retin-a import and export co.,ltd add :room 601 unit 4
                  xianggangcheng 4 district choucheng street yiwu zhejiang
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem className="accordian-details" defaultIndex={[0]}>
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" className="acc-heading">
                  More Information
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="acc-de-tails">
                <div>
                  <p>Skin type</p>
                </div>
                <div>
                  <p>All Skin types</p>
                </div>
              </div>
              <div className="acc-de-tails">
                <div>
                  <p>Shades</p>
                </div>
                <div>
                  <p>Peach Rose</p>
                </div>
              </div>
              <div className="acc-de-tails">
                <div>
                  <p>Brand</p>
                </div>
                <div>
                  <p>{data?.brand}</p>
                </div>
              </div>
              <div className="acc-de-tails">
                <div>
                  <p>Weight</p>
                </div>
                <div>
                  <p>12gm</p>
                </div>
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="accordian-details">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" className="acc-heading">
                  How to Use
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="single-product-desc">
                Blend the shadows seamlessly together, using darker shades in
                the crease, and lighter hues along the brow bone and inner
                corners of the eye. Using a smudge or liner brush, apply one of
                the darker shades along the top and bottom lash line. With your
                ring finger, or by using a setting spray on an eyeshadow brush,
                apply the shimmer shade to the center of your eyelid to amp up
                the glamour.
              </div>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem className="accordian-details">
            <h2>
              <AccordionButton>
                <Box flex="1" textAlign="left" className="acc-heading">
                  Reviews (no reviews yet)
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <div className="single-product-desc">
                Be the first one to review it
              </div>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
