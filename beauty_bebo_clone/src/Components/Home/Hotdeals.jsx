import React from "react";
import styled from "styled-components";
import HotDealCard from "./HotDealCard";
// import ProductCard from "./ProductCard";
const data = [
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title: "aroma magic activated bamboo charcoal face wash",
        rating: 0,
        pre_prce: 400,
        price: 200,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_210_4.jpg",
        title: "clinic plus strong & long health shampoo (650ml)",
        rating: 0,
        pre_prce: 445,
        price: 223,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-202.jpg",
        title: "clinic plus strong & long health shampoo - 650ml each (pack of 2)",
        rating: 0,
        pre_prce: 890,
        price: 445,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_5_2.jpg",
        title: "clinic plus strong & long health shampoo - 340ml each (pack of 2)",
        rating: 0,
        pre_prce: 318,
        price: 191,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/a/aaa_3.jpg",
        title: "gillette venus breeze razor with avocado oil",
        rating: 0,
        pre_prce: 325,
        price: 286,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/1/_/1_209_6.jpg",
        title: "gillette venus razor with aloe extract for women",
        rating: 0,
        pre_prce: 249,
        price: 200,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001368-2.jpg",
        title: "head & shoulders 2 in 1 active protect anti dandruff shampoo + conditioner",
        rating: 0,
        pre_prce: 350,
        price: 263,
    },
    {
        image: "	https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/a/n/anti_hair_fall_shampoo-2.png",
        title: "head & shoulders anti-dandruff anti hair fall shampoo - 340ml",
        rating: 0,
        pre_prce: 285,
        price: 200,
    },
    {
        image: "	https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001370-2.jpg",
        title: "head & shoulders anti-dandruff anti hair fall shampoo",
        rating: 0,
        pre_prce: 285,
        price: 200
    }
    , {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001555-3.jpg",
        title: "head & shoulders cool menthol 2-in-1 anti-dandruff shampoo + conditioner",
        rating: 0,
        pre_prce: 285,
        price: 200
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/2/_/2_in_1_active_protect_anti_dandruff_shampoo_conditioner-2.png",
        title: "head & shoulders smooth & silky anti dandruff shampoo",
        rating: 0,
        pre_prce: 550,
        price: 443,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/g/g/ggggghh.jpg",
        title: "Himalaya Herbals Anti-Wrinkle Cream",
        rating: 0,
        pre_prce: 250,
        price: 200,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001776-1.jpg",
        title: "Himalaya Herbals Himalaya Men Pimple Clear Neem Face Wash",
        rating: 0,
        pre_prce: 161,
        price: 128,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/_/1/.111.jpg",
        title: "Himalaya Herbals Purifying Neem Foaming Face Wash - pack of 2",
        rating: 0,
        pre_prce: 470,
        price: 423,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_4.jpg",
        title: "Joy Even Tone Bright Radiance Skin Brightening Body Lotion - Get Free NIVEA Deodorant Roll On - Pearl & Beauty",
        rating: 0,
        pre_prce: 494,
        price: 295,
    },
    {
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_5_1.jpg",
        title: "Kamasutra Spark Deodorant Spray For Men (Buy 1 Get 1 Free) - 260ml each",
        rating: 0,
        pre_prce: 0,
        price: 299,
    }
]
export default function Hotdeals() {
    return <>
        <Scroller>
            <Heading >HOTDEALS</Heading>
            <Divwrapper>
            {
                data.map((ele,index)=>{
                    return <HotDealCard width={"23vw"} direction={true} key ={index} data={ele}/>
                })
            }
        </Divwrapper>
        </Scroller>
    </>
}

export const Scroller = styled.div`
width:90%;
height: fit-content;
padding-bottom: 20px;
margin:auto;
margin-top:30px;

`
export const Divwrapper = styled.div`
    width: 100%;
    height: fit-content;
    display:grid;
    border:1px solid #ebebeb;
    border-radius:5px;
    padding:5px 0px;
    grid-template-columns:repeat(16,2fr);
    overflow:auto;
    ::-webkit-scrollbar {
        display: none;
      }

    // @media all and (max-width:770px) and (min-width:200px){
    //     height:35vw;
    // }
    // @media all and (max-width:990px) and (min-width:770px){
    //     height:25vw;
    // }
    // @media all and (max-width:1400px) and (min-width:990px){
    //     height:35vw;
    // }
`

export const Heading = styled.div`
text-align:left;
border-bottom:2px solid red;
width: 79px;
    height: fit-content;
    font-size: 20px;
font-weight:bold;
display:flex;
align-item:center;
margin-top:0.5%;
@media all and (max-width:500px) and (min-width:200px){
    font-size:12px;
    width:45px
}
@media all and (max-width:771px) and (min-width:500px){
    font-size:15px;
    width:15px;
}
@media all and (max-width:990px) and (min-width:771px){
    width: 70px;
    font-size: 17px;
}

` 