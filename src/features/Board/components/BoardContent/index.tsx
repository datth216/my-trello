import { COLUMN_FOOTER_HEIGHT, COLUMN_HEADER_HEIGHT } from '@/constants'
import AddIcon from '@mui/icons-material/Add'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Divider from '@mui/material/Divider'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import React from 'react'
import DragHandleIcon from '@mui/icons-material/DragHandle'

export default function BoardContent() {
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
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardContentHeight,
        bgcolor: (theme) =>
          theme.palette.mode === 'dark' ? 'hsla(155,62%,24%,0.9)' : 'hsla(155,62%,25.6%,0.9)',
        padding: '12px 0'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          height: '100%',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': { m: 2 }
        }}
      >
        <Box
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
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant='h6' sx={{ fontSize: '14px', cursor: 'pointer' }}>
              Title Column
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
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                cursor: 'pointer',
                overflow: 'unset'
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image='https://images.unsplash.com/photo-1696958363946-b58f40cda426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80'
                title=''
              />
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
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
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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

        <Box
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
              height: COLUMN_HEADER_HEIGHT,
              p: 2,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <Typography variant='h6' sx={{ fontSize: '14px', cursor: 'pointer' }}>
              Title Column
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
                `calc(${theme.trello.boardContentHeight} - ${theme.spacing(
                  5
                )} - ${COLUMN_HEADER_HEIGHT} - ${COLUMN_FOOTER_HEIGHT})`
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                cursor: 'pointer',
                overflow: 'unset'
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image='https://images.unsplash.com/photo-1696958363946-b58f40cda426?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2128&q=80'
                title=''
              />
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
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
            </Card>
            <Card
              sx={{
                maxWidth: 345,
                boxShadow:
                  'rgba(9, 30, 66, 0.25) 0px 1px 1px 0px, rgba(9, 30, 66, 0.31) 0px 0px 1px 0px',
                overflow: 'unset'
              }}
            >
              <CardContent
                sx={{ padding: '8px 12px 4px', '&:last-child': { paddingBottom: '4px' } }}
              >
                <Typography>Lizard</Typography>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              height: COLUMN_FOOTER_HEIGHT,
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
      </Box>
    </Box>
  )
}
