import Box from '@mui/material/Box'
import { ModeSelect } from '@/components/ModeSelect'

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.light',
        height: (theme) => theme.trello.appBarHeight,
        width: '100%'
      }}
    >
      <ModeSelect />
      Header
    </Box>
  )
}
