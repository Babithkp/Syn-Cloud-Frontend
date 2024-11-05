import { useState } from "react";

const steps = [
  { title: "Login into your synccloud account", description: "Log in to your Synccloud account to securely manage and automate your AWS services. Access a user-friendly dashboard to optimize and control your cloud resources with ease." },
  { title: "Provide AWS Access", description: "Grant necessary permissions for AWS access. Ensure a smooth setup by allowing required access." },
  { title: "Input your access code", description: "Enter your access code to verify your identity and link your Synccloud account with AWS." },
  { title: "Instruction to initiate service automation", description: "Follow the instructions provided to start automating your selected AWS services efficiently." },
  { title: "Configuring your settings", description: "Adjust settings to customize the automation based on your requirements, ensuring the best performance." },
  { title: "Hooray! Services have been successfully automated", description: "All selected services are now automated successfully. Enjoy seamless cloud management." },
];

const Process: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="h-[120vh] relative flex justify-center items-center text-white bg-black">
      <div className=" w-[70vw] flex align-middle items-start">
        
        {/* Left Side - Steps with Dotted Line */}
        <div className="relative h-[85vh] w-[60%] flex flex-col items-star">
          {/* Dotted Line */}
          <div className="border-l-2 border-dotted border-gray-600 h-[85%] absolute left-4 top-10"></div>

          {/* Steps */}
          {steps.map((step, index) => (
            <div key={index} className="flex items-center mb-8 relative">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  index <= currentStep ? "bg-blue-600 border-blue-600" : "bg-gray-800 border-gray-600"
                }`}
              >
                <span className={`${index <= currentStep ? "text-white" : "text-gray-500"}`}>
                  {index + 1}
                </span>
              </div>
              <span className={`ml-4 my-5 text-2xl ${index === currentStep ? "text-white font-semibold" : "text-gray-400"}`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>

        {/* Right Side - Step Content */}
        <div className="flex-1 w-[40%] h-[110vh]">
          {
            steps.map((step,index)=>{
            return(
              <div className={` ${(index==currentStep) ? "" : "opacity-0"} absolute top-0 w-[30%] bg-gray-500 bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-lg`} style={{ marginTop: `${index * 7}%` }}>
                <h2 className="text-2xl font-bold mb-4">{step.title}</h2>
                <p className="text-gray-300">{step.description}</p>
            </div>
            )
            })
          }
        </div>
      </div>

      {/* Arrow Buttons on the Far Right of the Screen */}
      <div className="flex flex-col space-y-4 items-center absolute right-10 top-1/2 transform -translate-y-1/2">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`${
            currentStep === 0 ? " cursor-not-allowed" : ""
          } bg-gray-400 bg-opacity-50 backdrop-blur-md text-white font-bold py-2 px-4 rounded-full transition-all duration-300`}
        >
          ↑
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className={`${
            currentStep === steps.length - 1 ? " cursor-not-allowed border-2 border-red-600" : ""
          } bg-gray-400 bg-opacity-50 backdrop-blur-md text-white font-bold py-2 px-4 rounded-full transition-all duration-300`}
        >
          ↓
        </button>
      </div>
    </div>
  );
};

export default Process;
