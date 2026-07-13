# Identifier Rules in JavaScript

## What is an Identifier?
An **identifier** is a name given to variables, functions, classes, objects, or labels in JavaScript.

## Rules for Naming Identifiers

1. **Allowed characters** – Must begin with a letter (`a-z`, `A-Z`), underscore (`_`), or dollar sign (`$`). Subsequent characters can also include digits (`0-9`).

2. **No spaces allowed** – Identifiers cannot contain spaces.

3. **No reserved keywords** – Cannot use JavaScript reserved words (e.g., `let`, `const`, `if`, `return`, `class`) as identifiers.

4. **Case-sensitive** – `myVar`, `myvar`, and `MYVAR` are all different identifiers.

5. **Unicode support** – JavaScript allows Unicode letters (e.g., `π`, `你好`) in identifiers.

## Examples

| Valid | Invalid | Reason |
|-------|---------|--------|
| `name` | `2name` | Starts with digit |
| `_count` | `my-var` | Hyphen not allowed |
| `$price` | `class` | Reserved keyword |
| `firstName` | `first name` | Contains space |
| `π` | `@data` | `@` not allowed |

## Conventions (not rules, but widely followed)

- Use **camelCase** for variables and functions: `firstName`, `getUserData`
- Use **PascalCase** for classes and constructors: `UserProfile`, `HttpClient`
- Use **UPPER_SNAKE_CASE** for constants: `MAX_LIMIT`, `API_KEY`
- Prefix private properties with `_`: `_internalValue`
