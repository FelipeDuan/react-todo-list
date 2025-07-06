import useLocalStorage from "use-local-storage";
import { TASK_KEY, type Task } from "../models/task";
import { useEffect, useState } from "react";
import { delay } from "../helpers/utils";

export default function useTasks() {
  const [tasksData] = useLocalStorage<Task[]>(TASK_KEY, []);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoadingTasks, setIsLoadingTasks] = useState(true);

  async function fetchTasks() {
    console.time("Carregando tarefas...");

    if (isLoadingTasks) {
      await delay(2000);
      setIsLoadingTasks(false);
    }

    setTasks(tasksData);
    console.timeEnd("arregando tarefas...");
  }

  useEffect(() => {
    fetchTasks();
  }, [tasksData]);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === "created").length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
    isLoadingTasks,
  };
}
