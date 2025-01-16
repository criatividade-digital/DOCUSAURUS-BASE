import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const MindMap2 = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    // Dimensions and margins
    const width = 800;
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    // Clear any previous content
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Create the SVG canvas
    svg
      .attr('width', width)
      .attr('height', height)
      .style('background-color', '#f9f9f9');

    // Create a group for the diagram
    const g = svg
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Create a hierarchy from the data
    const root = d3.hierarchy(data);

    // Create a cluster layout
    const cluster = d3
      .cluster()
      .size([height - margin.top - margin.bottom, width - margin.left - margin.right]);

    // Apply the cluster layout to the hierarchy
    cluster(root);

    // Links (edges)
    g.selectAll('.link')
      .data(root.links())
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', d3.linkHorizontal()
        .x(d => d.y)
        .y(d => d.x)
      )
      .attr('fill', 'none')
      .attr('stroke', '#ccc')
      .attr('stroke-width', 2);

    // Nodes
    const nodes = g.selectAll('.node')
      .data(root.descendants())
      .enter()
      .append('g')
      .attr('class', 'node')
      .attr('transform', d => `translate(${d.y},${d.x})`);

    // Add circles for nodes
    nodes
    .append('rect')
    .attr('width', 10) // Set the width of the rectangle
    .attr('height', 10) // Set the height of the rectangle
    .attr('fill', '#69b3a2') // Set the fill color of the rectangle
    .attr('x', -5) // Adjust the x position to center the rectangle
    .attr('y', -5); // Adjust the y position to center the rectangle

    // Add labels for nodes
    nodes
      .append('text')
      .attr('dx', d => (d.children ? -10 : 10))
      .attr('dy', 3)
      .attr('text-anchor', d => (d.children ? 'end' : 'start'))
      .text(d => d.data.name)
      .style('font-size', '12px')
      .style('font-family', 'Arial');
  }, [data]);

  return <svg ref={svgRef}></svg>;
};

export default MindMap2;

/*
 const data = {
   name: "Root",
   children: [
     {
       name: "Child 1",
       children: [
         { name: "Grandchild 1" },
         { name: "Grandchild 2" },
       ],
     },
     {
       name: "Child 2",
       children: [
         { name: "Grandchild 3" },
         { name: "Grandchild 4" },
       ],
     },
   ],
 };
 */
