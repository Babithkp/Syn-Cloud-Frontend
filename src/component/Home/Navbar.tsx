import SyncCloud_Logo from '../../assets/syncloud_logo.svg'

const Navbar = () => {
  return (
    <>
      {/* Main container with background animation and full-screen height/width */}
      <div className=" h-[10vh] w-[100vw] fixed text-white font-poppins font-normal bg-white bg-opacity-20 z-20">
        {/* Navbar section with brand and menu items */}
        <div className="flex justify-between p-5 text-2xl -mt-2">
          <div className=" flex align-middle">
            <img src={SyncCloud_Logo} /> 
            <p className=" my-auto mx-2 ">Sync Cloud</p> 
          </div>
          <ul className="flex relative cursor-pointer gap-4 text-[1.2rem] -left-[2%] mt-2">
            <li className="hover:underline">Try Sync Cloud!</li>
            <li className="hover:underline">Sign Up</li>
            <li className="hover:underline">Log in</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
