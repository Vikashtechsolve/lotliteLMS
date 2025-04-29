'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaBrain, FaLaptopCode, FaCheckCircle, FaArrowRight, FaTrophy, FaUsers, FaChartLine, FaClock, FaStar, FaMedal } from 'react-icons/fa';
import Link from 'next/link';

const testCategories = [
  {
    id: 'web-dev',
    title: 'Web Development',
    description: 'Test your knowledge of HTML, CSS, JavaScript, and modern frameworks',
    icon: <FaCode className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    hoverColor: 'from-blue-600 to-blue-700',
    questions: 30,
    duration: '45 mins',
    level: 'Intermediate'
  },
  {
    id: 'programming',
    title: 'Programming Languages',
    description: 'Assess your skills in Python, Java, C++, and other programming languages',
    icon: <FaLaptopCode className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
    hoverColor: 'from-purple-600 to-purple-700',
    questions: 25,
    duration: '40 mins',
    level: 'Advanced'
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms',
    description: 'Evaluate your understanding of DSA concepts and problem-solving skills',
    icon: <FaBrain className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
    hoverColor: 'from-green-600 to-green-700',
    questions: 35,
    duration: '60 mins',
    level: 'Expert'
  },
  {
    id: 'database',
    title: 'Database Management',
    description: 'Test your knowledge of SQL, NoSQL, and database design principles',
    icon: <FaDatabase className="w-8 h-8" />,
    color: 'from-amber-500 to-amber-600',
    hoverColor: 'from-amber-600 to-amber-700',
    questions: 20,
    duration: '30 mins',
    level: 'Intermediate'
  }
];

const stats = [
  { label: 'Total Tests', value: '10,000+', icon: <FaTrophy className="w-6 h-6" /> },
  { label: 'Active Users', value: '5,000+', icon: <FaUsers className="w-6 h-6" /> },
  { label: 'Success Rate', value: '92%', icon: <FaChartLine className="w-6 h-6" /> },
  { label: 'Avg. Time', value: '45 mins', icon: <FaClock className="w-6 h-6" /> }
];

const achievements = [
  { title: 'Fast Learner', icon: <FaStar className="w-8 h-8" />, color: 'from-yellow-400 to-yellow-500' },
  { title: 'Perfect Score', icon: <FaMedal className="w-8 h-8" />, color: 'from-blue-400 to-blue-500' },
  { title: 'Quick Thinker', icon: <FaBrain className="w-8 h-8" />, color: 'from-purple-400 to-purple-500' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function TestsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Enhanced Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 transform -skew-y-6"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Test Your <span className="text-blue-600">Knowledge</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Take our interactive tests to assess your skills and track your progress in various technical domains.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="#categories"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Start Testing
              </Link>
              <Link 
                href="#guidelines"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className="text-blue-600 mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Test Categories */}
      <div id="categories" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Choose Your Test Category
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testCategories.map((category) => (
            <motion.div
              key={category.id}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-br ${category.color} rounded-xl shadow-lg overflow-hidden cursor-pointer`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="p-6">
                <div className="text-white mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                <p className="text-white/90 mb-4">{category.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {category.questions} Questions
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {category.duration}
                  </span>
                  <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                    {category.level}
                  </span>
                </div>
                <Link 
                  href={`/tests/${category.id}`}
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Start Test
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Unlock Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className={`bg-gradient-to-br ${achievement.color} rounded-xl shadow-lg p-8 text-center text-white`}
              >
                <div className="mb-4">{achievement.icon}</div>
                <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                <p className="text-white/90">Complete tests with exceptional performance to earn achievements</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Test Instructions */}
      <div id="guidelines" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Test Guidelines</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Time Management</h3>
                <p className="text-gray-600">Each test has a specific time limit. Manage your time wisely to complete all questions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Question Types</h3>
                <p className="text-gray-600">Tests include multiple-choice, coding challenges, and theoretical questions.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Scoring System</h3>
                <p className="text-gray-600">Your score is calculated based on accuracy and completion time.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Results & Certificates</h3>
                <p className="text-gray-600">Receive detailed feedback and certificates upon completion.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Recent Test Takers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Test Takers</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div>
                  <h3 className="font-semibold text-gray-900">User {index + 1}</h3>
                  <p className="text-gray-600">Completed Web Development Test</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-gray-900">95%</span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Test Your Skills?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="text-xl text-white/90 mb-8 max-w-3xl mx-auto"
          >
            Join thousands of learners who have improved their skills through our interactive tests.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            <Link 
              href="#categories"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block"
            >
              Start Your First Test
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 