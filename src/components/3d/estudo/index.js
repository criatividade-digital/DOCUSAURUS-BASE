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
            xaxis: { title: 'X', range: [-3, 3] },
            yaxis: { title: 'Y', range: [-3, 3] },
            zaxis: { title: 'Z', range: [-3, 3] }
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
