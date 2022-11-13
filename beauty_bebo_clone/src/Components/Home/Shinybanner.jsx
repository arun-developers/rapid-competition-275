import React from "react";
import styled from "styled-components";

export default function ShinyBanner({ src,size }) {
    return <>
        <BannerDiv size={size}>
            <Box >
                <a href="">
                    <img style={{maxWidth:"100%"}} src={src} alt="the-banner" />
                </a>
            </Box>
        </BannerDiv>
    </>
}

export const BannerDiv = styled.div`
// border:1px solid red;
    width:${props=>props.size};
    margin:auto;
    height:auto;
    margin-top:10px;
    // margin-bottom:10px;
`

export const Box = styled.div`
    // border:1px solid blue;
    // &::before{
    //     position: absolute;
    //     display: block;
    //     content: '';
    //     background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    //     background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.3) 100%);
    //     -webkit-transform: skewX(-25deg);
    //     transform: skewX(-25deg);
    // }
    // &:hover::before{
    //     -webkit-animation: shine .75s;
    //     animation: shine .75s;
    // }
    // @-webkit-keyframes shine {
    //     100% {
    //      left: 125%;
    //     }
    //    }
    //    @keyframes shine {
    //     100% {
    //      left: 125%;
    //     }
    //    }
`
