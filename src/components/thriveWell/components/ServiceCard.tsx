import React from "react";
import { ServiceCardProps } from "../types";

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col grow text-base max-md:mt-4">
      <div className="flex flex-col px-8 py-8 rounded-2xl bg-sky-200 bg-opacity-20 max-md:pl-5">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain aspect-square w-[50px] max-md:ml-1"
        />
        <div className="self-start mt-3.5 text-2xl font-bold tracking-wide leading-none text-center text-sky-950">
          {title}
        </div>
        <div className="mt-3.5 leading-7 text-slate-600 max-md:ml-1">
          {description}
        </div>
        <button className="self-end mt-10 font-semibold tracking-normal leading-loose text-center text-black max-md:mr-2.5">
          Learn More
        </button>
      </div>
    </div>
  );
};
