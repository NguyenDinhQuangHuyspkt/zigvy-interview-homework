import { TaskStatus } from "../../components/task/type";

export type TRequestCreateTask = {
    title: string;
    description?: string;
    dueDate?: string;
    status: TaskStatus;
};

export type TResponseGetAllTasks = {
    _id: string;
    title: string;
    description?: string;
    dueDate?: string;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
};

export type TResponseCreateTask = {
    _id: string;
    title: string;
    description?: string;
    dueDate?: string;       
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;
};

