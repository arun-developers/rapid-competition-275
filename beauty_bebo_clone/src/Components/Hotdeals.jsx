import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
const data = [
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:400,
        price:200,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    }
    ,{
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    },
    {
        image:"https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/b/b/bbj0001565-1.jpg",
        title:"aroma magic activated bamboo charcoal face wash",
        rating:0,
        pre_price:0,
        price:0,
    }
]
export default function Hotdeals(){
    return <>
    <Scroller>
    <Heading >HOTDEALS</Heading>
        <Divwrapper>
            {
                data.map((ele,index)=>{
                    return <a href=""><ProductCard data={ele}/></a>
                })
            }
        </Divwrapper>
    </Scroller>
    </>
}

export const Scroller = styled.div`
border:1px solid teal;
width:90%;
// padding:10px;
height:35vw;
margin:auto;
margin-top:10px;
@media all and (max-width:770px) and (min-width:200px){
    height:40vw;
}
@media all and (max-width:990px) and (min-width:770px){
    height:25vw;
}
@media all and (max-width:1400px) and (min-width:990px){
    height:35vw;
}
`
export const Divwrapper = styled.div`
    // border:1px solid red;
    width:100%;
    height:90%;
    display:grid;
    grid-template-columns:repeat(16,2fr);
    overflow:auto;
    ::-webkit-scrollbar {
        display: none;
      }
`

export const Heading = styled.div`
text-align:left;
border-bottom:2px solid red;
width:8%;
font-size:110%;
font-weight:bold;
display:flex;
align-item:center;
height:5%;
margin-top:0.5%;
@media all and (max-width:500px) and (min-width:200px){
    font-size:60%;
    height:8%;
}
@media all and (max-width:770px) and (min-width:500px){
    font-size:80%;
    height:8%;
}
@media all and (max-width:990px) and (min-width:770px){
    font-size:90%;
    height:7%;
}
@media all and (max-width:1400px) and (min-width:990px){
    font-size:110%;
    height:5%;
}
` 