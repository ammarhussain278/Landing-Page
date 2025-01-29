import React from 'react';
import { NavItemProps } from '../types';

export const Navigation = ({ items }: { items: NavItemProps[] }) => {
  return (
    <nav className="flex flex-col items-center px-12 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap items-center justify-between w-full font-bold max-w-[1364px] text-sky-950 max-md:max-w-full">
        <div className="flex items-center justify-center w-full">
          <div className="text-xl whitespace-nowrap mr-auto">
            ThriveWell
          </div>
          <div className="flex gap-6 items-center justify-center mx-auto text-base">
            {items.map((item, index) => (
              <button
                key={index}
                className="flex flex-col justify-center items-center py-2 px-2.5 whitespace-nowrap min-h-[36px]"
                onClick={() => window.location.href = item.href}
              >
                <div className="pb-2">{item.label}</div>
              </button>
            ))}
          </div>
          <button className="ml-auto p-2.5 w-28 text-base rounded-3xl border border-solid border-sky-950 shadow-[0px_3px_3px_rgba(0,0,0,0.25)]">
            Book a Session
          </button>
        </div>
      </div>
    </nav>
  );
};