import React from "react";

export const Navbar: React.FC = () => {
  return (
    <div className="flex flex-wrap items-end self-start w-full font-bold max-w-[1364px] text-sky-950 max-md:max-w-full">
      <div className="flex flex-wrap grow shrink justify-center items-center min-w-[240px] w-[897px] max-md:max-w-full">
        <div className="grow shrink gap-2.5 self-stretch py-2.5 pr-2 pl-2 my-auto text-xl whitespace-nowrap w-[95px]">
          ThriveWell
        </div>
        <nav className="flex gap-6 items-center self-stretch my-auto text-base min-w-[240px]">
          <button className="flex flex-col justify-center items-start self-stretch py-2 pl-2.5 my-auto whitespace-nowrap min-h-[36px] w-[58px]">
            <div className="pb-2 w-12">Home</div>
          </button>
          <button className="flex flex-col justify-center self-stretch p-2.5 my-auto w-[86px]">
            <div className="py-0.5 w-full max-md:pr-0">About Us</div>
          </button>
          <button className="flex flex-col justify-center self-stretch p-2.5 my-auto whitespace-nowrap w-[86px]">
            <div className="py-0.5 w-full">Services</div>
          </button>
          <button className="flex flex-col justify-center self-stretch p-2.5 my-auto whitespace-nowrap w-[86px]">
            <div className="py-px w-full">Contact</div>
          </button>
        </nav>
      </div>
      <button className="grow shrink gap-2.5 self-stretch p-2.5 w-28 text-base rounded-3xl border border-solid border-sky-950 shadow-[0px_3px_3px_rgba(0,0,0,0.25)]">
        Book a Session
      </button>
    </div>
  );
};
