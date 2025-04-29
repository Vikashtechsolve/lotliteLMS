"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaStar, FaClock, FaUserGraduate, FaPlayCircle, FaCode, FaLaptopCode, FaDatabase, FaMobileAlt, FaServer, FaCertificate, FaJava, FaProjectDiagram, FaTasks, FaGraduationCap, FaChartLine, FaExclamationTriangle } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiGradle } from 'react-icons/si';

// YouTube video component
const YouTubeVideo = ({ videoId }: { videoId: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="w-full">
      <div className="w-full bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
        <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden">
          {error ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-red-50 p-6 rounded-2xl">
              <FaExclamationTriangle className="text-red-500 text-4xl mb-4" />
              <p className="text-red-600 font-medium">Failed to load video</p>
              <p className="text-red-500 text-sm mt-2">{error}</p>
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
                </div>
              )}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl"
                src={embedUrl}
                title="Python Tutorial Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onLoad={() => setIsLoading(false)}
                onError={() => setError("Could not load the video. Please try again later.")}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default function PythonTutorialPage() {
  // Extract video ID from the URL
  const videoId = "_uQrJ0TkZlc"; // This would typically come from your data source

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
                  Python Programming Tutorial
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                  Master Python programming from fundamentals to advanced concepts. Build real-world applications and become a professional Python developer.
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center text-lg">
                    <FaClock className="text-amber-300 mr-2" />
                    <span>08 Weeks</span>
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
                  href="/payment/python"
                  className="inline-block bg-amber-400 text-indigo-900 text-xl font-semibold px-8 py-4 rounded-full hover:bg-amber-300 transition-all duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Right Content - Video */}
            <YouTubeVideo videoId={videoId} />
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
                    <h3 className="font-semibold text-lg text-gray-800">Python Fundamentals</h3>
                    <p className="text-gray-700">Master Python syntax, data types, control structures, functions, and basic programming concepts.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-2">
                  <FaLaptopCode className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Object-Oriented Programming</h3>
                    <p className="text-gray-700">Learn classes, objects, inheritance, polymorphism, and encapsulation in Python.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-3">
                  <FaDatabase className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Data Structures & Algorithms</h3>
                    <p className="text-gray-700">Master Python's built-in data structures, NumPy arrays, and implement common algorithms.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-4">
                  <FaServer className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Advanced Python Concepts</h3>
                    <p className="text-gray-700">Explore decorators, generators, context managers, async/await, and functional programming in Python.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-indigo-900 animate-fade-in">Course Description</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in-delay-1">
                <p className="text-gray-700 mb-4">
                  This comprehensive Python course is designed for both beginners and experienced programmers. You'll learn everything from basic syntax to advanced concepts like multithreading and database connectivity.
                </p>
                <p className="text-gray-700 mb-4">
                  The course includes hands-on projects and real-world applications to help you build a strong foundation in Python programming. You'll work on practical exercises, coding challenges, and real-world projects that will prepare you for professional Python development.
                </p>
                <p className="text-gray-700">
                  By the end of this course, you'll be able to build robust Python applications, understand design patterns, and be ready to tackle real-world programming challenges.
                </p>
              </div>
            </div>

            {/* Course Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-indigo-900">Start Learning Python</h3>
                <p className="text-gray-700 mt-2">Comprehensive Python Programming Course</p>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Course Duration</span>
                  <span className="font-semibold text-indigo-900">80+ Hours</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Level</span>
                  <span className="font-semibold text-indigo-900">Beginner to Advanced</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Projects</span>
                  <span className="font-semibold text-indigo-900">10+ Real-world Projects</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-indigo-50 rounded-lg hover:scale-[1.02] transition-all duration-300">
                  <span className="text-gray-700">Certificate</span>
                  <span className="font-semibold text-indigo-900">Yes</span>
                </div>
                <Link 
                  href="/payment/python"
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
              <FaCode className="text-4xl mx-auto text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-800">Django</h3>
              <p className="text-sm text-gray-700">Web framework</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-2">
              <FaCode className="text-4xl mx-auto text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-800">Flask</h3>
              <p className="text-sm text-gray-700">Web framework</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-3">
              <FaDatabase className="text-4xl mx-auto text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-800">NumPy</h3>
              <p className="text-sm text-gray-700">Scientific computing</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-4">
              <FaChartLine className="text-4xl mx-auto text-purple-600 mb-3" />
              <h3 className="font-semibold text-gray-800">Pandas</h3>
              <p className="text-sm text-gray-700">Data analysis</p>
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
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Python Developer</h3>
              <p className="text-gray-700">Build web applications and backend systems using Python</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-2">
              <FaChartLine className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Data Scientist</h3>
              <p className="text-gray-700">Analyze data and build machine learning models</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-3">
              <FaServer className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Backend Developer</h3>
              <p className="text-gray-700">Develop APIs and server-side applications</p>
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
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Web Application</h3>
              <p className="text-gray-700 mb-4">Build a full-stack web application using Django or Flask.</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>User authentication and authorization</li>
                <li>RESTful API development</li>
                <li>Database integration</li>
                <li>Frontend-backend communication</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2">
              <FaTasks className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Data Analysis Project</h3>
              <p className="text-gray-700 mb-4">Create a data analysis tool using Python's data science stack.</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Data cleaning with Pandas</li>
                <li>Statistical analysis with NumPy</li>
                <li>Data visualization with Matplotlib</li>
                <li>Machine learning with scikit-learn</li>
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
              <FaGraduationCap className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Basic Programming</h3>
              <p className="text-gray-700">Understanding of basic programming concepts like variables, loops, and functions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2">
              <FaCode className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Computer Fundamentals</h3>
              <p className="text-gray-700">Basic knowledge of computer operations and file systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-3">
              <FaGraduationCap className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Problem Solving</h3>
              <p className="text-gray-700">Logical thinking and problem-solving skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 animate-fade-in">Course Content</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {/* Module 1 */}
              <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-1">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Module 1: Python Fundamentals</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Introduction to Python and its ecosystem</li>
                  <li>Setting up Python Development Environment</li>
                  <li>Basic syntax and data types</li>
                  <li>Operators and expressions</li>
                  <li>Control flow statements</li>
                  <li>Arrays and strings</li>
                </ul>
              </div>

              {/* Module 2 */}
              <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Module 2: Object-Oriented Programming</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Classes and objects</li>
                  <li>Inheritance and polymorphism</li>
                  <li>Encapsulation and abstraction</li>
                  <li>Interfaces and abstract classes</li>
                  <li>Exception handling</li>
                  <li>Packages and access modifiers</li>
                </ul>
              </div>

              {/* Module 3 */}
              <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-3">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Module 3: Data Structures & Algorithms</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Python's built-in data structures</li>
                  <li>NumPy arrays and their usage</li>
                  <li>Implementing common algorithms</li>
                  <li>Data analysis with Pandas</li>
                  <li>Machine learning with scikit-learn</li>
                </ul>
              </div>

              {/* Module 4 */}
              <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-4">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Module 4: Advanced Python Concepts</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Decorators and generators</li>
                  <li>Context managers and async/await</li>
                  <li>Functional programming</li>
                  <li>Data visualization with Matplotlib</li>
                  <li>Statistical analysis with NumPy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Includes */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-indigo-900 animate-fade-in">This Course Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FaPlayCircle className="text-indigo-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">80+ Hours of Video</h3>
              </div>
              <p className="text-gray-700">Comprehensive video lectures covering all aspects of Python programming</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FaCode className="text-indigo-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Coding Exercises</h3>
              </div>
              <p className="text-gray-700">Hands-on coding exercises and challenges to practice your skills</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-3">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FaProjectDiagram className="text-indigo-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Real Projects</h3>
              </div>
              <p className="text-gray-700">Build real-world applications and projects to showcase your skills</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-4">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FaCertificate className="text-indigo-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Certificate</h3>
              </div>
              <p className="text-gray-700">Get a certificate of completion to showcase your achievement</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-1">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FaUserGraduate className="text-indigo-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Lifetime Access</h3>
              </div>
              <p className="text-gray-700">Access to all course materials and future updates</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FaTasks className="text-indigo-600 text-xl" />
                </div>
                <h3 className="font-semibold text-lg text-gray-800">Quizzes & Assignments</h3>
              </div>
              <p className="text-gray-700">Regular quizzes and assignments to test your knowledge</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 