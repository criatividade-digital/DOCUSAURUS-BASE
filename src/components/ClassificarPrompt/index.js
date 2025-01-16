import React from 'react';

// Color mapping based on the 'tipo' prop
const colorMap = {
  persona: 'lightblue',
  tarefa: 'orange',
  contexto: 'lightgreen',
  formato: '#D8BFD8',
};

// ClassificarPrompt component
const ClassificarPrompt = ({ tipo, children }) => {
  const backgroundColor = colorMap[tipo] || 'transparent';

  return (
    <span style={{ backgroundColor, padding: '0.2em 0.4em', borderRadius: '4px' }}>
      {children}
    </span>
  );
};

export default ClassificarPrompt;
