import React from 'react';


import { NavItemProps } from '../types';

export const Navigation = ({ items }: { items: NavItemProps[] }) => {
  return (
    <nav className="flex flex-col items-center px-12 w-full max-md:px-5 max-md:max-w-full">
      <div className="flex flex-wrap items-end self-start w-full font-bold max-w-[1364px] text-sky-950 max-md:max-w-full">
        <div className="flex flex-wrap grow shrink justify-center items-center min-w-[240px] w-[897px] max-md:max-w-full">
          <div className="grow shrink gap-2.5 self-stretch py-2.5 pr-2 pl-2 my-auto w-2.5 text-xl whitespace-nowrap">
            ThriveWell
          </div>
          <div className="flex gap-6 items-center self-stretch my-auto text-base min-w-[240px]">
            {items.map((item, index) => (
              <button
                key={index}
                className="flex flex-col justify-center items-start self-stretch py-2 pl-2.5 my-auto whitespace-nowrap min-h-[36px] w-[86px]"
                onClick={() => window.location.href = item.href}
              >
                <div className="pb-2 w-full">{item.label}</div>
              </button>
            ))}
          </div>
        </div>
        <button className="grow shrink gap-2.5 self-stretch p-2.5 w-28 text-base rounded-3xl border border-solid border-sky-950 shadow-[0px_3px_3px_rgba(0,0,0,0.25)]">
          Book a Session
        </button>
      </div>
    </nav>
  );
};