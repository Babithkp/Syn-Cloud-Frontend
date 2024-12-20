import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const steps = [
  { title: "Login into your synccloud account", title1: "Login", description: "Log in to your Syncloud account to securely manage and automate your AWS services. Access a user-friendly dashboard to optimize and control your cloud resources with ease. Experience seamless cloud management with real-time monitoring and cost-effective solutions. Simplify complex AWS tasks and ensure your infrastructure runs efficiently." },
  { title: "Provide AWS Access", title1: "Access to AWS", description: "Access to AWS through Syncloud provides a simplified, secure interface to manage and automate your cloud infrastructure. With Syncloud, you can efficiently control AWS services, monitor performance, and optimize configurations, all in one streamlined platform designed to enhance scalability and reduce costs." },
  { title: "Input your access code", title1: "Access Code", description: "Input your access code to confirm your identity and gain secure entry to your Syncloud account. This essential step protects your AWS services by ensuring that only you can manage and automate your cloud resources." },
  { title: "Instruction to initiate service automation", title1: "Automating Service", description: "Easily configure your settings to automate routine AWS tasks, streamline workflows, and enhance efficiency, allowing you to focus on scaling your business while reducing manual overhead." },
  { title: "Configuring your settings", title1: "Configuring settings", description: "Customize your settings in Syncloud to tailor the automation of your AWS services to your specific needs. Adjust parameters, set preferences, and optimize configurations to enhance performance and streamline operations." },
  { title: "Hooray! Services have been successfully automated", title1: "Done!", description: "Your services have been successfully automated! You can now manage them effortlessly through your Syncloud dashboard. Enjoy greater efficiency and control over your AWS resources. Thank you for choosing Syncloud for your automation needs!" },
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
    <>
      <div className="bg-black text-white text-center font-poppins pt-10">
        <h1 className="text-4xl md:text-5xl font-bold">Our Process</h1>
        <p className="p-4 text-lg md:text-xl font-thin">Simplifying AWS automation by seamlessly configuring services to enhance efficiency and optimize cloud resource management</p>
      </div>
      <div className="min-h-screen flex flex-col justify-center items-center text-white"
        style={{
          background: "linear-gradient(to bottom, black 10%, #4B237F)",
        }}
      >
        <div className="w-[90vw] md:w-[70vw] flex flex-col md:flex-row align-middle items-center gap-10">
          {/* Left Side - Steps with Dotted Line */}
          <div className="relative h-full w-full md:w-[60%] flex flex-col font-extralight">
            {/* Dotted Line */}
            <div
              className="border-l-2 border-dotted border-gray-600 absolute right-4 top-5"
              style={{
                height: "calc(100% - 5rem)", // Ensures the line extends only to the last step
              }}
            ></div>

            {/* Steps */}
            {steps.map((step, index) => (
              <div key={index} className="flex items-center mb-10 relative justify-between">
                <span className={`my-5 text-lg md:text-2xl text-right w-[90%] ${index === currentStep ? "text-white font-semibold" : "text-gray-400"}`}>
                  {step.title}
                </span>
                <div
                  className={`w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full transition-all duration-300 ${
                    index <= currentStep ? "bg-slate-50 text-black backdrop:blur-md" : " hidden"
                  }`}
                >
                  <span className={`${index <= currentStep ? "text-black font-semibold" : "text-white"}`}>
                    {index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Step Content */}
          <div className="flex-1 font-light p-4">
            <div className="bg-gray-500 bg-opacity-50 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <h2 className="text-xl md:text-2xl font-bold mb-4">{steps[currentStep].title1}</h2>
              <p className="text-gray-300">{steps[currentStep].description}</p>
            </div>
          </div>

          {/* Arrow Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 0}
              className={`${
                currentStep === 0 ? "cursor-not-allowed" : ""
              } bg-gray-400 bg-opacity-50 backdrop-blur-md text-white font-bold py-2 px-4 h-14 rounded-2xl transition-all duration-300`}
            >
              <IoIosArrowUp size={24} />
            </button>
            <button
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              className={`${
                currentStep === steps.length - 1 ? "cursor-not-allowed" : ""
              } bg-gray-400 bg-opacity-50 backdrop-blur-md h-14 text-white font-bold py-2 px-4 rounded-2xl transition-all duration-300`}
            >
              <IoIosArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
