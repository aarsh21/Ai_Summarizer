import React from "react";
import { logo } from "../assets";

const Hero = () => {
  return (
    <header
      className="w-full flex justify-center
     items-center flex-col"
    >
      <nav
        className="flex justify-between items-center
          w-full mb-10 pt-3 sticky"
      >
        <img src={logo} alt="logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => {
            window.open("https://github.com/aarsh21/Twitter-Clone");
          }}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Summarize Article with <br className=" max-md:hidden" />
        <span className="orange_gradient">Open Ai GPT-4</span>
      </h1>
      <h2 className="desc">
        A text summarizer is a clever tool that quickly condenses large texts
        into concise summaries. It harnesses the power of AI to analyze and
        extract the most important information, giving you the essence of the
        content in a nutshell. Whether it's news articles, research papers, or
        online content, this time-saving tool helps you grasp the main ideas
        effortlessly, making information retrieval a breeze. Say goodbye to
        lengthy reading and hello to quick insights with a text summarizer!
      </h2>
    </header>
  );
};

export default Hero;
