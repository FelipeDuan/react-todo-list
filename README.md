# ✅ ToDo List

Uma aplicação de **ToDo List** desenvolvida em **React 19** com **Vite**, criada com foco em revisar os conceitos básicos do React, mas com uma **visão mais madura e arquitetural**, testando bibliotecas modernas e priorizando uma estrutura escalável.

---

## 🎯 Objetivo

O principal objetivo deste projeto foi **reforçar os conceitos fundamentais do React**, ao mesmo tempo em que se explora uma visão mais avançada de arquitetura e boas práticas. Entre os pontos trabalhados, destacam-se:

- Componentização clara e reutilizável
- Estilização moderna com Tailwind CSS v4 e **CVA** (Class Variance Authority)
- Gerenciamento de estados de forma eficiente
- Armazenamento persistente no navegador (localStorage)
- Implementação de pending states (skeletons e spinners) para simulação de requisições assíncronas
- Teste e integração de bibliotecas que favorecem **escalabilidade** e **manutenção futura** do sistema

---

## 🚀 Tecnologias e ferramentas utilizadas

- **React 19**
- **Vite**
- **TypeScript**
- **Tailwind CSS v4**
- **Class Variance Authority (CVA)**
- **use-local-storage**
- **React Router**

---

## 💡 Funcionalidades

- ✅ Criar, editar e excluir tarefas
- ✅ Marcar tarefas como concluídas
- ✅ Contador de tarefas criadas e concluídas
- ✅ Feedback visual com skeletons e spinners para simular delays
- ✅ Persistência de dados via localStorage
- ✅ Componentização com foco em flexibilidade e manutenção

---

## ⚙️ Pré-requisitos

- Node.js instalado
- Gerenciador de pacotes **pnpm** (ou npm/yarn, se adaptado)

---

## ▶️ Como executar
### Online:
- Através da seguinte url: [ToDo-List](https://react-todo-list-steel-seven.vercel.app/)

### Localmente:
```bash
# Instale as dependências
pnpm install

# Inicie a aplicação
pnpm dev
```

A aplicação ficará disponível em: [http://localhost:5173](http://localhost:5173)

---

## 🗂️ Estrutura do projeto

```
src
├── assets
│   ├── icons (ícones SVG usados na interface)
│   └── images (logo e outras imagens)
├── components (componentes base reutilizáveis, como botões, textos, inputs)
├── core-components (componentes principais da ToDo, como lista de tarefas, header, summary)
├── hooks (lógica customizada para manipulação de tarefas)
├── models (tipos e modelos, ex: task.ts)
├── pages (layouts e componentes de página)
├── helpers (funções utilitárias)
├── index.css
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

## 💻 Exemplo de dados

```json
{
  "id": "abc123",
  "title": "Estudar React",
  "state": "created"
}
```

---

## 🏗️ Conceitos explorados

* **Componentização e separação de responsabilidades**
* **Tailwind CSS v4** para estilização rápida e responsiva
* **CVA (Class Variance Authority)** para variantes consistentes
* **Armazenamento com use-local-storage**
* **Feedback visual com skeleton loaders e spinners**
* **Escalabilidade e organização da arquitetura do projeto**

---

## ✍️ Autor

Desenvolvido para prática e aprimoramento por **Felipe Duan**.
[LinkedIn](https://www.linkedin.com/in/felipe-duan-silva-sousa-007962305/) • [GitHub](https://github.com/FelipeDuan)

