import React from "react";
import { StatCardProps } from "../types";

export const StatCard: React.FC<StatCardProps> = ({
  value,
  description,
  image,
  bgColor = "bg-slate-200",
}) => {
  return (
    <div
      className={`flex flex-col grow items-start px-4 py-12 mt-20 w-full rounded-2xl ${bgColor} max-md:pl-5 max-md:mt-10`}
    >
      <div className="text-4xl font-bold text-sky-950">{value}</div>
      <div className="self-stretch mt-2 text-base text-slate-600">
        {description}
      </div>
      {image && (
        <img
          loading="lazy"
          src={image}
          alt=""
          className="object-contain mt-16 max-w-full aspect-[0.85] w-[157px] max-md:mt-10"
        />
      )}
    </div>
  );
};
