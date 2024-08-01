import React, { useEffect, useRef } from "react";
import bulbLogo from "../../../assets/images/BulbLogo.png";
import { motion } from "framer-motion";
import Typed from "typed.js";

function HomeBody() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Excellence", "Ideas", "Creativity", "Vision", "Opportunities"],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-full relative pt-32 px-4 flex flex-wrap overflow-hidden bg-stone-400/40">
      <div className="loadingtext text-4xl sm:text-6xl font-semibold">
        <div className="leading-none">
          <div className="text-[#010020] tracking-tighter">
            Welcome to TechSo, <br />
          </div>
          <div className="relative flex items-center tracking-tighter text-[#010020]">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "10%" }}
              transition={{ delay: 1, duration: 0.4 }}
              className="relative w-52 h-32 bottom-0 hidden md:flex tracking-tighter"
            >
              <img
                src={bulbLogo}
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </motion.div>
            <span className="text-4xl sm:text-6xl">where Innovation meets</span>
          </div>

          <div>
            <span
              ref={typedElement}
              className="text-4xl sm:text-5xl text-[#cc282e]"
            ></span>
          </div>
        </div>
        <div className="pt-20 sm:pt-14 pb-20">
          <h1 className="text-4xl sm:text-6xl text-[#35815e] p-2">
            "Serving Society Via Technology"
          </h1>
        </div>
      </div>
      <div className="pt-8"></div>
    </div>
  );
}

export default HomeBody;
