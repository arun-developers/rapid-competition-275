import React from 'react';
import styled from 'styled-components';
import {AiOutlineBars} from 'react-icons/ai'
import {AiOutlineRight} from 'react-icons/ai';
// import Menu from './HorizonalMenu';
import Carousel from 'react-bootstrap/Carousel';
import MenuDropdown from './HorizonalMenu';
export default function Sidebar(){
    return <>
    <Wrapper>
    <SidebarBox style={{padding:"0px 20px"} }>
        <div >
            <a href="#" style={{display:'flex',alignItems:'center',gap:"10px",fontFamily:'ROBOT',fontSize:"115%",fontWeight:"bold",marginTop:"20px",color:"black",textDecoration:"none"}}><AiOutlineBars/>{" "}ALL CATEGORIES</a>
        </div>
        <div style={{display:'flex',gap:"1vw",flexDirection:'column',paddingTop:'20px'}}>
                <div >
                    <Link href="">
                        <span style={{display:'flex',alignItems:'center',gap:"10px"}}><img width={'23px'} src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="image-icon" />{"   "}Makeup</span>
                        <span style={{marginTop:"5px",marginLeft:"1vw",width:"20px",fontSize:"15px"}}><AiOutlineRight/></span>
                        <MenuDropdown > </MenuDropdown>
                    </Link>
                </div>
                <div >
                    <Link href="">
                        <span style={{display:'flex',alignItems:'center',gap:"10px"}}><img width={'23px'} src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="image-icon" />{"   "}Skin</span>
                        <span style={{marginTop:"5px",marginLeft:"1vw",width:"20px",fontSize:"15px"}}><AiOutlineRight/></span>
                        <MenuDropdown > </MenuDropdown>
                    </Link>
                </div>
                <div >
                    <Link href="">
                        <span style={{display:'flex',alignItems:'center',gap:"10px"}}><img width={'23px'} src="	https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="image-icon" />{"   "}Hair</span>
                        <span style={{marginTop:"5px",marginLeft:"1vw",width:"20px",fontSize:"15px"}}><AiOutlineRight/></span>
                        <MenuDropdown > </MenuDropdown>
                    </Link>
                </div>
                <div >
                    <Link href="">
                        <span style={{display:'flex',alignItems:'center',gap:"10px"}}><img width={'23px'} src="	https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="image-icon" />{"   "}Personal</span>
                        <span style={{marginTop:"5px",marginLeft:"1vw",width:"20px",fontSize:"15px"}}><AiOutlineRight/></span>
                        <MenuDropdown > </MenuDropdown>
                    </Link>
                </div>
                <div >
                    <Link href="">
                        <span style={{display:'flex',alignItems:'center',gap:"10px"}}><img width={'23px'} src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="image-icon" />{"   "}M&C</span>
                        <span style={{marginTop:"5px",marginLeft:"1vw",width:"20px",fontSize:"15px"}}><AiOutlineRight/></span>
                        <MenuDropdown > </MenuDropdown>
                    </Link>
                </div>
                <div >
                    <Link href="">
                        <span style={{display:'flex',alignItems:'center',gap:"10px"}}><img width={'23px'} src="https://www.beautybebo.com/pub/media/fragrance.png" alt="image-icon" />{"   "}Fragrance</span>
                        <span style={{marginTop:"5px",marginLeft:"1vw",width:"20px",fontSize:"15px"}}></span>
                        
                    </Link>
                </div>
                <div >
                    <Link href="">
                        <span style={{display:'flex',alignItems:'center',gap:"10px"}}><img width={'23px'} src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="image-icon" />{"   "}Ayurveda</span>
                        <span style={{marginTop:"5px",marginLeft:"1vw",width:"20px",fontSize:"15px"}}></span>
                        
                    </Link>
                </div>
        </div>

    </SidebarBox>
    <Carousal1>
    <Carousel style={{height:'100%',width:"100%"}} >
      <Carousel.Item>
        <img
        
          style={{height:'33vw',margin:'auto',width:"100%"}}
          className="d-block w-100"
          src="https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:"33vw",margin:'auto',width:"100%"}}
          className="d-block w-100"
          src="https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={{height:'33vw',margin:'auto',width:"100%"}}
          className="d-block w-100"
          src="https://www.beautybebo.com/pub/media/ads/home-slider/Mamaearth_banner_1-min.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </Carousal1>
    </Wrapper>
        </>
}

export const Wrapper = styled.div`
border:1px solid #ebebeb;
border-radius:10px;
width:90%;
margin:auto;
height:38vw;
margin-top:10px;
padding:10px;
display:flex;
justify-content:space-between;
`
export const SidebarBox = styled.div`
width:20%;
height:98%;
@media all and (max-width:1000px) and (min-width:100px){
    opacity: 0;
    width:0%;
    border:none;
    height:0%;
}
`
export const Carousal1 = styled.div`
// border:1px solid yellow;
width:78%;
height:98%;
background-color:"black";
@media all and (max-width:1000px) and (min-width:100px){
    width:100%;
    margin-left:-100px
}
`
export const Link = styled.a`
    text-decoration:none;
    font-family:ROBOT;
    font-size:90%;
    display:flex;
    justify-content:space-between;
    align-items:center;
    color:#666;
    padding:5px;
    marginLeft:100px;
    &:hover{
        color:#dd0285;
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    }
`