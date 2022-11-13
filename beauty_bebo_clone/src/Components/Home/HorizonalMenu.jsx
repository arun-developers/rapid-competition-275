import React from "react";
import {
  useDisclosure,
  MenuItem,
  Menu,
  MenuButton,
  MenuList,
  Heading
} from "@chakra-ui/react";
// for customizing it for different - different categories it will accept the following things;
/* 
1.Number of columns for text;
2.data for per columns
3. span of columns
*/

export default function MenuDropdown({ children ,data}) {
  console.log(data);
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
        ml={20}
        aria-label="Courses"
        fontWeight="normal"
        onMouseEnter={onOpen}
        onMouseLeave={onClose}
        w={["0", "0", "0", "0", "13.1vw"]}
      >
        {children}
      </MenuButton>
      <MenuList style={{ position: 'relative', left: "160px", bottom: "45px", display: 'flex', justifyContent: 'space-between' }} onMouseEnter={onOpen} onMouseLeave={onClose}
        w={["0", "0", "0", "0", "450%"]}
      >
        <MenuItem style={{ width: "20%", border: "1px solid red" }}>
          <div></div>
        </MenuItem>
        <MenuItem style={{ width: "20%", border: "1px solid red" }}>
          <div></div>
        </MenuItem>
        <MenuItem style={{ width: "20%", border: "1px solid red" }}>
          <div></div>
        </MenuItem>
        <MenuItem style={{ width: "20%", border: "1px solid red" }}>
          <div></div>
        </MenuItem>
        <MenuItem style={{ width: "20%", border: "1px solid red" }}>
          <div></div>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

