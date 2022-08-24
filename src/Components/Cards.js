import React, { useEffect, useState } from 'react'

import {Box, Container, Heading, Flex, Button} from '@chakra-ui/react'
import Card from './Card'

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

import "swiper/css"
import "swiper/css/pagination"

import cardsData from '../assets/datas/cards'

export default function Cards() {

  const [width, setWidth] = useState({
    width: window.innerWidth
  })

  function resize(){
    console.log(window.width)
  }

  useEffect(()=>{
    window.addEventListener('resize', resize())
  },[width])
  
  return (
    <Box padding={{sm:"2.5px 5px",md:"25px 50px"}} width={['100%']}>
      {
        cardsData.map((row,i)=>
          <Container key={i} maxW="1366px" padding={{sm:"10px 0",md:"25px 0"}}>
            <Box >
              <Flex padding="0 10px" marginBottom="10px" color="#222" alignItems="center" justifyContent="space-between">
                <Flex flexDir="column" marginBottom="10px">
                  <Heading as="h2" fontWeight={400} fontSize={{sm:"24px",md:"38px"}}>{row.title}</Heading>
                  <Heading as="h3" fontWeight={300} fontSize={{sm:"16px",md:"22px"}}>{row.subTitle}</Heading>
                </Flex>
                <Button variant="solid" backgroundColor="#699f39" color="#fff" size={{sm:"sm",md:"md"}} fontSize={{md:"18px"}} fontWeight="400" _hover={{backgroundColor: "#69aa39"}} _active={{backgroundColor: "#69bb39"}}>See more</Button>
              </Flex>
              {
                row.wrapper === 'flex' ?
                <Flex flexDir="row" flexWrap="wrap" alignItems="center">
                  {
                    row.items.map((item,i)=>
                      <Card key={i} width={{sm:'50%', md:'33.33%', lg:'25%', xl:'20%'}} item={item}/>
                    )
                  }
                </Flex>
                :
                <Swiper
                  slidesPerView={5}
                  breakpoints={{
                    320: {
                      slidesPerView: 2,
                    },
                    768: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 4,
                    },
                    1336: {
                      slidesPerView: 5,
                    },
                  }}
                  modules={[Pagination, Autoplay]}
                  pagination={{
                    clickable: true,
                  }}
                  autoplay
                >
                  {
                    row.items.map((item,i)=>
                      <SwiperSlide key={i}>
                        <Card item={item}/>
                      </SwiperSlide>
                    )
                  }
                </Swiper>
              }
            </Box>
          </Container>
        )
      }
    </Box>
  )
}
