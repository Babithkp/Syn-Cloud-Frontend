import { Link } from 'react-router-dom';
import SyncCloud_Logo from '../../assets/syncloud_logo.svg'

const Navbar = () => {
  return (
    <>
      {/* Main container with background animation and full-screen height/width */}
      <div className=" h-[10vh] w-[100vw] absolute text-white font-poppins font-normal z-20">
        {/* Navbar section with brand and menu items */}
        <div className="flex justify-between px-6 py-1 text-2xl mt-1">
          <Link to={"/"} className=" flex align-middle ml-2">
            <img src={SyncCloud_Logo} /> 
            <p className=" my-auto mx-2 font-bold">Syncloud</p> 
          </Link>
          <ul className="flex relative cursor-pointer gap-4 text-[1.2rem] -left-[2%] mt-2">
            <Link to={"/"} className="hover:underline" >Try Syncloud!</Link>
            <Link to={"/sign_up"} className="hover:underline">Sign Up</Link>
            <Link to={"/sign_in"} className="hover:underline">Log in</Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
