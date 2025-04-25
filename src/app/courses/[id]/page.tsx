'use client';

import { useParams } from 'next/navigation';
import React from 'react';

interface CourseParams {
  id: string;
  [key: string]: string | string[];
}

export default function CourseDetail() {
  const params = useParams<CourseParams>();
  const courseId = params?.id || '';

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Course Details</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-600">Course ID: {courseId}</p>
        {/* Add more course details here */}
      </div>
    </div>
  );
} 