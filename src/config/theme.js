import { extendTheme } from "@chakra-ui/react"

import { StyleFunctionProps } from '@chakra-ui/theme-tools'

const Divider = {
  defaultProps: {
    colorScheme: 'current',
  },
  baseStyle: () => ({
    width: '20vw',
  }),
}

const Button = {
  defaultProps: {
    variant: 'sm',
    colorScheme: 'current',
  },
  baseStyle: () => ({
    width: '20vw',
    borderRadius: '0px',
    borderBottom: '1px',
    transition:'border .2s',
    _hover:{
      border:'1px'
    }
  }),
}

const Progress = {
  bg: '#3D5200',
  transitionDuration: "fast",
}

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
    Button,
    Divider,
    Progress,
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    // heading: `"Yantramanav"`,
    body: `'Raleway', sans-serif`,
  }
})

export default theme
