import { Metadata } from 'next';
import Link from 'next/link';
import { FaCheck, FaClock, FaCode, FaGraduationCap, FaLaptopCode, FaMobileAlt, FaProjectDiagram, FaStar, FaUsers } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Complete Web Development Bootcamp",
  description: "Master web development from scratch with our comprehensive bootcamp. Learn HTML, CSS, JavaScript, React, and more.",
};

export default function CompleteWebDevelopmentBootcamp() {
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
                Complete Web Development Bootcamp
              </h1>
              <p className="text-xl mb-8 text-amber-100">
                Master full-stack web development with our comprehensive bootcamp. Learn everything from HTML to advanced JavaScript frameworks.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center text-amber-200">
                  <FaClock className="mr-2" />
                  <span>08 Weeks</span>
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
                href="/contact"
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
                    src="https://www.youtube.com/embed/O3BUHwfHf84"
                    title="Course Introduction"
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
              Our Complete Web Development Bootcamp is designed to take you from absolute beginner to professional web developer. You'll learn everything you need to know to build modern, responsive websites and web applications.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Comprehensive Curriculum</h3>
                  <p className="text-gray-600">Covering both frontend and backend development</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Hands-on Projects</h3>
                  <p className="text-gray-600">Build real-world applications and portfolio projects</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Expert Support</h3>
                  <p className="text-gray-600">Get help from experienced developers and mentors</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-indigo-900">What You'll Learn</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">HTML5 & CSS3 Fundamentals</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">JavaScript & ES6+</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">React.js & Next.js</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Node.js & Express</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">MongoDB & SQL</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">RESTful APIs</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Authentication & Security</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Deployment & DevOps</span>
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
                  Web Development Fundamentals
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Introduction to Web Development</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>HTML5 & Semantic Markup</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>CSS3 & Responsive Design</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Git & Version Control</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  JavaScript & Frontend Development
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>JavaScript Fundamentals</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>DOM Manipulation</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>ES6+ Features</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Asynchronous JavaScript</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 3 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  React & Modern Frontend
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>React Fundamentals</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>State Management</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Next.js & Server Components</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Testing & Debugging</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 4 */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Backend Development
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Node.js & Express</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>RESTful APIs</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>MongoDB & SQL</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Authentication & Security</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center text-indigo-900">Why Choose This Course?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaLaptopCode className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Hands-on Learning</h3>
            <p className="text-gray-600">Learn by building real projects and applications</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaGraduationCap className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Expert Instructors</h3>
            <p className="text-gray-600">Learn from industry professionals with years of experience</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaProjectDiagram className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Portfolio Projects</h3>
            <p className="text-gray-600">Build a strong portfolio to showcase your skills</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Ready to Start Your Web Development Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
            Join thousands of students who have transformed their careers with our Complete Web Development Bootcamp.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-colors"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
} 