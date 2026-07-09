# Development Guidelines

This project is proprietary software developed by **Aleh Kapusta**.

The goal is to keep the codebase clean, reusable, maintainable, and easy to extend without unnecessary duplication.

---

## Core Principles

- Build reusable components whenever possible.
- Keep business logic separated from UI.
- Avoid duplicated code, styles, translations, and assets.
- Prefer configuration-driven solutions over hardcoded values.
- Write readable, maintainable, and scalable code.

---

## Code Standards

### Reuse

- Reuse existing components before creating new ones.
- Extract repeated UI into shared components.
- Move repeated logic into custom hooks or utility functions.
- Share common types and interfaces.

### Structure

- Keep components focused on a single responsibility.
- Keep files organized by feature.
- Use descriptive names for files, components, and functions.
- Remove dead code and unused dependencies.

### Styling

- Avoid duplicated CSS.
- Use shared variables and mixins.
- Keep styling modular using SCSS Modules.

### Internationalization

- Store all user-facing text inside the `src/i18n` directory.
- Never hardcode translations inside components.
- Reuse existing translation keys whenever possible.

### Performance

- Avoid unnecessary renders.
- Reuse state where appropriate.
- Keep components lightweight.

---

## Before Adding New Code

Ask yourself:

- Does something similar already exist?
- Can this be reused?
- Can this be extracted into a shared component?
- Can it be configured instead of duplicated?
- Will another part of the application benefit from this implementation?

If the answer is **yes**, reuse or refactor instead of copying code.

---

## Ownership

This repository contains proprietary software.

Copyright © 2026 Aleh Kapusta

All Rights Reserved.

No part of this project, including its source code, architecture, design, user interface, assets, documentation, or workflows may be copied, redistributed, modified, or used without prior written permission from the copyright holder.
