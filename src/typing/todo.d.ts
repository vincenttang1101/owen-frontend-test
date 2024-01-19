export interface ITask {
  id: string
  title: string
  isCompleted: boolean
}

export interface IAddOrUpdateStatus {
  action: 'add' | 'update'
  valueOfUpdate?: ITask
}

export interface ITodoListState {
  todoList: ITask[]
  addOrUpdateStatus: IAddOrUpdateStatus
}

export interface IUpdateTaskPayload {
  id: string
  title?: string
  isCompleted?: boolean
}

export interface IMainLayout {
  children: React.ReactNode
}

export interface ITaskInputFormProps {
  action: string
}

export interface ITaskItemProps {
  task: ITask
}
