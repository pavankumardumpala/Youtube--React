import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./Utils/appSlice";
import { YOUTUBE_SEARCH_API } from "./Utils/constants";
import { cacheResults } from "./Utils/searchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  });

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);

    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandeler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col   sticky top-0 bg-white ">
      <div className=" flex  col-span-1 static">
        <img
          onClick={() => toggleMenuHandeler()}
          className="h-6 bottom-2 px-2 relative top-3 "
          alt="icon"
          src="https://tse3.mm.bing.net/th?id=OIP.tQmL3J28pFPoRIHXj_RQhQHaHa&pid=Api&P=0"
        />

        <a href="/">
          <img
            className="h-12  "
            alt=" youtube icon"
            src="https://tse1.mm.bing.net/th?id=OIP.sCtdNjphAin-gugu0MNptAHaEK&pid=Api&P=0"
          />
        </a>
      </div>

      <div className="col-span-10  px-10 p-2">
        <div>
          <input
            className=" rounded-l-full w-1/2  border border-gray-500 px-4 text-sm  p-1 "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className=" border border-gray-400   bg-gray-100  rounded-r-full p-1 top-1 relative  ">
            <img
              className="w-5  "
              alt="search-icoon"
              src="https://cdn1.iconfinder.com/data/icons/web-and-mobile-ui-outline-icon-kit/512/UI_Icons_2-01-512.png"
            />
          </button>
        </div>
        {showSuggestions && (
          <div className=" w-[26.5rem] fixed bg-white p-3  ">
            <ul>
              {suggestions.map((s) => (
                <li className="px-2 text-sm   hover hover:bg-gray-200 cursor-pointer">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className=" w-6  col-span-1 m-2">
        <img
          alt=" login icon"
          src="https://cdn.onlinewebfonts.com/svg/img_411076.png  "
        />
      </div>
    </div>
  );
};

export default Header;
