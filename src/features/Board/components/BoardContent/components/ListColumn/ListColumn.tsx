import AddIcon from '@mui/icons-material/Add'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Column from '../Column/Column'
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

export function ListColumn({ columns }) {
  return (
    <SortableContext
      items={columns.map((item) => item._id)}
      strategy={horizontalListSortingStrategy}
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
        {columns?.map((column) => <Column key={column._id} column={column} />)}
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
    </SortableContext>
  )
}

export default ListColumn
