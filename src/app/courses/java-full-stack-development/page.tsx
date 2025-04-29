import { Metadata } from 'next';
import Link from 'next/link';
import { FaCheck, FaClock, FaCode, FaGraduationCap, FaLaptopCode, FaMobileAlt, FaProjectDiagram, FaStar, FaUsers } from 'react-icons/fa';

export const metadata: Metadata = {
  title: "Java Full Stack Development Course",
  description: "Master Java Full Stack Development with our comprehensive course. Learn Spring Boot, Hibernate, React, and more.",
};

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
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
                Java Full Stack Development
              </h1>
              <p className="text-xl mb-8 text-amber-100">
                Master enterprise-grade application development with Java, Spring Boot, and modern frontend technologies.
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
                  <span>4.7/5 Rating</span>
                </div>
              </div>
              <Link
                href="/payment/3"
                className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-colors"
              >
                Enroll Now
              </Link>
            </div>
            <div className="w-full bg-white/10 backdrop-blur-sm p-2 rounded-xl">
              <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                  src="https://www.youtube.com/embed/TXhIPNX47PY"
                  title="Course Introduction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
              Our Java Full Stack Development course is designed to make you a proficient Java developer. You'll learn to build robust, scalable applications using Spring Boot, Hibernate, and modern frontend technologies.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Enterprise-Grade Development</h3>
                  <p className="text-gray-600">Learn to build scalable, maintainable applications</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Real-World Projects</h3>
                  <p className="text-gray-600">Build enterprise applications and microservices</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Industry Best Practices</h3>
                  <p className="text-gray-600">Learn from experienced Java developers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-indigo-900">What You'll Learn</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Core Java & Advanced Concepts</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Spring Boot & Spring MVC</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Hibernate & JPA</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">RESTful APIs & Microservices</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">MySQL & Database Design</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Frontend Integration</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Security & Authentication</span>
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
                  Java Fundamentals
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Core Java Concepts</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Object-Oriented Programming</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Collections Framework</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Exception Handling</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Spring Framework
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Spring Boot Basics</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Spring MVC</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Dependency Injection</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Spring Security</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 3 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Database & ORM
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>MySQL & Database Design</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Hibernate & JPA</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Query Optimization</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Transactions & Concurrency</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 4 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Microservices & Deployment
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Microservices Architecture</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Docker & Kubernetes</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>CI/CD Pipeline</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Cloud Deployment</span>
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
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Industry-Standard Curriculum</h3>
            <p className="text-gray-600">Learn the most in-demand Java technologies used by top companies worldwide.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaProjectDiagram className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Real-World Projects</h3>
            <p className="text-gray-600">Build enterprise-grade applications and microservices from scratch.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaGraduationCap className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Expert Mentorship</h3>
            <p className="text-gray-600">Get guidance from experienced Java developers throughout your learning journey.</p>
          </div>
        </div>
      </div>

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
        </div>
      </div>
    </div>
  );
} 