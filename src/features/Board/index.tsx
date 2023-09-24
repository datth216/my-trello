import Container from '@mui/material/Container'
import BoardBar from './components/BoardBar'
import BoardContent from './components/BoardContent'
import Header from '@/components/Header'

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
      <BoardBar />
      <BoardContent />
    </Container>
  )
}
