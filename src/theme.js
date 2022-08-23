import {extendTheme} from '@chakra-ui/react'

const breakpoints = {
  sm: "320",
  md: "768",
  lg: "991",
  xl: "1366",
  "2xl": "1920"
}

const theme = extendTheme({breakpoints})

export default theme