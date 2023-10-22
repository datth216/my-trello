export interface Board {
  board?: {
    _id: string
    title?: string
    description?: string
    type?: string
    ownerIds?: string[]
    memberIds?: string[]
    columnOrderIds?: string[]
    columns: ColumnBoard[] | []
  }
}

export interface ColumnBoard {
  _id: string
  boardId: string
  title?: string
  cardOrderIds?: string[]
  cards: CardBoard[] | []
}

export interface CardBoard {
  _id: string
  boardId: string
  columnId: string
  title?: string
  decsription?: null | string
  cover?: null | string
  memberIds?: string[]
  comment?: string[]
  attachments?: string[]
}
