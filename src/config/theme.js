import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    green: {
      500: '#66A182'
    },
    darkBlue: {
      500: '#007EA7',
      700: '#003D52'
    },
    lightBlue: {
      200: '#EBF4FF',
      500: '#BEDCFE'
    },
  },
  components: {
    Progress: {
      bg: '#003D52',
      transitionDuration: "fast",
    }
  },
  fonts: {
    heading: `"Yantramanav"`,
    body: `'Raleway', sans-serif`,
  },

})

export default theme
