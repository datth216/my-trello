import Box from '@mui/material/Box'
import Card from '../Card/Card'

function ListCard({ cards }) {
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
      {cards?.map((card) => <Card key={card._id} card={card} />)}
    </Box>
  )
}

export default ListCard
