// import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components";

export default function AboutText (){
    return <>
    <TextWrapper>
        <Header>
            Welcome to Beauty Products Online Shopping India- Beauty Bebo
            <LineDiv><Line></Line><Line></Line></LineDiv>
        </Header>
        <Body>
            <TextDiv>If you are looking for a flawless radiant face outlook for a special occasion, then we have the perfect tips for you. As you must already know, the conspicuous flawless outlook you want for your wedding, a date, a dinner party or for a modelling competition is only achieved through makeup.
            </TextDiv>
            <TextDiv>
            Don’t get me wrong, you are naturally beautiful, that’s obvious. But everyone else is, so how will you will you ensure that you are different? Read on for hot irresistible tips before you <Span>buy beauty products online!</Span> 
            </TextDiv>
            <TextDiv>
               <Span>Clean Your Face First!</Span> 
            </TextDiv>
            <TextDiv>
            Before embarking on any makeup, always ensure that your face is clean. Need some assistance in absolute cleaning? Visit our range of face wash <Span>beauty products online</Span>  for your best pick. We have made it our duty to carefully select the best products for you, so that you don’t experience breaks and allergies after use. So now you can be confident that your <Span>buy cosmetic online shopping</Span>  will be worth your time and effort.
            </TextDiv>
            <TextDiv>
            Wondering then how you will make a choice among the spectrum available? Most of our products are purely natural in ingredient, so you can as well check for your favorite ingredient combination. If not sure, we are still here for you. We can help narrow down your options, together with you.
            </TextDiv>
            <TextDiv>
                <Span>Apply a Moisturizer</Span>
            </TextDiv>
            <TextDiv>
            Next, you need a moisturizer in your <Link href="">makeup kit</Link>. Moisturizers keep your face glowing regardless of the mood of the day. Most essentially, moisturizers will keep your skin hydrated from the outside, while your constant hydration by taking fluids enhance the efforts.
            </TextDiv>
            <TextDiv>
                Our moisturizers range from matte, ponds, creams and gels, all to ensure that your specific need is met. Just go through the list for a better selection, which will aid you through your <Span>cosmetic online shopping</Span>. With the best moisturizer, it will also work as a primer. Hence, you don’t have to buy an extra product, which saves you some cost. <Span>Get Your Makeup Kit</Span>
            </TextDiv>
            <TextDiv>
            We have the most effective <Link href="">beauty products India</Link> has dreamt of to replenish your kit, so don’t miss out!
            </TextDiv>
            <TextDiv>
                <Span>Enhance the Outlook of the Eyes</Span>
            </TextDiv>
            <TextDiv>
            At this point, your eyebrows should be in the shape and size you want them to be. Now you can brush them up to bring out a perfect outlook. Apply eye pencil to cover any gaps within the eyebrows for an ideal outlook.
            </TextDiv>
            <TextDiv>
            If the area surrounding your eyes has a different color shade, probably more tanned or lighter in color in comparison to your general face color, then pay attention to the area.
            </TextDiv>
            <TextDiv>
            Use concealers to bring out the perfect shade you want for a uniform outlook. Alternatively, you can use the highlighter to bring attention to your eyes, which even adds to a seemingly large-eye size
            </TextDiv>
            <TextDiv>
            If your eyes are starting to show wrinkles, then our under-eye wrinkle creams from our <Span>cosmetic online shop</Span> should come in handy.
            </TextDiv>
            <TextDiv>
            Want to finish up with a luminating cosmetic product for a conspicuously radiant look? Go ahead and make your <Link href="">makeup</Link> experience more appealing.
            </TextDiv>
            <TextDiv>
                <Span>Your Lips?</Span>
            </TextDiv>
            <TextDiv>
            For a natural beauty look, go for a glossy lip gloss or a light lipstick. Or are you going out with the girls, and thicker lips your way? Our range of matte lipstick collection should work for you.
            </TextDiv>
            <TextDiv><Span>Bottom Line</Span></TextDiv>
            <TextDiv>Want to <Link href="">buy beauty products</Link> online to improve your makeup kit? We are always there for you, ready to help.</TextDiv>
            <TextDiv>All you have to do is take a step, look into our products and try us. Looking forward to seeing you!</TextDiv>
        </Body>
    </TextWrapper>
    </>
}

export const  TextWrapper = styled.div`
// border:1px solid green;
width:90%;
height:auto;
padding:0px;
margin:auto;
margin-top:10px;
`
export const Header = styled.div`
    text-align: left;
    font-size: 26px;
    font-weight: 500;
    -webkit-font-smoothing: initial;
    color: #5e5e5e;
    display:grid;
    grid-template-columns:70% 30%;
    @media all and (max-width:1240px){
        grid-template-columns:100%;
    }
`
export const Line = styled.div`
border: 0.1px solid #f1e7e7;
width:100%;
`

export const Body = styled.div`
height:auto;
width:100%;
// border:1px solid green;
padding-top:3vw;
display:flex;
flex-direction:column;

`

export const TextDiv = styled.div`
text-align: left;
font-size: 13px;
font-weight: 500;
color: #5e5e5e;
`

export const Span = styled.span`
font-weight: 700;
font-size:13px; 
`

export const Link = styled.a`
color:black;
font-weight: 700;
`

export const LineDiv = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
gap:1px;

@media all and (max-width:1240px){
 opacity:0;
 width:0%;
}
`