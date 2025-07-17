export enum TaskStatus {
  TODO = 'TO_DO',
  INPROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export interface Task {
  _id: string;
  title: string;
  description?: string;
  dueDate?: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}
