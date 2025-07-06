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

export function TaskItem() {
  const [isEditing, setIsEditing] = useState(false);

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
          <InputCheckbox />
          <Text className="flex-1">Fazer compras da semana</Text>
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
