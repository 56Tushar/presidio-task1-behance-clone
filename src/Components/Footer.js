import React from "react";
import { adobeLogo } from "../util";

export const Footer = () => {
  return (
    <section className="px-4 py-3 fixed bottom-0 bg-white w-full">
      <div className=" w-full">
        <div className="grid  footer-holder lg:grid-cols-1 gap-1 w-full">
          <div className="left-Footer w-full">
            <ul className="flex items-center left-Footer-item cursor-pointer w-full ">
              <li className="mx-3 font-medium text-sm hover:text-[#2f36fd]">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  More Behance
                </a>
              </li>
              <span>|</span>
              <li className="mx-3 font-medium text-sm hover:text-[#2f36fd]">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  English
                </a>
              </li>
              <span>|</span>
              <li className="mx-3 font-medium text-sm hover:text-[#2f36fd]">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Try Behance Pro
                </a>
              </li>
              <span>|</span>
              <li className="mx-3 font-medium text-sm hover:text-[#2f36fd]">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  TOU Help
                </a>
              </li>
              <li className="mx-3 font-medium text-sm hover:text-[#2f36fd]">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Privacy Community
                </a>
              </li>
              <li className="mx-3 font-medium text-sm hover:text-[#2f36fd]">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Help
                </a>
              </li>
              <li className="mx-3 font-medium text-sm hover:text-[#2f36fd]">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  Cookie preferences Do not sell or share my personal
                  information
                </a>
              </li>
            </ul>
          </div>
          <div className="adobe-right flex lg:justify-end">
            <div className="adobe-right mx-4 flex items-center hover:opacity-70">
              <div className="adobe-icon">
                <img src={adobeLogo} alt="adobeLogo" className="w-5 h-5"></img>
              </div>
              <a href="" className="pl-1 font-bold text-black text-sm">
                Adobe
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
