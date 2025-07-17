import { Task, TaskStatus } from "../../components/task/type";
import { AxiosInstance } from "../axios-instance.svc";
import { TResponse } from "../type";
import { TRequestCreateTask, TResponseGetAllTasks } from "./types";

export const API_TASK_ENDPOINT = {
  GET: {
    allTask: "tasks",
    status: "tasks/status",
    search: "tasks",
  },
  POST: {
    createTask: "tasks",
  },
  DELETE:{
    deleteTask: "tasks/:id",
  },
  PATCH: {
    updateTask: "tasks/:id",
  },

};

export const getAllTasks = async (): Promise<TResponse<TResponseGetAllTasks[]>> => {
  const res = await AxiosInstance.get(API_TASK_ENDPOINT.GET.allTask);
  return res.data;
}

export const createTask = async (task: TRequestCreateTask): Promise<TResponse<{}>> => {
  const res = await AxiosInstance.post(API_TASK_ENDPOINT.POST.createTask, task);
  return res.data;
}

export const deleteTask = async (id: string): Promise<TResponse<void>> => {
  const res = await AxiosInstance.delete(API_TASK_ENDPOINT.DELETE.deleteTask.replace(':id', id));
  return res.data;
}

export const updateTaskStatus = async (id: string, status: TaskStatus): Promise<TResponse<TResponseGetAllTasks>> => {
  const res = await AxiosInstance.patch(API_TASK_ENDPOINT.PATCH.updateTask.replace(':id', id), { status });
  return res.data;
}

export const getTasksByStatus = async (status: TaskStatus): Promise<TResponse<TResponseGetAllTasks[]>> => {
  const res = await AxiosInstance.get(`${API_TASK_ENDPOINT.GET.status}/${status}`);
  return res.data;
}

export const searchTasks = async (query: string): Promise<TResponse<TResponseGetAllTasks[]>> => {
  const res = await AxiosInstance.get(`${API_TASK_ENDPOINT.GET.search}?q=${query}`);
  return res.data;
}
