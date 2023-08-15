import React from "react";
import { FaBars, FaTimes , FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail} from "react-icons/fi"
import { Link} from 'react-scroll'
import { motion , useScroll } from "framer-motion";
import { RiAdminLine } from "react-icons/ri";
import { Link as RouterLink } from "react-router-dom";

const Navbar: React.FC = () => {

    const [mobileMenu, setMobileMenu] = React.useState(false);
    const { scrollYProgress } = useScroll();

    const handleMenuClick = () => {setMobileMenu(!mobileMenu); console.log("clicked")};

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-10  text-gray-300 z-50'>
        <p className="text-base text-white ml-4">shalinda.me</p>
        <ul className="hidden md:flex flex-row text-white gap-8 items-center">
            <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-slate-400 cursor-default"
            >
            <Link to="home" spy={true} smooth={true} offset={0} duration={500}>
                Home
                </Link>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-slate-400 cursor-default"
            >
            <Link to="skills" spy={true} smooth={true} offset={50} duration={500}>
                Skills
                </Link>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-slate-400 cursor-default"
            >
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500}>
                Projects
                </Link>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-slate-400 cursor-default"
            >
            <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>
                Contacts
                </Link>
            </motion.li>
            <motion.li
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hover:text-slate-400 cursor-default"
            >
                <RouterLink to="/admin">
                <RiAdminLine/>
                </RouterLink>
            </motion.li>
        </ul>

    {/* Hamburger */}
    <div className="md:hidden text-white z-10" >
        <button onClick={handleMenuClick}>
            { !mobileMenu ? <FaBars /> : <FaTimes/> }
        </button>
        
    </div>
    {/* Mobile Menu */}
    <ul className={mobileMenu ? "md:hidden flex w-screen h-screen bg-primary items-center justify-center text-white flex-col absolute top-0 left-0" : "hidden"}>
        <li className="py-6 text-4xl">
            <Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={handleMenuClick}>
                Home
                </Link>
        </li>
        <li className="py-6 text-4xl">
            <Link to="skills" spy={true} smooth={true} offset={50} duration={500} onClick={handleMenuClick}>
                    Skills
                    </Link>
        </li>
        <li className="py-6 text-4xl">
            <Link to="projects" spy={true} smooth={true} offset={-50} duration={500} onClick={handleMenuClick}>
                Projects
                </Link>
        </li>
        <li className="py-6 text-4xl">
            <Link to="contact" spy={true} smooth={true} offset={50} duration={500} onClick={handleMenuClick}>
                Contacts
                </Link>
        </li>
    </ul>

    {/* Social Icons */}
        <ul className="hidden lg:flex flex-col fixed top-[12%] left-0 text-slate-50   gap-5 text-2xl items-center justify-start">
                <li>
                    <p className="-rotate-90 text-base mb-20 ">shalinda.me</p>
                </li>
                <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <a href="https://www.linkedin.com/in/damidushalinda/" target="_blank" rel="noreferrer">
                        <FaLinkedin/>
                    </a>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <a href="https://github.com/DamiduShalinda" target="_blank" rel="noreferrer">
                        <FaGithub/>
                    </a>
                </motion.li>
                <motion.li
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <a href="mailto:shalindadamidu@gmail.com" target="_blank" rel="noreferrer">
                        <FiMail/>
                    </a>
                </motion.li>
                <li>
                <motion.div className="border-l border-gray-300 h-64  mt-4" style={{ scaleY: scrollYProgress , transformOrigin: "top" }}></motion.div>
                </li>
        </ul>
        
    </div>

    
  );
};

export default Navbar;
