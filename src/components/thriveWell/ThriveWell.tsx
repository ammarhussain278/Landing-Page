import React from 'react';
import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { TestimonialSlider } from './components/TestimonialSlider.tsx';
// import { ServiceCard } from './components/ServiceCard.tsx';
import { ServicesSection } from './components/ServiceSection.tsx';
import { StatCard } from './components/StatCard.tsx';
import { ArticleCard } from './components/ArticleCard.tsx';
import { Footer } from './components/Footer.tsx';
import { MentalHealthSection } from './components/MentalHealthSection.tsx';
import { testimonialData } from './Testimonials.ts';
import { serviceData } from './Services.ts';
import { articles } from './articles.ts';
import { navItems, socialLinks } from './navigation.ts';
import { mentalHealthData } from './mentalHealth.ts';

export const ThriveWell: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col pt-9 bg-white ">
      <Navigation items={navItems} />
      
      <Hero
        title="Empowering Your Mental Wellness Journey"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget dapibus ipsum. Praesent a nunc ac lorem fringilla scelerisque."
        ctaText="Get Started"
      />

      <section className="mt-44 w-full max-w-[1308px] max-md:mt-10 max-md:max-w-full mx-auto">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[19%] max-md:ml-0 max-md:w-full">
            <StatCard 
              value="10x"
              description="Engagement over traditional methods"
              image="https://cdn.builder.io/api/v1/image/assets/TEMP/25fa64272200f3402c6324de3cf74135c66712260861815be0274585b9f4dec6?placeholderIfAbsent=true&apiKey=a6a95620f5d9488a9a237a326a1aaba3"
            />
          </div>
          
          <div className="flex flex-col ml-5 w-[61%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col w-full max-md:mt-2.5 max-md:max-w-full">
              <h2 className="self-center text-4xl font-bold text-center w-[537px] max-md:max-w-full">
                Enhancing Lives through Mental Health Support
              </h2>
              <div className="mt-40 max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col">
                  <StatCard 
                    value="20,000+"
                    description="Empowered individuals nationwide"
                    bgColor="bg-sky-200"
                  />
                  <StatCard 
                    value="85%"
                    description="In client mental health outcomes"
                    bgColor="bg-stone-50"
                  />
                  <StatCard 
                    value="$614k"
                    description="Healthcare savings in 2 years"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col ml-5 w-[19%] max-md:ml-0 max-md:w-full">
            <StatCard 
              value="750+"
              description="Certificated therapists in + 40 states"
              bgColor="bg-sky-200"
            />
          </div>
        </div>
      </section>
      <MentalHealthSection {...mentalHealthData} />

      <section className="mt-40 w-full max-w-[1076px] max-md:mt-10 max-md:max-w-full mx-auto">
        <div className="flex gap-5 max-md:flex-col">
        <ServicesSection
        title="Support Tailored for You"
        subtitle="Expert mental health services designed to meet your unique needs and help you thrive."
        services={serviceData}
      />
        </div>
      </section>

    <section className="mt-40 max-w-[1400px] mx-auto px-4 max-md:mt-10">
      <h2 className="text-4xl font-bold text-center mb-16 max-w-[748px] mx-auto">
        Love From Patients Who Treated By ThriveWell Best Services
      </h2>
      <TestimonialSlider testimonials={testimonialData} />
    </section>

      <section className="mt-56 w-full max-w-[1078px] max-md:mt-10 max-md:max-w-full mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Read Our Latest Articles</h2>
        {articles.map((article, index) => (
          <div key={index} className="mb-10">
            <ArticleCard {...article} />
          </div>
        ))}
      </section>

      <Footer navItems={navItems} socialLinks={socialLinks} />
    </div>
  );
};