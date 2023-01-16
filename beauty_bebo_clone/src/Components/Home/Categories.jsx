import { Center } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
// import { Heading, Spinner, Box } from '@chakra-ui/react'
const MostViewed = [
    { image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/p/o/ponds_super_light_gel_oil_free_moisturiser_with_hyaluronic_acid_vitamin_e2.jpg",
     price: 264,
     pre_prce: 299, 
     title: "ponds super light gel oil free moisturiser with hyaluronic acid + vitamin " ,
     counting:12
    },
    { image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-140.jpg",
     price: 0,
     pre_prce: 0, 
     title: "Blue Heaven Candy Matte Lip Color",
     counting:0
    },
    { image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-89.jpg",
     price: 240,
     pre_prce: 0, 
     title: "Ponds White Beauty Anti Spot Fairness Day Cream SPF 15 PA++",
     counting:30
    }
];

const Letest = [
    { 
    image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/7/4/745c0238903487002395_1.jpg",
    price: 446,
    pre_prce: 495, 
    title: "Miss Claire M24 - Fan Brush" ,
    counting:30
   },
   { 
    image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-1_10_4.jpg",
     price: 796,
     pre_prce:885, 
     title: "Miss Claire Make Up Palette 9920 (Make Up Kit)",
     counting:30
    },
    { 
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/d/2/d28bf778903487024816_1.jpg",
     price: 410,
     pre_prce: 0, 
     title: "Miss Claire Make Up Palette 9920 (Make Up Kit)", 
     counting:30
    }
];

const BestSeller = [
    { 
        image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/9/f/9f1b98c8904352000683_1.jpg",
     price: 0,
     pre_prce: 0, 
     title: "Biotique Bio Green Apple Fresh Daily Purifying Shampoo & Conditioner",
     counting:'20'
    },
    { image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/t/2/t2_1.jpg",
     price: 200,
     pre_prce: 250, 
     title: "Ponds Triple Vitamin Moisturizing Lotion",
     counting:30
    },
    { image: "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/u/n/untitled-88.jpg",
     price:342,
     pre_prce: 380, 
     title: "Pantene Pro-V Oil Replacement (pack of 2)" ,
     counting:30
    }
]
function reducer(state, action) {
    switch (action.type) {
        case "Loading":
            return { ...state, isLoading: true }
        case "Success":
            return { ...state, isLoading: false, data: action.payload };
        case "Failure":
            return { ...state, isLoading: false, isError: true };
        default:
            return state
    }
}
const initial = {
    isLoading: false,
    data: [],
    isError: false
}

function FetchData(val) {
    return axios.get(`https://masai-task-manager.onrender.com/${val}`);
}
export default function Categories({ types }) {

    const [state, dispatch] = useReducer(reducer, initial);

    useEffect(() => {
        dispatch({ type: "Loading" });
        FetchData("Makeup").then((res) =>{ dispatch({ type: "Success", payload: res.data }); console.log(res) }).catch((err) => dispatch({ type: 'Failure' }));
        console.log(state);
    }, [])

    const getData = (val) => {
        console.log("triggered");
        dispatch({ type: "Loading" });
        setTimeout(() => {
            FetchData(val).then((res) => dispatch({ type: "Success", payload: res.data })).catch((err) => {dispatch({ type: 'Failure' });console.log(err)})
        }, 1000);
        console.log(state)
    }

    return <>
        <Wrapper types={types}>
            {
            types === true && <Category>
                <button onClick={() => getData("Makeup")}>
                    <CategoryBox>
                        <IconDiv>
                            <Image src="https://www.beautybebo.com/pub/media/catalog/category/makeup_1.png" alt="icon-image" />
                        </IconDiv>
                        <Title>
                            Makeup
                        </Title>
                    </CategoryBox>
                </button>
                <button style={{backgroundColor:"white"}} onClick={() => getData("Skin")}>
                    <CategoryBox>
                        {/* <Spot/> */}
                        <IconDiv>
                            <Image src="https://www.beautybebo.com/pub/media/catalog/category/skin.png" alt="icon-image" />
                        </IconDiv>
                        <Title>
                            Skin
                        </Title>
                    </CategoryBox>
                </button>
                <button onClick={() => getData("Hair_Care")}>
                    <CategoryBox>
                        {/* <Spot/> */}
                        <IconDiv>
                            <Image src="	https://www.beautybebo.com/pub/media/catalog/category/hair.png" alt="icon-image" />
                        </IconDiv>
                        <Title>
                            Hair
                        </Title>
                    </CategoryBox>
                </button>
                <button onClick={() => getData("Personal Care")}>
                    <CategoryBox>
                        {/* <Spot/> */}
                        <IconDiv>
                            <Image src="https://www.beautybebo.com/pub/media/catalog/category/personal-care.png" alt="icon-image" />
                        </IconDiv>
                        <Title>
                            Personal Care
                        </Title>
                    </CategoryBox>
                </button>
                <button onClick={() => getData("M&B")}>
                    <CategoryBox>
                        {/* <Spot/> */}
                        <IconDiv>
                            <Image src="	https://www.beautybebo.com/pub/media/catalog/category/mom-baby-care.png" alt="icon-image" />
                        </IconDiv>
                        <Title>
                            Mom & Baby Care
                        </Title>
                    </CategoryBox>
                </button>
                <button onClick={() => getData("Eye")}>
                    <CategoryBox>
                        {/* <Spot/> */}
                        <IconDiv>
                            <Image src="https://www.beautybebo.com/pub/media/catalog/category/eye_1.png" alt="icon-image" />
                        </IconDiv>
                        <Title>
                            Eye
                        </Title>
                    </CategoryBox>
                </button>
                <button onClick={() => getData("Fragrance")}>
                    <CategoryBox>
                        {/* <Spot/> */}
                        <IconDiv>
                            <Image src="	https://www.beautybebo.com/pub/media/catalog/category/fragrance_3.png" alt="icon-image" />
                        </IconDiv>
                        <Title>
                            Fragrance
                        </Title>
                    </CategoryBox>
                </button>
            </Category>
            }
            {
                state.isLoading ? <div style={{height:"100%",width:"100%",display:'flex',justifyContent:"center",alignItems:'center',marginTop:"20px"}}>
                    <img style={{width:'50px'}} src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt="spinner" />
                </div> : types === true &&<Cards >
                        {
                            state.data && state.data.map((ele, i) => {
                                return <ProductCard direction={true} key={i} data={ele} />
                            })
                        }
                </Cards>
            }

            {
                types === 3 && <ThreeCategory>
                    <div style={{ border: "1px solid #ebebeb", width: "100%", height: "fitContent" ,paddingLeft:"15px"}}>
                        <div style={{ borderBottom: "2px solid red", textAlign: "left", width: "96px" }}>BEST SELLER</div>
                        <div>
                            {
                                MostViewed.map((ele,i)=>{
                                    return <ProductCard key={i} data={ele} direction={false}/>
                                })
                            }
                        </div>
                    </div>
                    <div style={{ border: "1px solid #ebebeb", width: "100%", height: "fitContent",paddingLeft:"15px" }}>
                        <div style={{ borderBottom: "2px solid red", textAlign: "left", width: "130px" }}>LETEST PRODUCT</div>
                        <div>
                        {
                                Letest.map((ele,i)=>{
                                    return <ProductCard key={i} data={ele} direction={false}/>
                                })
                            }
                        </div>
                    </div>
                    <div style={{ border: "1px solid #ebebeb", width: "100%", height: "fitContent" ,paddingLeft:"15px"}}>
                        <div style={{ borderBottom: "2px solid red", textAlign: "left", width: "110px" }}>MOST VIEWED</div>
                        <div>
                        {
                                BestSeller.map((ele,i)=>{
                                    return <ProductCard key={i} data={ele} direction={false}/>
                                })
                            }
                        </div>
                    </div>
                </ThreeCategory>
            }

        </Wrapper>
    </>
}


const Wrapper = styled.div`
border:${props => props.types === 3? "0" : "1px solid #ebebeb"};
height:auto;
// height: ${props =>props.types === true ? "37vw":"36vw"};
width: 90%;
margin: auto;
margin-top: 10px;
padding-bottom:20px;
`
export const Divwrapper = styled.div`
// border:1px solid red;
width:100%;
height:80%;
@media all and (max-width:300px){
    width:132px;
}
@media all and (max-width:500px) and (min-width:300px){
    width:138px;
}
@media all and (max-width:800px) and (min-width:500px){
    width:145px;
}
@media all and (min-width:800px){
    width:170px;
}
`

export const Category = styled.div`
height:20%;
width:100%;
border:1px solid #ebebeb;
overflow:auto;
display:grid;
grid-template-columns:repeat(7,1fr);
::-webkit-scrollbar{
    display:none;
}

@media all and (max-width:300px){
    height:75px;
}
@media all and (max-width:500px) and (min-width:300px){
    height:80px;
}
@media all and (max-width:800px) and (min-width:500px){
    height:90px;
}
@media all and (min-width:800px){
    height:100px;
}
`
export const CategoryBox = styled.div`
height:100%;
width:170px;
border:1px solid #ebebeb; 
&:hover{
    background-color:rgba(255, 25, 167,1);
}
&:hover div{
filter: brightness(0) invert(1);
}
}
`
export const IconDiv = styled.div`
display:flex;
justify-content:center;

align-items:end;
// border:1px solid #ebebeb;
width:100%;
height:70%;
color:white;
`

export const Title = styled.div`
display:flex;
justify-content:center;
align-items:baseline;;
// border:1px solid black;
width:100%;
height:30%;

`
export const Image = styled.img`
max-height:70%
`
export const Spot = styled.div`
height:12px;
width:12px;
position:absolute;
bottom:-6px;
// display:inline-block;
transform:rotate(45deg);
opacity:0;
`
export const Cards = styled.div`
height:80%;
width:100%;
border:1px solid #ebebeb;
display:grid;
grid-template-columns:25% 25% 25% 25%;
@media all and (max-width:992px) and (min-width:375px){
    grid-template-columns:50% 50%;
}
@media all and (max-width:374px){
    grid-template-columns:100%;
}
`

export const ThreeCategory = styled.div`
width: 100%;
height: fit-content;
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 30px;

@media all and (max-width:992px) and (min-width:1100px){
    gap:10px;
}
@media all and (max-width:992px){
    grid-template-columns: repeat(1,1fr);
}
`