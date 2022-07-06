import { extendTheme } from "@chakra-ui/react"

import { StyleFunctionProps } from '@chakra-ui/theme-tools'

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
    Box: {
      base: {
        borderBottom: '1px',
      },
    },
    Button: {
      defaultProps: {
        size: 'lg',
        variant: 'sm',
        colorScheme: 'current',
      },
      baseStyle: (props: StyleFunctionProps) => ({
        width: '20vw',
        borderRadius: '0px',
        borderBottom: '1px',
        borderColor: props.colorMode === "dark" ? "white" : 'black',
        transition:'border .2s',
        _hover:{
          border:'1px'
        }
      }),
    },
    Progress: {
      bg: '#3D5200',
      transitionDuration: "fast",
    },
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    // heading: `"Yantramanav"`,
    body: `'Raleway', sans-serif`,
  },

})

export default theme
