import React, { useState, useEffect } from 'react';
import { DiffEditor, useMonaco } from '@monaco-editor/react';

const CodeDiffViewer = () => {
  const [originalCode, setOriginalCode] = useState(`Oi tudo bem`);
  const [modifiedCode, setModifiedCode] = useState(`oi tudo bem`);
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
    <div>
      <textarea
        value={originalCode}
        onChange={(e) => setOriginalCode(e.target.value)}
        placeholder="Original Code"
        rows="10"
        cols="50"
      />
      <textarea
        value={modifiedCode}
        onChange={(e) => setModifiedCode(e.target.value)}
        placeholder="Modified Code"
        rows="10"
        cols="50"
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