import React, { useEffect, useState } from 'react';
import { Task as TaskType, TaskStatus } from '../../components/task/type';
import TaskBoard from './TaskDashBoard';
import { deleteTask, getAllTasks, updateTaskStatus } from '../../services/task/task.svc';
import { ESuccessCodes } from '../../constanst/app.const';
import { toastSuccessHandler } from '../../utils/toast.utils';
import { Button, Input } from 'antd';

export const TaskContainer: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');

  const [from, setFrom] = useState('');

  const [to, setTo] = useState('');

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const res = await getAllTasks();
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [search, from, to]);

  const handleUpdate = async (id: string, status: TaskStatus) => {
    setTasks((prev) =>
      prev.map((t) => (t._id === id ? { ...t, status } : t)),
    );
    try {
      const res = await updateTaskStatus(id, status);

      if(res.code === ESuccessCodes.SUCCESS) toastSuccessHandler('Cập nhật trạng thái thành công');
    } catch (err) {
      fetchTasks();
      console.error('Status update failed', err);
    }
  };

  const handleDelete = async (id: string) => {
    setTasks((prev) => prev.filter((t) => t._id !== id));
    try {
      const res = await deleteTask(id);
      if(res.code === ESuccessCodes.SUCCESS) toastSuccessHandler('Xoá thành công');
    } catch (err) {
      fetchTasks();
      console.error('Delete failed', err);
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex gap-2">
        <Input
          type="text"
          placeholder="Search title"
          value={search}
          className="border p-2 "
          onChange={(e) => setSearch(e.target.value)}
        />
        <Input
          type="date"
          className="border p-2"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
        />
        <Input
          type="date"
          className="border p-2"
          value={to}
          onChange={(e) => setTo(e.target.value)}
        />
        <Button
          onClick={() => fetchTasks()}
          className="bg-blue-500 text-white px-4 rounded"
        >
          Search
        </Button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <TaskBoard
          tasks={tasks}
          onUpdateStatus={handleUpdate}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default TaskContainer;
