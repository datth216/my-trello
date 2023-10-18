import Box from '@mui/material/Box'
import Card from '../Card/Card'

function ListCard() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        p: '2px 4px',
        m: '0 4px',
        overflowX: 'hidden',
        overflowY: 'auto',
        maxHeight: (theme) =>
          `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)} - ${
            theme.trello.columnHeaderHeight
          } - ${theme.trello.columnFooterHeight})`
      }}
    >
      <Card />
      <Card hideMedia={true} />
      <Card hideMedia={true} />
    </Box>
  )
}

export default ListCard
