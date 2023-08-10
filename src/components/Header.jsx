import React from "react";
import { logo } from "../assets";

const Header = () => {
  return (
    <header
      className="w-full flex 
                    justify-center items-center flex-col"
    >
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={ logo } alt="sumz_logo" className="w-28 object-contain"></img>
        <button
          type="button"
          onClick={() => window.open("https://github.com/narcis-g/React-AI")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
      <h1 className="head_text">
        Chatty
        <br className="max-md:hidden" />
        <span className="head_text">Enter a url below for a summary</span>
      </h1>
    </header>
  );
};

export default Header;
