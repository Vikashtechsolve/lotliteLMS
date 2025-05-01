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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="animate-fade-in">
                <Link href="/tutorials" className="inline-flex items-center text-amber-300 hover:text-amber-200 mb-8">
                  <FaArrowLeft className="mr-2" /> Back to Tutorials
                </Link>
              </div>
              <div className="max-w-2xl">
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-amber-300">
                  CSS Tutorial
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                  Master CSS from fundamentals to advanced concepts. Learn to create beautiful, responsive, and modern web designs.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-lg">
                    <FaClock className="text-amber-300 mr-2" />
                    <span>06 Weeks</span>
                  </div>
                  <div className="flex items-center text-lg">
                    <FaUserGraduate className="text-amber-300 mr-2" />
                    <span>Beginner to Advanced</span>
                  </div>
                  <div className="flex items-center text-lg">
                    <FaStar className="text-amber-300 mr-2" />
                    <span>4.8/5 Rating</span>
                  </div>
                </div>
                <Link 
                  href="/payment/css"
                  className="inline-block bg-amber-400 text-indigo-900 text-xl font-semibold px-8 py-4 rounded-full hover:bg-amber-300 transition-all duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Right Content - Video */}
            <YouTubeVideo videoId="yfoY53QXEnI" />
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold mb-6 text-indigo-900 animate-fade-in">What You'll Learn</h2>
              <div className="space-y-4 mb-8">
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-1">
                  <FaCode className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">CSS Fundamentals</h3>
                    <p className="text-gray-700">Learn CSS basics including selectors, properties, values, and the box model.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-2">
                  <FaLaptopCode className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Advanced CSS</h3>
                    <p className="text-gray-700">Master Flexbox, Grid, animations, transitions, and responsive design.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-3">
                  <FaDatabase className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">CSS Preprocessors</h3>
                    <p className="text-gray-700">Learn SASS/SCSS, LESS, and modern CSS methodologies.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-4">
                  <FaServer className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">CSS Frameworks</h3>
                    <p className="text-gray-700">Learn Bootstrap, Tailwind CSS, and other popular CSS frameworks.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-indigo-900 animate-fade-in">Course Description</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in-delay-1">
                <p className="text-gray-700 mb-4">
                  This comprehensive CSS course is designed for both beginners and experienced developers. You'll learn everything from basic styling to advanced layout techniques and animations.
                </p>
                <p className="text-gray-700 mb-4">
                  The course includes hands-on projects and real-world applications to help you build a strong foundation in CSS. You'll work on practical exercises, design challenges, and real-world projects that will prepare you for professional web development.
                </p>
                <p className="text-gray-700">
                  By the end of this course, you'll be able to create beautiful, responsive, and modern web designs using CSS.
                </p>
              </div>
            </div>

            {/* Course Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-indigo-900">Start Learning CSS</h3>
                <p className="text-gray-700 mt-2">Comprehensive CSS Styling Course</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Course Duration</span>
                  <span className="font-semibold text-indigo-900">60+ Hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Level</span>
                  <span className="font-semibold text-indigo-900">Beginner to Advanced</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Projects</span>
                  <span className="font-semibold text-indigo-900">8+ Real-world Projects</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Certificate</span>
                  <span className="font-semibold text-indigo-900">Yes</span>
                </div>
                <Link 
                  href="/payment/css"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.05] active:scale-[0.95]"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

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
