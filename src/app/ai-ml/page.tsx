import React from 'react';
import Link from 'next/link';
import { FaCode, FaServer, FaDatabase, FaMobile, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function AIMLPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Full Stack Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master modern web development with MERN Stack, Java Full Stack, and Data Structures & Algorithms
          </p>
        </div>
        
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCode className="mr-3 text-blue-500" />
            What is Full Stack Development?
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Full Stack Development involves building both the front-end and back-end of web applications. It combines client-side technologies with server-side programming, databases, and system design. With the right skills in MERN Stack, Java Full Stack, and DSA, you can create robust, scalable, and efficient web applications.
          </p>
        </div>

        {/* Core Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaCode className="mr-3 text-blue-500" />
              MERN Stack
            </h3>
            <ul className="space-y-4 text-gray-600 mb-6">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>MongoDB</strong> - NoSQL database for flexible data storage</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Express.js</strong> - Backend framework for Node.js</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>React</strong> - Frontend library for building UIs</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Node.js</strong> - JavaScript runtime environment</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>RESTful APIs</strong> - Building scalable web services</span>
              </li>
            </ul>
            <Link 
              href="/courses/complete-web-development-bootcamp"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaServer className="mr-3 text-blue-500" />
              Java Full Stack
            </h3>
            <ul className="space-y-4 text-gray-600 mb-6">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Spring Boot</strong> - Enterprise Java framework</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Spring MVC</strong> - Web application framework</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Hibernate</strong> - Object-relational mapping</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Microservices</strong> - Distributed architecture</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Frontend Integration</strong> - Angular/React with Java backend</span>
              </li>
            </ul>
            <Link 
              href="/courses/java-full-stack-development"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Applications */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRocket className="mr-3 text-blue-500" />
            Real-World Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">E-commerce Platforms</h4>
              <p className="text-gray-600">Build scalable online shopping experiences with MERN or Java stack</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Enterprise Solutions</h4>
              <p className="text-gray-600">Develop robust business applications with Java Spring Boot</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Social Media Apps</h4>
              <p className="text-gray-600">Create engaging platforms with real-time features</p>
            </div>
          </div>
        </div>

        {/* Essential Skills */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRocket className="mr-3 text-blue-500" />
            Essential Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Data Structures & Algorithms</h4>
              <p className="text-gray-600">Problem-solving, time complexity, and optimization techniques</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Database Design</h4>
              <p className="text-gray-600">SQL, NoSQL, and database optimization</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">System Design</h4>
              <p className="text-gray-600">Architecture patterns and scalable solutions</p>
            </div>
          </div>
        </div>

        {/* Career Paths */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRocket className="mr-3 text-blue-500" />
            Career Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">MERN Stack Developer</h4>
              <p className="text-gray-600">Build modern web applications using JavaScript ecosystem</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Java Full Stack Developer</h4>
              <p className="text-gray-600">Develop enterprise-grade applications with Java technologies</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Software Engineer</h4>
              <p className="text-gray-600">Solve complex problems with strong DSA knowledge</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Technical Lead</h4>
              <p className="text-gray-600">Lead development teams and architect solutions</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Development Journey?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join our comprehensive development program and learn from industry experts. Get hands-on experience with real-world projects and build a portfolio that stands out.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
} 