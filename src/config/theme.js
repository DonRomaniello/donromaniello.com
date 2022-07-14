import { extendTheme } from "@chakra-ui/react"

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
  baseStyle: (props) => ({
    width: '120px',
    borderRadius: '0px',
    borderBottom: '1px',
    transition:'border .2s',
    _hover:{
      border:'1px'
    }
  }),
  variants: {
    colorMode: {
      _hover:{
        border:'0px',
        filter:'invert(50%)'
      }
    },
    project: {
      width: '',
      fontSize:'2em'
    },
    projectMobile: {
      width: '',
      fontSize:'1em'
    }
  }
}

const Heading = {
  defaultProps: {
  },
  baseStyle: {
    marginBottom: '2vh',
    borderBottom: '1px'
  },
  variants: {
    topBarMajor: (props) => ({
      margin: '0vh',
      maxH: '62%',
      paddingLeft: '1vw',
      transition: "font-size .2s, opacity .2s, filter .05s",
      position: 'absolute',
      borderBottom: '',
    }),
  }
}

const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    light: {
      bg: '#E8F1F2',
      progress: {
        filling: {
          500: '#FF934F',
        },
        full: {
          500: '#4A6FA5',
        },
      }
    },
    dark: {
      bg: '#2A314B',
      progress: {
        filling: {
          200: '#FBAF00',
        },
        full: {
          200: '#4A6FA5',
        },
      }
    },

    green: {
      50: "#00FF22",
      200: "#00FF66",
      500: "#66FF22",
    },
    darkBlue: {
      500: '#007EA7',
      700: '#003D52'
    },
    lightBlue: {
      200: '#EBF4FF',
      500: '#BEDCFE',
    },
  },
  styles: {
    global: (props) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? 'dark.bg' : 'light.bg',
      },
    }),
  },
  components: {
    Button,
    Divider,
    Heading,
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  }
})

export default theme
