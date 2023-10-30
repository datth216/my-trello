import { ACTIVE_DRAG_ITEM_TYPE } from '@/constants'
import { Board } from '@/model'
import { orderArray } from '@/utils'
import {
  DndContext,
  DragOverlay,
  DropAnimation,
  MouseSensor,
  TouchSensor,
  defaultDropAnimationSideEffects,
  useSensor,
  useSensors,
  closestCorners
} from '@dnd-kit/core'
import { arrayMove } from '@dnd-kit/sortable'
import Box from '@mui/material/Box'
import { cloneDeep } from 'lodash'
import { useEffect, useState } from 'react'
import Card from './components/Card/Card'
import Column from './components/Column/Column'
import ListColumn from './components/ListColumn/ListColumn'

export default function BoardContent({ board }: Board) {
  const [activeDragItemId, setActiveDragItemId] = useState(null)
  const [activeDragItemType, setActiveDragItemType] = useState<null | string>(null)
  const [activeDragItemData, setActiveDragItemData] = useState(null)
  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10
    }
  })
  const touchSensor = useSensor(TouchSensor, {
    // Press delay of 250ms, with tolerance of 5px of movement
    activationConstraint: {
      delay: 250,
      tolerance: 5
    }
  })
  const sensors = useSensors(mouseSensor, touchSensor)
  const [orderedColumns, setOrderedColumns] = useState<
    {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any
    }[]
  >([])
  useEffect(() => {
    setOrderedColumns(orderArray(board?.columns, board?.columnOrderIds, '_id'))
  }, [board])

  function handleDragStart(event) {
    setActiveDragItemId(event?.active?.id)
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ACTIVE_DRAG_ITEM_TYPE.CARD
        : ACTIVE_DRAG_ITEM_TYPE.COLUMN
    )
    setActiveDragItemData(event?.active?.data?.current)
  }

  function findColumnByCardId(cardId) {
    return orderedColumns.find((column) => column?.cards?.map((card) => card._id)?.includes(cardId))
  }

  function handleDragOver(event) {
    if (activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN) return

    const { active, over } = event

    if (!active || !over) return

    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData }
    } = active

    const { id: overCardId } = over

    const activeColumn = findColumnByCardId(activeDragItemId) //activeDraggingCardId
    const overColumn = findColumnByCardId(overCardId)

    if (!activeColumn || !overColumn) return

    //handle drag over when card is dragging - when done, handle drag end
    if (activeColumn._id !== overColumn._id) {
      console.log('code chay vao day')

      setOrderedColumns((prevColumns) => {
        const overCardIndex = overColumn?.cards?.findIndex((card) => card._id === overCardId)

        // let newIndex: number
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height
        const modifier = isBelowOverItem ? 1 : 0
        const newCardIndex =
          overCardIndex >= 0 ? overCardIndex + modifier : overColumn?.cards?.length + 1

        const nextColumns = cloneDeep(prevColumns)
        const nextActiveColumn = nextColumns.find((column) => column._id === activeColumn._id)
        const nextOverColumn = nextColumns.find((column) => column._id === overColumn._id)

        if (nextActiveColumn) {
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          )

          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map((card) => card._id)
        }

        if (nextOverColumn) {
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          )

          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          )
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map((card) => card._id)
        }

        // console.log(nextColumns)

        return nextColumns
      })
    }

    // console.log('handleDragOver', event)
  }

  function handleDragEnd(event) {
    // console.log(handleDragEnd, event)

    const { active, over } = event
    if (!active || !over) return
    if (active.id !== over.id) {
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id)
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id)
      const dndOrderedColumns = arrayMove(orderedColumns, oldIndex, newIndex)
      setOrderedColumns(dndOrderedColumns)
    }
    setActiveDragItemId(null)
    setActiveDragItemType(null)
    setActiveDragItemData(null)
  }

  const dropAnimation: DropAnimation = {
    sideEffects: defaultDropAnimationSideEffects({
      styles: {
        active: {
          opacity: '0.5'
        }
      }
    })
  }

  return (
    <DndContext
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
      sensors={sensors}
      collisionDetection={closestCorners}
    >
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
        <DragOverlay dropAnimation={dropAnimation}>
          {!activeDragItemType && null}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column column={activeDragItemData} />
          )}
          {activeDragItemType === ACTIVE_DRAG_ITEM_TYPE.CARD && <Card card={activeDragItemData} />}
        </DragOverlay>
      </Box>
    </DndContext>
  )
}
