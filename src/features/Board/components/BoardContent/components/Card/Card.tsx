import { Card } from '@/model'
import DragHandleIcon from '@mui/icons-material/DragHandle'
import { Card as MuiCard } from '@mui/material'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

const Card = ({ hideMedia }: Card) => {
  if (hideMedia) {
    return (
      <MuiCard
        sx={{
          maxWidth: 345,
          boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
          cursor: 'pointer',
          overflow: 'unset'
        }}
      >
        <CardContent sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}>
          <Typography>Card Test</Typography>
        </CardContent>
      </MuiCard>
    )
  }

  return (
    <MuiCard
      sx={{
        maxWidth: 345,
        boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
        cursor: 'pointer',
        overflow: 'unset'
      }}
    >
      <CardMedia
        sx={{ height: 140 }}
        image='https://images.unsplash.com/photo-1696958363946-b58f40cda426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80'
        title=''
      />
      <CardContent sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}>
        <Typography>Test Trello Content</Typography>
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
