import React from "react";
import { animate, motion } from "framer-motion";
function Content1() {
  return (
    <>
      <div className="w-ful px-4 pt-10 py-10">
        <div className="question1 flex items-center justify-evenly flex-wrap sm:flex-nowrap pt-10 gap-4">
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="left cursor-pointer p-4 rounded-xl backdrop-blur-md bg-indigo-300 text-md text-light tracking-wide"
          >
            <h1 className="text-2xl font-semibold text-center pb-2">
              Our Mission
            </h1>
            <p>
              At TechSo, our mission is to empower our community with
              cutting-edge technology solutions and insightful knowledge. We are
              dedicated to providing exceptional tech support and fostering a
              deeper understanding of technological advancements. By bridging
              the gap between complex tech concepts and everyday needs, we aim
              to make technology accessible, comprehensible, and beneficial for
              everyone. Our goal is to enhance the quality of life through
              innovation and education, ensuring that every individual can
              leverage technology to its fullest potential.
            </p>
          </motion.div>
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            className="right cursor-pointer p-4 rounded-xl backdrop-blur-md bg-indigo-300 text-md text-light tracking-wide"
          >
            <h1 className="text-2xl font-semibold text-center pb-2">
              Why TechSo?
            </h1>
            <p>
              TechSo stands out as a beacon of tech support and education
              because of our unwavering commitment to excellence and our genuine
              passion for technology. Unlike other service providers, we
              prioritize building strong relationships with our clients and
              addressing their unique needs with tailored solutions. Our team's
              expertise, coupled with a dedication to continuous learning,
              allows us to stay ahead of the curve and provide exceptional
              support. At TechSo, we believe that technology should be a tool
              for empowerment and growth, and we strive to make that vision a
              reality for everyone we serve.
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Content1;
