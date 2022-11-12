import React from 'react';
import styled from 'styled-components';
import { AiOutlineBars } from 'react-icons/ai'
import { AiOutlineRight } from 'react-icons/ai';
// import Menu from './HorizonalMenu';
import Carousel from 'react-bootstrap/Carousel';
import MenuDropdown from './HorizonalMenu';
import MakeupMenu from './Menu\'s/MakeUp';
import SkinMenu from './Menu\'s/Skin';
import HairMenu from './Menu\'s/Hair';
import PersonalCareMenu from './Menu\'s/PersonalCare';
import M_n_BCareMenu from './Menu\'s/M&B';

// for customizing Menu for different-different categories menu will accept the following things;
/* 
1.Number of columns for text;
2.data for per columns
3. span of columns
*/

let menu1 = {
    first: ["EYE",
        "Contact Lenses",
        "Eye Kit",
        "Eyeliner",
        "Eye Shadow",
        "Eye Primer",
        "Eye-Palettes",
        "Eye Makeup Remover",
        "Eye Brow Enhancers",
        "False Eyelashes",
        "Kajal",
        "Mascara",
        "Under Eye Concealer"
    ],
    Second: [
        "FACE",
        "BB Cream",
        "Blush",
        "Bronzer",
        "CC Cream",
        "Contour",
        "Concealer",
        "Compact & Powder",
        "Face Primer",
        "Foundation",
        "Highlighters",
        "Loose Powder",
        "Makeup Kits",
        "Makeup Remover",
        "Setting Spray"
    ],
    Third: [
        "LIPS",
        "Lipstick", "Liquid Lipstick", "Lip Liner",
        "Lip Gloss",
        "Lip Balm",
        "Lip Crayon",
        "Lip Stain",
        "Lip Plumper"
    ],
    fourth: [
        "NAILS",
        "Manicure & Pedicure Kits",
        "Nail Polish",
        "Nail Care",
        "Nail Polish Sets",
        "Nail Art Kits",
        "Nail Polish Remover"
    ],
    fifth: [
        "TOOLS BRUSHES",
        "Blush Brush",
        "Eyelash Curlers",
        "Eye Brush",
        "Face Brush",
        "Lip Brush",
        "Makeup Pou", "ches Mirrors",
        "Sponges & Applicators",
        "Sharpeners",
        "Tweezers"
    ]
}
let menu2 = {
    first: [
        "BODY CARE",
        "All Cream",
        "Body Moisturizers",
        "Body Toners",
        "Body Sun Care",
        "Brightening Lotion",
        "Dark Circles & Wrinkles",
        "Day Cream",
        "Foot Cream",
        "Hair Remover Cream",
        "Hand Creams",
        "Hands & Feet",
        "Kits & Combos",
        "Night Cream",
        "Neck Creams"
    ],
    Second: [
        "FACE CARE",
        "Anti- Ageing Creams",
        "Bleach Creams",
        "Brightening Cream",
        "Face Wash",
        "Facial Wipes",
        "Face Oil",
        "Face Cleansers",
        "Facial Kits",
        "Face Tools",
        "Moisturizer",
        "Mask & Peels",
        "Serum",
        "Toner & Astringents",
        "Cleansing Creams"
    ],
    Third: [
        "EYE CARE",
        "Dark Circles",
        "Eye Contour Care",
        "Eye Cream",
        "Eye Masks",
        "Eye Serums",
        "Puffiness",
        "Under Eye Creams",
        "Under Eye Wrinkles"
    ],
    fourth: "https://www.beautybebo.com/pub/media/mega-menu/imgpsh_fullsize_anim.png"
}

let menu3 = {
    first: [
        "HAIR CARE",
        "Color Protection",
        "Dandruff",
        "Dry Shampoo",
        "Gels & Waxes",
        "Hair Spray",
        "Hair Color/ Dye",
        "Hair Creams & Masks",
        "Hair Styling",
        "Hairfall & Thinning",
        "Straighteners "
    ],
    Second: [
        "HAIR LOSS",
        "Conditioner",
        "Hair Oil",
        "Hair Serum",
        "Hair Growth solutions",
        "Shampoo"
    ],
    Third: "https://www.beautybebo.com/pub/media/mega-menu/hair.png"
}

let menu4 = {
    first: [
        "BATH & BODY",
        "Body Cleansers",
        "Body Massage Oil",
        "Body Wash",
        "Creams",
        "Essential Oils",
        "Foot Cream",
        "Scrubs & Exfoliants",
        "Ubtan & Face Packs"
    ],
    Second: [
        "BATH & SHOWER",
        "Body Soaps",
        "Shower Gel"
    ],
    Third: [
        "BATHING ACCESSORIES",
        "Bath Brushes",
        "Loofahs",
        "Shower Caps",
        "Sponges"
    ],
    fourth: 'https://www.beautybebo.com/pub/media/sm/makeup.png'
}

let menu5 = {
    first: [
        "BABY CARE",
        "Bath time",
        "Diapers",
        "Lotions & Creams",
        "Oils",
        "Powder",
        "Shampoo",
        "Soaps",
        "Sterilizer & Cleaners",
        "Rash Cream",
        "Wipes"
    ],
    Second: [
        "BATH & SHOWER",
        "Body Soaps",
        "Shower Gel"
    ],
    Third:'https://www.beautybebo.com/pub/media/mega-menu/baby_care.png'
}

export default function Sidebar() {
    return <>
        <Wrapper>
            <SidebarBox style={{ padding: "0px 0px" }}>
                <div >
                    <a href="#" style={{ display: 'flex', alignItems: 'center', gap: "10px", fontSize: "115%", fontWeight: "500", marginTop: "20px", color: "black", textDecoration: "none", textTransform: "uppercase", paddingLeft: "15px" }}><AiOutlineBars />{" "}all categories</a>
                </div>
                <div style={{ display: 'flex', gap: "0.5vw", flexDirection: 'column', paddingTop: '15px' }}>
                    <div >
                        <Link style={{ paddingLeft: "15px" }} href="">
                            <span style={{ display: 'flex', alignItems: 'center', gap: "10px", font: 'icon' }}><img width={'23px'} src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/makeup-small.png" alt="image-icon" />{"   "}Makeup</span>
                            <span style={{ marginLeft: "1vw", width: "20px", fontSize: "10px" }}><AiOutlineRight /></span>
                            <MakeupMenu data = {menu1}>  </MakeupMenu>
                        </Link>
                    </div>
                    <div >
                        <Link style={{ paddingLeft: "15px" }} href="">
                            <span style={{ display: 'flex', alignItems: 'center', gap: "10px", font: 'icon' }}><img width={'23px'} src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/skin-small.png" alt="image-icon" />{"   "}Skin</span>
                            <span style={{ marginLeft: "1vw", width: "20px", fontSize: "10px" }}><AiOutlineRight /></span>
                            <SkinMenu data = {menu2}> </SkinMenu>
                        </Link>
                    </div>
                    <div >
                        <Link style={{ paddingLeft: "15px" }} href="">
                            <span style={{ display: 'flex', alignItems: 'center', gap: "10px", font: 'icon' }}><img width={'23px'} src="	https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/hair-small.png" alt="image-icon" />{"   "}Hair</span>
                            <span style={{ marginLeft: "1vw", width: "20px", fontSize: "10px" }}><AiOutlineRight /></span>
                            <HairMenu data = {menu3}> </HairMenu>
                        </Link>
                    </div>
                    <div >
                        <Link style={{ paddingLeft: "15px" }} href="">
                            <span style={{ display: 'flex', alignItems: 'center', gap: "10px", font: 'icon' }}><img width={'23px'} src="	https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/personal-care-small.png" alt="image-icon" />{"   "}Personal Care</span>
                            <span style={{ marginLeft: "1vw", width: "20px", fontSize: "10px" }}><AiOutlineRight /></span>
                            <PersonalCareMenu data = {menu4}> </PersonalCareMenu>
                        </Link>
                    </div>
                    <div >
                        <Link style={{ paddingLeft: "15px" }} href="">
                            <span style={{ display: 'flex', alignItems: 'center', gap: "10px", font: 'icon' }}><img width={'23px'} src="https://www.beautybebo.com/pub/media/wysiwyg/menu-icons/mom-baby-care-small.png" alt="image-icon" />{"   "}M&C</span>
                            <span style={{ marginLeft: "1vw", width: "20px", fontSize: "10px" }}><AiOutlineRight /></span>
                            <M_n_BCareMenu data = {menu5} col1={'text'} col2={'text'} col3={"text"} col4={'text'} col5={'text'}> </M_n_BCareMenu>
                        </Link>
                    </div>
                    <div >
                        <Link style={{ paddingLeft: "15px" }} href="">
                            <span style={{ display: 'flex', alignItems: 'center', gap: "10px", font: 'icon' }}><img width={'23px'} src="https://www.beautybebo.com/pub/media/fragrance.png" alt="image-icon" />{"   "}Fragrance</span>
                            <span style={{ marginLeft: "1vw", width: "20px", fontSize: "10px" }}></span>
                        </Link>
                    </div>
                    <div >
                        <Link style={{ paddingLeft: "15px" }} href="">
                            <span style={{ display: 'flex', alignItems: 'center', gap: "10px", font: 'icon' }}><img width={'23px'} src="https://www.beautybebo.com/pub/media/ayurveda.png" alt="image-icon" />{"   "}Ayurveda</span>
                            <span style={{ marginLeft: "1vw", width: "20px", fontSize: "10px" }}></span>
                        </Link>
                    </div>
                </div>

            </SidebarBox>
            <Carousal1>
                <Carousel style={{ height: '92%', width: "100%" }} >
                    <Carousel.Item>
                        <img

                            style={{ height: '29vw', margin: 'auto', width: "100%" }}
                            className="d-block w-100"
                            src="https://www.beautybebo.com/pub/media/ads/home-slider/Ponds_Forent_Banner_6-min.jpg"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: "29vw", margin: 'auto', width: "100%" }}
                            className="d-block w-100"
                            src="https://www.beautybebo.com/pub/media/ads/home-slider/Slider_banner_1-min.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '29vw', margin: 'auto', width: "100%" }}
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
height:33vw;
margin-top:10px;
padding:10px 0px;
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
height:100%;
margin:auto;
background-color:"black";
@media all and (max-width:1000px) and (min-width:100px){
    width:95%;
    // margin-left:-100px
    margin:auto;
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