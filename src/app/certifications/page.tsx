'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaBrain, FaLaptopCode, FaCheckCircle, FaArrowRight, FaTrophy, FaUsers, FaChartLine, FaClock, FaStar, FaMedal, FaCertificate, FaGraduationCap, FaBriefcase, FaQuoteLeft, FaUserTie, FaLaptop, FaHandshake, FaAward } from 'react-icons/fa';
import Link from 'next/link';

const certifications = [
  {
    id: 'web-dev',
    title: 'Web Development Professional',
    description: 'Master modern web development technologies and frameworks',
    icon: <FaCode className="w-8 h-8" />,
    color: 'from-blue-500 to-blue-600',
    requirements: [
      'Complete Web Development course',
      'Pass practical assessment',
      'Build a portfolio project',
      'Score 85%+ in final exam'
    ],
    duration: '3-6 months',
    level: 'Professional',
    benefits: [
      'Industry-recognized certification',
      'Job placement assistance',
      'Access to exclusive resources',
      'Lifetime access to updates'
    ]
  },
  {
    id: 'programming',
    title: 'Programming Languages Expert',
    description: 'Become proficient in multiple programming languages',
    icon: <FaLaptopCode className="w-8 h-8" />,
    color: 'from-purple-500 to-purple-600',
    requirements: [
      'Complete Programming Languages course',
      'Pass coding challenges',
      'Solve 50+ problems',
      'Score 90%+ in final exam'
    ],
    duration: '4-8 months',
    level: 'Expert',
    benefits: [
      'Advanced programming skills',
      'Problem-solving certification',
      'Mentorship opportunities',
      'Networking events access'
    ]
  },
  {
    id: 'dsa',
    title: 'Data Structures & Algorithms Specialist',
    description: 'Excel in problem-solving and algorithm design',
    icon: <FaBrain className="w-8 h-8" />,
    color: 'from-green-500 to-green-600',
    requirements: [
      'Complete DSA course',
      'Solve 100+ problems',
      'Pass algorithm design test',
      'Score 95%+ in final exam'
    ],
    duration: '6-9 months',
    level: 'Specialist',
    benefits: [
      'Technical interview preparation',
      'Competitive programming skills',
      'Advanced problem-solving',
      'Industry recognition'
    ]
  },
  {
    id: 'database',
    title: 'Database Management Professional',
    description: 'Master database design and management',
    icon: <FaDatabase className="w-8 h-8" />,
    color: 'from-amber-500 to-amber-600',
    requirements: [
      'Complete Database course',
      'Design 3+ database systems',
      'Pass optimization test',
      'Score 88%+ in final exam'
    ],
    duration: '4-7 months',
    level: 'Professional',
    benefits: [
      'Database architecture skills',
      'Performance optimization',
      'Data modeling expertise',
      'Industry best practices'
    ]
  }
];

const stats = [
  { label: 'Certified Professionals', value: '5,000+', icon: <FaGraduationCap className="w-6 h-6" /> },
  { label: 'Job Placements', value: '3,000+', icon: <FaBriefcase className="w-6 h-6" /> },
  { label: 'Success Rate', value: '95%', icon: <FaChartLine className="w-6 h-6" /> },
  { label: 'Average Salary Increase', value: '40%', icon: <FaTrophy className="w-6 h-6" /> }
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Senior Web Developer',
    company: 'Tech Solutions Inc.',
    image: '/testimonials/sarah.jpg',
    quote: 'The Web Development certification helped me land my dream job. The practical projects and industry-relevant curriculum were exactly what I needed.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Software Engineer',
    company: 'Innovate Tech',
    image: '/testimonials/michael.jpg',
    quote: 'The DSA certification transformed my problem-solving skills. The mentorship and hands-on practice were invaluable for my career growth.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Database Administrator',
    company: 'Data Systems Ltd.',
    image: '/testimonials/emily.jpg',
    quote: 'The Database Management certification gave me the confidence to handle complex database systems. The practical approach made all the difference.',
    rating: 5
  }
];

const processSteps = [
  {
    title: 'Enroll in Course',
    description: 'Choose your certification track and enroll in the corresponding course',
    icon: <FaGraduationCap className="w-8 h-8" />,
    color: 'from-blue-400 to-blue-500'
  },
  {
    title: 'Complete Learning',
    description: 'Go through the comprehensive curriculum and complete all modules',
    icon: <FaLaptop className="w-8 h-8" />,
    color: 'from-purple-400 to-purple-500'
  },
  {
    title: 'Practical Projects',
    description: 'Work on real-world projects to apply your knowledge',
    icon: <FaCode className="w-8 h-8" />,
    color: 'from-green-400 to-green-500'
  },
  {
    title: 'Final Assessment',
    description: 'Take the comprehensive final exam to test your skills',
    icon: <FaAward className="w-8 h-8" />,
    color: 'from-amber-400 to-amber-500'
  },
  {
    title: 'Get Certified',
    description: 'Receive your industry-recognized certification upon completion',
    icon: <FaCertificate className="w-8 h-8" />,
    color: 'from-red-400 to-red-500'
  }
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

export default function CertificationsPage() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
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
              Professional <span className="text-blue-600">Certifications</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8"
            >
              Validate your skills with industry-recognized certifications and advance your career
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="#certifications"
                className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                View Certifications
              </Link>
              <Link 
                href="#benefits"
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section with Enhanced Design */}
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
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-blue-600 mb-3">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certifications Grid */}
      <div id="certifications" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Available Certifications
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-gradient-to-br ${cert.color} rounded-xl shadow-lg overflow-hidden`}
            >
              <div className="p-8 text-white">
                <div className="mb-6">{cert.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{cert.title}</h3>
                <p className="text-white/90 mb-6">{cert.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {cert.requirements.map((req, index) => (
                      <li key={index} className="flex items-center">
                        <FaCheckCircle className="mr-2 text-green-300" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Benefits:</h4>
                  <ul className="space-y-2">
                    {cert.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <FaStar className="mr-2 text-yellow-300" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center text-sm">
                  <span>Duration: {cert.duration}</span>
                  <span>Level: {cert.level}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certification Process Timeline */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Certification Process
          </motion.h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400"></div>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`bg-gradient-to-br ${step.color} rounded-xl shadow-lg p-6 text-white`}>
                      <div className="mb-4">{step.icon}</div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-white/90">{step.description}</p>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Success Stories
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="relative">
                  <FaQuoteLeft className="text-blue-600/20 w-8 h-8 absolute -top-4 -left-2" />
                  <p className="text-gray-600 mb-4 relative z-10">{testimonial.quote}</p>
                </div>
                <div className="flex text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-5 h-5" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Partnership Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-center"
          >
            <FaHandshake className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">Industry Partnerships</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Our certifications are recognized and valued by leading tech companies worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {['Tech Giant', 'Innovate Corp', 'Digital Solutions', 'Future Tech'].map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  className="bg-white/10 rounded-lg p-6 backdrop-blur-sm"
                >
                  <div className="text-white text-xl font-bold">{company}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div id="benefits" className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-3xl font-bold text-center text-gray-900 mb-12"
          >
            Why Get Certified?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <FaCertificate className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
              <p className="text-gray-600">Gain recognition from top tech companies and stand out in the job market</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <FaBriefcase className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Career Advancement</h3>
              <p className="text-gray-600">Open doors to better job opportunities and higher salary potential</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="bg-white rounded-xl shadow-lg p-8 text-center"
            >
              <FaGraduationCap className="w-12 h-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Skill Validation</h3>
              <p className="text-gray-600">Validate your expertise and demonstrate your commitment to professional growth</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Enhanced Call to Action */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.4 }}
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto"
          >
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Get Certified?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="text-xl text-white/90 mb-8"
            >
              Take the first step towards advancing your career with our professional certifications
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.7 }}
            >
              <Link 
                href="#certifications"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl inline-block"
              >
                View Available Certifications
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 