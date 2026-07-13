# JavaScript Keywords

## What are Keywords?
Keywords are reserved words in JavaScript that have special meaning to the language. They cannot be used as variable names, function names, or any other identifiers in your code.

## Complete List of JavaScript Keywords

### Current Reserved Keywords (ES2025)
| Keyword      | Description |
|-------------|-------------|
| `async`      | Declares an asynchronous function |
| `await`      | Pauses async function execution until a Promise settles |
| `break`      | Terminates the current loop or switch statement |
| `case`       | Marks a branch in a switch statement |
| `catch`      | Handles exceptions in try-catch blocks |
| `class`      | Declares a class |
| `const`      | Declares a block-scoped, read-only constant |
| `continue`   | Skips to the next iteration of a loop |
| `debugger`   | Invokes any available debugging functionality |
| `default`    | Defines the default case in a switch statement |
| `delete`     | Deletes a property from an object |
| `do`         | Creates a do-while loop |
| `else`       | Specifies alternative code in an if statement |
| `export`     | Exports modules for use in other files |
| `extends`    | Creates a class that inherits from another class |
| `false`      | Boolean literal representing falseness |
| `finally`    | Code that runs after try-catch regardless of outcome |
| `for`        | Creates a loop with initialization, condition, and increment |
| `function`   | Declares a function |
| `if`         | Executes code conditionally |
| `import`     | Imports modules from other files |
| `in`         | Checks if a property exists in an object |
| `instanceof` | Tests if an object is an instance of a class/constructor |
| `let`        | Declares a block-scoped variable |
| `new`        | Creates an instance of a user-defined object type |
| `null`       | Represents the intentional absence of any object value |
| `of`         | Used with for-of loops to iterate over iterables |
| `return`     | Exits a function and optionally returns a value |
| `super`      | Calls the parent class constructor or methods |
| `switch`     | Evaluates an expression and executes matching case |
| `this`       | Refers to the current execution context object |
| `throw`      | Throws a user-defined exception |
| `true`       | Boolean literal representing truth |
| `try`        | Defines a block of code to test for errors |
| `typeof`     | Returns a string indicating the type of a value |
| `var`        | Declares a function-scoped variable (legacy) |
| `void`       | Evaluates an expression and returns undefined |
| `while`      | Creates a loop that runs while a condition is true |
| `with`       | Extends the scope chain (strict mode disallowed) |
| `yield`      | Pauses/resumes a generator function |

### Reserved for Future Use
| Keyword          |
|-----------------|
| `enum`           |

### Strict Mode Reserved Keywords
These are reserved only in strict mode:
| Keyword   |
|-----------|
| `implements` |
| `interface`  |
| `let` (already a keyword) |
| `package`    |
| `private`    |
| `protected`  |
| `public`     |
| `static`     |
| `yield` (already a keyword) |

### Predefined Objects (Not Keywords, but easily confused)
These are built-in objects, not reserved words — you CAN technically use them as identifiers (though you shouldn't):
`Object`, `Array`, `Function`, `String`, `Number`, `Boolean`, `Symbol`, `BigInt`, `Map`, `Set`, `WeakMap`, `WeakSet`, `Promise`, `RegExp`, `Error`, `Date`, `Math`, `JSON`, `console`

## Key Categories

**Declaration**: `var`, `let`, `const`, `function`, `class`, `async`
**Control Flow**: `if`, `else`, `switch`, `case`, `default`, `break`, `continue`, `return`
**Looping**: `for`, `while`, `do`, `of`, `in`
**Error Handling**: `try`, `catch`, `finally`, `throw`
**Module System**: `import`, `export`
**Object Operations**: `new`, `this`, `super`, `delete`, `instanceof`, `typeof`, `in`
**Values**: `true`, `false`, `null`
**Generators/Async**: `yield`, `await`
**Other**: `debugger`, `void`, `with`

## Best Practices
1. **Never use keywords as identifiers** — it will throw a SyntaxError
2. Prefer `const` for values that don't change, `let` for mutable variables, and avoid `var`
3. `NaN`, `Infinity`, and `undefined` are **not keywords** — they are global properties (but treat them as reserved anyway)

## Quick Example

```javascript
// Keywords used as intended
const name = "JavaScript";
let count = 0;
if (count === 0) {
  console.log(name);
}
function add(a, b) {
  return a + b;
}
```
