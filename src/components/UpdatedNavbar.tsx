import React from "react";
import { FaBars, FaTimes , FaLinkedin, FaGithub, FaCode  } from "react-icons/fa";
import { FiHome, FiMail} from "react-icons/fi"
import { Link} from 'react-router-dom'
import { IoMail, IoMoon, IoPersonCircleOutline } from "react-icons/io5";
import { useLocation} from "react-router-dom";

type NavbarProps = {
    children: React.ReactNode;
    }


const UpdatedNavbar: React.FC<NavbarProps> = ({children}) => {

    const [mobileMenu, setMobileMenu] = React.useState(false);
    const location = useLocation();
    let theme:string = "bg-slate-950";

    if (location.pathname === "/") {
        theme = "bg-slate-950";
    } else if (location.pathname === "/about") {
        theme = "bg-gray-900";
    } else if (location.pathname === "/projects") {
        theme = "bg-teal-950";
    } else if (location.pathname === "/skills") {
        theme = "bg-emerald-950";
    }

    const handleMenuClick = () => {setMobileMenu(!mobileMenu); console.log("clicked")};

  return (
    <div className={`${theme} fixed h-screen flex`}>
            {/* Left Navigation Bar */}
            <ul className='hidden w-[40px] text-slate-300 md:flex flex-col items-center py-5 pl-5  justify-center h-screen tracking-wider text-lg'>
                <li className=""><p className="font-semibold text-lg -rotate-90 my-6 py-4 mb-10 ml-5">shalinda.me</p></li>
                <li className="flex items-center gap-7 -ml-16 hover:ml-20 duration-300 px-5 my-3 w-36">
                    <Link className="flex flex-row items-center justify-between w-full" to="">
                        Home
                        <FiHome />
                    </Link>
                </li>
                <li className="flex items-center gap-7 -ml-16 hover:ml-20 duration-300 px-5 my-3 w-36">
                    <Link className="flex flex-row items-center justify-between w-full" to="about">
                        About
                        <IoPersonCircleOutline />
                    </Link>
                </li>
                <li className="flex items-center gap-7 -ml-16 hover:ml-20 duration-300 px-5 my-3 w-36" >
                    <Link className="flex flex-row items-center justify-between w-full " to="projects">
                        Work
                        <FaCode size={20}/>
                    </Link>
                </li>
                <li className="flex items-center gap-7 -ml-16 hover:ml-20 duration-300 px-5 my-3 w-36" >
                    <Link className="flex flex-row items-center justify-between w-full " to="skills">
                        Skills
                        <FaCode size={20}/>
                    </Link>
                </li>
                
                <li>
                    <div className="border-l border-gray-300 h-64 ml-5 mt-4"></div>
                </li>
                <li className="ml-5 mt-10">
                    <IoMoon/>
                </li>

            </ul>

            {/* Main Content */}
            <div className='md:flex-1 '>
                {/* Icon Bar */}
                <div className='w-screen h-[40px] flex justify-end items-center px-10 pt-10 text-slate-50  pr-40 gap-7 '>
                <a href="https://github.com/DamiduShalinda" target="_blank" className="hidden md:flex"><FaGithub size={25}/></a>
                    <a href="https://www.linkedin.com/in/damidushalinda/" target="_blank" className="hidden md:flex"><FaLinkedin size={25}/></a>
                    <a href="mailto:shalindadamidu@gmail.com" target="_blank" className="hidden md:flex"><IoMail size={30}/></a>
                </div>
                {children}
            </div>

 
        {/* Mobile Menu */}
        <ul className={mobileMenu ? "md:hidden flex w-screen h-screen bg-slate-950 items-center justify-center text-white flex-col absolute top-0 left-0" : "hidden"}>
            <li className="py-6 text-4xl">
                <Link to="home">
                    Home
                    </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link to="about" >
                        About
                        </Link>
            </li>
            <li className="py-6 text-4xl">
                <Link to="skills" >
                    Skills
                    </Link>
            </li>
        </ul>

        <div id="mobilemenu" className="md:hidden text-slate-300 z-10 flex flex-row-reverse gap-4 items-center justify-end absolute top-0 left-0 m-8 w-full" >
                    <a href="https://github.com/DamiduShalinda" target="_blank"><FaGithub/></a>
                    <a href="https://www.linkedin.com/in/damidushalinda/" target="_blank"><FaLinkedin/></a>
                    <a href="mailto:shalindadamidu@gmail.com" target="_blank"><FiMail/></a>
                    <button onClick={handleMenuClick}>
                        { !mobileMenu ? <FaBars /> : <FaTimes/> }
                    </button>
                    
                    </div>

        </div>

    
  );
};

export default UpdatedNavbar;
