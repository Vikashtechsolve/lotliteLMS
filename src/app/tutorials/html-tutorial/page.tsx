"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaStar, FaClock, FaUserGraduate, FaPlayCircle, FaCode, FaLaptopCode, FaDatabase, FaMobileAlt, FaServer, FaCertificate, FaProjectDiagram, FaTasks, FaGraduationCap, FaHtml5, FaCss3, FaJs, FaBootstrap } from 'react-icons/fa';

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
              <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-orange-400"></div>
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
              title="HTML Tutorial Introduction"
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

export default function HTMLTutorialPage() {
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
                  HTML Tutorial
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                  Master HTML from fundamentals to advanced concepts. Learn to create structured, semantic, and accessible web pages.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-lg">
                    <FaClock className="text-amber-300 mr-2" />
                    <span>04 Weeks</span>
                  </div>
                  <div className="flex items-center text-lg">
                    <FaUserGraduate className="text-amber-300 mr-2" />
                    <span>Beginner to Advanced</span>
                  </div>
                  <div className="flex items-center text-lg">
                    <FaStar className="text-amber-300 mr-2" />
                    <span>4.9/5 Rating</span>
                  </div>
                </div>
                <Link 
                  href="/enroll"
                  className="inline-block bg-amber-400 text-indigo-900 text-xl font-semibold px-8 py-4 rounded-full hover:bg-amber-300 transition-all duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Right Content - Video */}
            <YouTubeVideo videoId="qz0aGYrrlhU" />
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
                    <h3 className="font-semibold text-lg text-gray-800">HTML Fundamentals</h3>
                    <p className="text-gray-700">Learn HTML basics including tags, attributes, and document structure.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-2">
                  <FaLaptopCode className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Semantic HTML</h3>
                    <p className="text-gray-700">Master semantic elements, accessibility, and best practices.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-3">
                  <FaDatabase className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Forms and Input</h3>
                    <p className="text-gray-700">Learn to create interactive forms and handle user input.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-4">
                  <FaServer className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Advanced HTML</h3>
                    <p className="text-gray-700">Explore multimedia elements, APIs, and modern HTML features.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-indigo-900 animate-fade-in">Course Description</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in-delay-1">
                <p className="text-gray-700 mb-4">
                  This comprehensive HTML course is designed for both beginners and experienced developers. You'll learn everything from basic tags to advanced semantic elements and accessibility features.
                </p>
                <p className="text-gray-700 mb-4">
                  The course includes hands-on projects and real-world applications to help you build a strong foundation in HTML. You'll work on practical exercises, design challenges, and real-world projects that will prepare you for professional web development.
                </p>
                <p className="text-gray-700">
                  By the end of this course, you'll be able to create well-structured, semantic, and accessible web pages using HTML.
                </p>
              </div>
            </div>

            {/* Course Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-indigo-900">Start Learning HTML</h3>
                <p className="text-gray-700 mt-2">Comprehensive HTML Markup Course</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Course Duration</span>
                  <span className="font-semibold text-indigo-900">40+ Hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Level</span>
                  <span className="font-semibold text-indigo-900">Beginner to Advanced</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Projects</span>
                  <span className="font-semibold text-indigo-900">6+ Real-world Projects</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Certificate</span>
                  <span className="font-semibold text-indigo-900">Yes</span>
                </div>
                <Link 
                  href="/login"
                  className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.05] active:scale-[0.95]"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 animate-fade-in">Technologies You'll Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-1">
              <FaHtml5 className="text-4xl mx-auto text-indigo-500 mb-3" />
              <h3 className="font-semibold text-gray-800">HTML5</h3>
              <p className="text-sm text-gray-700">Markup Language</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-2">
              <FaCss3 className="text-4xl mx-auto text-purple-500 mb-3" />
              <h3 className="font-semibold text-gray-800">CSS3</h3>
              <p className="text-sm text-gray-700">Styling</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-3">
              <FaJs className="text-4xl mx-auto text-yellow-500 mb-3" />
              <h3 className="font-semibold text-gray-800">JavaScript</h3>
              <p className="text-sm text-gray-700">Interactivity</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-4">
              <FaBootstrap className="text-4xl mx-auto text-purple-500 mb-3" />
              <h3 className="font-semibold text-gray-800">Bootstrap</h3>
              <p className="text-sm text-gray-700">Framework</p>
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 animate-fade-in">Career Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-1">
              <FaCode className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Frontend Developer</h3>
              <p className="text-gray-700">Create structured and semantic web pages</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-2">
              <FaMobileAlt className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Web Developer</h3>
              <p className="text-gray-700">Build responsive and accessible websites</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-3">
              <FaServer className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">UI Developer</h3>
              <p className="text-gray-700">Design and implement user interfaces</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 animate-fade-in">Course Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-1">
              <FaProjectDiagram className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Personal Portfolio</h3>
              <p className="text-gray-700 mb-4">Build a responsive portfolio website using semantic HTML.</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Semantic HTML structure</li>
                <li>Accessibility features</li>
                <li>Responsive design</li>
                <li>Contact form</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2">
              <FaTasks className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">E-commerce Landing Page</h3>
              <p className="text-gray-700 mb-4">Create a product landing page with modern HTML features.</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Product showcase</li>
                <li>Interactive elements</li>
                <li>Multimedia content</li>
                <li>Form validation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Prerequisites */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 animate-fade-in">Prerequisites</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-1">
              <FaCode className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Basic Computer Skills</h3>
              <p className="text-gray-700">Familiarity with using a computer and text editor</p>
            </div>
           {/* <div className="bg-white p-6 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2">
              <FaGraduationCap className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">No Prior Experience</h3>
              <p className="text-gray-700">Perfect for beginners starting their web development journey</p>
            </div>*/}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-3">
              <FaPlayCircle className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Eagerness to Learn</h3>
              <p className="text-gray-700">Willingness to practice and build projects</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
