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
    transition:'border .2s, background 2s, border-radius .2s',
    _hover:{
      border:'1px',
      background: 'card.40',
      borderRadius: '7px'
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
  baseStyle: (props) => ({
    marginBottom: '2vh',
    borderBottom: '1px'
  }),
  variants: {
    topBarMajor: {
        maxH: '62%',
        width: '100%',
        paddingLeft: '1vw',
        transition: "font-size .2s, opacity .2s, filter .05s",
        position: 'absolute',
        borderBottom: '',
        margin: '0',
    },
    topBarMajorShown: {
        margin: 'auto',
        textAlign: 'center',
        maxH: '62%',
        width: '100%',
        transition: "font-size .2s, opacity .2s, filter .05s",
        position: 'absolute',
        borderBottom: '',
      },
  }
}

const Progress = {
  styles: {
    global: (props) => ({
      bg: props.colorMode === 'dark' ? '#2A314B' : 'light.bg',
    }),
  },
  transitionDuration: "slow",
}


const theme = extendTheme({
  initialColorMode: 'light',
  useSystemColorMode: false,
  colors: {
    light: {
      bg: '#EFEFEF',
      progress: {
        filling: {
          500: '#D0D6B3',
        },
        full: {
          500: '#7FAAAE',
        },
      }
    },
    dark: {
      bg: '#283C3E',
      progress: {
        filling: {
          200: '#D0D6B3',
        },
        full: {
          200: '#AAAE7F',
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
    card: {
      10: 'rgba(51, 75, 113, .1)',
      40: 'rgba(51, 75, 113, .4)',
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
    Progress,
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  }
})

export default theme
