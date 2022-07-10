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
    }
  }
}

const Heading = {
  defaultProps: {
  },
  baseStyle: {
    marginBottom: '2vh',
  },
  variants: {
    topBarMajor: (props) => ({
      margin: '0vh',
      maxH: '62%',
      paddingLeft: '1vw',
      transition: "font-size .2s, opacity .2s, filter .05s",
      position: 'absolute',
    }),
  }
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
    Heading,
  },
  fonts: {
    heading: `'Raleway', sans-serif`,
    body: `'Raleway', sans-serif`,
  }
})

export default theme
