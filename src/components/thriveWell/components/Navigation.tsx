import React from 'react';
import { NavItemProps } from '../types';

export const Navigation = ({ items }: { items: NavItemProps[] }) => {
  return (
    <nav className="flex flex-col items-center px-12 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap items-center justify-between w-full font-bold max-w-[1364px] text-sky-950 max-md:max-w-full">
        <div className="flex items-center justify-between w-full max-md:flex-col max-md:items-start">
          <div className="text-xl whitespace-nowrap mr-auto max-md:mr-0">
            ThriveWell
          </div>
          <div className="flex gap-6 items-center justify-center mx-auto text-base max-md:flex-col max-md:gap-4 max-md:mt-4">
            {items.map((item, index) => (
              <button
                key={index}
                className="flex flex-col justify-center items-center py-2 px-2.5 whitespace-nowrap min-h-[36px] max-md:w-full"
                onClick={() => window.location.href = item.href}
              >
                <div className="pb-2">{item.label}</div>
              </button>
            ))}
          </div>
          <button className="ml-auto p-2.5 w-28 text-base rounded-3xl border border-solid border-sky-950 shadow-[0px_3px_3px_rgba(0,0,0,0.25)] max-md:mt-4 max-md:w-full">
            Book a Session
          </button>
        </div>
      </div>
    </nav>
  );
};