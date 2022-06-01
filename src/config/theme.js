// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    green: {
      500: '#66A182'
    },
    darkBlue: {
      500: '#007EA7'
    },
    lightBlue: {
      200: '#EBF4FF',
      500: '#BEDCFE'
    },
  },
})

export default theme
