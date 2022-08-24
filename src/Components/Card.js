import React from 'react'
import {Box, Flex, Image, Text} from '@chakra-ui/react'
import Stars from './Stars'

export default function Card(props) {

  const {item, ...otherProps} = props
  
  return (
    <Box {...otherProps} padding="6px" transition="200ms all">
      <Flex width="100%" height="100%" padding="20px 0" backgroundColor="#fff" flexDir="column" borderRadius="sm" boxShadow="0 1px 4px -1px #000000aa" overflow="hidden">
          <Box padding="0 22.5px">
            <Image src={item.img} boxSize="100%"/>
          </Box>
          <Box padding="15px 12.5px" position="relative">
            <Box boxShadow="inset -55px 0 25px -10px #fff" position="absolute" top="0" right="0" width="100%" height="100%" zIndex="2"/>
            <Text whiteSpace="nowrap" color="#666" fontSize="23px" fontWeight="300">{item.name}</Text>
            <Text whiteSpace="nowrap" color="#666" fontSize="18px" fontWeight="300">{item.company}</Text>
          </Box>
          <Box padding="0 12.5px" width="fit-content">
            <Stars width={item.stars}/>
          </Box>
      </Flex>
    </Box>
  )
}
