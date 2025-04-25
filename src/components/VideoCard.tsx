'use client';

import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

interface VideoCardProps {
  videoSrc?: string;
  imageSrc?: string;
  title: string;
  description: string;
  link: string;
}

export default function VideoCard({ videoSrc, imageSrc, title, description, link }: VideoCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-amber-100 group">
      <div className="w-full h-64 rounded-t-2xl flex items-center justify-center overflow-hidden">
        {videoSrc ? (
          <video 
            src={videoSrc}
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
            ref={(video) => {
              if (video) {
                video.playbackRate = 1.0;
              }
            }}
          />
        ) : imageSrc ? (
          <img 
            src={imageSrc}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : null}
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4 text-indigo-900">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <Link href={link} className="text-purple-600 hover:text-purple-700 font-semibold transition flex items-center justify-center group">
          Learn More 
          <FaArrowRight className="ml-2 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
} 