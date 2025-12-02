import React from 'react';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import TransformationSection from './components/TransformationSection';
import VideoSection from './components/VideoSection';
import Features from './components/Features';
import TestimonialMarquee from './components/TestimonialMarquee';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { IMAGES } from './constants';

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-900 antialiased selection:bg-emerald-200 selection:text-emerald-900">
      {/* Header/Nav */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
           {/* Logo */}
           <div className="flex items-center gap-2">
             <img src={IMAGES.LOGO} alt="Change90" className="h-8 md:h-10 object-contain" />
           </div>
           
           <button 
             onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
             className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm md:text-base font-bold py-2 px-6 rounded-full transition-colors"
           >
             무료 상담
           </button>
        </div>
      </nav>

      <main>
        <Hero />
        <LogoMarquee />
        <TransformationSection />
        <VideoSection />
        <Features />
        <TestimonialMarquee />
        <FAQ />

        {/* Consultation Section (CTA Anchor) */}
        <section id="consultation" className="py-24 bg-emerald-600 text-white text-center px-4">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-extrabold mb-6">90일의 기적, <br/>당신의 이야기가 됩니다.</h2>
                <p className="text-lg md:text-xl opacity-90 mb-10">
                    지금 무료 상담을 신청하고, <br/>
                    인생의 마지막 다이어트를 시작하세요.
                </p>
                <form className="bg-white rounded-3xl p-8 shadow-2xl text-left space-y-4 text-gray-900">
                    <div>
                        <label className="block text-sm font-bold mb-1 text-gray-700">이름</label>
                        <input type="text" placeholder="홍길동" className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
                    </div>
                    <div>
                        <label className="block text-sm font-bold mb-1 text-gray-700">연락처</label>
                        <input type="tel" placeholder="010-1234-5678" className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all" />
                    </div>
                    <button type="button" className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl text-lg mt-4 transition-all">
                        무료 상담 신청하기
                    </button>
                    <p className="text-xs text-gray-400 text-center mt-4">
                        * 개인정보는 상담 목적으로만 활용되며 안전하게 보호됩니다.
                    </p>
                </form>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
