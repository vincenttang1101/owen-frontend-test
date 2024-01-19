import { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { FaPlus, FaPenAlt } from 'react-icons/fa'
import { nanoid } from 'nanoid'
import { addTask, toggleAddOrUpdateStatus, updateTask } from '@features/TodoList/todoList.slice'
import { useAppDispatch, useAppSelector } from '@redux/hook'
import './styles.scss'

export default function TaskInputForm() {
  const { action, valueOfUpdate } = useAppSelector((state) => state.todo.addOrUpdateStatus)
  const dispatch = useAppDispatch()

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required')
    }),
    onSubmit: (values) => {
      if (action === 'update' && valueOfUpdate) {
        dispatch(
          updateTask({
            id: valueOfUpdate.id,
            title: values.title
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
            title: values.title,
            isCompleted: false
          })
        )
      }

      formik.resetForm()
    }
  })

  useEffect(() => {
    if (valueOfUpdate) {
      formik.setFieldValue('title', valueOfUpdate.title)
    }
  }, [valueOfUpdate])

  return (
    <>
      <form className='task-form' onSubmit={formik.handleSubmit}>
        {/* Task input wrapper */}
        <div className='task-input-wrapper'>
          <input
            type='text'
            placeholder='Enter task'
            name='title'
            className='task-input'
            value={formik.values.title}
            onChange={formik.handleChange}
          />
          {formik.touched.title && formik.errors.title && <p className='task-input__error'>{formik.errors.title}</p>}
        </div>

        {/* Task form button */}
        <button type='submit' className='task-form__btn'>
          {action === 'add' ? <FaPlus className='task-form__icon' /> : <FaPenAlt className='task-form__icon' />}
        </button>
      </form>
    </>
  )
}
