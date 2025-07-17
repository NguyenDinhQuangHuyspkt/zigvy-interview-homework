import React, { useEffect, useState } from 'react';
import { Task as TaskType, TaskStatus } from '../../components/task/type';
import TaskBoard from './TaskDashBoard';
import { createTask, deleteTask, getAllTasks, searchTasks, updateTaskStatus } from '../../services/task/task.svc';
import { ESuccessCodes } from '../../constanst/app.const';
import { toastSuccessHandler } from '../../utils/toast.utils';
import { Button, Input } from 'antd';
import { ModalCreateTask } from '../modal/modal-create-task';

export const TaskContainer: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const [loading, setLoading] = useState(false);

  const [search, setSearch] = useState('');

  const [from, setFrom] = useState('');

  const [to, setTo] = useState('');

  const [isModalVisible, setIsModalVisible] = useState(false);

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

  const handleCreate = async (values:{
    title: string;
    description: string;
    status: TaskStatus;
    dueDate: string;
  }) => {
    setIsModalVisible(false);
    try {
      const res = await createTask(values);
      if (res.code === ESuccessCodes.SUCCESS) {
        toastSuccessHandler('Tạo task thành công');
        fetchTasks();
      }
    } catch (err) {
      console.error('Create task failed', err);
    }
  };

  const handleSearch = async (e:  React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    try {
      setSearch(e.target.value);
      const res = await searchTasks(search);
      setTasks(res.data);
    } catch (err) {
      console.error('Search failed', err);
    } finally {
      setLoading(false);
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
          onChange={handleSearch}
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

        <Button type="primary" onClick={() => setIsModalVisible(true)}>
          + Tạo task mới
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

      <ModalCreateTask 
        visible={isModalVisible}
        onCreate={handleCreate}
        onCancel={() => setIsModalVisible(false)}
      />
    </div>
  );
};

export default TaskContainer;
