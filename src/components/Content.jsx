import React from "react";
import { useState, useEffect } from "react";

import { copy, linkIcon, loader, tick } from "../assets";

const Content = () => {

  const [article, setArticle] = useState({
    url: '',
    summary: '',
  })

  const handleSubmit = async (e) => {


  }

  return (
    <section className="mt-16 w-full max-w-wl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          ></img>
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            onChange={(e) => setArticle({... article, url:e.target.value})}
            required
            className="url_input peer"
          ></input>
          <button
            type="submit"
            className="submit_btn 
                      peer-focus:border-grey-700 
                      peer-focus:text-gray-700"
          >
            <p>↵</p>
          </button>
        </form>

        {/* Browse History */}
      </div>

      {/* Display results */}
    </section>
  );
};

export default Content;
