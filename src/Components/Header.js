import { React, useState } from "react";
import { IoClose, IoSearch, IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { NavbarItems, behance_logo, searchItems, tagName } from "../util";
import { adobeLogo } from "../util";
import { HiOutlineMenu } from "react-icons/hi";
import Search from "./Search";
import Dropdown from "react-bootstrap/Dropdown";

const openMenu = () => {
  const main_header = document.getElementById("header");
  main_header.classList.toggle("menuopen");
};
const closeMenu = () => {
  const main_header = document.getElementById("header");
  main_header.classList.remove("menuopen");
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);
  };

  return (
    <>
      <header className="header" id="header">
        <div
          id="menu"
          className="menu duration-300 bg-white lg:hidden shadow-lg w-[70%] h-[100%] fixed left-0 top-0 z-20 p-5"
        >
          <div
            className="text-3xl absolute right-3 cursor-pointer text-[#333]"
            onClick={() => closeMenu()}
          >
            <IoClose />
          </div>
          <ul className="">
            <li className="m-3 font-medium text-md">
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
              Discover
            </li>
            <li className="m-3 font-medium text-md">
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
              Livestream
            </li>
            <li className="m-3 font-medium text-md">
              <a href="http://" target="_blank" rel="noopener noreferrer"></a>
              Jobs
            </li>
          </ul>
        </div>

        <div className="border-b fixed w-full top-0 bg-white z-10">
          <div className="contentHolder bg-white">
            <div className="top-header py-4 lgpy-3 px-5 border-b border bg-white">
              <div className="navbar top-0 left-0 bg-white w-full p-4 flex items-center justify-between z-99">
                <div className="brand-logo flex items-center bg-white">
                  <div
                    className="phone-menu pr-2 text-2xl cursor-pointer block lg:hidden bg-white"
                    onClick={() => openMenu()}
                  >
                    <HiOutlineMenu />
                  </div>
                  <img
                    src={behance_logo}
                    alt="behance_logo"
                    className="w-auto h-4"
                  ></img>
                  <div className="page-links ml-8 hidden lg:block">
                    <ul className="flex items-center">
                      {NavbarItems.map((items) => (
                        <li className="mx-2 font-medium text-sm active">
                          <a
                            href="http://"
                            target="_blank"
                            rel=" noopener noreferrer"
                          >
                            {items.nItems}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="action-area flex items-center">
                    <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff]">
                      <a href="" className="text-[#0057ff] font-medium text-md">
                        Login
                      </a>
                    </div>
                    <div className="signUp-btn mx-4 rounded-full border-[#dee8ff] px-4 py-1  bg-[#0057ff]">
                      <a href="" className="text-[#fff] font-medium text-md">
                        Sign Up
                      </a>
                    </div>
                    <span>|</span>
                    <div className="free-btn mx-4 flex items-center"></div>
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-60">
                      <div className="adobe-icon">
                        <img
                          src={adobeLogo}
                          alt="adobeLogo"
                          className="w-5 h-5"
                        ></img>
                      </div>
                      <a href="" className="pl-1 font-bold text-black text-sm">
                        Adobe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="phone-search block lg:hidden pr-3 text-2xl">
                  <IoSearchSharp />
                </div>
              </div>
            </div>

            <div className="search-area p-5 m-5">
              <div className="search-area flex items-center">
                <Search />
              </div>
            </div>
            <div className="hidden lg:block w-full">
              <div className="behance-tools pb-5 px-5 flex items-center justify-between w-full">
                <div className="flex items-center">
                  {tagName.map((items) => (
                    <div className="tools-item flex items-center border rounded-md px-3 py-2 mx-3 justify-between">
                      <div className="t-icon mx-2">{items.tagsIcon}</div>
                      <div className="tname">
                        <p className="text-sm font-bold">{items.tags}</p>
                      </div>
                      <div className="dt-arrow">
                        <MdArrowDropDown />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="dropdown">
                  <button className="dropdown-toggle" onClick={toggleMenu}>
                    <div className="btn-content">
                      <p>Recommended</p>
                    </div>
                  </button>
                  {isOpen && (
                    <ul className="dropdown-menu">
                      <li onClick={() => handleItemClick("Item 1")}>
                        Recommended
                      </li>
                      <li onClick={() => handleItemClick("Item 2")}>Curated</li>
                      <li onClick={() => handleItemClick("Item 3")}>
                        Most Appreciated
                      </li>
                      <li onClick={() => handleItemClick("Item 4")}>
                        Most Viewed
                      </li>
                      <li onClick={() => handleItemClick("Item 5")}>
                        Most Discussed
                      </li>
                      <li onClick={() => handleItemClick("Item 6")}>
                        Most Recent
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
