/**********************************
 * Usando https://plotly.com/javascript/react/
 * Documentação: https://github.com/plotly/react-plotly.js/blob/master/README.md
 * Achei outro que pode ser usado no Observable https://github.com/jamesleesaunders/d3-x3d
 ******/
import React from 'react';
//import Plot from 'react-plotly.js';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Word2Vec3D = ({ words, vectors }) => {
  const data = [{
    x: vectors.map(v => v[0]),
    y: vectors.map(v => v[1]),
    z: vectors.map(v => v[2]),
    mode: 'markers+text',
    type: 'scatter3d',
    text: words,
    marker: { size: 8, color: 'rgb(23, 190, 207)' }
  }];

  const minX = Math.min(...data[0].x) - 0.5;
  const minY = Math.min(...data[0].y) - 0.5;
  const minZ = Math.min(...data[0].z) - 0.5;
  const maxX = Math.max(...data[0].x) + 0.5;
  const maxY = Math.max(...data[0].y) + 0.5;
  const maxZ = Math.max(...data[0].z) + 0.5;

  const config = { 
    responsive: true,
    modeBarButtonsToRemove: ['resetCameraLastSave3d']
   }; 
  
  return (
    <center>
    <BrowserOnly fallback={<div>Carregando...</div>}>
    {() => {
      const Plot = require('react-plotly.js').default; 
      return <Plot
        data={data}
        layout={{
          //title: 'Exemplo dois grupos de palavras',
          autosize: true,
          //height: 700, 
          scene: {
            xaxis: { title: 'X', range: [minX, maxX] },
            yaxis: { title: 'Y', range: [minY, maxY] },
            zaxis: { title: 'Z', range: [minZ, maxZ] }
          },
          margin: {
            l: 30, // left
            r: 30, // right
            b: 0, // bottom
            t: 0  // top
          }
        }}
        config={config}
      />
    }}
    </BrowserOnly>
    </center>
  );
};

export default Word2Vec3D;
