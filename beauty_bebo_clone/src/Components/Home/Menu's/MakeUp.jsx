import React from "react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList
//   Heading
} from "@chakra-ui/react";
import styled from "styled-components";
// for customizing it for different - different categories it will accept the following things;
/* 
1.Number of columns for text;
2.data for per columns
3. span of columns
*/

export default function MakeupMenu({ children,data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
      <Menu isOpen={isOpen}>
      <MenuButton
        variant="ghost"
        py={[1, 2, 4]}
        borderRadius={0}
        position='absolute'
        left={16}
        zIndex={10}
        ml={20}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={["0", "0", "0", "0", "13.1vw"]}
      >
        {children}
      </MenuButton>
      <MenuList style={{ position: 'relative', left: "160px", bottom: "40px", display: 'flex', justifyContent: 'space-between' }} onMouseEnter={onOpen} onMouseLeave={onClose}
        w={["0", "0", "0", "0", "130%"]}
      >
        <MenuItem style={{ width: "20%" ,display:'flex',flexDirection:'column',gap:"7px"}}>
          {
            data.first.map((ele,i)=>{
                return i===0?<BoldText key = {i}>{ele}</BoldText>:<NormalText key = {i} >{ele}</NormalText>
            })
          }
        </MenuItem>
        <MenuItem style={{ width: "20%",display:'flex',flexDirection:'column',gap:"7px" }}>
        {
            data.Second.map((ele,i)=>{
                return i===0?<BoldText key = {i}>{ele}</BoldText>:<NormalText key = {i} >{ele}</NormalText>
            })
          }
        </MenuItem>
        <MenuItem style={{ width: "20%",display:'flex',flexDirection:'column',gap:"7px"}}>
        {
            data.Third.map((ele,i)=>{
                return i===0?<BoldText key = {i}>{ele}</BoldText>:<NormalText key = {i} >{ele}</NormalText>
            })
          }
        </MenuItem>
        <MenuItem style={{ width: "20%",display:'flex',flexDirection:'column',gap:"7px" }}>
        {
            data.fourth.map((ele,i)=>{
                return i===0?<BoldText key = {i}>{ele}</BoldText>:<NormalText key = {i} >{ele}</NormalText>
            })
          }
        </MenuItem>
        <MenuItem style={{ width: "20%", display:'flex',flexDirection:'column',gap:"7px"}}>
        {
            data.fifth.map((ele,i)=>{
                return i===0?<BoldText key = {i}>{ele}</BoldText>:<NormalText key = {i} >{ele}</NormalText>
            })
          }
        </MenuItem>
      </MenuList>
    </Menu>
  );
}


export const BoldText = styled.div`
text-align:left;
width:100%;
font-weight:bold;
color:gray;
// font: icon;
font-family: sans-serif;
font-size:14px;
`
export const NormalText = styled.div`
font-weight:normal;
color:gray;
font-family: sans-serif;
text-align:left;
width:100%;
font-size:14px;
// font: icon;
`
