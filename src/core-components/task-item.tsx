import { ButtonIcon } from "../components/button-icon";
import { Card } from "../components/card";
import { InputCheckbox } from "../components/input-checkbox";
import { Text } from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import { useState } from "react";
import { InputText } from "../components/input-text";
import CheckIcon from "../assets/icons/check.svg?react";
import XIcon from "../assets/icons/x.svg?react";
import type { Task } from "../models/task";
import { cx } from "class-variance-authority";

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === "creating");

  function handleEnableEditingTask() {
    setIsEditing(true);
  }

  function handleDisabledEditingTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
          />

          <Text className={cx("flex-1", { "line-through": task?.concluded })}>
            {task?.title}
          </Text>

          <div className="flex items-center justify-center gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon
              icon={PencilIcon}
              variant="tertiary"
              onClick={handleEnableEditingTask}
            />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />

          <div className="flex items-center justify-center gap-1">
            <ButtonIcon
              icon={XIcon}
              variant="secondary"
              onClick={handleDisabledEditingTask}
            />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
