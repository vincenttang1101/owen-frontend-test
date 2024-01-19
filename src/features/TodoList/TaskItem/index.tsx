import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import './style.scss'

export default function TaskItem() {
  return (
    <section className='task-item'>
      {/* Body */}
      <div className='body'>
        {/* Row left */}
        <div className='row-left'>
          <input type='checkbox' className='task-item__check ' />
          <p className='task-item__desc'>ReactJS</p>
        </div>

        {/* Action group */}
        <div className='action-group'>
          <button className='action-group__btn action-group__btn--update'>
            <FaPenAlt className='action-group__icon' />
          </button>
          <button className='action-group__btn action-group__btn--remove'>
            <FaTrashAlt className='action-group__icon' />
          </button>
        </div>
      </div>
    </section>
  )
}
