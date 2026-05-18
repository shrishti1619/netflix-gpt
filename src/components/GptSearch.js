import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover"
          src={BG_URL}
          alt="Netflix Background"
        />
      </div>
      <div>
        <GptSearchBar className="md:p-0 pt-[30%]" />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
