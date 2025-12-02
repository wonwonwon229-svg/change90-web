import React from 'react';


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-4">
             {/* Use Logo image if available, else text */}
             <div className="text-2xl font-bold text-white tracking-tighter">CHANGE<span className="text-emerald-500">90</span></div>
             <span className="hidden md:inline text-gray-700">|</span>
             <p className="text-sm">웰니스 다이어트 플랫폼</p>
        </div>
        <div className="text-sm text-center md:text-right">
          <p>&copy; 2024 Change90. All rights reserved.</p>
          <p className="mt-1">본 사이트는 포트폴리오 목적으로 제작된 데모 페이지입니다.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
