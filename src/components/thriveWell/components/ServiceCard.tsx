import React from 'react';
import { ServiceCardProps } from '../types';

export const ServiceCard: React.FC<ServiceCardProps & { className?: string }> = ({ icon, title, description, className }) => {
  return (
    <div className={`flex flex-col p-8 rounded-2xl bg-sky-200 bg-opacity-20 transition-all duration-300 hover:shadow-lg ${className}`}>
      <img
        src={icon}
        alt=""
        className="w-[50px] h-[50px] object-contain"
        aria-hidden="true"
      />
      <h3 className="mt-3.5 text-2xl font-bold tracking-wide text-sky-950">
        {title}
      </h3>
      <p className="mt-3.5 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
};