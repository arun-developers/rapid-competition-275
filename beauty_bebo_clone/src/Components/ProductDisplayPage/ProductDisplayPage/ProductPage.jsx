import React, { useEffect, useState } from "react";
import axios from "axios";
import { ProductCard } from "./ProductCard.jsx";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import "./ProductDisplay.css";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import {
  Accordion,
  Box,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";





export const ProductPage = () => {
  const [Products, setdata] = useState([]);
  const [page, setpage] = useState(1);


  const {query} = useParams();
  console.log(Products);
  const getdata = (page = 1) => {
    return axios
      .get(`http://localhost:8080/products?q=${query}&_limit=20&_page=${page}`)
      .then((re) => setdata(re.data))
      .catch((err) => console.log(err));
  };
  const handlePagination = (q) => {
    setpage(page + q);
  };
  useEffect(() => {
    getdata(page);
  }, [page]);
  return (
    <div className="fullWidth">
      <div className="product-page-holder">
        <div className="category-panel">
          <div className="category-search">
            <Accordion allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton borderBottom="1px solid #d2d0d0">
                    <div className="category">CATEGORY</div>
                    <AccordionIcon marginLeft="32" />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <p className="category-items">{">"} Face</p>
                  <p className="category-items">{">"} Eye</p>
                  <p className="category-items">{">"} Lips</p>
                  <p className="category-items">{">"} Nails</p>
                  <p className="category-items">{">"} Tools brushes</p>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="shop-by">
            <div
              className="category"
              style={{
                paddingLeft: "14px",
                fontWeight: "600",
                fontSize: "18px",
              }}
            >
              SHOP BY
            </div>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton borderBottom="1px solid #d2d0d0">
                    <div>SKIN TYPE</div>
                    <AccordionIcon marginLeft="28" />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <div className="checkbox">
                    <Checkbox>Combination</Checkbox>
                    <Checkbox>Dry</Checkbox>
                    <Checkbox>Normal</Checkbox>
                    <Checkbox>Oily</Checkbox>
                    <Checkbox>All Skin Type</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton borderBottom="1px solid #d2d0d0">
                    <div>PRICE</div>
                    <AccordionIcon marginLeft="36" />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="checkbox">
                    <Checkbox>Below ₹1,000.00</Checkbox>
                    <Checkbox>₹1,000.00 - ₹2,000.00</Checkbox>
                    <Checkbox>₹2,000.00 - ₹3,000.00</Checkbox>
                    <Checkbox>₹3,000.00 and above</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton borderBottom="1px solid #d2d0d0">
                    <div>BRAND</div>
                    <AccordionIcon marginLeft="32" />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="checkbox">
                    <Checkbox>Maybelline</Checkbox>
                    <Checkbox>Beeone</Checkbox>
                    <Checkbox>Colorbar</Checkbox>
                    <Checkbox>PAC</Checkbox>
                    <Checkbox>Gorgio Professional</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <Accordion defaultIndex={[0]} allowMultiple>
              <AccordionItem>
                <h2>
                  <AccordionButton borderBottom="1px solid #d2d0d0">
                    <div>HAIR TYPES</div>
                    <AccordionIcon marginLeft="24" />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <div className="checkbox">
                    <Checkbox>All Hair Type</Checkbox>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="advertisement">
            <img
              src="https://www.beautybebo.com/pub/media/free-delivery.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="product-view">
          <div className="query-name">{query}</div>
          <div className="sorting-container">
            <div className="sorting">
              <div>Sort :</div>
              <select name="" id="" className="select-sort">
                <option value="">Position</option>
                <option value="">Product Name</option>
                <option value="">Price : High to low</option>
                <option value="">Price : low to high</option>
              </select>
            </div>
            {/* <Pagination count={10}/ */}
            <div className="pagination">
              <button
                className="like-btn"
                onClick={() => handlePagination(-1)}
                disabled={page == 1}
              >
                <BsChevronLeft />
              </button>
              <div className="page-number">{page}</div>
              <button className="like-btn" onClick={() => handlePagination(1)}>
                <BsChevronRight />
              </button>
            </div>
          </div>
          <div className="products-section">
            {Products?.map((items) => {
              return <ProductCard products={items} key={items.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
