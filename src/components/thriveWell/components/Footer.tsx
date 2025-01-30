import React from "react";
import { FooterProps } from "../types";

export const Footer = ({ navItems, socialLinks }: FooterProps) => {
  return (
    <footer className="relative flex flex-col items-start px-20 pb-20 mt-80 w-full bg-sky-200 border border-sky-200 border-solid rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      
      <div className="absolute top-[-100px] left-20 flex z-10 flex-col justify-center items-start px-12 py-12 max-w-full font-bold bg-sky-950 rounded-[50px] w-[750px] shadow-lg max-md:px-5 max-md:w-full max-md:left-1/2 max-md:transform max-md:-translate-x-1/2">
        <div className="flex flex-col items-start max-w-full w-[547px] max-md:w-full">
          <h2 className="text-4xl text-center text-slate-200 max-md:text-2xl max-md:max-w-full">
            Ready to Begin Your Journey?
          </h2>
          <p className="self-stretch mt-5 text-base tracking-normal leading-loose text-zinc-100 text-opacity-90 max-md:text-sm max-md:max-w-full">
            Vestibulum ac enim in sem vestibulum luctus. Etiam tincidunt.
          </p>
          <button className="gap-2.5 self-stretch p-2.5 mt-5 text-sm rounded-3xl bg-slate-200 shadow-[0px_3px_3px_rgba(0,0,0,0.25)] text-slate-600 max-md:text-xs">
            Book a Session
          </button>
        </div>
      </div>

      <div className="flex flex-col items-start w-full mt-60 max-md:mt-40">
        <nav className="flex gap-9 items-center ml-3 text-base font-semibold tracking-normal leading-loose text-center text-sky-950 max-md:mt-10 max-md:ml-2.5 max-md:flex-col max-md:gap-4">
          {navItems.map((item, index) => (
            <button
              key={index}
              className="self-stretch my-auto max-md:w-full"
              onClick={() => (window.location.href = item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex gap-4 mt-12 ml-3 max-md:mt-10 max-md:ml-2.5 max-md:flex-wrap">
          {socialLinks.map((link, index) => (
            <img
              key={index}
              loading="lazy"
              src={link}
              alt={`Social media icon ${index + 1}`}
              className="object-contain shrink-0 aspect-square w-[39px] max-md:w-[30px]"
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-5 justify-between self-center mt-9 w-full text-sm tracking-normal text-center text-black max-w-[1299px] max-md:max-w-full max-md:flex-col max-md:items-center">
          <div>© 2024 Company Name. All Rights Reserved</div>
          <div>Term & Conditions Privacy Policy</div>
        </div>
      </div>
    </footer>
  );
};