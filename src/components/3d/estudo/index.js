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

  return (
    <Plot
      data={data}
      layout={{
        title: 'Word2Vec 3D Visualization',
        autosize: true,
        scene: {
          xaxis: { title: 'X-axis' },
          yaxis: { title: 'Y-axis' },
          zaxis: { title: 'Z-axis' }
        }
      }}
    />
  );
};

export default Word2Vec3D;
