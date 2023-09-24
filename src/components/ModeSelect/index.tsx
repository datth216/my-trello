import { useColorScheme } from '@mui/material/styles'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream'
import Box from '@mui/material/Box'

export function ModeSelect() {
  type mode = 'dark' | 'light' | 'system'
  const { mode, setMode } = useColorScheme()

  const handleChange = (event: SelectChangeEvent) => {
    const selectedMode = event.target.value as mode
    setMode(selectedMode)
  }

  return (
    <FormControl size='small'>
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
