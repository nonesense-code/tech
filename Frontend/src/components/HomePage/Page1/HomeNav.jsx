import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function HomeNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="navbar fixed w-full px-4 py-3 flex items-start sm:items-center sm:justify-between justify-start flex-wrap flex-col sm:flex-row border-b-[1px] border-zinc-500/40 overflow-hidden z-10">
        <div className="flex gap-2 items-center text-[#3b2f44]">
          <div onClick={handleClick} className="relative">
            <motion.div
              initial={{ opacity: 1, rotate: 0 }}
              animate={{ opacity: isOpen ? 0 : 1, rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden font-semibold"
            >
              <IoMenu className="text-3xl" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ opacity: isOpen ? 1 : 0, rotate: isOpen ? 0 : 45 }}
              transition={{ duration: 0.2 }}
              className="sm:hidden font-semibold absolute top-0 left-0"
            >
              <IoClose className="text-3xl" />
            </motion.div>
          </div>
          <div className="branding text-2xl sm:text-3xl font-extrabold tracking-wide select-none flex">
            {["T", "e", "c", "h", "S", "o"].map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: "60%", opacity: 0, scale: 0.8 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="w-full text-[#3b2f44]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
        <div className="font-semibold text-md rounded-full p-1 cursor-pointer">
          {isOpen ? (
            <div className="flex flex-col sm:flex-row">
              {["BOD", "Event", "Contact", "About","None"].map((item, index) => (
                <div
                  key={index}
                  className="text-[#1d2b41] text-xl hover:bg-zinc-600/10 hover:rounded-lg p-1 hover:p-1 outline-none"
                >
                  <Link
                    to={`${item.toLowerCase().split(" ").join("")}`}
                    key={index}
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          ) : (
            <div className="sm:items-center sm:gap-4 sm:flex-wrap sm:flex">
              {["BOD", "Event", "Contact", "About"].map((item, index) => (
                <div
                  key={index}
                  className="text-[#1d2b41] text-xl hover:bg-zinc-600/10 hover:rounded-lg p-1 hover:p-1 outline-none"
                >
                  <Link
                    to={`${item.toLowerCase().split(" ").join("")}`}
                    key={index}
                  >
                    {item}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default HomeNav;
