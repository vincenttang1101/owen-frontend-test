import { IoMdClose } from 'react-icons/io'
import { FaPenAlt, FaTrashAlt } from 'react-icons/fa'
import { removeTask, toggleAddOrUpdateStatus, updateTask } from '@features/TodoList/todoList.slice'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import { ITaskItemProps } from '@typing'
import './style.scss'

export default function TaskItem({ task }: ITaskItemProps) {
  const { action, valueOfUpdate } = useAppSelector((state) => state.todo.addOrUpdateStatus)
  const dispatch = useAppDispatch()

  const handleUpdateTaskClick = () => {
    dispatch(
      toggleAddOrUpdateStatus({
        action: 'update',
        valueOfUpdate: task
      })
    )
  }

  const handleCloseUpdateTaskClick = () => {
    dispatch(
      toggleAddOrUpdateStatus({
        action: 'add',
        valueOfUpdate: {
          ...task,
          title: ''
        }
      })
    )
  }

  const handleRemoveTaskClick = (id: string) => {
    dispatch(removeTask(id))
  }
  const handleCheckCompleteChange = () => {
    dispatch(updateTask({ ...task, isCompleted: !task.isCompleted }))
  }

  return (
    <section className='task-item'>
      {/* Body */}
      <div className='body'>
        {/* Row left */}
        <div className='row-left'>
          <input
            type='checkbox'
            className='task-item__check'
            checked={task.isCompleted}
            onChange={handleCheckCompleteChange}
          />
          <p className={task.isCompleted ? `task-item__title--completed` : `task-item__title`}>{task.title}</p>
        </div>

        {/* Action group */}
        <div className='action-group'>
          {action === 'update' && valueOfUpdate?.id === task.id ? (
            <button className='action-group__btn action-group__btn--close' onClick={handleCloseUpdateTaskClick}>
              <IoMdClose className='action-group__icon' />
            </button>
          ) : (
            <>
              <button className='action-group__btn action-group__btn--update' onClick={handleUpdateTaskClick}>
                <FaPenAlt className='action-group__icon' />
              </button>
              <button
                className='action-group__btn action-group__btn--remove'
                onClick={() => handleRemoveTaskClick(task.id)}
              >
                <FaTrashAlt className='action-group__icon' />
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
