import { FaPlus } from 'react-icons/fa'
import './styles.scss'

export default function TaskInputForm() {
  return (
    <form className='task-form'>
      <input type='text' placeholder='Enter task' className='task-form__input' />
      <button type='submit' className='task-form__btn task-form__btn--add'>
        <FaPlus className='task-form__icon' />
      </button>
    </form>
  )
}
