"use client";

import Link from 'next/link';
import { FaCheck, FaClock, FaCode, FaGraduationCap, FaLaptopCode, FaMobileAlt, FaProjectDiagram, FaStar, FaUsers } from 'react-icons/fa';

export default function JavaFullStackDevelopment() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Java with Data Structures & Algorithms
              </h1>
              <p className="text-xl mb-8 text-amber-100">
                Master Java programming and Data Structures & Algorithms with our comprehensive course. Build a strong foundation for software development.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-amber-200">
                  <FaClock className="mr-2" />
                  <span>12 Weeks</span>
                </div>
                <div className="flex items-center text-amber-200">
                  <FaUsers className="mr-2" />
                  <span>Beginner to Advanced</span>
                </div>
                <div className="flex items-center text-amber-200">
                  <FaStar className="mr-2" />
                  <span>4.8/5 Rating</span>
                </div>
              </div>
              <Link
                href="/payment/3"
                className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-colors"
              >
                Enroll Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="w-full bg-white/10 backdrop-blur-sm p-2 rounded-xl">
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/grEKMHGYyns"
                    title="Java with DSA Course Introduction"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">Course Overview</h2>
            <p className="text-gray-600 mb-6">
              Our Java with Data Structures & Algorithms course is designed to take you from basic programming concepts to advanced problem-solving skills. You'll learn everything you need to know to become a proficient Java developer and ace technical interviews.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Comprehensive Curriculum</h3>
                  <p className="text-gray-600">Covering Java programming and advanced DSA concepts</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Hands-on Practice</h3>
                  <p className="text-gray-600">Solve real-world problems and coding challenges</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Expert Support</h3>
                  <p className="text-gray-600">Get help from experienced Java developers and mentors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-indigo-900">What You'll Learn</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Core Java Programming</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Object-Oriented Programming</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Data Structures Implementation</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Algorithm Design & Analysis</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Problem Solving Techniques</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Time & Space Complexity</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Interview Preparation</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Project Development</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum */}
      <div className="bg-gradient-to-b from-white to-indigo-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-900">Course Curriculum</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              {/* Module 1 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                  Java Programming Fundamentals
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Introduction to Java</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Variables & Data Types</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Control Structures</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Methods & Functions</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Object-Oriented Programming
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Classes & Objects</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Inheritance & Polymorphism</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Abstraction & Interfaces</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Exception Handling</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 3 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Data Structures
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Arrays & Strings</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Linked Lists</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Stacks & Queues</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Trees & Graphs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 4 */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Algorithms & Problem Solving
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Sorting Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Searching Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Dynamic Programming</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Interview Preparation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose This Course */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-indigo-900">Why Choose This Course?</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full flex items-center justify-center mb-6">
                <FaLaptopCode className="text-2xl text-indigo-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-900">Hands-on Learning</h3>
              <p className="text-gray-600">
                Learn by solving real-world problems and implementing data structures and algorithms in Java. Get practical experience through coding challenges and projects.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full flex items-center justify-center mb-6">
                <FaGraduationCap className="text-2xl text-indigo-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-900">Expert Instructors</h3>
              <p className="text-gray-600">
                Learn from industry professionals with years of experience in Java development and competitive programming. Get insights from real-world problem-solving experts.
              </p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-300 rounded-full flex items-center justify-center mb-6">
                <FaProjectDiagram className="text-2xl text-indigo-900" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-indigo-900">Portfolio Projects</h3>
              <p className="text-gray-600">
                Build a strong portfolio showcasing your problem-solving skills and Java expertise. Complete projects that demonstrate your understanding of DSA concepts.
              </p>
            </div>
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Java Development Journey?</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Join our Java Full Stack Development course and become a proficient enterprise application developer.
          </p>
          <Link
            href="/payment/3"
            className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-colors"
          >
            Enroll Now
          </Link>
=======
      {/* Ready to Start */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Java Development Journey?</h2>
            <p className="text-xl mb-8 text-amber-100">
              Join our comprehensive Java with DSA course and take the first step towards becoming a proficient Java developer.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-colors"
            >
              Enroll Now
            </Link>
          </div>
>>>>>>> 4436e93c2e69fcfb7ae0ce24f6c3b28c50befa1f
        </div>
      </div>
    </div>
  );
} 