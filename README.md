# Tang Trinh Quang

## Load Project

```
git clone "https://github.com/vincenttang1101/owen-frontend-test.git"
cd owen-frontend-test
npm install
code .
npm run dev
```

## Folder Structure

```
.
└── src/
    ├── assets
    │   └── styles
    │       ├── _mixins.scss
    │       ├── global.scss
    │       ├── reset.scss
    │       └── index.ts
    ├── components (Common)
    │   ├── MainLayout
    │   │   ├── Header
    │   │   │   ├── index.tsx
    │   │   │   └── styles.css
    │   │   ├── Footer
    │   │   │   ├── index.tsx
    │   │   │   └── styles.css
    │   │   ├── index.tsx
    │   │   └── styles.scss
    │   └── index.ts (entry point)
    ├── features (Individual)
    │   ├── TodoList
    │   │   ├── TaskInputForm
    │   │   │   ├── index.tsx
    │   │   │   └── styles.scss
    │   │   ├── TaskItem
    │   │   │   ├── index.tsx
    │   │   │   └── styles.scss
    │   │   ├── index.tsx
    │   │   └── styles.scss
    │   └── index.ts (entry point)
    ├── redux
    │   ├── hook.ts
    │   └── store.ts
    ├── typing
    │   ├── index.d.ts
    │   └── todo.d.ts
    ├── App.tsx
    ├── main.tsx
    └── reset.css
```

## Import Conventions

```
1. Import Order:
  1.1. React core libraries (e.g. React, React Hooks, etc.).
  1.2. React third-party libraries (e.g. React Router DOM, Redux Toolkit, etc.).
  1.3. Custom components (e.g. MainLayout, TodoList, etc.).

2. Sorting Order:
  2.1. Group imports of the same type together.
  2.2. Default exports before named exports.
  2.3. Sort alphabetically by folder name of import origin.
  2.4. Sort alphabetically by length of import name in ascending order.

Ex:
  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import { Provider } from 'react-redux'
  import { BrowserRouter } from 'react-router-dom'
  import { store } from '@redux/store.ts'
  import App from '@src/App.tsx'
  import '@assets/styles'
```

## Github Commit Conventions

```
Feat: Add a new feature
Fix: Fix a bug or defect
Refactor: Refactor code without adding features or fixing Bugs (sometimes bugs may be fixed in the process of refactoring)
Docs: Add or update documentation
Chore: Minor changes that don't alter behavior such as updating builds or updating test infrastructure.
Style: Changes that do not affect the meaning of the code such as white-space, formatting, missing semi-colons etc.
Perf: Performance improvements or optimization.
Vendor: Updates to dependencies or packages.

In summary:
  Feat - for new features
  Fix - for bug fixes
  Refactor - for code refactors and clean ups
  Docs - for documentation changes
  Chore - for minor changes
  Style - for formatting, white-space changes
  Perf - for performance optimizations
  Vendor - for dependency and package updates
```

## Features

```
  1. Ability to add new task.
  2. Ability to mark tasks as completed.
  3. Ability to delete task.
  3. Ability to display on mobile/tablet/desktop devices (Responsive desgin).
  4. Synchronize redux data with localstorage.
  5. Use Redux Toolkit to manage state.
  6. Ensure the UI/UX of the app is clean and friendly.
```
