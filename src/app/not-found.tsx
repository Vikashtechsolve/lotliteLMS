import React from 'react';
import Link from 'next/link';
import { FaHome, FaSearch, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-xl shadow-xl p-8 transform hover:scale-[1.01] transition-transform duration-300">
          <div className="flex justify-center mb-6">
            <FaExclamationTriangle className="text-amber-400 text-6xl" />
          </div>
          
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
            404
          </h1>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Page Not Found</h2>
          
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg text-lg hover:from-purple-700 hover:to-pink-700 transition-colors duration-300 shadow-lg"
            >
              <FaHome className="mr-2" />
              Go to Home
            </Link>
            
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-purple-600 font-bold rounded-lg text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg border border-purple-200"
            >
              <FaSearch className="mr-2" />
              Contact Support
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-gray-500 text-sm">
          <p>If you believe this is an error, please contact our support team.</p>
        </div>
      </div>
    </div>
  );
} 