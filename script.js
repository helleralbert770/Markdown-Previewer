// Initial text for the editor (Markdown)
const initialMarkdown = `
# Heading 1
## Heading 2
[FreeCodeCamp Link](https://www.freecodecamp.org)
Inline code: \`console.log("Hello World!")\`

\`\`\`
function greet() {
  console.log("Hello!");
}
\`\`\`

- List item 1
- List item 2
- List item 3

> This is a blockquote!

![FreeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/a/a7/FreeCodeCamp_logo.png)

**Bold Text**
`;

// Function to update the preview
function updatePreview() {
  const editorContent = document.getElementById('editor').value;
  const preview = document.getElementById('preview');
  preview.innerHTML = marked(editorContent);
}

// Initialize the editor with the initial text
document.getElementById('editor').value = initialMarkdown;

// Event listener for changes in the editor
document.getElementById('editor').addEventListener('input', updatePreview);

// Initial render of the preview
updatePreview();
