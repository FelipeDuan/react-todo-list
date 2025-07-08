import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { ButtonIcon } from "../components/button-icon";
import { Card } from "../components/card";
import { Container } from "../components/container";
import { Icon } from "../components/icon";
import { InputCheckbox } from "../components/input-checkbox";
import { InputText } from "../components/input-text";
import { Skeleton } from "../components/skeleton";
import { Text } from "../components/text";
import TrashIcon from "../assets/icons/trash.svg?react";
import CheckIcon from "../assets/icons/check.svg?react";
import PlusIcon from "../assets/icons/plus.svg?react";
import PencilIcon from "../assets/icons/pencil.svg?react";
import SpinnerIcon from "../assets/icons/spinner.svg?react";
import XIcon from "../assets/icons/x.svg?react";

export function PageComponents() {
  return (
    <Container className="py-8 space-y-8">
      <h1 className="text-2xl font-bold">Componentes</h1>

      <section>
        <h2 className="text-lg font-bold mb-4">Texto</h2>
        <div className="flex flex-col gap-2">
          <Text>Texto padrão</Text>
          <Text variant="body-md">Texto padrão</Text>
          <Text variant="body-md-bold">Texto padrão em negrito</Text>
          <Text variant="body-sm-bold">Texto pequeno em negrito</Text>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">Icons</h2>
        <div className="flex gap-4">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} className="fill-green-base" />
          <Icon svg={PlusIcon} className="fill-green-base" />
          <Icon svg={SpinnerIcon} animate />
          <Icon svg={PencilIcon} className="fill-green-base" />
          <Icon svg={XIcon} className="fill-green-base" />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">Badges</h2>
        <div className="flex gap-4">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">Buttons</h2>
        <div className="space-y-4">
          <div className="flex gap-4">
            <Button icon={PlusIcon}>Nova Tarefa</Button>
            <Button icon={PlusIcon} handling>
              Criando...
            </Button>
          </div>

          <div className="flex gap-4">
            <ButtonIcon icon={CheckIcon} />
            <ButtonIcon icon={XIcon} variant="secondary" />
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon icon={TrashIcon} loading />
            <ButtonIcon icon={TrashIcon} handling />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">Form</h2>
        <div className="space-y-4">
          <InputText placeholder="Digite algo..." />
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <InputCheckbox />
              <Text>Normal</Text>
            </div>

            <div className="flex items-center gap-2">
              <InputCheckbox loading />
              <Text>Loading</Text>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">Card</h2>
        <Card size="md">
          <Text>Conteúdo do card</Text>
        </Card>
      </section>

      <section>
        <h2 className="text-lg font-bold mb-4">Skeleton</h2>
        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-64 h-6" />
        </div>
      </section>
    </Container>
  );
}
