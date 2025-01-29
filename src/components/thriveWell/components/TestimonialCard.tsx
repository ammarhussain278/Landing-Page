import React from "react";
import { TestimonialProps } from '../types';

export const TestimonialCard = ({ image, name, content, date }: TestimonialProps) => {
  return (
    <div className="flex flex-col self-stretch my-auto min-w-[240px] w-[334px]">
      <div className="flex flex-col items-start px-5 pt-5 pb-9 rounded-2xl bg-[linear-gradient(357deg,#C3E7FA_-2.83%,#E3F1F4_83.26%)]">
        <img loading="lazy" src={image} alt={`${name}'s testimonial`} className="object-contain w-16 aspect-square" />
        <div className="mt-5 text-lg">{name}</div>
        <div className="flex shrink-0 self-stretch mt-12 h-px bg-sky-950 bg-opacity-10 max-md:mt-10" />
        <div className="self-stretch mt-7 text-sm">{content}</div>
        <div className="text-xs">{date}</div>
      </div>
    </div>
  );
};