import { Link } from 'react-router-dom';
import SyncCloud_Logo from '../../assets/syncloud_logo.svg';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-[10vh] w-[100vw] absolute text-white font-poppins font-normal z-20">
        <div className="flex justify-between px-6 py-1 text-2xl mt-1">
          <Link to="/" className="flex align-middle ml-2">
            <img src={SyncCloud_Logo} alt="Syncloud Logo" />
            <p className="my-auto mx-2 font-bold font-poppins text-3xl">Syncloud</p>
          </Link>
          <div className="hidden md:flex relative cursor-pointer gap-4 text-[1.3rem] -left-[2%] mt-2">
            <Link to="/" className="hover:underline">Try Syncloud!</Link>
            <Link to="/sign_up" className="hover:underline">Sign Up</Link>
            <Link to="/sign_in" className="hover:underline">Log in</Link>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className={`md:hidden absolute top-full left-0 w-full bg-white text-black p-4 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <ul>
            <li>
              <Link to="/" className="block py-2 hover:bg-gray-100">Try Syncloud!</Link>
            </li>
            <li>
              <Link to="/sign_up" className="block py-2 hover:bg-gray-100">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign_in" className="block py-2 hover:bg-gray-100">Log in</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;