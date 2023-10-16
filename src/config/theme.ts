import { APP_BAR_HEIGHT, BOARD_BAR_HEIGHT } from '@/constants'
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    trello: {
      appBarHeight: string
      boardBarHeight: string
    }
  }

  interface ThemeOptions {
    trello: {
      appBarHeight?: string
      boardBarHeight?: string
    }
  }
}

// A custom theme for this app
const theme = extendTheme({
  trello: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT
  },

  colorSchemes: {
    light: {},
    dark: {}
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '5px',
            height: '5px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#80a5a3'
          }
        }
      }
    },

    // Name of the component
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'none'
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        // Name of the slot
        root: () => ({
          fontSize: '0.875rem',
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    },

    MuiInputLabel: {
      styleOverrides: {}
    }
  }
})

export default theme
