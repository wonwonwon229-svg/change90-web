import React, { useState } from 'react';
import { PlayCircleIcon } from '@heroicons/react/24/solid';

const VideoSection: React.FC = () => {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const videos = [
    { id: 1, title: "38세 워킹맘의 다이어트 성공기", thumbnail: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop" },
    { id: 2, title: "50대 갱년기 극복 인터뷰", thumbnail: "https://images.unsplash.com/photo-1551847172-c361e3898c74?q=80&w=1000&auto=format&fit=crop" },
    { id: 3, title: "고도비만 탈출 리얼 스토리", thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" }
  ];

  return (
    <section className="py-20 bg-white">
       <div className="container mx-auto px-4">
         <h2 className="text-3xl md:text-5xl font-extrabold text-center mb-4 text-gray-900">
            실제가 아니면 나올 수 없는 <br className="md:hidden" /><span className="text-emerald-600">리얼 후기</span>
         </h2>
         <p className="text-center text-gray-500 mb-12 text-lg">
             고객님들이 직접 전하는 생생한 변화의 이야기를 들어보세요
         </p>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video) => (
                <div key={video.id} className="relative group cursor-pointer rounded-2xl overflow-hidden shadow-lg aspect-video" onClick={() => setActiveVideo(video.id)}>
                    {activeVideo === video.id ? (
                        <div className="w-full h-full bg-black flex items-center justify-center text-white">
                            {/* In a real app, embed YouTube/Vimeo iframe here */}
                            <p>Video Player Loaded (Demo)</p>
                        </div>
                    ) : (
                        <>
                            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-75 group-hover:brightness-90" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <PlayCircleIcon className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all shadow-2xl" />
                            </div>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                                <p className="text-white font-bold truncate">{video.title}</p>
                            </div>
                        </>
                    )}
                </div>
            ))}
         </div>
       </div>
    </section>
  );
};

export default VideoSection;
