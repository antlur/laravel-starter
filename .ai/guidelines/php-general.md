# PHP General Guidelines

## PHP Types and Doc Block Guidelines

- Always use native PHP type hints for function/method parameters and return types where possible (PHP 8.4+).
- Use union types (PHP 8.4+) when a parameter or return value can be of multiple types.
- For nullable types, use the `?Type` syntax (e.g., `?string`).
- For collections, use type hints like `array`, `iterable`, or specific collection classes (e.g., `Collection`).
- Avoid using `mixed` unless absolutely necessary; prefer more specific types.
- Only add types to doc blocks when necessary for clarity or when the type cannot be expressed in native PHP type hints.
- In doc blocks, use `@param`, `@return`, and `@var` annotations to provide additional context, such as expected array shapes or object structures.

## PHP Import Guidelines

- Always use fully qualified class names in `use` statements.
- Only import classes, interfaces, traits, and functions that are actually used in the file.
- Alphabetize `use` statements for better readability.
- Prefer importing classes over using fully qualified names inline.
- Only use an alias in `use` statements when there is a naming conflict or to improve clarity.
