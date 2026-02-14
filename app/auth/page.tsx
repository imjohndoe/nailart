// app/auth/page.tsx
"use client";

import React from 'react';
import Link from 'next/link'; // next/link 임포트
import { AntiGravityCanvas } from '../../components/main/hero';

const AuthPage: React.FC = () => {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden selection:bg-blue-500 selection:text-white font-titan-one">
      <AntiGravityCanvas />
      
      {/* "← Back" 링크 추가 */}
      <Link href="/" className="absolute top-6 left-6 z-20 flex items-center text-white/70 hover:text-white transition-colors text-lg font-medium pointer-events-auto">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5 mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        <span>Back</span>
      </Link>

      {/* 여기에 다른 AuthPage 콘텐츠를 추가할 수 있습니다 */}
    </div>
  );
};

export default AuthPage;
