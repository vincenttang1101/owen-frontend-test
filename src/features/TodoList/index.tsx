import { TaskInputForm, TaskItem } from '@features'
import { useAppSelector } from '@redux/hook'
import './styles.scss'

export default function TodoList() {
  const todoList = useAppSelector((state) => state.todo.todoList)

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
              todoList.map((task) => <TaskItem key={task.id} task={task} />)
            ) : (
              <p className='todo-list__not-found'>No task found</p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
