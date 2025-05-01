'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';

interface PaymentPageProps {
  params: {
    courseId: string;
  }
}

export default function PaymentPage({ params }: PaymentPageProps) {
  const [courseDetails, setCourseDetails] = useState({
    title: 'Course Title',
    price: 499,
    description: 'Course Description'
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your payment gateway
    console.log('Processing payment...', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Course Details Section */}
            <div className="bg-gray-50 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{courseDetails.title}</h2>
              <p className="text-gray-600 mb-6">{courseDetails.description}</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Course Price</span>
                  <span className="text-2xl font-bold text-gray-900">₹{courseDetails.price}</span>
                </div>
              </div>
            </div>

            {/* Payment Form Section */}
            <div className="p-8">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-xl font-semibold">Payment Details</h3>
                <div className="flex items-center text-green-600">
                  <FaLock className="mr-2" />
                  <span className="text-sm">Secure Payment</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                >
                  Pay ₹{courseDetails.price}
                </motion.button>

                <p className="text-center text-sm text-gray-500 mt-4">
                  By proceeding, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 