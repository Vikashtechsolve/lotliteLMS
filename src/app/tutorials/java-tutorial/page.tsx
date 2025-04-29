"use client";

import React from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaStar, FaClock, FaUserGraduate, FaPlayCircle, FaCode, FaLaptopCode, FaDatabase, FaMobileAlt, FaServer, FaCertificate, FaJava, FaProjectDiagram, FaTasks, FaGraduationCap } from 'react-icons/fa';
import { SiSpring, SiHibernate, SiGradle } from 'react-icons/si';

export default function JavaTutorialPage() {
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
                  Java Programming Tutorial
                </h1>
                <p className="text-xl md:text-2xl text-gray-100 mb-8 leading-relaxed">
                  Master Java programming from fundamentals to advanced concepts. Build real-world applications and become a professional Java developer.
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
                  href="/payment/java"
                  className="inline-block bg-amber-400 text-indigo-900 text-xl font-semibold px-8 py-4 rounded-full hover:bg-amber-300 transition-all duration-300"
                >
                  Enroll Now
                </Link>
              </div>
            </div>

            {/* Right Content - Video */}
            <div className="w-full">
              <div className="w-full bg-white/5 backdrop-blur-sm p-10 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="relative pb-[56.25%] h-0 rounded-2xl overflow-hidden">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-2xl"
                    src="https://www.youtube.com/embed/eIrMbAQSU34"
                    title="Java Tutorial Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
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
                    <h3 className="font-semibold text-lg text-gray-800">Java Fundamentals</h3>
                    <p className="text-gray-700">Master the basics of Java programming language, syntax, and core concepts including variables, data types, operators, and control flow.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-2">
                  <FaLaptopCode className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Object-Oriented Programming</h3>
                    <p className="text-gray-700">Deep dive into OOP concepts including classes, objects, inheritance, polymorphism, encapsulation, and abstraction.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-3">
                  <FaDatabase className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Data Structures & Algorithms</h3>
                    <p className="text-gray-700">Learn essential data structures (arrays, lists, maps) and algorithms (sorting, searching) with practical implementations.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-in-delay-4">
                  <FaServer className="text-indigo-600 mt-1 mr-3 text-xl" />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-800">Advanced Java Concepts</h3>
                    <p className="text-gray-700">Explore generics, collections, multithreading, streams, lambda expressions, and functional programming.</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-indigo-900 animate-fade-in">Course Description</h2>
              <div className="bg-white p-6 rounded-lg shadow-sm animate-fade-in-delay-1">
                <p className="text-gray-700 mb-4">
                  This comprehensive Java course is designed for both beginners and experienced programmers. You'll learn everything from basic syntax to advanced concepts like multithreading and database connectivity.
                </p>
                <p className="text-gray-700 mb-4">
                  The course includes hands-on projects and real-world applications to help you build a strong foundation in Java programming. You'll work on practical exercises, coding challenges, and real-world projects that will prepare you for professional Java development.
                </p>
                <p className="text-gray-700">
                  By the end of this course, you'll be able to build robust Java applications, understand design patterns, and be ready to tackle real-world programming challenges.
                </p>
              </div>
            </div>

            {/* Course Card */}
            <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-6 animate-fade-in">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-indigo-900">Start Learning Java</h3>
                <p className="text-gray-700 mt-2">Comprehensive Java Programming Course</p>
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
                  href="/payment/java"
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
              <SiSpring className="text-4xl mx-auto text-green-600 mb-3" />
              <h3 className="font-semibold text-gray-800">Spring Framework</h3>
              <p className="text-sm text-gray-700">Enterprise Java development</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-2">
              <SiHibernate className="text-4xl mx-auto text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-800">Hibernate</h3>
              <p className="text-sm text-gray-700">Object-relational mapping</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-3">
              <FaCode className="text-4xl mx-auto text-red-600 mb-3" />
              <h3 className="font-semibold text-gray-800">Maven</h3>
              <p className="text-sm text-gray-700">Build automation</p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-4">
              <SiGradle className="text-4xl mx-auto text-blue-600 mb-3" />
              <h3 className="font-semibold text-gray-800">Gradle</h3>
              <p className="text-sm text-gray-700">Build automation</p>
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
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Java Developer</h3>
              <p className="text-gray-700">Build enterprise applications and backend systems</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-2">
              <FaMobileAlt className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Android Developer</h3>
              <p className="text-gray-700">Create mobile applications using Java</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.05] animate-fade-in-delay-3">
              <FaServer className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Backend Developer</h3>
              <p className="text-gray-700">Develop server-side applications and APIs</p>
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
              <h3 className="font-semibold text-lg mb-2 text-gray-800">E-commerce System</h3>
              <p className="text-gray-700 mb-4">Build a complete e-commerce platform with user authentication, product management, and payment processing.</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>User authentication and authorization</li>
                <li>Product catalog management</li>
                <li>Shopping cart functionality</li>
                <li>Payment integration</li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2">
              <FaTasks className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Task Management App</h3>
              <p className="text-gray-700 mb-4">Create a task management application with real-time updates and team collaboration features.</p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Task creation and assignment</li>
                <li>Real-time updates</li>
                <li>Team collaboration</li>
                <li>Progress tracking</li>
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
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Basic Programming Knowledge</h3>
              <p className="text-gray-700">Understanding of basic programming concepts is helpful but not required.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-2">
              <FaJava className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Java Development Kit (JDK)</h3>
              <p className="text-gray-700">Install JDK on your computer to start coding in Java.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-3">
              <FaLaptopCode className="text-2xl text-indigo-600 mb-4" />
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Development Environment</h3>
              <p className="text-gray-700">A code editor or IDE (like IntelliJ IDEA or Eclipse) is recommended.</p>
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
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Module 1: Java Fundamentals</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Introduction to Java and its ecosystem</li>
                  <li>Setting up Java Development Environment</li>
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
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Module 3: Advanced Java Concepts</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Generics and collections</li>
                  <li>Multithreading and concurrency</li>
                  <li>Streams and lambda expressions</li>
                  <li>File I/O and serialization</li>
                  <li>Networking basics</li>
                  <li>Java 8+ features</li>
                </ul>
              </div>

              {/* Module 4 */}
              <div className="bg-indigo-50 p-6 rounded-lg hover:scale-[1.02] transition-all duration-300 animate-fade-in-delay-4">
                <h3 className="font-semibold text-lg mb-4 text-gray-800">Module 4: Enterprise Java Development</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Spring Framework basics</li>
                  <li>Spring Boot and REST APIs</li>
                  <li>Database connectivity with JDBC</li>
                  <li>Hibernate ORM</li>
                  <li>Maven and Gradle build tools</li>
                  <li>Testing with JUnit</li>
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
              <p className="text-gray-700">Comprehensive video lectures covering all aspects of Java programming</p>
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