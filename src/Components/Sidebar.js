import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((Store) => Store.app.isMenuOpen);
  if (!isMenuOpen) return null;
  return (
    <div className=" sticky top-16">
      <ul className="p-2 m-2  text-xs cursor-pointer  ">
        <div className="  p-2 px-3 space-x-4 flex  hover:bg-gray-300 rounded-xl">
          <img
            className="w-3 h-3 "
            alt="home"
            src="https://cdn.onlinewebfonts.com/svg/img_281704.png"
          />
          <Link to="/">Home</Link>
        </div>

        <div className="flex p-2 px-2 space-x-3  hover:bg-gray-300 rounded-xl">
          <img
            className="w-5 h-5  "
            alt="shorts"
            src="https://www.edigitalagency.com.au/wp-content/uploads/Youtube-shorts-icon-png-400x400.png"
          />
          <li>Shorts</li>
        </div>
        <div className="flex p-2 px-2 space-x-3  hover:bg-gray-300 rounded-xl">
          <img
            className="w-4 h-4  "
            alt="subs"
            src="https://logodix.com/logo/395110.png"
          />
          <li>Subscriptions</li>
        </div>
      </ul>
      <ul className="p-2 m-2  text-xs cursor-pointer  ">
        <div className="  p-2 px-2 space-x-3 flex  hover:bg-gray-300 rounded-xl">
          <img
            className="w-5 h-5 "
            alt="music"
            src="https://images.vexels.com/media/users/3/131548/isolated/preview/9e36529b6e31cc4bae564fc2d14a8d0f-music-note-circle-icon-by-vexels.png"
          />
          <li>Music</li>
        </div>
        <div className="flex p-2 px-2 space-x-4  hover:bg-gray-300 rounded-xl">
          <img
            className="w-4 h-4  "
            alt="shorts"
            src="http://www.pryorchamber.com/uploads/4/8/3/3/48336337/sports-icon-2_orig.png"
          />
          <li>Sports</li>
        </div>
        <div className="flex p-2 px-2 space-x-4  hover:bg-gray-300 rounded-xl">
          <img
            className="w-4 h-4  "
            alt="gaming"
            src="http://www.pngmart.com/files/7/Gaming-PNG-Transparent.png"
          />
          <li>Gaming</li>
        </div>
      </ul>

      <ul className="p-2 m-2  text-xs cursor-pointer  ">
        <div className="  p-2 px-3 space-x-3 flex  hover:bg-gray-300 rounded-xl">
          <img
            className="w-4 h-4 "
            alt="movies"
            src="https://webstockreview.net/images/cinema-clipart-cinema-screen-4.png"
          />
          <li>Movies</li>
        </div>
        <div className="flex p-2 px-3 space-x-3  hover:bg-gray-300 rounded-xl">
          <img
            className="w-4 h-4  "
            alt="watachlater"
            src="http://cdn.onlinewebfonts.com/svg/img_503358.png"
          />
          <li>Watchlater</li>
        </div>
        <div className="flex p-2 px-3 space-x-4  hover:bg-gray-300 rounded-xl">
          <img
            className="w-3 h-3  "
            alt="history"
            src="https://cdn.onlinewebfonts.com/svg/img_530089.png"
          />
          <li>History</li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
