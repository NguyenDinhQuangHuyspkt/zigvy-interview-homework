import React from 'react';
import { Task as TaskType, TaskStatus } from './type';
import { Button } from 'antd';

type Props = {
  task: TaskType;
  onUpdateStatus: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
};

const statusOrder: TaskStatus[] = [
  TaskStatus.TODO,
  TaskStatus.INPROGRESS,
  TaskStatus.DONE,
];

const Task: React.FC<Props> = ({ task, onUpdateStatus, onDelete }) => {
  const curIndex = statusOrder.indexOf(task.status);
  const nextStatus = statusOrder[(curIndex + 1) % statusOrder.length];

  return (
    <div className="bg-white rounded-md p-4 shadow mb-2">
      <h3 className="font-bold">{task.title}</h3>

      <p className="text-sm">{task.description}</p>

      <p className="text-xs text-gray-500">
        Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : ''}
      </p>

      <div className="mt-2 flex items-center justify-between">
        <Button
          onClick={() => onUpdateStatus(task._id, nextStatus)}
          className="text-blue-500 text-sm"
        >
          Mark as {nextStatus}
        </Button>
        
        <Button
          onClick={() => onDelete(task._id)}
          className="text-red-500 text-sm"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Task;