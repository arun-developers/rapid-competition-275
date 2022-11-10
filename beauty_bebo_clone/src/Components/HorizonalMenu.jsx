import React from "react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList
} from "@chakra-ui/react";


export default function MenuDropdown({children}){
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    
      <Menu isOpen={isOpen}>
        <MenuButton
          variant="ghost"
          py={[1, 2, 2]}
          borderRadius={5}
          position='absolute'
          left={16}
          zIndex={10}
          border={'1px'}
          ml={16}
          aria-label="Courses"
          fontWeight="normal"
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
         w={["0","0","0","0","13.1vw"]}
        >
          {children}
        </MenuButton>
        <MenuList style={{border:'1px solid red',position:'relative',left:"160px",bottom:"45px",display:'flex',justifyContent:'space-between'}} onMouseEnter={onOpen} onMouseLeave={onClose}
          w={["0","0","0","0","300%"]}
        >
          <MenuItem style={{width:"33.33%",border:"1px solid red"}}>Menu Item 1</MenuItem>
          <MenuItem style={{width:"33.33%",border:"1px solid red"}}>Menu Item 2</MenuItem>
          <MenuItem style={{width:"33.33%",border:"1px solid red"}}>Menu Item 3</MenuItem>
        </MenuList>
      </Menu>

  );
}

