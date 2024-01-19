import { useEffect, useState } from 'react'
import { FaPlus, FaPenAlt } from 'react-icons/fa'
import { nanoid } from 'nanoid'
import { addTask, toggleAddOrUpdateStatus, updateTask } from '@features/TodoList/todoList.slice'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import './styles.scss'

export default function TaskInputForm() {
  const [title, setTitle] = useState('')
  const { action, valueOfUpdate } = useAppSelector((state) => state.todo.addOrUpdateStatus)
  const dispatch = useAppDispatch()

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const title = event.target.value
    setTitle(title)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (action === 'update' && valueOfUpdate) {
      dispatch(
        updateTask({
          id: valueOfUpdate.id,
          title
        })
      )

      dispatch(
        toggleAddOrUpdateStatus({
          action: 'add'
        })
      )
    } else {
      dispatch(
        addTask({
          id: nanoid(),
          title,
          isCompleted: false
        })
      )
    }
    setTitle('')
  }

  useEffect(() => {
    if (valueOfUpdate) {
      setTitle(valueOfUpdate.title)
    }
  }, [valueOfUpdate])

  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Enter task'
        className='task-form__input'
        value={title}
        onChange={handleTitleChange}
      />
      <button type='submit' className='task-form__btn'>
        {action === 'add' ? <FaPlus className='task-form__icon' /> : <FaPenAlt className='task-form__icon' />}
      </button>
    </form>
  )
}
