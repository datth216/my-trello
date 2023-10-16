import TrelloIcon from '@/assets/trello.svg?react'
import { ModeSelect } from '@/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SvgIcon from '@mui/material/SvgIcon'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Profile from './Menus/components/Profile'
import Recent from './Menus/components/Recent'
import Starred from './Menus/components/Starred'
import Template from './Menus/components/Template'
import Workspaces from './Menus/components/Workspaces'

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        height: (theme) => theme.trello.appBarHeight,
        width: '100%',
        overflowX: 'auto',
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#1d2125' : '#14553a')
      }}
      px={2}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon sx={{ color: 'white' }} />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize='small' sx={{ color: 'white' }} />
          <Typography variant='h6' component='span' sx={{ fontWeight: 'bold', color: 'white' }}>
            Trello
          </Typography>
        </Box>
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
          <Workspaces />
          <Recent />
          <Starred />
          <Template />
        </Box>
        <Button
          variant='outlined'
          sx={{
            color: 'white',
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            border: 'none',
            '&:hover': { border: 'none', bgcolor: 'rgba(255, 255, 255, 0.3)' }
          }}
          startIcon={<PlaylistAddIcon />}
        >
          Create
        </Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          id='outlined-search'
          label='Search'
          type='search'
          size='small'
          sx={{
            minWidth: 120,
            maxWidth: 170,
            '& label': { color: 'white' },
            '& label.Mui-focused': { color: 'white' },
            '& input': { color: 'white', bgcolor: 'rgba(255, 255, 255, 0.2)', borderRadius: '5px' },
            '&:hover input': { bgcolor: 'rgba(255, 255, 255, 0.3)' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.16)'
              },
              '&:hover fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.16)'
              },
              '&.Mui-focused fieldset': {
                borderColor: 'rgba(255, 255, 255, 0.16)'
              }
            }
          }}
        />
        <ModeSelect />
        <Tooltip title='Notification'>
          <Badge color='error' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsIcon sx={{ color: 'white' }} />
          </Badge>
        </Tooltip>
        <Tooltip title='Information'>
          <HelpOutlineIcon sx={{ cursor: 'pointer', color: 'white' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}
