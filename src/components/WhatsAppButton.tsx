"use client";

import React, { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/919876543210', '_blank');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </button>
    </div>
  );
};

export default WhatsAppButton; 