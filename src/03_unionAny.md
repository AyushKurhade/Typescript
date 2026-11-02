# 🟦 TypeScript Notes — Part 3

## 7. Union Types

- A union type lets a variable hold **more than one specified type**.
- Use the pipe symbol `|`, for example `number | string`.
- Example: a user ID can be a number or a string, so it is typed as `number | string`.
- You can combine more types too, like `string | number | boolean`.
- It also works for function parameters, such as `id: number | string`.

### Type Narrowing (intro)

- A method that doesn't exist on every type in the union causes an error. For example, `toUpperCase()` doesn't exist on numbers.
- Check the type first using `typeof`, then use the method. This is called **Type Narrowing** (covered in detail in the next lesson).

## 8. The Problem with `any`

- `any` tells TypeScript: "Don't check the type, allow me to do anything."
- Any value can be assigned and any method can be called, even if it doesn't exist.
- ⚠️ It is **dangerous** because mistakes aren't caught at compile time and **crash at runtime** (e.g. calling `toFixed()` on a string).
- With a proper type like `string`, TypeScript catches the mistake before execution.

### When to use `any`

- Working with legacy JavaScript code.
- Temporarily migrating JavaScript to TypeScript.
- When you deliberately want to opt out of type checking.
- Never just to silence errors.

## ✅ Quick Recap

- Union types: one variable, multiple allowed types.
- Narrow with `typeof` before using type-specific methods.
- Avoid `any`, since it removes TypeScript's safety.