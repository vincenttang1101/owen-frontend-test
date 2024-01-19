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

          {/* Todo List */}
          <div className='todo-list__list'>
            {todoList.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
