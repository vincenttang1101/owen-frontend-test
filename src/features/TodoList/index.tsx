import { TaskInputForm, TaskItem } from '@features'
import './styles.scss'

export default function TodoList() {
  return (
    <section className='todos'>
      {/* Container */}
      <div className='container'>
        {/* Body */}
        <div className='body'>
          {/* Heading wrapper */}
          <div className='todos__heading-wrapper'>
            <h1 className='todos__heading'>What's your plan?</h1>
          </div>

          {/* Form Wrapper */}
          <div className='todos__form-wrapper'>
            <TaskInputForm />
          </div>

          {/* Todo List */}
          <div className='todos__list'>
            <TaskItem />
            <TaskItem />
          </div>
        </div>
      </div>
    </section>
  )
}
