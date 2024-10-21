import { Link } from 'react-router-dom'
import SyncCloud_Logo from '../../assets/syncloud_logo.svg'
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

const Sign_in = () => {

  return (
    <div className="bg-gradient-radial animate-gradient-expansion flex flex-col w-[100vw] h-[100vh] font-poppins">

        <div className="SignIN_Header relative h-[9vh] flex align-middle">
            <img src={SyncCloud_Logo} className='ml-8'/> 
            <p className=" my-auto mx-2 text-white text-2xl"><b>Sync Cloud</b></p> 
            <Link to={"/"} className='absolute right-8 flex text-[1.2rem] text-white mt-4'>Create a  Account</Link>
        </div>

        <div className="SignIN_Content h-[70vh] w-[40vw] m-auto border-2 border-red-600">

            <Link to={"/"} className='flex'><FaArrowLeft/>Back</Link>
            <p>Login</p>

            <form action="" className='flex flex-col'>

                <div className="Email_Feild flex">
                    <MdEmail/>
                    <input 
                    type="text" 
                    placeholder="Email"
                    />
                </div>

                <div className="Password_feild flex">
                    <FaKey/>
                    <input 
                    type="text" 
                    placeholder="Enter a password"
                    />
                </div>

                <button>Submit</button>

                <div className="Remember_me_block flex">
                    <input type="checkbox" name="" id="" />
                    <p>Remember Me !</p>
                </div>

                <div className="flex items-center justify-between w-full text-white">
                    <hr className="w-[40%] border-gray-400" />
                    <span className="px-2 mx-auto">Or use</span>
                    <hr className="w-[40%] border-gray-400" />             
                </div>

                <button>Log in using Google</button>

            </form>

        </div>

    </div>
  )

}

export default Sign_in