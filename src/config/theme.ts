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
          main: '#fffff'
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
  }
})

export default theme
