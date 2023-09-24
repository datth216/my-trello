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
    light: {
      palette: {
        primary: {
          main: '#0092ab'
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: '#4a6bad'
        }
      }
    }
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
            backgroundColor: '#66bfce'
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
        root: ({ theme }) => ({
          color: theme.palette.primary.main,
          fontSize: '0.875rem',
          '.MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main },
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': { borderColor: theme.palette.primary.main }
          },
          '& fieldset': {
            borderWidth: '1px !important'
          }
        })
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.primary.main
        })
      }
    },
  }
})

export default theme
