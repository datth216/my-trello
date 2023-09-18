import Box from '@mui/material/Box'

export function BoardContent() {
  return (
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
  )
}
