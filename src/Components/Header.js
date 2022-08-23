import React, {useRef} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {Box, Container, Menu, MenuButton, Button, MenuList, MenuItem, List, ListItem, Divider, IconButton, Flex, Drawer, DrawerOverlay, DrawerContent, useDisclosure} from '@chakra-ui/react'
import {MdKeyboardArrowDown, MdHelp, MdSettings, MdMenu} from 'react-icons/md'

import headerData from '../assets/datas/header'

export default function Header() {

  const location = useLocation()

  const {isOpen, onOpen, onClose} = useDisclosure()
  const mobileNavbarBtnRef = useRef()
  
  return (
    <Box borderBottom="1px solid #ddd" borderLeft="3px solid #699f39" padding={{sm:"0 5px 0 5px",md:"0 15px 0 40px",lg:"0 20px 0 60px"}} transition="200ms all">
      <Container maxW="1366px" display="flex" alignItems="center" height="60px" padding="0">

        <Box marginRight={{sm:"2.5px",md:"30px"}}>
          <Menu isLazy>
            {({isOpen}) => (
              <>
                <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown style={isOpen && {transform: "rotate(180deg)"}} marginLeft="0"/>} variant="link" fontSize={{sm:"20px",md:"30px"}} fontWeight="300" color="#777" _hover={{textDecoration: "none"}} _active={{color: "#777"}} >
                  {headerData.categories[0].name}
                </MenuButton>
                <MenuList borderRadius="sm">
                  {
                    headerData.categories.map((category,i)=>
                      <MenuItem key={i} style={{backgroundColor: "#fff"}}>{category.name}</MenuItem>
                    )
                  }
                </MenuList>
              </>
            )}
          </Menu>
        </Box>

        <Box marginRight={{sm:"2.5px",md:"30px"}}>
          <Menu isLazy>
            {({isOpen}) => (
              <>
                <MenuButton as={Button} rightIcon={<MdKeyboardArrowDown style={isOpen && {transform: "rotate(180deg)"}} fontSize={{sm:"14px",md:"18px"}}/>} variant="link" fontSize={{sm:"14px",md:"18px"}} fontWeight="400" color="#777" _hover={{textDecoration: "none"}} _active={{color: "#777"}}>
                  Subcategories
                </MenuButton>
                <MenuList borderRadius="sm">
                  {
                    headerData.subCategories.map((category,i)=>
                      <MenuItem key={i} style={{backgroundColor: "#fff"}}>{category.name}</MenuItem>
                    )
                  }
                </MenuList>
              </>
            )}
          </Menu>
        </Box>

        <Divider orientation='vertical' height="60%" borderColor="#bbb" display={{sm:"none",md:"none",lg:"block"}}/>
          
        <Box height="100%" display={{sm:"none",md:"none",lg:"block"}}>
          <List marginLeft="5px" height="100%">
            {
              headerData.navbarItems.map((item,i)=>
                <ListItem key={i} float="left" height="100%">
                  <Link to={item.url} style={{padding: "5px 15px", fontWeight: "500",color: location.pathname === item.url ? "#222" : "#999", borderBottom: location.pathname === item.url && "3px solid #699f39", display: "flex", alignItems: "center", height: "100%"}}>
                    {item.name}
                  </Link>
                </ListItem>
              )
            }
          </List>
        </Box>
          
        <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={mobileNavbarBtnRef} display={{sm:"block",md:"block",lg:"none"}}>
          <DrawerOverlay />
          <DrawerContent>
            <List>
              {
                headerData.navbarItems.map((item,i)=>
                  <ListItem key={i}>
                    <Link to={item.url} style={{padding: "10px 15px", fontWeight: "500",color: location.pathname === item.url ? "#222" : "#999", borderBottom: location.pathname === item.url && "3px solid #699f39", display: "flex", alignItems: "center", height: "100%"}}>
                      {item.name}
                    </Link>
                  </ListItem>
                )
              }
            </List>
          </DrawerContent>
        </Drawer>

        <Box marginLeft="auto">
          <Flex flexDir="row">
            <IconButton icon={<MdHelp fontSize="26px"/>} variant="outline" borderRadius="md" size={{sm:"sm",md:"md"}} width={{base:"38px",md:"55px"}} borderColor="#ddd" colorScheme="transparent" boxShadow="sm" _hover={{backgroundColor: "#f9f9f9"}} _active={{backgroundColor: "#f1f1f1"}}/>
            <IconButton icon={<MdSettings fontSize="26px"/>} variant="outline" borderRadius="md" size={{sm:"sm",md:"md"}} width={{base:"42px",md:"80px"}} borderColor="#ddd" colorScheme="transparent" boxShadow="sm" marginLeft={{sm:"5px",lg:"30px"}} _hover={{backgroundColor: "#f9f9f9"}} _active={{backgroundColor: "#f1f1f1"}}/>
            <IconButton icon={<MdMenu fontSize="26px"/>} variant="outline" borderRadius="md" size={{sm:"sm",md:"md"}} width={{base:"38px",md:"55px"}} borderColor="#ddd" colorScheme="transparent" boxShadow="sm" marginLeft={{sm:"5px",lg:"10px"}} display={{sm:"flex",md:"flex",lg:"none"}} _hover={{backgroundColor: "#f9f9f9"}} _active={{backgroundColor: "#f1f1f1"}} ref={mobileNavbarBtnRef} onClick={onOpen}/>
          </Flex>
        </Box>
      </Container>
    </Box>
  )
}
