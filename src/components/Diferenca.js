import React, { useState, useEffect } from 'react';
import { DiffEditor, useMonaco } from '@monaco-editor/react';
import './Diferenca.css'; // Import the CSS file

const CodeDiffViewer = () => {
  const [originalCode, setOriginalCode] = useState('');
  const [modifiedCode, setModifiedCode] = useState('');
  const monaco = useMonaco();

  useEffect(() => {
    if (monaco) {
      monaco.editor.defineTheme('myCustomTheme', {
        base: 'vs', // can also be 'vs-dark' or 'hc-black'
        inherit: true, // can also be false to completely replace the base theme
        rules: [],
        colors: {
          'editor.background': '#ffffff',
          'editor.lineHighlightBackground': '#0000FF20',
          'editorLineNumber.foreground': '#008800',
          'editorGutter.background': '#f0f0f0',
          'diffEditor.insertedTextBackground': '#00c281',
          'diffEditor.removedTextBackground': '#f53d3d',
        }
      });
    }
  }, [monaco]);

  return (
    <div className="diff-container">
      <textarea
        value={originalCode}
        onChange={(e) => setOriginalCode(e.target.value)}
        placeholder="Texto original"
        rows="10"
        cols="50"
        className="diff-textarea"
      />
      <textarea
        value={modifiedCode}
        onChange={(e) => setModifiedCode(e.target.value)}
        placeholder="Texto alterado"
        rows="10"
        cols="50"
        className="diff-textarea"
      />
      <DiffEditor
        height="40vh"
        original={originalCode}
        modified={modifiedCode}
        language="plaintext"
        options={{
          readOnly: false,
          wordWrap: 'on',
          minimap: { enabled: true },
          lineNumbers: 'off',
          renderSideBySide: true,
          automaticLayout: true,
          scrollBeyondLastLine: false,
          fontSize: 14,
          renderWhitespace: 'all'
        }}
        theme="myCustomTheme"
      />
    </div>
  );
};

export default CodeDiffViewer;