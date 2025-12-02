import React from 'react';

const LogoMarquee: React.FC = () => {
  // Placeholder award texts since we don't have actual logo images
  const awards = [
    "2023 헬스케어 대상",
    "소비자 만족도 1위",
    "혁신 브랜드 대상",
    "글로벌 웰니스 어워드",
    "대한민국 대표 브랜드",
    "고객 감동 경영 대상",
    "프리미엄 브랜드 지수 1위"
  ];

  return (
    <div className="bg-gray-50 py-8 border-y border-gray-100 overflow-hidden relative">
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center space-x-12 px-6">
          {[...awards, ...awards, ...awards].map((award, index) => (
            <div key={index} className="flex items-center space-x-2 opacity-60 grayscale hover:grayscale-0 transition-all duration-300">
              <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-xs font-bold text-gray-500">
                LOGO
              </div>
              <span className="text-lg font-bold text-gray-400 font-serif italic">{award}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default LogoMarquee;
