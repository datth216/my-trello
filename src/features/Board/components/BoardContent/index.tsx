import { Board } from '@/model'
import { orderArray } from '@/utils'
import { DndContext, PointerSensor, useSensor, useSensors } from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import Box from '@mui/material/Box'
import { useEffect, useState } from 'react'
import ListColumn from './components/ListColumn/ListColumn'

export default function BoardContent({ board }: Board) {
  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: {
      distance: 10
    }
  })
  const sensors = useSensors(pointerSensor)
  const [orderedColumns, setOrderedColumns] = useState<{ _id: string }[]>([])
  useEffect(() => {
    setOrderedColumns(orderArray(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  function handleDragEnd(event) {
    const { active, over } = event
    if (!over) return
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      setOrderedColumns(dndOrderedColumns)
    }
    // console.log(event)
  }
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <Box
        sx={{
          width: '100%',
          height: (theme) => theme.trello.boardContentHeight,
          bgcolor: (theme) =>
            theme.palette.mode === 'dark' ? 'hsla(155,62%,24%,0.9)' : 'hsla(155,62%,25.6%,0.9)',
          padding: '12px 0'
        }}
      >
        <ListColumn columns={orderedColumns} />
      </Box>
    </DndContext>
  )
}
