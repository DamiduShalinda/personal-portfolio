import React from "react";
import logolight from "../../assets/logolight.png";
import { FaBars, FaTimes , FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail} from "react-icons/fi"

const Navbar: React.FC = () => {

    const [mobileMenu, setMobileMenu] = React.useState(false);

    const handleMenuClick = () => {setMobileMenu(!mobileMenu); console.log("clicked")};

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <img src={logolight} alt="logo" width={70}/>
        <ul className="hidden md:flex flex-row text-white gap-8">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

    {/* Hamburger */}
    <div className="md:hidden text-white z-10" >
        <button onClick={handleMenuClick}>
            { mobileMenu ? <FaBars /> : <FaTimes/> }
        </button>
        
    </div>
    {/* Mobile Menu */}
    <ul className={!mobileMenu ? "md:hidden flex w-screen h-screen bg-primary items-center justify-center text-white flex-col absolute top-0 left-0" : "hidden"}>
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Projects</li>
        <li className="py-6 text-4xl">Contact</li>
    </ul>

    {/* Social Icons */}
        <ul className="hidden lg:flex flex-col fixed top-[35%] left-0 text-white">
            <li className=" bg-tertiary w-[140px] h-[60px] ml-[-85px] hover:ml-0 duration-300 flex  items-center justify-between">
                <a href="https://www.google.com/" className="flex flex-row items-center justify-around w-full">Linkedin  <FaLinkedin size={30}/>
                </a>
            </li>
            <li className=" bg-tertiary w-[140px] h-[60px] ml-[-85px] hover:ml-0 duration-300 flex  items-center justify-between">
                <a href="https://www.google.com/" className="flex flex-row items-center justify-around w-full">Github  <FaGithub size={30}/>
                </a>
            </li>
            <li className=" bg-tertiary w-[140px] h-[60px] ml-[-85px] hover:ml-0 duration-300 flex  items-center justify-between">
                <a href="https://www.google.com/" className="flex flex-row items-center justify-around w-full">Mail  <FiMail size={30}/>
                </a>
            </li>     
                
        </ul>
        
    </div>

    
  );
};

export default Navbar;
