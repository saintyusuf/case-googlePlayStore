import React from 'react'

import {Box} from '@chakra-ui/react'

import Header from '../Components/Header';
import Cards from '../Components/Cards';

export default function HomePage() {
  return (
    <>
      <Header/>
      <Box backgroundColor="#eee" minHeight="calc(100vh - 51px)">
        <Cards/>
      </Box>
    </>
  )
}
