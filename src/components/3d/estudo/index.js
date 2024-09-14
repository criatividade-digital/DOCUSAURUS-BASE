/**********************************
 * Usando https://plotly.com/javascript/react/
 * Documentação: https://github.com/plotly/react-plotly.js/blob/master/README.md
 * Achei outro que pode ser usado no Observable https://github.com/jamesleesaunders/d3-x3d
 ******/
import React from 'react';
import Plot from 'react-plotly.js';

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
      <Plot
        data={data}
        layout={{
          title: 'Word2Vec 3D Visualization',
          autosize: true,
          //height: 700, 
          scene: {
            xaxis: { title: 'X-axis' },
            yaxis: { title: 'Y-axis' },
            zaxis: { title: 'Z-axis' }
          }
        }}
        config={config}
      />
    </center>
  );
};

export default Word2Vec3D;
