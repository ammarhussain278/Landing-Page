import React from "react";

import { ArticleCardProps } from '../types';

export const ArticleCard = ({ image, title, content }: ArticleCardProps) => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[39%] max-md:ml-0 max-md:w-full">
        <img
          loading="lazy"
          src={image}
          alt={title}
          className="object-contain w-full rounded-2xl aspect-square max-md:mt-10"
        />
      </div>
      <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
          <h3 className="text-3xl font-extrabold tracking-wide leading-none text-sky-950 max-md:max-w-full">
            {title}
          </h3>
          <p className="mt-16 text-lg tracking-normal leading-8 text-black max-md:mt-10 max-md:max-w-full">
            {content}
          </p>
          <button className="gap-2.5 self-stretch p-2.5 mt-16 max-w-full text-sm font-bold text-white bg-cyan-600 rounded-3xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] w-[113px] max-md:mt-10">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};