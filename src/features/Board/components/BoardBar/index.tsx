import VpnLockIcon from '@mui/icons-material/VpnLock'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import StarBorderIcon from '@mui/icons-material/StarBorder'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Tooltip from '@mui/material/Tooltip'
import Button from '@mui/material/Button'
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt'

export default function BoardBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: (theme) => theme.trello.boardBarHeight,
        width: '100%',
        overflowX: 'auto',
        justifyContent: 'space-between',
        gap: 2,
        bgcolor: '#277461'
      }}
      px={2}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Typography
          variant='h6'
          component='span'
          sx={{
            color: '#ffffff',
            typography: { sm: 'body1', xs: 'body2' }
          }}
        >
          My Trello
        </Typography>
        <StarBorderIcon
          sx={{
            color: 'white',
            cursor: 'pointer',
            fontSize: 'medium',
            '&:hover': { transform: 'scale(1.5)' }
          }}
        />
        <Chip
          icon={<VpnLockIcon />}
          label='Public/Private Workspace'
          variant='outlined'
          sx={{
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            '& .MuiSvgIcon-root': { color: 'white' }
          }}
          clickable
        />
        <Chip
          icon={<BoltIcon />}
          label='Automation'
          variant='outlined'
          sx={{
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            '& .MuiSvgIcon-root': { color: 'white' }
          }}
          clickable
        />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Button
          variant='outlined'
          sx={{ color: 'white', borderColor: 'white' }}
          startIcon={<PersonAddAltIcon />}
        >
          Invite
        </Button>
        <Chip
          icon={<FilterListIcon />}
          label='Filter'
          variant='outlined'
          sx={{
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            '& .MuiSvgIcon-root': { color: 'white' }
          }}
          clickable
        />
        <AvatarGroup
          max={4}
          sx={{
            gap: '8px',
            '& .MuiAvatar-root ': {
              width: 32,
              height: 32,
              fontSize: 16,
              border: 'none'
            }
          }}
        >
          <Tooltip title='Me'>
            <Avatar
              alt='Me'
              src='https://plus.unsplash.com/premium_photo-1664360970485-99ec77c55787?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
            />
          </Tooltip>
          <Avatar
            alt='Travis Howard'
            src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          />
          <Avatar alt='Agnes Walker' src='/static/images/avatar/4.jpg' />
          <Avatar alt='Trevor Henderson' src='/static/images/avatar/5.jpg' />
        </AvatarGroup>
      </Box>
    </Box>
  )
}
