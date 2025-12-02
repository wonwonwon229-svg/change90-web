import React from 'react';
import { FEATURES, DIFFERENTIATORS } from '../constants';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Why Special */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 text-gray-900">
            체인지90이 <span className="text-emerald-600">특별한 이유</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURES.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 p-8 rounded-2xl hover:bg-emerald-50 transition-colors duration-300 group border border-gray-100">
                <div className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center mb-6 text-xl font-bold text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed word-break-keep">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Team Change90 */}
        <div className="bg-gray-900 text-white rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-16 relative z-10">
            왜 <span className="text-emerald-400">팀 체인지90</span>인가?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 relative z-10">
             {DIFFERENTIATORS.map((item, idx) => (
               <div key={idx} className="flex gap-6">
                 <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                 </div>
                 <div>
                   <h3 className="text-xl font-bold text-emerald-400 mb-2">{item.title}</h3>
                   <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
