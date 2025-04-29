"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaStar, FaClock, FaUserGraduate, FaPlayCircle, FaCode, FaLaptopCode, FaDatabase, FaMobileAlt, FaServer, FaCertificate, FaProjectDiagram, FaTasks, FaGraduationCap, FaHtml5, FaCss3, FaSass, FaBootstrap, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full">
      <div className="w-full bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
        <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-amber-400"></div>
            </div>
          )}
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900 text-white p-4">
              <p className="text-center">Failed to load video. Please try again later.</p>
            </div>
          ) : (
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl"
              src={embedUrl}
              title="CSS Tutorial Introduction"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setError("Failed to load video");
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default function CSSTutorialPage() {
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(false);
  const [isSelectorsOpen, setIsSelectorsOpen] = useState(false);
  const [isBoxModelOpen, setIsBoxModelOpen] = useState(false);
  const [isLayoutOpen, setIsLayoutOpen] = useState(false);
  const [isResponsiveOpen, setIsResponsiveOpen] = useState(false);
  const [isAnimationsOpen, setIsAnimationsOpen] = useState(false);
  const [isPreprocessorsOpen, setIsPreprocessorsOpen] = useState(false);
  const [isFrameworksOpen, setIsFrameworksOpen] = useState(false);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaCss3 className="text-4xl text-blue-500" />
              <h1 className="text-2xl font-bold text-gray-900">CSS Tutorial</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/tutorials" className="text-gray-600 hover:text-gray-900">
                <FaArrowRight className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsIntroductionOpen(!isIntroductionOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>Introduction</span>
                    {isIntroductionOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isIntroductionOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#css-intro" className="block text-gray-600 hover:text-blue-500">
                        What is CSS?
                      </Link>
                      <Link href="#css-syntax" className="block text-gray-600 hover:text-blue-500">
                        CSS Syntax
                      </Link>
                      <Link href="#css-inclusion" className="block text-gray-600 hover:text-blue-500">
                        CSS Inclusion
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsSelectorsOpen(!isSelectorsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>CSS Selectors</span>
                    {isSelectorsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isSelectorsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#element-selector" className="block text-gray-600 hover:text-blue-500">
                        Element Selector
                      </Link>
                      <Link href="#class-selector" className="block text-gray-600 hover:text-blue-500">
                        Class Selector
                      </Link>
                      <Link href="#id-selector" className="block text-gray-600 hover:text-blue-500">
                        ID Selector
                      </Link>
                      <Link href="#attribute-selector" className="block text-gray-600 hover:text-blue-500">
                        Attribute Selector
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsBoxModelOpen(!isBoxModelOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>Box Model</span>
                    {isBoxModelOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isBoxModelOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#margin" className="block text-gray-600 hover:text-blue-500">
                        Margin
                      </Link>
                      <Link href="#padding" className="block text-gray-600 hover:text-blue-500">
                        Padding
                      </Link>
                      <Link href="#border" className="block text-gray-600 hover:text-blue-500">
                        Border
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsLayoutOpen(!isLayoutOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>Layout</span>
                    {isLayoutOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isLayoutOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#display" className="block text-gray-600 hover:text-blue-500">
                        Display
                      </Link>
                      <Link href="#position" className="block text-gray-600 hover:text-blue-500">
                        Position
                      </Link>
                      <Link href="#float" className="block text-gray-600 hover:text-blue-500">
                        Float
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsResponsiveOpen(!isResponsiveOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>Responsive Design</span>
                    {isResponsiveOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isResponsiveOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#media-queries" className="block text-gray-600 hover:text-blue-500">
                        Media Queries
                      </Link>
                      <Link href="#flexbox" className="block text-gray-600 hover:text-blue-500">
                        Flexbox
                      </Link>
                      <Link href="#grid" className="block text-gray-600 hover:text-blue-500">
                        Grid
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsAnimationsOpen(!isAnimationsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>Animations</span>
                    {isAnimationsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isAnimationsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#transitions" className="block text-gray-600 hover:text-blue-500">
                        Transitions
                      </Link>
                      <Link href="#keyframes" className="block text-gray-600 hover:text-blue-500">
                        Keyframes
                      </Link>
                      <Link href="#transforms" className="block text-gray-600 hover:text-blue-500">
                        Transforms
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsPreprocessorsOpen(!isPreprocessorsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>Preprocessors</span>
                    {isPreprocessorsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isPreprocessorsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#sass" className="block text-gray-600 hover:text-blue-500">
                        SASS/SCSS
                      </Link>
                      <Link href="#less" className="block text-gray-600 hover:text-blue-500">
                        LESS
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsFrameworksOpen(!isFrameworksOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>Frameworks</span>
                    {isFrameworksOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isFrameworksOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#bootstrap" className="block text-gray-600 hover:text-blue-500">
                        Bootstrap
                      </Link>
                      <Link href="#tailwind" className="block text-gray-600 hover:text-blue-500">
                        Tailwind CSS
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-blue-500"
                  >
                    <span>Advanced Topics</span>
                    {isAdvancedOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isAdvancedOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#variables" className="block text-gray-600 hover:text-blue-500">
                        CSS Variables
                      </Link>
                      <Link href="#custom-properties" className="block text-gray-600 hover:text-blue-500">
                        Custom Properties
                      </Link>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction to CSS</h2>
              <p className="text-gray-700 mb-4">
                CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in HTML. CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.
              </p>
              <p className="text-gray-700 mb-4">
                This tutorial will teach you CSS from basic to advanced. You'll learn everything from basic styling to advanced layout techniques and animations.
              </p>
              <p className="text-gray-700">
                By the end of this tutorial, you'll be able to create beautiful, responsive, and modern web designs using CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
