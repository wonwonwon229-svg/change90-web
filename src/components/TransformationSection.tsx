import React from 'react';
import { REVIEWS } from '../constants';
import { StarIcon } from '@heroicons/react/24/solid';

const TestimonialMarquee: React.FC = () => {
  return (
    <div className="bg-emerald-900 py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          2,000명 이상의 고객이 만족했습니다
        </h2>
        <div className="flex justify-center text-yellow-400 gap-1 mb-8">
            {[1,2,3,4,5].map(i => <StarIcon key={i} className="w-6 h-6" />)}
        </div>
      </div>

      <div className="relative w-full">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-12 md:w-32 h-full bg-gradient-to-r from-emerald-900 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-12 md:w-32 h-full bg-gradient-to-l from-emerald-900 to-transparent z-10"></div>

        <div className="flex w-full whitespace-nowrap">
            <div className="animate-marquee-slow flex gap-6 px-4">
                {[...REVIEWS, ...REVIEWS, ...REVIEWS].map((review, idx) => (
                    <div key={idx} className="w-80 md:w-96 bg-white rounded-xl p-6 shadow-lg whitespace-normal flex-shrink-0">
                        <div className="flex gap-1 text-yellow-400 mb-3">
                             {[...Array(review.rating)].map((_, i) => <StarIcon key={i} className="w-4 h-4" />)}
                        </div>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">"{review.content}"</p>
                        <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                            <div>
                                <p className="font-bold text-gray-900">{review.name}</p>
                                <p className="text-xs text-gray-500">{review.role}</p>
                            </div>
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                                <img src={`https://i.pravatar.cc/150?u=${idx}`} alt={review.name} className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
       <style>{`
        .animate-marquee-slow {
          animation: marquee 40s linear infinite;
        }
        /* Mobile speed adj */
        @media (max-width: 768px) {
            .animate-marquee-slow {
                animation: marquee 20s linear infinite;
            }
        }
      `}</style>
    </div>
  );
};

export default TestimonialMarquee;
