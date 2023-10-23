import AddIcon from '@mui/icons-material/Add'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import React from 'react'
import ListCard from '../ListCard/ListCard'
import { orderArray } from '@/utils'
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

function Column({ column }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({
    id: column._id,
    data: { ...column }
  })
  const dndKitColumnStyle = {
    transform: CSS.Translate.toString(transform),
    transition
  }
  const orderedCards = orderArray(column?.cards, column?.cardOrderIds, '_id')
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Box
      ref={setNodeRef}
      style={dndKitColumnStyle}
      {...attributes}
      {...listeners}
      sx={{
        ml: 2,
        minWidth: 300,
        maxWidth: 300,
        borderRadius: '12px',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101204' : '#f1f2f4'),
        height: 'fit-content',
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}
    >
      <Box
        sx={{
          height: (theme) => theme.trello.columnHeaderHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Typography variant='h6' sx={{ fontSize: '14px', cursor: 'pointer' }}>
          {column?.title}
        </Typography>
        <Box>
          <Button
            sx={{
              '.MuiButton-endIcon': {
                m: 0
              }
            }}
            id='basic-column-dropdown'
            aria-controls={open ? 'basic-menu-column' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            endIcon={
              <MoreHorizIcon
                sx={{
                  color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black')
                }}
              />
            }
          ></Button>
          <Menu
            id='basic-menu-column'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-column-dropdown'
            }}
          >
            <MenuItem onClick={handleClose}>Add card...</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Move all cards in this list...</MenuItem>
            <Divider />
            <MenuItem onClick={handleClose}>Archive this list</MenuItem>
          </Menu>
        </Box>
      </Box>
      <ListCard cards={orderedCards} />
      <Box
        sx={{
          height: (theme) => theme.trello.columnFooterHeight,
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Button
          sx={{
            color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
            width: '100%'
          }}
          startIcon={
            <AddIcon
              sx={{ color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black') }}
            />
          }
        >
          Add a card
        </Button>
      </Box>
    </Box>
  )
}

export default Column
