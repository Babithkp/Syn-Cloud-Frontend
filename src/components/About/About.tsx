
const About = () => {
  return (
    <div className="flex flex-col lg:flex-row h-max overflow-hidden bg-black text-white font-poppins font-normal">
      <div className="mt-20 lg:mt-20 lg:mb-20 h-[50%] lg:h-auto w-full lg:w-[50%] p-8 lg:pl-14">
        <h1 className="text-3xl lg:text-5xl leading-snug">
          Hey, <br />
          We're<span className="text-[#5e2ea7]"> Syncloud</span>
        </h1>

        <p className="mt-4 lg:mt-7 leading-7 text-justify">
          Syncloud is a cloud automation platform that simplifies the management of AWS services. It automates tasks related to EC2, S3, VPC, Load Balancers, Auto Scaling Groups, and EBS, helping businesses enhance productivity and reduce operational costs. With Syncloud, organizations can efficiently harness the power of AWS while focusing on strategic initiatives.
        </p>
        <button className="rounded-2xl bg-gradient-to-l from-purple-300 to-purple-500 h-[40px] w-[40vw] lg:w-[10vw] mt-8">
          Try it now 
        </button>
      </div>
      <div className="mt-20 lg:mt-40 h-[50%] lg:h-auto w-full lg:w-[50%]">
        {/* model */}
      </div>
    </div>
  );
};

export default About;
