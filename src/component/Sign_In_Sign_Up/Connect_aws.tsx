import { Link } from 'react-router-dom'
import SyncCloud_Logo from '../../assets/syncloud_logo.svg'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";

const Connect_aws = () => {

  return (
    <div className="flex flex-col h-screen w-[100vw] bg-gradient-radial animate-gradient-expansion font-poppins font-normal">
        
            <div className="SignIN_Header relative h-[9vh] flex align-middle">
                <Link to={"/"} className=' flex flex-row w-max'>
                    <img src={SyncCloud_Logo} className='ml-8' height={50} width={50}/> 
                    <p className=" my-auto mx-2 text-white text-2xl"><b>Syncloud</b></p>
                </Link> 
                <Link to={"/sign_in"} className='absolute right-20 flex text-[1.2rem] text-white mt-4'>Login</Link>
            </div>


        <h2 className="text-white text-[2.3rem] w-[100vw] text-center text-3xl font-semibold mt-[4rem] mb-[8rem]">
          Connect your aws account
        </h2>
        
        <div className="SignIn_content flex justify-center">
            <div className="w-1/3 my-auto border-r-2 border-gray-500">
                <div className="flex flex-col space-y-8 ">
                  {/* Step 1 */}
                  <Link to={"/sign_up"} className="flex items-center space-x-4 text-white text-[1.5rem]">
                    <span>Create your Syncloud Account</span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white">
                      1
                    </div>
                  </Link>

                  {/* Dotted Line */}
                  <div className="h-[8rem] border-l border-dashed border-white ml-5"></div>

                  {/* Step 2 */}
                  <Link to={"/connect_aws"} className="flex items-center space-x-4 text-gray-400 text-[1.5rem]">
                    <span>Connect your AWS account</span>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400">
                      2
                    </div>
                  </Link>
                </div>
            </div>

             {/* Right Form Section */}
            <div className="w-[50vw] h-max flex flex-col justify-center items-center text-white p-2  ">
        
                <form className="space-y-4 w-full max-w-md ">
                  {/* Email Input */}
                  <div className="relative flex flex-row-reverse border border-gray-400 px-3 py-1 rounded-lg">
                    <input
                      type="email"
                      placeholder="syncloud@gmail.com"
                      className="w-full px-2 py-4 rounded-lg bg-transparent text-white text-[1.2rem] placeholder-gray-400 outline-none"
                    />
                    <span className="my-auto "><MdEmail size={25}/></span>
                  </div>

                  {/* Password Input */}
                  <div className="relative flex flex-row-reverse border border-gray-400 px-3 py-1 rounded-lg">
                    <input
                      type="password"
                      placeholder="Enter a password"
                      className="w-full px-2 py-4 rounded-lg bg-transparent text-white text-[1.2rem] placeholder-gray-400 outline-none"
                    />
                    <span className="my-auto "><FaKey size={20}/></span>
                  </div>

                  {/* Next Button */}
                  <button className="w-full py-3 bg-white text-purple-800 rounded-lg font-semibold">
                    Next
                  </button>
                </form>
            </div>
        </div>
    </div>
  )

}

export default Connect_aws