import Box from '@mui/material/Box'
import ListColumn from './components/ListColumn/ListColumn'

export default function BoardContent() {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? 'hsla(155,62%,24%,0.9)' : 'hsla(155,62%,25.6%,0.9)',
        padding: '12px 0'
      }}
    >
      <ListColumn />
    </Box>
  )
}
