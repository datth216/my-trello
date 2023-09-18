import Container from '@mui/material/Container'
import { Header } from '../../components/Header'
import BoardBar from './components/BoardBar'
import { BoardContent } from './components/BoardContent'

export function Board() {
  return (
    <Container
      sx={{
        height: '100vh',
        backgroundColor: 'primary.main'
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
