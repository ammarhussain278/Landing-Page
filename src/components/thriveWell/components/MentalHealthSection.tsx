import React from 'react';
import { MentalHealthSectionProps } from '../types';

export const MentalHealthSection: React.FC<MentalHealthSectionProps> = ({
  title,
  content,
  image,
  ctaText
}) => {
  return (
    <section className="mt-56 w-full max-w-[1078px] max-md:mt-10 max-md:max-w-full mx-auto">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full font-bold max-md:mt-10 max-md:max-w-full">
            <h2 className="self-center text-4xl font-bold text-center w-[537px] max-md:max-w-full bg-gradient-to-r from-[#063248] to-[#298EA6] text-transparent bg-clip-text ">{title}</h2>
            <p className="mt-20 text-lg tracking-normal leading-8 text-black max-md:mt-10 max-md:max-w-full">
              {content}
            </p>
            <button 
              className="gap-2.5 self-stretch p-2.5 mt-20 max-w-full text-sm text-white bg-cyan-600 rounded-3xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] w-[100px] max-md:mt-10"
              aria-label={ctaText}
            >
              {ctaText}
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={image}
            alt={title}
            className="object-contain grow w-full rounded-2xl aspect-[1.12] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </section>
  );
};