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

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === "creating");
  const [taskTitle, setTaskTitle] = useState(task.title || "");
  const { updateTask, updateTaskStatus, deleteTask } = useTask();

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

  function handleSaveTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleUpdateTaskStatus(e: ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  function handleDeleteTask() {
    deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            checked={task?.concluded}
            onChange={handleUpdateTaskStatus}
          />

          <Text className={cx("flex-1", { "line-through": task?.concluded })}>
            {task?.title}
          </Text>

          <div className="flex items-center justify-center gap-1">
            <ButtonIcon
              type="button"
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
            />
            <ButtonIcon
              type="button"
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEnableEditingTask}
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
              <ButtonIcon type="submit" icon={CheckIcon} variant="primary" />
            </div>
          </form>
        </>
      )}
    </Card>
  );
}
