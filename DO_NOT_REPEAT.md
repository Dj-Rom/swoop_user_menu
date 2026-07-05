# Do Not Repeat

This project should stay simple, reusable, and maintainable.

## Principles

- Keep shared UI in reusable components.
- Avoid duplicating styles, copy, or logic across pages.
- Prefer configuration-driven content over hardcoded repeated blocks.
- If the same pattern appears more than once, extract it into a shared component, hook, or utility.
- Keep translations and content centralized in the i18n and data folders.

## Practical Rules

1. Before adding a new component, check whether one already exists that can be reused.
2. If a section has similar structure to another page, extract the shared structure instead of copying it.
3. Keep business logic in one place and reuse it from the UI layer.
4. When updating shared content, do it once and let all consumers benefit.

## Reminder

If you are about to copy-paste code, stop and ask:
- Can this be extracted?
- Can this be made configurable?
- Can this be reused by another screen?
