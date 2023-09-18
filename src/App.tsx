import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream'
import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useColorScheme } from '@mui/material/styles'
import Container from '@mui/material/Container'

type mode = 'dark' | 'light' | 'system'

function SelectMode() {
  const { mode, setMode } = useColorScheme()

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode = event.target.value as mode
    setMode(selectedMode)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <InputLabel id='select-dark-light-mode'>Mode</InputLabel>
      <Select
        labelId='select-dark-light-mode'
        id='select-dark-light-mode'
        value={mode}
        label='Mode'
        onChange={handleChange}
      >
        <MenuItem value='light'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LightModeIcon />
            Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <DarkModeIcon />
            Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <SettingsSystemDaydreamIcon />
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}

function App() {
  return (
    <>
      <Container
        sx={{
          height: '100vh',
          backgroundColor: 'primary.main'
        }}
        disableGutters
        maxWidth={false}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.light',
            height: (theme) => theme.trello.appBarHeight,
            width: '100%'
          }}
        >
          <SelectMode />
          Header Bar
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.dark',
            height: (theme) => theme.trello.boardBarHeight,
            width: '100%'
          }}
        >
          Board Bar
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'primary.main',
            height: (theme) =>
              `calc(100vh - ${theme.trello.appBarHeight} - ${theme.trello.boardBarHeight})`,
            width: '100%'
          }}
        >
          Content
        </Box>
      </Container>
    </>
  )
}

export default App
