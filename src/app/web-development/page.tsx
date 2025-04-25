import React from 'react';
import Link from 'next/link';
import { FaCode, FaServer, FaDatabase, FaMobile, FaRocket, FaCheckCircle } from 'react-icons/fa';

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Web Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the art of creating modern, responsive, and powerful web applications
          </p>
        </div>
        
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCode className="mr-3 text-blue-500" />
            What is Web Development?
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Web development is the process of building and maintaining websites. It involves a combination of front-end development (what users see) and back-end development (server-side functionality). In today's digital world, web development skills are highly sought after, offering numerous career opportunities and the ability to bring creative ideas to life.
          </p>
        </div>

        {/* Development Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaCode className="mr-3 text-blue-500" />
              Front-End Development
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>HTML</strong> - Structure of web pages</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>CSS</strong> - Styling and layout</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>JavaScript</strong> - Interactive functionality</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>React, Vue, Angular</strong> - Modern frameworks</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Responsive design</strong> - Mobile-first approach</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaServer className="mr-3 text-blue-500" />
              Back-End Development
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Server-side programming</strong> - Node.js, Python, PHP</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Databases</strong> - SQL, MongoDB, PostgreSQL</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>API development</strong> - RESTful, GraphQL</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Security</strong> - Authentication, encryption</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Performance</strong> - Optimization, caching</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Additional Information */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRocket className="mr-3 text-blue-500" />
            Why Learn Web Development?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">High Demand</h4>
              <p className="text-gray-600">Web developers are in high demand across industries with competitive salaries and remote work opportunities.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Creative Freedom</h4>
              <p className="text-gray-600">Express your creativity by building unique websites and applications that solve real-world problems.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Continuous Learning</h4>
              <p className="text-gray-600">The field is constantly evolving, offering endless opportunities to learn new technologies and skills.</p>
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
              <h4 className="font-bold text-xl text-gray-800 mb-3">Technical Skills</h4>
              <p className="text-gray-600">Programming languages, frameworks, version control, and development tools</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Problem Solving</h4>
              <p className="text-gray-600">Debugging, analytical thinking, and finding efficient solutions to complex challenges</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Communication</h4>
              <p className="text-gray-600">Team collaboration, client interaction, and the ability to explain technical concepts clearly</p>
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
              <h4 className="font-bold text-xl text-gray-800 mb-3">Front-End Developer</h4>
              <p className="text-gray-600">Focus on creating user interfaces and experiences that are visually appealing and intuitive.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Back-End Developer</h4>
              <p className="text-gray-600">Work on server-side logic, databases, and APIs that power web applications.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Full-Stack Developer</h4>
              <p className="text-gray-600">Handle both front-end and back-end development, offering comprehensive solutions.</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">DevOps Engineer</h4>
              <p className="text-gray-600">Bridge development and operations, focusing on deployment, automation, and infrastructure.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-xl p-10 mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Web Development Journey?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join our comprehensive web development program and learn from industry experts. Get hands-on experience with real-world projects and build a portfolio that stands out.
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