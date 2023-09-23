import TrelloIcon from '@/assets/trello.svg?react'
import { ModeSelect } from '@/components/ModeSelect'
import AppsIcon from '@mui/icons-material/Apps'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsIcon from '@mui/icons-material/Notifications'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SvgIcon from '@mui/material/SvgIcon'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Recent from './Menus/components/Recent'
import Starred from './Menus/components/Starred'
import Template from './Menus/components/Template'
import Workspaces from './Menus/components/Workspaces'
import Profile from './Menus/components/Profile'

export default function Header() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: (theme) => theme.trello.appBarHeight,
        width: '100%'
      }}
      px={2}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <AppsIcon />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <SvgIcon component={TrelloIcon} inheritViewBox />
          <Typography variant='h6' component='span' sx={{ fontWeight: 'bold' }}>
            Trello
          </Typography>
        </Box>
        <Workspaces />
        <Recent />
        <Starred />
        <Template />
        <Button variant='contained'>Create</Button>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField id='outlined-search' label='Search' type='search' size='small' />
        <ModeSelect />
        <Tooltip title='Notification'>
          <Badge color='success' variant='dot' sx={{ cursor: 'pointer' }}>
            <NotificationsIcon />
          </Badge>
        </Tooltip>
        <Tooltip title='Information'>
          <HelpOutlineIcon sx={{ cursor: 'pointer' }} />
        </Tooltip>
        <Profile />
      </Box>
    </Box>
  )
}
