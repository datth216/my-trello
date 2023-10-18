import Box from '@mui/material/Box'
import Column from '../Column/Column'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

export function ListColumn() {
  return (
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
      <Column />
      <Column />
      <Box
        sx={{
          minWidth: '200px',
          maxWidth: '200px',
          mx: 2,
          bgcolor: '#ffffff3d',
          height: 'fit-content',
          borderRadius: '12px'
        }}
      >
        <Button
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
            borderRadius: '12px',
            padding: '12px',
            color: 'white'
          }}
          startIcon={<AddIcon />}
        >
          Add another list
        </Button>
      </Box>
    </Box>
  )
}

export default ListColumn
