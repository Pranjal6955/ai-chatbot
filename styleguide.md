Style Guide for AI Chatbot Project

This style guide provides a set of conventions and best practices to ensure code consistency, readability, and maintainability across the AI Chatbot project. All contributors are expected to follow these guidelines.

General Principles

Consistency: Maintain consistency in code style and structure across files.

Readability: Write clear and understandable code with meaningful variable and function names.

Documentation: Document your code thoroughly to make it easier for others to understand.

Frontend (HTML, CSS, JavaScript)

HTML

Use semantic HTML tags (e.g., <header>, <footer>, <main>).

Indent nested elements by 2 spaces.

Always include the DOCTYPE declaration at the top of HTML files.

Use lowercase for all HTML tags and attributes.

Quote all attribute values (e.g., class="example").

Close all self-closing tags (e.g., <img />).

CSS

Use BEM (Block-Element-Modifier) naming convention for class names:

.block {}
.block__element {}
.block--modifier {}

Indent code with 2 spaces.

Use shorthand properties where possible (e.g., margin: 10px 20px;).

Avoid inline styles. Use external or embedded stylesheets.

Group related CSS rules together and add comments for sections:

/* Typography */
h1 {
    font-size: 24px;
    font-weight: bold;
}

Use variables for colors, spacing, and other reusable values:

:root {
    --primary-color: #3498db;
    --spacing-unit: 8px;
}

JavaScript

Follow the ES6+ standard.

Use let and const instead of var.

Indent code with 2 spaces.

Use meaningful and descriptive variable names (e.g., userInput instead of x).

Avoid global variables; encapsulate code in modules or functions.

Use comments to explain complex logic:

// Fetch user input and sanitize it
const sanitizedInput = sanitizeInput(userInput);

Use strict equality (===) instead of loose equality (==).

Write modular functions for reusable code:

function calculateSum(a, b) {
    return a + b;
}

Backend (Python)

Follow PEP 8 style guidelines.

Use 4 spaces for indentation.

Use snake_case for variable and function names.

Write meaningful docstrings for functions and classes:

def calculate_sum(a, b):
    """Calculate and return the sum of two numbers."""
    return a + b

Limit lines to 79 characters.

Use type hints where applicable:

def greet_user(name: str) -> str:
    return f"Hello, {name}!"

Handle exceptions gracefully using try and except blocks.

Keep imports organized:

Standard library imports

Third-party library imports

Local imports

import os
import flask
from my_module import my_function

Git Commit Messages

Use the present tense (e.g., "Add feature" instead of "Added feature").

Limit the subject line to 50 characters.

Separate the subject from the body with a blank line.

Provide a detailed explanation of the changes in the body.

Fix user input sanitization issue

- Added a new function to handle special characters
- Updated the frontend validation logic

File and Directory Structure

Follow a logical and modular structure:

ai-chatbot/
|-- styles.css
|--app.js
|--index.html
|-- server.py
|-- README.md

Name files descriptively (e.g., app.js, styles.css).

Use lowercase letters and separate words with hyphens for filenames (e.g., user-data.js).

Documentation

Update the README.md for significant changes or new features.

Use comments in the code to explain the purpose and logic of complex sections.

Provide examples of usage where appropriate.

By adhering to this style guide, we ensure the AI Chatbot project remains organized, efficient, and easy to maintain. Thank you for contributing responsibly!

