import React from "react";
import { useState, useEffect } from "react";
import { IoClose, IoSearch, IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { NavbarItems, behance_logo, searchItems, tagName } from "../util";

function Search() {
  const [searchText, setSearchText] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Example breakpoint: 768px
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (event) => {
    const text = event.target.value;
    setSearchText(text);
    if (text != "") fetchRecommendations(text);
  };

  const fetchRecommendations = (text) => {
    const hardcodedRecommendations = [
      "GIF",
      "Oppenheimer",
      "AGPX",
      "Urban Street",
      "elefante",
      "done",
      "flourish",
      "cute farm",
      "merch cap",
      "i love you",
      "AOAO",
    ];
    const filteredRecommendations = hardcodedRecommendations.filter((item) =>
      item.toLowerCase().includes(text.toLowerCase())
    );
    setRecommendations(filteredRecommendations);
  };

  return (
    <div className="search-box">
      {/* relative w-full */}
      <div
        className={
          searchText != ""
            ? "input-boxv1 relative w-full"
            : "input-boxv2 relative w-full"
        }
      >
        <div className="search-icon text-3xl text-[#777] absolute left-4">
          <IoSearchSharp />
        </div>
        <div className="srch-rcmd">
          <input
            type="text"
            name=""
            value={searchText}
            onChange={handleChange}
            placeholder="Search the creative world at work"
            className="w-full bg-transparent outline-none pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]"
            id=""
          />
          {searchText != "" && recommendations.length != 0 ? (
            <div className="re-holder">
              <ul>
                {recommendations.map((recommendation, index) => (
                  <li key={index}>{recommendation}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="tags-search bg-white px-4 py-3 border-1-2">
        <ul className="flex items-center">
          <li className="text-black lg:bg-black mx-1 py-1 lg:text-white px-3 rounded-full font-medium text-sm">
            <a href="">Projects</a>{" "}
          </li>
          {isSmallScreen ? (
            <div className="dt-arrow block lg:hidden">
              <MdArrowDropDown />
            </div>
          ) : (
            <div></div>
          )}
          {!isSmallScreen &&
            searchItems.map((item) => (
              <li className="mx-1 font-medium text-sm py-1 px-3 hidden:block rounded-full hover:bg-[#f3f2f2]">
                <a href=" ">{item.sItems}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default Search;
