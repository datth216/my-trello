import Box from '@mui/material/Box'

export default function BoardBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'success.dark',
        height: (theme) => theme.trello.boardBarHeight,
        width: '100%'
      }}
    >
      Board Bar
    </Box>
  )
}
