import useLocalStorage from "use-local-storage";
import { TASK_KEY, type Task } from "../models/task";

export default function useTasks() {
  const [tasks] = useLocalStorage<Task[]>(TASK_KEY, []);

  return {
    tasks,
    createdTasksCount: tasks.filter((task) => task.state === "created").length,
    concludedTasksCount: tasks.filter((task) => task.concluded).length,
  };
}
