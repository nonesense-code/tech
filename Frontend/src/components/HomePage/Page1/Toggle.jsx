import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Toggle() {
  return (
    <>
      <div>
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
        <h1>hello</h1>
      </div>
    </>
  );
}

export default Toggle;
