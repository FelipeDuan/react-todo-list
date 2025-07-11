import useLocalStorage from "use-local-storage";
import { TASK_KEY, type Task } from "../models/task";
import { delay } from "../helpers/utils";
import { useState } from "react";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASK_KEY, []);
  const [isUpdatingTask, setIsUpdatingTask] = useState(false);
  const [isDeletingTask, setIsDeletingTasks] = useState(false);

  function prepareTask() {
    setTasks([
      ...tasks,
      {
        id: Math.random().toString(36).substring(2, 9),
        title: "",
        state: "creating",
      },
    ]);
  }

  async function updateTask(id: string, payload: { title: Task["title"] }) {
    setIsUpdatingTask(true);

    await delay(1000);

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, state: "created", ...payload } : task
      )
    );

    setIsUpdatingTask(false);
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, concluded } : task))
    );
  }

  async function deleteTask(id: string) {
    setIsDeletingTasks(true);

    await delay(1000);

    setTasks(tasks.filter((task) => task.id !== id));

    setIsDeletingTasks(false);
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  };
}
