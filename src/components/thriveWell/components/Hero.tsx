import React from "react";
import { HeroProps } from '../types';

export const Hero = ({ title, subtitle, ctaText }: HeroProps) => {
  return (
    <section className="self-end mt-16 w-full max-w-[1369px] max-md:mt-10 max-md:max-w-full mx-auto px-5">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-start px-16 pt-11 pb-56 mx-auto w-full font-bold rounded-2xl bg-slate-600 max-md:px-5 max-md:pb-24 max-md:mt-4 max-md:max-w-full ml-7">
            <h1 className="self-stretch text-6xl text-white max-md:max-w-full max-md:text-4xl">
              {title}
            </h1>
            <p className="mt-7 text-sm font-medium text-stone-50 w-[439px] max-md:max-w-full">
              {subtitle}
            </p>
            <button className="gap-2.5 p-1.5 mt-6 text-base bg-sky-200 rounded-3xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] text-sky-950 w-32">
              {ctaText}
            </button>
          </div>
        </div>
        
        <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col w-full max-md:mt-4 max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b66806917c698b1d2850bd38134862bc83096459113e2bb3da3e52c2b033f8?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3"
              alt="Mental wellness illustration"
              className="object-contain w-full rounded-2xl aspect-[1.81] max-md:max-w-full"
            />
            <div className="mt-2 max-md:max-w-full">
              <div className="flex gap-2 max-md:flex-col">
                <div className="flex flex-col w-[48%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col px-5 pt-8 pb-16 mx-auto w-full text-sm text-white rounded-2xl bg-sky-950 max-md:px-5 max-md:mt-4" style={{ height: '275px' }}>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c661e61590511b037bb579fc25a94875924022dc716bc8d330b2149c04dc6926?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3"
                      alt=""
                      className="object-contain gap-0 w-full aspect-[3.68] min-h-[64px]"
                    />
                    <div className="mt-14 max-md:mt-10">
                      <span className="text-white">
                        Countless patients experienced significant improvements{" "}
                      </span>
                      <span className="font-bold text-white">
                        after their very first session
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col w-[48%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col px-5 pt-8 pb-16 mx-auto w-full text-sm text-gray-700 bg-sky-200 rounded-2xl max-md:pl-5 max-md:mt-4" style={{ height: '275px' }}>
                    <div className="gap-2.5 self-start py-1.5 pr-3 pl-3 text-xs font-medium whitespace-nowrap bg-blue-300 rounded-2xl min-h-[24px]">
                      About
                    </div>
                    <div className="flex flex-col mt-3">
                      <div className="font-bold">Self-Care Toolkit</div>
                      <div className="mt-2.5">
                        Explore our self-care toolkit designed to help manage anxiety, depression, and stress from the comfort of your home.
                      </div>
                    </div>
                    <button className="gap-2.5 self-center px-3 py-1.5 mt-5 max-w-full font-medium bg-white rounded-2xl border border-white border-solid min-h-[30px] text-sky-950 w-[200px]">
                      Discover Tools
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};