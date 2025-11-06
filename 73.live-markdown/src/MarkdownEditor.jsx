import React, { useState, useEffect } from 'react';
import { marked } from 'marked';
import './MarkdownEditor.css';

const defaultMarkdown = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.
`;

function MarkdownEditor() {
  // Bug 3 Fix: Initialize the state with the default markdown text.
  const [text, setText] = useState(defaultMarkdown);

  const createMarkup = () => {
    return { __html: marked(text) }; // Returns an object for dangerouslySetInnerHTML
  };

  const handleTextChange = (e) => {
    // Bug 2 Fix: Create a handler to update the 'text' state on user input.
    setText(e.target.value);
  };

  const handleClear = () => {
    // Bug 4 Fix: Update the 'text' state to an empty string.
    setText('');
  };

  return (
    <div className="editor-container">
      <div className="editor-pane">
        <textarea
          className="editor-textarea"
          // Bug 5 Fix: Use `value` and `onChange` to make this a controlled component.
          value={text}
          onChange={handleTextChange}
        />
      </div>
      <div className="preview-pane">
        {/* Bug 1 Fix: Use `dangerouslySetInnerHTML` to render the raw HTML.
            This is necessary for this kind of application, but should be used
            with caution if the markdown source isn't trusted. */}
        <div
          className="preview-content"
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
      <button onClick={handleClear} className="clear-btn">Clear</button>
    </div>
  );
}

export default MarkdownEditor;