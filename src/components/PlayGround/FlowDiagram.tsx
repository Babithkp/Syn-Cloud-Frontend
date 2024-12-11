import React from "react";

// import ReactFlow, { Background, BackgroundVariant } from "react-flow-renderer";
import Playground from "./playground";

const FlowDiagram: React.FC = () => {


  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Playground/>
    </div>
  );
};

export default FlowDiagram;