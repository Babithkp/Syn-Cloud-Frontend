
import { Link } from 'react-router-dom'
import SyncCloud_Logo from '../../assets/syncloud_logo.svg'

const VerticalNavbar = () => {
  return (
    <div className="flex-col flex items-center  h-screen w-[8%] mr-10 bg-gray-500 opacity-50 backdrop:blur-md ">
        <Link to={"/"} className=" flex align-middle mt-4 ml-2">
            <img src={SyncCloud_Logo} /> 
        </Link>
        <Link to={"/"} className=" flex align-middle mt-10 ml-2">
            <img src={SyncCloud_Logo} /> 
        </Link>
        <Link to={"/"} className=" flex align-middle mt-3 ml-2">
            <img src={SyncCloud_Logo} /> 
        </Link>
        <Link to={"/"} className=" flex align-middle mt-3 ml-2">
            <img src={SyncCloud_Logo} /> 
        </Link>
        <Link to={"/"} className=" flex align-middle mt-3 ml-2">
            <img src={SyncCloud_Logo} /> 
        </Link>
    </div>
  )
}

export default VerticalNavbar