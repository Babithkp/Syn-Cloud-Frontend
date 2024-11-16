import { Link } from 'react-router-dom'
import SyncCloud_Logo from '../../assets/syncloud_logo.svg'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { TiArrowLeft } from "react-icons/ti";
import  { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

const Sign_up = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col h-screen w-[100vw] bg-gradient-radial animate-gradient-expansion font-poppins font-normal">
        
            <div className="SignIN_Header relative h-[9vh] flex align-middle ">
                <Link to={"/"} className=' flex flex-row w-max text-2xl'>
                    <img src={SyncCloud_Logo} className='ml-8' height={50} width={50}/> 
                    <p className=" my-auto mx-2 text-2xl text-white"><b>Syncloud</b></p>
                </Link> 
                <Link to={"/sign_in"} className='absolute right-20 flex text-[1.5rem] text-white mt-4'>Login</Link>
            </div>


            <h2 className="text-white flex justify-between items-center w-full text-[2.3rem] text-3xl font-semibold mt-[1rem] mb-[4rem]">
              <Link 
                to='/' 
                className='text-white text-xl hover:underline flex items-center ml-[5%]'
              >
                <TiArrowLeft className='m-1' />
                Back
              </Link>
              <span className="flex-1 text-center">
                Create your Syncloud Account
              </span>
            </h2>

        
        <div className="SignUp_content flex justify-center">
            <div className="w-1/3 my-auto flex  text-left">
            <div className="flex flex-col space-y-8">
              {/* Step 1 */}
              <Link to={"/sign_up"} className="flex items-center space-x-4 text-white text-[1.3rem]">
                <span>Create your Syncloud Account</span>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2  border-white">
                  1
                </div>
              </Link>

              {/* Dotted Line */}
              <div className="flex justify-end mr-[5%]  ">
                <div className="h-[8rem] border-l border-dotted relative  border-gray-300"></div>
              </div>

              {/* Step 2 */}
              <Link to={"/connect_aws"} className="flex items-center space-x-12 text-gray-400 text-[1.3rem]">
                <span>Connect your AWS account</span>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 bg-gray-500 backdrop:blur-md bg-opacity-50 border-gray-400">
                  2
                </div>
              </Link>
            </div>

            </div>

             {/* Right Form Section */}
            <div className="w-[55vw] h-max flex flex-col justify-center items-center text-white p-2 border-l-2 border-gray-500 ">
        
                <form className="space-y-7 w-full max-w-2xl ">
                  {/* Email Input */}
                  <div className="relative flex flex-row-reverse border border-gray-400 px-3 py-1 rounded-3xl ">
                    <input
                      type="email"
                      placeholder="syncloud@gmail.com"
                      className="w-full px-2 py-4 rounded-lg bg-transparent text-white text-[1.2rem] placeholder-gray-400 outline-none"
                    />
                    <span className="my-auto "><MdEmail size={25}/></span>
                  </div>

                  {/* Password Input */}
                  <div className="relative flex flex-row-reverse border border-gray-400 px-3 py-1 rounded-3xl">
                    <input
                      type="password"
                      placeholder="Enter a password"
                      className="w-full px-2 py-4 rounded-lg bg-transparent text-white text-[1.2rem] placeholder-gray-400 outline-none"
                    />
                    <span className="my-auto "><FaKey size={20}/></span>
                  </div>

                  {/* Confirm Password Input */}
                  <div className="relative flex flex-row-reverse border border-gray-400 px-3 py-1 rounded-3xl">
                    <input
                      type="password"
                      placeholder="Enter a password"
                      className="w-full px-2 py-4 rounded-lg bg-transparent text-white text-[1.2rem] placeholder-gray-400 outline-none"
                    />
                    <span className="my-auto "><FaKey size={20}/></span>
                  </div>

                  {/* Next Button */}
                  <button className="w-full py-3 bg-white hover:duration-700 text-purple-800 rounded-3xl font-semibold hover:bg-transparent border-2 hover:text-white border-white ">
                    Next
                  </button>

                  {/* Remember Me Checkbox */}
                  <div className="flex items-center space-x-2  ">
                    <input type="checkbox" id="remember" className="backdrop:blur-md  bg-opacity-70 opacity-40  " />
                    <label htmlFor="remember" className="text-gray-400">Remember me!</label>
                  </div>

                  {/* Divider */}
                  <div className="flex items-center space-x-4 mt-4">
                    <div className="border-t border-gray-500 flex-grow"></div>
                    <span className="text-gray-400">Or use</span>
                    <div className="border-t border-gray-500 flex-grow"></div>
                  </div>

                  {/* Google Sign-in Button */}
                  <button
                    className={`w-full p-5 bg-transparent border hover:duration-700 border-gray-500 rounded-3xl font-semibold flex items-center justify-center transition duration-700 ${
                      isHovered ? 'bg-white text-black' : 'text-white'
                    }`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {isHovered ? (
                      <FcGoogle className="mr-2 text-2xl" />
                    ) : null}
                    Sign in using Google
                  </button>
                </form>
            </div>
        </div>
    </div>
  )

}

export default Sign_up