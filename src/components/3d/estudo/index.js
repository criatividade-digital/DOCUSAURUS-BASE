/**********************************
 * Usando https://plotly.com/javascript/react/
 * Documentação: https://github.com/plotly/react-plotly.js/blob/master/README.md
 * Achei outro que pode ser usado no Observable https://github.com/jamesleesaunders/d3-x3d
 ******/
import React, { useState, useEffect } from "react";
//import Plot from 'react-plotly.js';
import BrowserOnly from '@docusaurus/BrowserOnly';

const Word2Vec3D = ({ divRef, words, vectors }) => {

  const [chartSize, setChartSize] = useState({
    width: 0, // window.innerWidth * 0.95,
    height: 0, //window.innerWidth  * 0.75, //Este tem que analisar pelo tamanho do conteúdo
  });
  // Update chart size based on the div dimensions
  useEffect(() => {
    const updateChartSize = () => {
      const chartDiv = document.getElementById(divID);
      if (chartDiv) {
        const { width } = chartDiv.getBoundingClientRect();
        console.log('word2vectdiv:', chartDiv.getBoundingClientRect())
        setChartSize({
          width: width,
          height: width * 0.75, // Adjust height based on content or ratio
        });
      }
      else alert('Word2Vec3D: não foi definido o div para o controle de tamanho');
    };
    // Call the function once to set initial size
    updateChartSize();

    // Add event listener for resizing
    window.addEventListener("resize", updateChartSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateChartSize);

  }, []);

  const divID = divRef;
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
    touchZoom: true,
    modeBarButtonsToRemove: ['resetCameraLastSave3d']
   }; 
  
  return (
    <BrowserOnly fallback={<div>Carregando...</div>}>
    {() => {
      const Plot = require('react-plotly.js').default; 
      return <Plot
        data={data}
        layout={{
          //title: 'Exemplo dois grupos de palavras',
          autosize: true,
          width: chartSize.width,
          height: chartSize.height,
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
  );
};

export default Word2Vec3D;

/******************************
 Será que esta configuração funciona para redimensionar o chart no lugar do workaround do div que fiz?
 O gemini gerou este código mas eu não testei
   const layout = {
    // Your plot layout here
    responsive: true, // Adjust plot size to fit the container
    autosize: true, // Allow the plot to automatically resize
  };

  const config = {
    responsive: true, // Adjust plot size to fit the container
    displayModeBar: false, // Hide the default mode bar
    scrollZoom: true, // Enable scroll zoom on desktop
    doubleClickZoom: false, // Disable double-click zoom
    touchZoom: true, // Enable pinch-to-zoom on touch devices
  };

  return (
    <Plot
      data={data}
      layout={layout}
      config={config}
    />
  );
};
 
 */
