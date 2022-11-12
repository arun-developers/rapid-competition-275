import React from "react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList
//   Heading
} from "@chakra-ui/react";

import { BoldText,NormalText } from "./MakeUp";
// import styled from "styled-components";
// for customizing it for different - different categories it will accept the following things;
/* 
1.Number of columns for text;
2.data for per columns
3. span of columns
*/

export default function SkinMenu({ children,data }) {
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
        w={["0", "0", "0", "0", "100%"]}
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
        <MenuItem style={{ width: "40%",display:'flex',flexDirection:'column',gap:"7px" }}>
          <img src={data.fourth} alt="menuImage" />
        </MenuItem>
      </MenuList>
    </Menu>
  );
}


