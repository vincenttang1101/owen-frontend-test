import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/react'
import { IAddOrUpdateStatus, ITask, ITodoListState, IUpdateTaskPayload } from '@typing'

const getInitialTodoList = () => {
  const localTodolist = window.localStorage.getItem('todoList')
  if (localTodolist) return JSON.parse(localTodolist)

  window.localStorage.setItem('todoList', JSON.stringify([]))
  return []
}

const initialState: ITodoListState = {
  todoList: getInitialTodoList(),
  addOrUpdateStatus: {
    action: 'add'
  }
}

export const todoListSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      const todo = action.payload
      state.todoList.push(todo)

      const todoList = window.localStorage.getItem('todoList')
      if (todoList) {
        const todoListParse: ITask[] = JSON.parse(todoList)
        todoListParse.push(todo)
        localStorage.setItem('todoList', JSON.stringify(todoListParse))
      } else window.localStorage.setItem('todoList', JSON.stringify([]))
    },
    updateTask: (state, action: PayloadAction<IUpdateTaskPayload>) => {
      const todo = action.payload

      const index = state.todoList.findIndex((task) => task.id === todo.id)
      if (index === -1) return
      state.todoList[index] = {
        ...state.todoList[index],
        ...todo
      }

      const todoList = window.localStorage.getItem('todoList')
      if (todoList) {
        const todoListParse: ITask[] = JSON.parse(todoList)
        todoListParse.findIndex((task) => task.id === todo.id)
        if (index === -1) return
        todoListParse[index] = { ...todoListParse[index], ...action.payload }
        localStorage.setItem('todoList', JSON.stringify(todoListParse))
      } else window.localStorage.setItem('todoList', JSON.stringify([]))
    },
    removeTask: (state, action: PayloadAction<string>) => {
      const id = action.payload

      const index = state.todoList.findIndex((task) => task.id === id)
      if (index === -1) return
      state.todoList.splice(index, 1)

      const todoList = window.localStorage.getItem('todoList')
      if (todoList) {
        const todoListParse: ITask[] = JSON.parse(todoList)
        todoListParse.findIndex((task) => task.id === id)
        if (index === -1) return
        todoListParse.splice(index, 1)
        localStorage.setItem('todoList', JSON.stringify(todoListParse))
      } else window.localStorage.setItem('todoList', JSON.stringify([]))
    },
    toggleAddOrUpdateStatus: (state, action: PayloadAction<IAddOrUpdateStatus>) => {
      state.addOrUpdateStatus.action = action.payload.action
      state.addOrUpdateStatus.valueOfUpdate = action.payload.valueOfUpdate
    }
  }
})

export const { addTask, updateTask, removeTask, toggleAddOrUpdateStatus } = todoListSlice.actions
export default todoListSlice.reducer
