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
    Progress: {
      bg: '#003D52',
      transitionDuration: "fast",
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
        borderRight: '1px',
        borderBottom: '1px',
        borderColor: props.colorMode === "dark" ? "darkBlue.700" : 'lightBlue.200',
        transition:'border .2s',
        _hover:{
          borderBottom:'1px', borderRight:'1px'
          }
      }),
    }
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    // heading: `"Yantramanav"`,
    body: `'Raleway', sans-serif`,
  },

})

export default theme
