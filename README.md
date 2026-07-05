# swoop_user_menu

A React + TypeScript + Vite application for browsing a restaurant menu, selecting dishes, and placing an order flow with multilingual support.

## Project documentation

- See [DO_NOT_REPEAT.md](DO_NOT_REPEAT.md) for guidelines on keeping the codebase reusable and avoiding duplication.
- This project is licensed under the [MIT License](LICENSE).

## Features

- Multi-language interface with translations in several languages
- Menu browsing by category and navigation
- Dish detail experience with image support
- Order flow with a confirmation modal
- Responsive UI built with React and SCSS modules

## Tech stack

- React 19
- TypeScript
- Vite
- Redux Toolkit
- React Router
- i18next
- Sass

## Project structure

- src/pages: main application pages such as Welcome, Menu, Dish, and Order
- src/components: reusable UI, menu, and header components
- src/data: menu content and category definitions
- src/i18n: translations and language configuration
- src/store: global state for the order flow
- src/styles: SCSS modules grouped by feature
- src/utils: helper functions

## Getting started

1. Install dependencies:
    ```bash
    npm install
    ```
2. Start the development server:
    ```bash
    npm run dev
    ```
3. Build for production:
    ```bash
    npm run build
    ```

## Available scripts

- npm run dev: start the Vite development server
- npm run build: compile TypeScript and build the production bundle
- npm run preview: preview the production build locally
- npm run deploy: publish the build to GitHub Pages

## Contribution guidelines

- Follow the principles in [DO_NOT_REPEAT.md](DO_NOT_REPEAT.md).
- Keep components small and reusable.
- Prefer updating shared data and translations over duplicating content.
- Before introducing new logic, check whether an existing utility or component can be reused.
