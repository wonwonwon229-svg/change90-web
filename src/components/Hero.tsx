import React from 'react';
import { HERO_CONTENT } from '../constants';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-white pt-24 pb-12 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 break-keep leading-tight">
          {HERO_CONTENT.headline}
        </h1>
        <p className="text-lg md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed break-keep">
          {HERO_CONTENT.subHeadline}
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
          {HERO_CONTENT.benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-700 font-medium">
              <CheckCircleIcon className="w-6 h-6 text-emerald-500 flex-shrink-0" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button 
            onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 animate-pulse"
          >
            지금 무료 상담 신청하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
