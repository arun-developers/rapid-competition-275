import React from "react";
import styled from "styled-components";
import { AiFillStar } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi'
import { BsFillBasketFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
// import { AiFillEye } from 'react-icons/ai';
export default function HotDealCard({ data, direction }) {
    let arr = [0, 0, 0, 0, 0];
    let num = Math.floor(Math.random() * 6)
    let discount = Math.floor((Number(data.price) / Number(data.pre_prce)) * 100);
    return (
        <Wrapper direction={direction}>
            <ImgaeDiv>
                <Image src={data.image} alt="product_image" />
            </ImgaeDiv>
            <TextWrapper direction={direction}>
                <TitleWrapper direction={direction}>{data.title.substring(0, 40)}...</TitleWrapper>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: "yellow" }}>
                    {
                        arr.map((ele) => {
                            return <AiFillStar />
                        })
                    }
                    <span style={{ fontSize: '12px', color: 'gray' }}>({num})</span>
                </div>
                <div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", color: '#dd0285', fontWeight: 'bold' }}>
                        {data.pre_prce > 0 && <del style={{ color: "gray", display: 'flex', alignItems: 'center', fontSize: '80%' }}>
                            <BiRupee />{data.pre_prce}.00</del>}
                        <BiRupee />{data.price} {data.pre_prce > 0 && data.price > 0 && <Discount>{discount}%  OFF</Discount>}
                    </div>
                </div>
                <Buttons>
                    <Button ><BsFillBasketFill />{" "}Add To cart</Button>
                    <WishListButton ><AiOutlineHeart /></WishListButton>
                </Buttons>
            </TextWrapper>
        </Wrapper>)
}
export const Discount = styled.div`
color:green;
font-weight:bold;
margin-left:10px;
font-size:13px;
display:flex;
align-items:center;
`
export const Wrapper = styled.div`
    border-right:${props => props.direction ? "1px solid #f1f1f1" : "0"};
    border-bottom:${props => props.direction === true ? "0" : "1px solid #ede7e7"};
    height:96%;
    width:${props => props.direction===true ? "23vw" : "26.5vw"};
    display:flex;
    flex-direction:${props => props.direction === true ? "column" : "row"};
    align-items:${props => props.direction === true ? "center" : "center"};
    justify-content:${props => props.direction === true ? "none" : "flex-start"};
    gap:0.7vw;
    padding:${props => props.direction === true ? "10px" : "0px"};
    @media all and (max-width:992px){
    width:${props => props.direction ? "100%" : "90%"};
    height:${props => props.direction ? "96%" : "80%"};
    }
`
export const Icon = styled.div`
   opacity:0;
   width:23vw;
   height:31vw;
   position:absolute;
   display:flex;
   padding-left:7vw;
   padding-top:8vw;
   &:hover{
    opacity:1;
    font-size:39px;
    color:#dd0285;
   }
`
export const ImgaeDiv = styled.div`
   display:flex;
   justify-content:center;
`

export const Image = styled.img`
max-width:80%;
@media all and (max-width:992px){
    max-width:${props => props.direction === true ? "80%" : "50%"}
    }
    @media all and (max-width:416px){
        max-width:${props => props.direction === true ? "80%" : "112%"}
        }
    
`
export const TextWrapper = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:${props => props.direction === true ? "center" : "flex-start"};
    gap:${props => props.direction === true ? "10px" : "0px"};
    @media all and (max-width:375px){
    gap:10px;
    }
    @media all and (max-width:500px) and (min-width:375px){
        gap:0px;
    }
    @media all and (max-width:710px) and (min-width:500px){
        gap:${props => props.direction === true ? "5px" : "0"};
    }
`

export const TitleWrapper = styled.div`
    font-family:sans-serif;
    font-size:12px;
    font-weight:normal;
    text-transform:uppercase;
    text-align:${props => props.direction === true ? "center" : "left"};
`


export const Buttons = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    gap:15px;

    @media all and (max-width:450px) and (min-width:375px) {
        gap:5px;
    }
`

export const Button = styled.div`
display:flex;
align-items:center;
justify-content:center;
background-color:#dd0285;
padding:3px;
border-radius:2px;
color:white;
width:110px;
gap:5px;
font-size:90%;
`

export const WishListButton = styled.button`
width:27px;
height:25px;
border-radius:3px;
display:flex;
align-items:center;
justify-content:center;
background-color:gray;
color:white;
`