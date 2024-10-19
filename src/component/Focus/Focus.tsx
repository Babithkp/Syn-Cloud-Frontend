import React from "react";
import Card from './Card.jsx'; // Make sure the Card component uses .jsx extension

const Focus = () => {
  return (
    <div className="min-h-screen w-screen bg-black text-white p-5 overflow-hidden"> {/* overflow-hidden will prevent content from overflowing */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">Our Focus</h1> 
        <p className="pt-2 text-lg">
          Simplifying AWS automation with cost-effective, scalable, and secure cloud management solutions
        </p>
      </div>
      <div className="mt-20">
        <CardContainer />
      </div>
    </div>
  );
};

// CardContainer component to display the cards in a responsive grid layout
const CardContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-5 lg:px-20 mx-auto max-w-screen-xl"> {/* max-w-screen-xl limits the maximum width */}
      {/* Each Card component represents a focus area with a title and description */}
      <Card 
        title="Automation" 
        description="Cloud infrastructure management by automating AWS services like EC2, S3, Lambda, and more. This reduces the manual effort and complexity in configuring, deploying, and maintaining cloud environments."
      />
      <Card 
        title="Cost Optimization" 
        description="Helping businesses minimize cloud expenses by optimizing AWS resource usage, monitoring billing, and providing recommendations for cost-effective cloud operations. It enables better financial control over cloud investments."
      />
      <Card 
        title="Scalability" 
        description="Providing scalable solutions to manage and adapt cloud resources dynamically as business needs grow or fluctuate. Whether dealing with traffic spikes or scaling down during quiet periods, Syncloud ensures seamless scalability."
      />
      <Card 
        title="Security Compliance" 
        description="Prioritizing cloud security by automating the enforcement of security best practices, including compliance with industry standards like GDPR, HIPAA, or SOC 2. It continuously monitors for vulnerabilities and ensures data is safe."
      />
      <Card 
        title="User-friendly Interface" 
        description="Offering a simple and intuitive dashboard that helps users manage cloud services without needing in-depth cloud expertise. This makes cloud management accessible to businesses of all sizes."
      />
      <Card 
        title="Performance Optimization" 
        description="Continuously monitoring resource performance and providing optimization recommendations, ensuring that services run at peak efficiency. It analyzes bottlenecks, provides solutions, and maintains optimal performance levels for critical workloads."
      />
    </div>
  );
};

export default Focus;
