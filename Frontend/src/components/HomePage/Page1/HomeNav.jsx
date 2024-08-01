import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { motion } from "framer-motion";

function HomeNav() {
  return (
    <>
      <div className="navbar fixed w-full px-4 py-3 flex items-center sm:justify-between justify-start flex-wrap border-b-[1px] border-zinc-500/40 overflow-hidden z-10">
        <div className="flex gap-2 items-center text-[#3b2f44]">
          <div>
            <IoMenu className="sm:hidden font-semibold" />
          </div>
          <div>
            <div className="branding text-2xl sm:text-3xl font-extrabold tracking-wide select-none flex">
              {["T", "e", "c", "h", "S", "o"].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ y: "60%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="w-full text-[#3b2f44]"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="font-semibold text-md rounded-full p-1 cursor-pointer">
          <div className="items-center gap-4 flex-wrap hidden sm:flex">
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
        </div>
      </div>
    </>
  );
}

export default HomeNav;
