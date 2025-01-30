import React from 'react';
import { ServiceCard } from './ServiceCard.tsx';
import { ServicesSectionProps } from '../types';

export const ServicesSection: React.FC<ServicesSectionProps> = ({ title, subtitle, services }) => {
  return (
    <section className="px-4 py-20 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-base tracking-normal leading-7 text-black max-w-[549px] mx-auto">
          {subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1076px] mx-auto">
        {services.map((service, index) => {
          // If we have exactly 2 items in the last row, wrap them in a div
          if (services.length % 3 === 2 && index === services.length - 2) {
            return (
              <div key={index} className="lg:col-span-3 grid grid-cols-2 gap-6">
                <ServiceCard
                  icon={services[index].icon}
                  title={services[index].title}
                  description={services[index].description}
                />
                <ServiceCard
                  icon={services[index + 1].icon}
                  title={services[index + 1].title}
                  description={services[index + 1].description}
                />
              </div>
            );
          }

          // Skip the last item if it's already rendered inside the special 2-card layout
          if (services.length % 3 === 2 && index === services.length - 1) {
            return null;
          }

          return (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          );
        })}
      </div>
    </section>
  );
};
