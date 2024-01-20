import { Pagination } from 'react-bootstrap'
import { TaskInputForm, TaskItem } from '@features'
import { updateActivedIndex } from '@features/TodoList/todoList.slice'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import './styles.scss'

export default function TodoList() {
  const { todoList, activedIndex } = useAppSelector((state) => state.todo)
  const dispatch = useAppDispatch()

  const handlePaginationClick = (numberPage: number) => {
    dispatch(updateActivedIndex(numberPage))
  }

  const itemsPerPage = 5
  const totalPages = Math.ceil(todoList.length / itemsPerPage)

  const startIndex = (activedIndex - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const items = []

  if (totalPages > 0) {
    for (let number = 1; number <= totalPages; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === activedIndex}
          className='pagination-item'
          activeLabel=''
          linkClassName={
            number === activedIndex
              ? `pagination-item__number pagination-item__number--active`
              : `pagination-item__number`
          }
          onClick={() => handlePaginationClick(number)}
        >
          {number}
        </Pagination.Item>
      )
    }
  }
  return (
    <section className='todo-list'>
      {/* Container */}
      <div className='container'>
        {/* Body */}
        <div className='body'>
          {/* Heading wrapper */}
          <div className='todo-list__heading-wrapper'>
            <h1 className='todo-list__heading'>What's your plan?</h1>
          </div>

          {/* Form Wrapper */}
          <div className='todo-list__form-wrapper'>
            <TaskInputForm />
          </div>

          {/* Todos */}
          <div className='todo-list__todos'>
            {todoList.length > 0 ? (
              todoList.slice(startIndex, endIndex).map((task) => <TaskItem key={task.id} task={task} />)
            ) : (
              <p className='todo-list__not-found'>No task found</p>
            )}
          </div>

          {/* Pagination */}
          <Pagination className='todo-list__pagination'>{items}</Pagination>
        </div>
      </div>
    </section>
  )
}
