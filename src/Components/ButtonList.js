import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex  top-12 bg-white ">
      <Button name="All" />
      <Button name="Live" />
      <Button name="Sports" />
      <Button name="News" />
      <Button name="Movies" />
      <Button name="Music" />
      <Button name="Trending" />
      <Button name="For You" />
      <Button name="Gaming" />
    </div>
  );
};

export default ButtonList;
