import { MainLayout } from '@components'
import { TodoList } from '@features'
import './App.css'

function App() {
  return (
    <>
      <MainLayout>
        <TodoList />
      </MainLayout>
    </>
  )
}

export default App
