import React from 'react';
import Link from 'next/link';
import { FaCode, FaSitemap, FaChartBar, FaBrain, FaRocket, FaCheckCircle, FaClock, FaLaptopCode } from 'react-icons/fa';

export default function DSAPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            Data Structures & Algorithms
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Master the fundamentals of computer science and prepare for technical interviews
          </p>
        </div>
        
        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12 transform hover:scale-[1.01] transition-transform duration-300">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaCode className="mr-3 text-purple-500" />
            What are Data Structures & Algorithms?
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Data Structures and Algorithms (DSA) are the building blocks of computer science. Data structures are ways of organizing and storing data efficiently, while algorithms are step-by-step procedures for solving problems. Understanding DSA is essential for writing efficient code, optimizing performance, and excelling in technical interviews at top tech companies.
          </p>
        </div>

        {/* Core Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaSitemap className="mr-3 text-purple-500" />
              Data Structures
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Arrays & Strings</strong> - Sequential data storage</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Linked Lists</strong> - Dynamic data organization</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Stacks & Queues</strong> - LIFO and FIFO operations</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Trees & Graphs</strong> - Hierarchical and network relationships</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Hash Tables</strong> - Fast data retrieval</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Heaps</strong> - Priority-based data organization</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaChartBar className="mr-3 text-purple-500" />
              Algorithms
            </h3>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Sorting</strong> - Organizing data in a specific order</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Searching</strong> - Finding elements in data structures</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Dynamic Programming</strong> - Solving complex problems by breaking them down</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Greedy Algorithms</strong> - Making locally optimal choices</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Graph Algorithms</strong> - Traversing and analyzing networks</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span><strong>Backtracking</strong> - Finding solutions by trying different paths</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Time & Space Complexity */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaClock className="mr-3 text-purple-500" />
            Time & Space Complexity
          </h2>
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            Understanding the efficiency of algorithms is crucial in computer science. Time complexity measures how the runtime of an algorithm grows with input size, while space complexity measures how much memory an algorithm uses.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">O(1) - Constant</h4>
              <p className="text-gray-600">Operations that take the same time regardless of input size</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">O(log n) - Logarithmic</h4>
              <p className="text-gray-600">Operations that divide the problem size in each step</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">O(n) - Linear</h4>
              <p className="text-gray-600">Operations that process each element once</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">O(n log n)</h4>
              <p className="text-gray-600">Efficient sorting algorithms like Merge Sort</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">O(n²) - Quadratic</h4>
              <p className="text-gray-600">Operations that process each element for each other element</p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg">
              <h4 className="font-bold text-xl text-gray-800 mb-3">O(2ⁿ) - Exponential</h4>
              <p className="text-gray-600">Operations that grow exponentially with input size</p>
            </div>
          </div>
        </div>

        {/* Interview Preparation */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaLaptopCode className="mr-3 text-purple-500" />
            Interview Preparation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Problem-Solving Approach</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Understand the problem thoroughly</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Identify constraints and edge cases</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Develop a brute force solution first</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Optimize for time and space complexity</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Common Interview Topics</h4>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Array manipulation and string processing</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Linked list operations and tree traversals</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>Graph algorithms and dynamic programming</span>
                </li>
                <li className="flex items-start">
                  <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                  <span>System design and object-oriented programming</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Career Benefits */}
        <div className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
            <FaRocket className="mr-3 text-purple-500" />
            Career Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Technical Interviews</h4>
              <p className="text-gray-600">Ace coding interviews at top tech companies like Google, Microsoft, and Amazon</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Problem-Solving Skills</h4>
              <p className="text-gray-600">Develop critical thinking and analytical abilities that apply to any programming task</p>
            </div>
            <div className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg transform hover:scale-[1.03] transition-transform duration-300">
              <h4 className="font-bold text-xl text-gray-800 mb-3">Code Optimization</h4>
              <p className="text-gray-600">Write more efficient, scalable, and maintainable code in any programming language</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Master DSA?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join our comprehensive Data Structures & Algorithms program and learn from industry experts. Get hands-on practice with real interview questions and build the skills needed to succeed in technical interviews.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
} 