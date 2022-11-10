import React from "react";
import styled from "styled-components";
import {AiFillStar} from 'react-icons/ai';
import {BiRupee} from 'react-icons/bi'
import {BsFillBasketFill} from 'react-icons/bs';
import {AiOutlineHeart} from 'react-icons/ai';
import {AiFillEye} from 'react-icons/ai';
export default function ProductCard({data}){
   let arr = [0,0,0,0,0];
   let num = Math.floor(Math.random() *6 )
   let discount = (Number(data.price)/Number(data.pre_price))*100;
    return (
    <Wrapper>
            <Icon>
                <AiFillEye/>
            </Icon>
            <div>
                <img src={data.image} alt="product_image" />
            </div>
            <div>
                <h2>{data.title}</h2>
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',color:"yellow"}}>
               {
                arr.map((ele)=>{
                    return <AiFillStar/>
               })
            }
            <span style={{fontSize:'12px',color:'gray'}}>({num})</span>
            </div>
            <div>
                <div></div>
                <div style={{display:'flex',justifyContent:'center',alignItems:"center",color:'#dd0285'}}>
                    <del style={{color:"gray",display:'flex',alignItems:'center'}}><BiRupee/>{data.pre_price}.00</del>
                    <BiRupee/>{data.price} <span style={{color:'green'}}>{discount}%  OFF</span>
                </div>
            </div>
            <div style={{display:'flex',alignItems:'center',justifyContent:'center',gap:"10px"}}>
                <button style={{display:'flex',alignItems:'center',justifyContent:'center',backgroundColor:'#dd0285',padding:'5px',borderRadius:'10px',color:"white",width:'120px',gap:'10px'}}><BsFillBasketFill/>{" "}Add To cart</button>
                <button style={{width:'30px',height:'30px',borderRadius:'5px',backgroundColor:'gray',display:'flex',alignItems:'center',justifyContent:'center'}}><AiOutlineHeart sytle={{backgroundColor:'white'}}/></button>
            </div>
    </Wrapper>)
}

export const Wrapper = styled.div`
    border:1px solid red;
    height:100%;
    width:18vw;
`
export const Icon = styled.div`
   opacity:0;
   width:0;
   height:0;
   position:absolute;
//    left:30%;
//    top:20%
   &:hover{
    opacity:1;
    width:20px;
    height:20px;
   }
`