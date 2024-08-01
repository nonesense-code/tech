import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { ImWhatsapp } from "react-icons/im";
import { FaGoogle } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-zinc-800 text-white w-full">
      <div className="flex flex-col gap-4">
        <div className="border-b-2 border-zinc-500 p-1 flex items-center justify-evenly sm:justify-center gap-2 font-semibold flex-wrap w-full">
          <div className="flex items-center justify-center w-1/2 gap-2 sm:gap-4">
            <a
              href="https://www.facebook.com/everesttechsonetwork"
              target="_blank"
              className="outline-none"
            >
              <FaFacebookF className="border-[2px] border-stone-600 p-[8px] rounded-full w-12 h-12" />
            </a>
            <a href="#" target="_blank" className="outline-none">
              <FaInstagram className="border-[2px] border-stone-600 p-[8px] rounded-full w-12 h-12" />
            </a>
            <a href="#" target="_blank" className="outline-none">
              <ImWhatsapp className="border-[2px] border-stone-600 p-[8px] rounded-full w-12 h-12" />
            </a>
            <a
              href="
https://evtechso.com/"
              target="_blank"
              className="outline-none"
            >
              <FaGoogle className="border-[2px] border-stone-600 p-[8px] rounded-full w-12 h-12" />
            </a>
          </div>
        </div>
        <div className="px-4 sm:px-0 py-2 flex justify-center sm:justify-evenly items-center whitespace-nowrap gap-10 text-sm sm:text-lg flex-wrap">
          <div className="flex flex-col gap-4 items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#A5B4FC]">
                Social
              </h1>
            </div>
            <div className="flex flex-col text-sky-600 items-center text-sm sm:text-xl">
              <a
                href="https://www.facebook.com/everesttechsonetwork"
                target="_blank"
                className="cursor-pointer outline-none"
              >
                Facebook
              </a>
              <a href="#" className="cursor-pointer outline-none">
                Twitter
              </a>
              <a href="#" className="cursor-pointer outline-none">
                Youtube
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#A5B4FC]">
                Services
              </h1>
            </div>
            <div className="flex flex-col items-center text-[#717171] font-semibold">
              <div>Event Organization</div>
              <div>Member Support</div>
              <div>Community Engagement</div>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-[#A5B4FC]">
                Activity
              </h1>
            </div>
            <div className="flex flex-col items-center text-[#717171] font-semibold">
              <div>Influencer</div>
              <div>Donation</div>
              <div>Social Events</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
