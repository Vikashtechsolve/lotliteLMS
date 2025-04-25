import { Metadata } from 'next';
import Link from 'next/link';
import { FaCheck, FaClock, FaCode, FaGraduationCap, FaLaptopCode, FaBrain, FaProjectDiagram, FaStar, FaUsers } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Python for Data Science & Machine Learning | Vikash Tech Solution',
  description: 'Master Python programming, data analysis, visualization, and machine learning algorithms in this comprehensive course.',
};

export default function PythonDataScienceCourse() {
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
                Python for Data Science & Machine Learning
              </h1>
              <p className="text-xl mb-8 text-amber-100">
                Master Python programming, data analysis, visualization, and machine learning algorithms.
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
                  <span>4.9/5 Rating</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-block bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-3 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-colors"
              >
                Enroll Now
              </Link>
            </div>
               {/* Right Content - Video */}
            <div className="md:w-1/2">
              <div className="w-full bg-white/10 backdrop-blur-sm p-2 rounded-xl">
                <div className="relative pb-[56.25%] h-0 rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-xl"
                    src="https://www.youtube.com/embed/rfscVS0vtbw"
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
              Our Python for Data Science & Machine Learning course is designed to take you from Python basics to advanced machine learning concepts. You'll learn how to analyze data, create visualizations, and build predictive models.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Hands-on Projects</h3>
                  <p className="text-gray-600">Work on real-world data science projects and build your portfolio</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Industry-Relevant Skills</h3>
                  <p className="text-gray-600">Learn tools and techniques used by data scientists at top companies</p>
                </div>
              </div>
              <div className="flex items-start">
                <FaCheck className="text-amber-500 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-indigo-900">Expert Support</h3>
                  <p className="text-gray-600">Get guidance from experienced data scientists and ML engineers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-indigo-900">What You'll Learn</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Python Programming Fundamentals</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">NumPy & Pandas for Data Analysis</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Data Visualization with Matplotlib</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Statistical Analysis</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Machine Learning with Scikit-learn</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Deep Learning Fundamentals</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Data Preprocessing & Feature Engineering</span>
              </div>
              <div className="flex items-center">
                <FaCode className="text-amber-500 mr-3" />
                <span className="text-gray-700">Model Deployment</span>
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
                  Python Programming Fundamentals
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Python Basics & Data Types</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Control Flow & Functions</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Object-Oriented Programming</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Working with Files & APIs</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 2 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                  Data Analysis & Visualization
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>NumPy Arrays & Operations</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Pandas DataFrames</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Data Cleaning & Preprocessing</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Matplotlib & Seaborn Visualization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 3 */}
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                  Machine Learning Fundamentals
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Supervised Learning Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Model Evaluation & Selection</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Feature Engineering</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Cross-Validation & Hyperparameter Tuning</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Module 4 */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-indigo-900 flex items-center">
                  <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                  Advanced Machine Learning
                </h3>
                <div className="pl-11">
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Deep Learning with TensorFlow</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Natural Language Processing</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Computer Vision Basics</span>
                    </li>
                    <li className="flex items-center">
                      <FaCheck className="text-amber-500 mr-3" />
                      <span>Model Deployment & MLOps</span>
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
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Practical Learning</h3>
            <p className="text-gray-600">Learn through hands-on projects and real-world datasets</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaBrain className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Industry Expertise</h3>
            <p className="text-gray-600">Learn from experienced data scientists and ML engineers</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 text-center">
            <FaProjectDiagram className="text-4xl text-amber-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3 text-indigo-900">Career Growth</h3>
            <p className="text-gray-600">Build a portfolio of data science projects</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Ready to Start Your Data Science Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
            Join thousands of students who have transformed their careers with our Python for Data Science & Machine Learning course.
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