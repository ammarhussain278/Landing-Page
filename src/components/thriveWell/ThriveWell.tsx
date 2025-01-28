import React from 'react';
import { Navigation } from './components/Navigation.tsx';
import { TestimonialCard } from './components/TestimonialCard.tsx';
import { ServiceCard } from './components/ServiceCard.tsx';
import { StatCard } from './components/StatCard.tsx';
import { testimonialData } from './Testimonials.ts';
import { serviceData } from './Services.ts';

export const ThriveWell: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pt-9 bg-white">
      <div className="flex flex-col items-center px-12 w-full max-md:px-5 max-md:max-w-full">
        <Navigation />
        
        {/* Hero Section */}
        <div className="self-end mt-16 w-full max-w-[1369px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="flex flex-col w-[58%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-start px-16 pt-11 pb-56 mx-auto w-full font-bold rounded-2xl bg-slate-600 max-md:px-5 max-md:pb-24 max-md:mt-4 max-md:max-w-full">
                <h1 className="self-stretch text-6xl text-white max-md:max-w-full max-md:text-4xl">
                  Empowering Your Mental Wellness Journey
                </h1>
                <p className="mt-7 text-sm font-medium text-stone-50 w-[439px] max-md:max-w-full">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque eget dapibus ipsum. Praesent a nunc ac lorem fringilla
                  scelerisque.
                </p>
                <button className="gap-2.5 self-stretch p-2.5 mt-9 text-base bg-sky-200 rounded-3xl shadow-[0px_3px_3px_rgba(0,0,0,0.25)] text-sky-950">
                  Get Started
                </button>
              </div>
            </div>
            
            {/* Right side content */}
            <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-4 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/30b66806917c698b1d2850bd38134862bc83096459113e2bb3da3e52c2b033f8?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3"
                  alt="Mental wellness illustration"
                  className="object-contain w-full rounded-2xl aspect-[1.81] max-md:max-w-full"
                />
                <div className="mt-4 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col px-5 pt-3 pb-8 mx-auto w-full text-sm text-white rounded-2xl bg-sky-950 max-md:px-5 max-md:mt-4">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c661e61590511b037bb579fc25a94875924022dc716bc8d330b2149c04dc6926?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3"
                          alt=""
                          className="object-contain gap-0 w-full aspect-[3.68] min-h-[64px]"
                        />
                        <div className="mt-16 max-md:mt-10">
                          <span className="text-white">
                            Countless patients experienced significant
                            improvements{" "}
                          </span>
                          <span className="font-bold text-white">
                            after their very first session
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col px-5 py-4 mx-auto w-full text-sm text-gray-700 bg-sky-200 rounded-2xl max-md:pl-5 max-md:mt-4">
                        <div className="gap-2.5 self-start py-1 pr-3 pl-3 text-xs font-medium whitespace-nowrap bg-blue-300 rounded-2xl min-h-[24px]">
                          About
                        </div>
                        <div className="flex flex-col mt-4">
                          <div className="font-bold">Self-Care Toolkit</div>
                          <div className="mt-2.5">
                            Explore our self-care toolkit designed to help
                            manage anxiety, depression, and stress from the
                            comfort of your home.
                          </div>
                        </div>
                        <button className="gap-2.5 self-center px-3 py-1.5 mt-6 max-w-full font-medium bg-white rounded-2xl border border-white border-solid min-h-[30px] text-sky-950 w-[200px]">
                          Discover Tools
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-44 w-full max-w-[1308px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            <div className="w-[19%] max-md:ml-0 max-md:w-full">
              <StatCard
                value="10x"
                description="Engagement over traditional methods"
                image="https://cdn.builder.io/api/v1/image/assets/TEMP/25fa64272200f3402c6324de3cf74135c66712260861815be0274585b9f4dec6?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3"
              />
            </div>
            
            {/* Center Stats */}
            <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-2.5 max-md:max-w-full">
                <h2 className="self-center text-4xl font-bold text-center w-[537px] max-md:max-w-full">
                  Enhancing Lives through Mental Health Support
                </h2>
                <div className="mt-40 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="w-[38%] max-md:ml-0 max-md:w-full">
                      <StatCard
                        value="20,000+ Customers"
                        description="Empowered individuals nationwide"
                        bgColor="bg-sky-200"
                      />
                    </div>
                    <div className="w-3/12 max-md:ml-0 max-md:w-full">
                      <StatCard
                        value="85%"
                        description="In client mental health outcomes"
                        bgColor="bg-stone-50"
                      />
                    </div>
                    <div className="w-[38%] max-md:ml-0 max-md:w-full">
                      <StatCard
                        value="$614k"
                        description="Healthcare savings in 2 years"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-[19%] max-md:ml-0 max-md:w-full">
              <StatCard
                value="750+ Certified Professionals"
                description="Certificated therapists in + 40 states"
                bgColor="bg-sky-200"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex flex-col mt-44 max-w-full text-center w-[549px] max-md:mt-10">
          <h2 className="text-4xl font-bold max-md:max-w-full">
            Support Tailored for You
          </h2>
          <p className="mt-4 text-base tracking-normal leading-7 text-black max-md:max-w-full">
            Vestibulum ac enim in sem vestibulum luctus. Etiam tincidunt, ligula
            sed fermentum congue, orci est gravida nisi.
          </p>
        </div>
        
        <div className="mt-40 w-full max-w-[1076px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {serviceData.map((service, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-40 text-4xl font-bold text-center w-[748px] max-md:mt-10 max-md:max-w-full">
          Love From Patients Who Treated By ThriveWell Best Services
        </div>
        
        <div className="flex overflow-x-auto gap-10 items-center self-start mt-40 ml-12 font-medium shadow-[1px_1px_2px_rgba(0,0,0,0.25)] text-sky-950 max-md:mt-10 max-md:ml-2.5">
          {testimonialData.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Footer Section */}
        <footer className="flex flex-col items-start px-20 pb-20 mt-80 w-full bg-sky-200 border border-sky-200 border-solid rounded-[50px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex z-10 flex-col justify-center items-start px-12 py-12 mt-0 max-w-full font-bold bg-sky-950 rounded-[50px] w-[750px] max-md:px-5">
            <div className="flex flex-col items-start max-w-full w-[547px]">
              <h2 className="text-4xl text-center text-slate-200 max-md:max-w-full">
                Ready to Begin Your Journey?
              </h2>
              <p className="self-stretch mt-5 text-base tracking-normal leading-loose text-zinc-100 text-opacity-90 max-md:max-w-full">
                Vestibulum ac enim in sem vestibulum luctus. Etiam tincidunt.
              </p>
              <button className="gap-2.5 self-stretch p-2.5 mt-5 text-sm rounded-3xl bg-slate-200 shadow-[0px_3px_3px_rgba(0,0,0,0.25)] text-slate-600">
                Book a Session
              </button>
            </div>
          </div>
          
          <nav className="flex gap-9 items-center mt-20 ml-3 text-base font-semibold tracking-normal leading-loose text-center text-sky-950 max-md:mt-10 max-md:ml-2.5">
            <a href="#home" className="self-stretch my-auto">Home</a>
            <a href="#about" className="self-stretch my-auto">About Us</a>
            <a href="#services" className="self-stretch my-auto">Services</a>
            <a href="#blog" className="self-stretch my-auto">Blog</a>
            <a href="#contact" className="self-stretch my-auto">Contact</a>
          </nav>
          
          <div className="flex gap-4 mt-12 ml-3 max-md:mt-10 max-md:ml-2.5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a3783dfce28647c0bc09e478f0449d47c866771c9638354995eb68f73506172?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3" alt="Social media icon" className="object-contain shrink-0 self-start aspect-[0.51] w-[19px]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ab9e700a5e4493bc58f19fd8b482e723613b2b98c9de7503a2fe357ec1676dcf?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3" alt="Social media icon" className="object-contain shrink-0 my-auto w-9 aspect-[1.09]" />
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/264362b03a1a46ebc64dc057ec0b1f9f07b919ab4a81d4ad36339a75b45f9d89?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3" alt="Social media icon" className="object-contain shrink-0 aspect-square w-[39px]" />
          </div>
          
          <div className="flex flex-wrap gap-5 justify-between self-center mt-9 w-full text-sm tracking-normal text-center text-black max-w-[1299px] max-md:max-w-full">
            <div>© 2024 Company Name. All Rights Reserved</div>
            <div>Term & Conditions Privacy Policy</div>
          </div>
        </footer>
      </div>
    </div>
  );
};