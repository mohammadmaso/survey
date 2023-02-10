import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: 
    {
      50: '#fcd7fc',
      100: '#f6bcf7',
      200: '#f8a0fa',
      300: '#f574f7',
      400: '#ef3ff2',
      500: '#da00de',
      600: '#bf00c2',
      700: '#b002b3',
      800: '#78027a',
      900: '#001b00',
    }
};

const components = {
    Button: { baseStyle: { _focus: { boxShadow: "none" } } },
    
    // Menu: {
    //   sizes :{
    //     sm :{
    //       h:"30px",
    //     }
    //   }
    // },
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
    Tabs: {
      baseStyle: {
        tab: {
          _focus: {
            boxShadow: "none",
          },
        },
      },
    },
  }

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
}


const fonts = {
    heading: "peyda",
    body: "iranyekanfanum",
}
const direction = "rtl"

// const breakpoints = createBreakpoints({
//   md: "768px",
//   lg: "1200px",
//   xl: "1600px",
// })

const theme = extendTheme({direction, colors, fonts , components, config, sizes:{
  fontSizes:{
    md: "0.7rem",
    sm: "0.5rem"
  }
}});

export default theme;
