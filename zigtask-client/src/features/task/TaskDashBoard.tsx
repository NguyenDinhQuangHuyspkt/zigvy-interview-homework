import React from 'react';
import { Task as TaskType, TaskStatus } from '../../components/task/type';
import { Task } from '../../components/task';

type Props = {
  tasks: TaskType[];
  onUpdateStatus: (id: string, status: TaskStatus) => void;
  onDelete: (id: string) => void;
};

const groups: { status: TaskStatus; title: string }[] = [
  { status: TaskStatus.TODO, title: 'To Do' },
  { status: TaskStatus.INPROGRESS, title: 'In Progress' },
  { status: TaskStatus.DONE, title: 'Done' },
];

const TaskBoard: React.FC<Props> = ({
  tasks,
  onUpdateStatus,
  onDelete,
}) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {groups.map(({ status, title }) => (
        <div key={status}>
          <h2 className="font-bold mb-2">{title}</h2>
          {tasks
            .filter((t) => t.status === status)
            .map((t,index) => (
              <Task
                key={index}
                task={t}
                onUpdateStatus={onUpdateStatus}
                onDelete={onDelete}
              />
            ))}
        </div>
      ))}
    </div>
  );
};

export default TaskBoard;
