import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "../assets/images/HGM.png";
import { GithubIcon } from "../assets/icons/GithubIcon";

const navbarLinks = [
  { label: "Inicio", href: "#inicio", ariaLabel: "Home" },
  { label: "Empresa", href: "#empresa", ariaLabel: "Empresa" },
  // { label: "Pricing", href: "#pricing", ariaLabel: "Pricing" },
  { label: "Productos", href: "#productos", ariaLabel: "Productos" },
  // { label: "FAQ", href: "#FAQ", ariaLabel: "FAQ" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-red-900 px-6 w-[100vw] h-5 z-40  top-0 left-0 text-white font-semibold sticky flex justify-between ">
        <span className="text-[11px]">
          Email: <i>Hgm@gmail.com</i>{" "}
        </span>
        <div className="block">
          <span className="text-[11px]">
            Phone:<i> 00 000 0000000 </i>
          </span>
          <span className="text-[11px]">
            Mobil:<i> 00 000 0000000 </i>
          </span>
        </div>
      </div>

      <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBg1 z-40 lg:backdrop-blur-xl">
        <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center   ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <a className="navbar-link" href="#home" aria-label="Home">
              <div className="flex justify-start items-center grow basis-0">
                <div className="text-white md:mr-2 text-6xl">
                  <img src={`${Logo}`} alt="" className="w-24 h-auto md:w-52" />
                </div>
                <div className=" text-black md:text-black font-['Inter'] font-bold text-md md:text-xl">
                  HGM
                </div>
              </div>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="hidden lg:flex h-full pl-12 pb-2">
              {navbarLinks.map(({ href, label, ariaLabel }) => (
                <a
                  className="navbar-link"
                  href={href}
                  aria-label={ariaLabel}
                  key={label}
                >
                  {label}
                </a>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <div className="grow basis-0 justify-end hidden lg:flex">
              {/* <a
                className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                href="https://github.com/matt765/Tidestream"
                target="_blank"
                aria-label="source code"
              >
                <GithubIcon />
                <span className="pt-px">Source code</span>
              </a> */}
            </div>
          </motion.div>
          <div
            className="lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-customDarkBg2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500  mb-1"></div>
            <div className="w-5 h-0.5 bg-gray-500 "></div>
          </div>
        </div>

        {/* Mobile navbar */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              exit={{ opacity: 0 }}
            >
              <div
                className="flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-customDarkBg1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-customDarkBg3 pt-10
        "
              >
                {navbarLinks.map(({ label, href, ariaLabel }) => (
                  <a
                    key={href}
                    className="navbar-link"
                    href={href}
                    onClick={() => setIsOpen(false)}
                    aria-label={ariaLabel}
                  >
                    {label}
                  </a>
                ))}
                <a
                  className="text-white custom-border-gray rounded-xl
           bg-customDarkBg2 hover:bg-customDarkBg3  border-gray-700 pl-6 pr-8 pt-2 pb-2 text-sm flex"
                  href="https://github.com/matt765/Tidestream"
                  target="_blank"
                >
                  <GithubIcon />
                  Source code
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};
