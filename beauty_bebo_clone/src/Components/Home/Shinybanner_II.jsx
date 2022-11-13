import React from "react";
import styled from "styled-components";
import { BannerDiv } from "./Shinybanner";

export default function ShinyBanner_II({img1,img2}){
    return <>
    <Banner_II>
        <div>
            <img src={img1} alt="banner-1" />
        </div>
        <div>
            <img src={img2} alt="banner-2" />
        </div>
    </Banner_II>
    </>
}

export const Banner_II = styled.div`
    // border:1px solid red;
    height:auto;
    width:90%;
    // padding:10px;
    margin:auto;
    margin-top:10px;
    display:grid;
    grid-template-columns:49.5% 49.5%;
    justify-content:space-between;
    @media all and (max-width:770px) and (min-width:200px){
        grid-template-columns:100%;
        gap:10px;
    }
`