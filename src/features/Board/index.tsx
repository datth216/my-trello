import Container from '@mui/material/Container'
import BoardBar from './components/BoardBar'
import BoardContent from './components/BoardContent'
import Header from '@/components/Header'
import { mockData } from '@/api/mock-data'
// import { Board } from '@/model'

export function Board() {
  return (
    <Container
      sx={{
        height: '100vh',
        backgroundColor: 'primary.common'
      }}
      disableGutters
      maxWidth={false}
    >
      <Header />
      <BoardBar board={mockData?.board} />
      <BoardContent board={mockData?.board} />
    </Container>
  )
}
