import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { links } from "../utils/data";
import { Link } from "react-scroll";

const Footer = () => {
  const socialMediaLinks = [
    {
      id: 1,
      child: <FaLinkedin size={30} className="hover:text-violet-500 transition-all hover:scale-105"/>,
      href: "https://www.linkedin.com/in/yurik-rivera-zeled%C3%B3n-066726237/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: <FaGithub size={30} className="hover:text-violet-500 transition-all hover:scale-105"/>,
      href: "https://github.com/yurikrz",
    },
    {
      id: 3,
      child: <HiOutlineMail size={30} className="hover:text-violet-500 transition-all hover:scale-105"/>,
      href: "mailto:yurikrz@hotmail.com",
    },
    {
      id: 4,
      child: <BsFillPersonLinesFill size={30} className="hover:text-violet-500 transition-all hover:scale-105"/>,
      href: "/RESUME_YURIK_RIVERA.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <footer className="bg-level1 w-full px-5 py-16 mt-8 lg:px-[72px] md:px-[50px] grid ">
        <div className="container">
            <div>
                <h1 className="text-3xl font-great_vibes text-white">
                    Yurik.R
                </h1>
            </div>

            <ul className="flex py-6 ">
                {socialMediaLinks.map((link) => (
                    <li key={link.id} className={`flex justify-between items-center w-12 h-12 `}>
                    <a
                        href={link.href}
                        className="flex justify-between items-center w-full text-white"
                        download={link.download}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {link.child}
                    </a>
                    </li>
                ))}
            </ul>
        </div>
        
        <nav className="pt-10">
          <ul className="text-white text-xl font-normal grid grid-cols-2 gap-6">
            {links.map((link) => (
              <li
                key={link.id}
                className="cursor-pointer capitalize hover:text-violet-500 transition-all "
              >
                <Link
                  to={link.link}
                  spy
                  smooth
                  duration={500}
                >
                  {link.link}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
    
      <p className="text-white pt-12">
        Not Copyright 2023 • Yurik Rivera. Webflow cloneable
      </p>
    </footer>
  );
};

export default Footer;
