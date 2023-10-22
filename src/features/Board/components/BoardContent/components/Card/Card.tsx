import DragHandleIcon from '@mui/icons-material/DragHandle'
import { Card as MuiCard } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const Card = ({ card }) => {
  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
        cursor: 'pointer',
        overflow: 'unset'
      }}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} title='' />}
      <CardContent sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}>
        <Typography>{card?.title}</Typography>
      </CardContent>
      <CardActions sx={{ padding: '8px 12px 4px' }}>
        <Button
          size='small'
          startIcon={<DragHandleIcon />}
          sx={{
            color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')
          }}
        >
          Description
        </Button>
      </CardActions>
    </MuiCard>
  )
}

export default Card
