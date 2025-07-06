import { ButtonIcon } from "../components/button-icon";
import { Card } from "../components/card";
import { InputCheckbox } from "../components/input-checkbox";
import { Text } from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { InputText } from "../components/input-text";
import CheckIcon from "../assets/icons/check.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import type { Task } from "../models/task";
import { cx } from "class-variance-authority";
import useTask from "../hooks/use-task";
import { Skeleton } from "../components/skeleton";

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === "creating");
  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const {
    updateTask,
    updateTaskStatus,
    deleteTask,
    isUpdatingTask,
    isDeletingTask,
  } = useTask();

  function handleEnableEditingTask() {
    setIsEditing(true);
  }

  function handleDisabledEditingTask() {
    if (task.state === "creating") {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || "");
  }

  async function handleSaveTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleUpdateTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleUpdateTaskStatus}
            loading={loading}
          />
          {!loading ? (
            <Text className={cx("flex-1", { "line-through": task?.concluded })}>
              {task?.title}
            </Text>
          ) : (
            <Skeleton className="flex-1 h-6" />
          )}

          <div className="flex items-center justify-center gap-1">
            <ButtonIcon
              type="button"
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEnableEditingTask}
              loading={loading}
            />
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={handleSaveTask} className="flex items-center gap-4">
            <InputText
              value={taskTitle}
              className="flex-1"
              onChange={handleChangeTaskTitle}
              required
              autoFocus
            />

            <div className="flex items-center justify-center gap-1">
              <ButtonIcon
                type="button"
                icon={XIcon}
                variant="secondary"
                onClick={handleDisabledEditingTask}
              />
              <ButtonIcon
                type="submit"
                icon={CheckIcon}
                variant="primary"
                handling={isUpdatingTask}
              />
            </div>
          </form>
        </>
      )}
    </Card>
  );
}
