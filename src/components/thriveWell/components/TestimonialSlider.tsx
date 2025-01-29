import React, { useState, useEffect, useCallback } from 'react';
import { TestimonialProps, TestimonialSliderProps } from '../types';

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);

  const getSlideItems = useCallback((slideIndex: number): TestimonialProps[] => {
    const startIndex = slideIndex * itemsPerSlide;
    return testimonials.slice(startIndex, startIndex + itemsPerSlide);
  }, [testimonials]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full px-12 max-w-[1400px] mx-auto">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => (
            <div 
              key={slideIndex}
              className="flex-none w-full flex gap-6"
            >
              {getSlideItems(slideIndex).map((testimonial, index) => (
                <div 
                  key={index}
                  className="flex-1 min-w-0"
                >
                  <div className="flex flex-col items-start px-5 pt-5 pb-9 h-full rounded-2xl bg-[linear-gradient(357deg,#C3E7FA_-2.83%,#E3F1F4_83.26%)]">
                    <img
                      loading="lazy"
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="object-contain w-16 aspect-square"
                    />
                    <div className="mt-5 text-lg font-semibold">{testimonial.name}</div>
                    <div className="flex shrink-0 self-stretch mt-12 h-px bg-sky-950 bg-opacity-10" />
                    <div className="self-stretch mt-7 text-sm flex-grow">{testimonial.content}</div>
                    <div className="text-xs mt-4">{testimonial.date}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label="Previous testimonials"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500"
        aria-label="Next testimonials"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="flex justify-center mt-8 gap-3">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            className={`w-3 h-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 ${
              index === currentIndex ? 'bg-sky-950' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial slide ${index + 1}`}
            aria-current={index === currentIndex ? 'true' : 'false'}
          />
        ))}
      </div>
    </div>
  );
};