import React from "react";

import ReactFlow, {
  Background,
  Controls,
  Edge,
  Node,
  BackgroundVariant,
} from "react-flow-renderer";

// Define types for nodes and edges
const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Start" },
    position: { x: 250, y: 0 },
  },
  { id: "2", data: { label: "Step 1" }, position: { x: 100, y: 100 } },
  { id: "3", data: { label: "Step 2" }, position: { x: 400, y: 100 } },
];

const initialEdges: Edge[] = [
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e2-3", source: "2", target: "3" },
];

const FlowDiagram: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>

      <ReactFlow nodes={initialNodes} edges={initialEdges} fitView>
        {/* Explicitly define the variant prop */}
        <Background variant={BackgroundVariant.Dots} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default FlowDiagram;
