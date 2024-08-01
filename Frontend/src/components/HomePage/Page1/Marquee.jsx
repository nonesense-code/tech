import React from "react";
import { motion } from "framer-motion";
import video from "../../../assets/videos/homeBackground.mp4";

function Marquee() {
  return (
    <div className="relative w-full overflow-hidden hidden md:flex">
      <video
        className="absolute top-0 w-full h-full object-cover blur-sm"
        src={video}
        type="video/mp4"
        autoPlay
        muted
        loop
      />
      <div className="relative w-full h-24 sm:h-full flex items-center justify-center">
        <div className="relative w-full py-2 border-t-4 border-b-4 border-zinc-500/40 overflow-hidden">
          <div className="flex whitespace-nowrap text-[100px] sm:text-[130px] font-extrabold">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 6,
                repeat: Infinity,
              }}
              className="glow leading-none pl-12"
            >
              WE ARE TechSo!
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 6,
                repeat: Infinity,
              }}
              className="glow leading-none pl-12"
            >
              WE ARE TechSo!
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 6,
                repeat: Infinity,
              }}
              className="glow leading-none pl-12"
            >
              WE ARE TechSo!
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 6,
                repeat: Infinity,
              }}
              className="glow leading-none pl-12"
            >
              WE ARE TechSo!
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 6,
                repeat: Infinity,
              }}
              className="glow leading-none pl-12"
            >
              WE ARE TechSo!
            </motion.div>
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{
                ease: "linear",
                duration: 6,
                repeat: Infinity,
              }}
              className="glow leading-none pl-12"
            >
              WE ARE TechSo!
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Marquee;
