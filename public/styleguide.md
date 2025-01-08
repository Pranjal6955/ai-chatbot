# Style Guide for AI Chatbot Project

This style guide provides a set of conventions and best practices to ensure code consistency, readability, and maintainability across the AI Chatbot project. All contributors are expected to follow these guidelines.

---

## General Principles

### Consistency
- Maintain consistency in code style and structure across all files.
- Follow established conventions for each language and framework used in the project.

### Readability
- Write clear and understandable code with meaningful variable and function names.
- Use comments to explain non-obvious logic or complex sections of code.

### Documentation
- Document your code thoroughly using comments, docstrings, or markdown files where appropriate.
- Ensure updates to documentation are made alongside any significant code changes.

---

## Frontend (HTML, CSS, JavaScript)

### HTML
- Use semantic HTML tags (e.g., `<header>`, `<footer>`, `<article>`).
- Indent nested elements by **2 spaces** for readability.
- Always include the `DOCTYPE` declaration at the top of HTML files.
- Use lowercase for all HTML tags and attributes.
- Quote all attribute values (e.g., `class="example"`).
- Close all self-closing tags (e.g., `<img src="image.jpg" alt="Image" />`).

#### Example:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>AI Chatbot</title>
</head>
<body>
  <header>
    <h1>Welcome to AI Chatbot</h1>
  </header>
</body>
</html>
```

### CSS
- Use the **BEM (Block-Element-Modifier)** naming convention for class names:
  ```css
  .block {}
  .block__element {}
  .block--modifier {}
  ```
- Indent code with **2 spaces**.
- Use shorthand properties where possible (e.g., `margin: 10px 20px;`).
- Avoid inline styles; use external or embedded stylesheets.
- Group related CSS rules together and add comments for sections:

#### Example:
```css
/* Typography */
h1 {
  font-size: 24px;
  font-weight: bold;
}

/* Buttons */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing-unit);
}
```

- Use variables for reusable values:
```css
:root {
  --primary-color: #3498db;
  --spacing-unit: 8px;
}
```

- Ensure accessibility by using sufficient color contrast and readable font sizes.

### JavaScript
- Follow the **ES6+ standard**.
- Use `let` and `const` instead of `var`.
- Indent code with **2 spaces**.
- Use meaningful and descriptive variable names (e.g., `userInput` instead of `x`).
- Avoid global variables; encapsulate code in modules or functions.
- Use comments to explain complex logic:

#### Example:
```javascript
// Fetch user input and sanitize it
const sanitizedInput = sanitizeInput(userInput);
```

- Use strict equality (`===`) instead of loose equality (`==`).
- Write modular functions for reusable code:
```javascript
function calculateSum(a, b) {
  return a + b;
}
```

- Optimize performance by minimizing DOM manipulation and using asynchronous programming when applicable.

---

## Backend (Python)

### General Guidelines
- Follow **PEP 8** style guidelines.
- Use **4 spaces** for indentation.
- Use `snake_case` for variable and function names.
- Write meaningful docstrings for functions and classes:

#### Example:
```python
def calculate_sum(a: int, b: int) -> int:
    """
    Calculate and return the sum of two numbers.

    Args:
        a (int): The first number.
        b (int): The second number.

    Returns:
        int: The sum of the two numbers.
    """
    return a + b
```

- Limit lines to **79 characters**.
- Use type hints where applicable:
```python
def greet_user(name: str) -> str:
    return f"Hello, {name}!"
```

### Exception Handling
- Handle exceptions gracefully using `try` and `except` blocks.
- Log errors to provide debugging information:

#### Example:
```python
try:
    result = risky_function()
except ValueError as e:
    logger.error(f"ValueError encountered: {e}")
```

### Testing
- Write unit tests for all functions and methods.
- Use testing frameworks like `pytest` for consistent and automated testing.

---

## Git Commit Messages

- Use the **present tense** (e.g., "Add feature" instead of "Added feature").
- Limit the subject line to **50 characters**.
- Separate the subject from the body with a blank line.
- Provide a detailed explanation of the changes in the body.
- Reference related issues or pull requests using keywords (e.g., `Fixes #123`).

#### Example:
```
Fix user input sanitization issue

- Added a new function to handle special characters.
- Updated the frontend validation logic.
- Enhanced backend error handling for invalid input.
```

---

## File and Directory Structure

Follow a logical and modular structure:
```
ai-chatbot/
|-- styles.css
|-- app.js
|-- index.html
|-- server.py
|-- README.md
```

- Name files descriptively (e.g., `app.js`, `styles.css`).
- Use lowercase letters and separate words with hyphens for filenames (e.g., `user-data.js`).

---

## Documentation

- Update the `README.md` for significant changes or new features.
- Use comments in the code to explain the purpose and logic of complex sections.
- Provide examples of usage where appropriate.

#### Example Template for `README.md` Updates:
```
### Feature Name
- Description: Explain the feature in detail.
- How to Use: Provide usage instructions or examples.
- Related Files: List related files and their purpose.
```

---

By adhering to this style guide, we ensure the AI Chatbot project remains organized, efficient, and easy to maintain. Thank you for contributing responsibly!

