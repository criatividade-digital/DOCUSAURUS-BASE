//https://reactflow.dev/learn/layouting/layouting
import React, { useCallback } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { stratify, tree } from 'd3-hierarchy';

const initialNodes = [
  {
    id: "1",
    type: "input",
    data: { label: "Explorador" },
    position: { x: 250, y: 0 },
  },
  {
    id: "2",
    data: { label: "Apresentação" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    data: { label: "Conhecendo o ChatGPT" },
    position: { x: 400, y: 100 },
  },
];

const initialEdges = [
  { id: "1-2", source: "1", target: "2" }, //animated: true 
  { id: "1-3", source: "1", target: "3" },
];

const nodeStyles = {
  border: "2px solid #007ACC",
  padding: "10px",
  borderRadius: "8px",
  background: "#e8f4ff",
  fontSize: "14px",
  color: "#333",
  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
};

const g = tree();
 
const getLayoutedElements = (nodes, edges) => {
  if (nodes.length === 0) return { nodes, edges };
 
  const hierarchy = stratify()
    .id((node) => node.id)
    .parentId((node) => edges.find((edge) => edge.target === node.id)?.source);
  const root = hierarchy(nodes);
  const layout = g.nodeSize([300, 100])(root);
 
  return {
    nodes: layout
      .descendants()
      .map((node) => ({ ...node.data, position: { x: node.x, y: node.y } })),
    edges,
  };
};

const MindMap = () => {
  const { nodes: layoutedNodes, edges: layoutedEdges } =
        getLayoutedElements(initialNodes, initialEdges);

  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const nodeTypes = {
    default: (node) => (
      <div style={nodeStyles}>{node.data.label}XX</div>
    ),
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Controls />

      </ReactFlow>
    </div>
  );
};

export default MindMap;
