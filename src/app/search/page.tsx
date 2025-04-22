"use client";

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Define types
interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  level: string;
  price: number;
  category: string;
  tags: string[];
  featured: boolean;
}

interface Tutorial {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  slug: string;
  category: string;
  featured: boolean;
  createdAt: string;
}

// Define course data
const courses: Course[] = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB in one comprehensive course.",
    image: "/course-web-dev.jpg",
    instructor: "John Doe",
    rating: 4.8,
    students: 12500,
    duration: "48 hours",
    level: "Beginner to Advanced",
    price: 149,
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    featured: true
  },
  {
    id: 2,
    title: "Python for Data Science & Machine Learning",
    description: "Learn Python programming, data analysis, visualization, and machine learning algorithms.",
    image: "/course-python.jpg",
    instructor: "Jane Smith",
    rating: 4.9,
    students: 9800,
    duration: "36 hours",
    level: "Intermediate",
    price: 179,
    category: "Data Science",
    tags: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "TensorFlow"],
    featured: true
  },
  {
    id: 3,
    title: "Advanced React & Redux Masterclass",
    description: "Build scalable React applications with Redux, hooks, and advanced patterns.",
    image: "/course-react.jpg",
    instructor: "Mike Johnson",
    rating: 4.7,
    students: 7500,
    duration: "24 hours",
    level: "Advanced",
    price: 129,
    category: "Web Development",
    tags: ["React", "Redux", "TypeScript", "Next.js", "GraphQL"],
    featured: false
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    description: "Create cross-platform mobile applications for iOS and Android using React Native.",
    image: "/course-mobile.jpg",
    instructor: "Sarah Williams",
    rating: 4.6,
    students: 6200,
    duration: "30 hours",
    level: "Intermediate",
    price: 159,
    category: "Mobile Development",
    tags: ["React Native", "JavaScript", "iOS", "Android", "Firebase"],
    featured: false
  }
];

// Define tutorial data
const tutorials: Tutorial[] = [
  {
    id: 1,
    title: "HTML Tutorial",
    description: "The word hypertext markup language is composed of the words 'hypertext' and 'markup language'. HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.",
    thumbnail: "/Images/html.png",
    slug: "html-tutorial",
    category: "Web Development",
    featured: true,
    createdAt: "2024-03-15"
  },
  {
    id: 2,
    title: "CSS Tutorial",
    description: "CSS stands for Cascading Style Sheets. It describes how HTML elements are to be displayed on screen, paper, or in other media. CSS saves a lot of work. It can control the layout of multiple web pages all at once.",
    thumbnail: "/Images/css-3.png",
    slug: "css-tutorial",
    category: "Web Development",
    featured: true,
    createdAt: "2024-03-14"
  },
  {
    id: 3,
    title: "JavaScript Tutorial",
    description: "JavaScript is a lightweight, cross-platform, object-oriented programming language. It is used to make web pages interactive and provide online programs, including video games.",
    thumbnail: "/Images/js.png",
    slug: "javascript-tutorial",
    category: "Web Development",
    featured: true,
    createdAt: "2024-03-13"
  },
  {
    id: 4,
    title: "Python Tutorial",
    description: "Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation.",
    thumbnail: "/Images/python.png",
    slug: "python-tutorial",
    category: "Programming",
    featured: false,
    createdAt: "2024-03-12"
  }
];

// Search results component
function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') || '';
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      
      setLoading(true);
      try {
        // Search in courses
        const courseResults = courses
          .filter(course => 
            course.title.toLowerCase().includes(query.toLowerCase()) ||
            course.description.toLowerCase().includes(query.toLowerCase()) ||
            course.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()))
          )
          .map(course => ({
            id: course.id,
            title: course.title,
            type: "course",
            description: course.description,
            url: `/courses/${course.id}`
          }));

        // Search in tutorials
        const tutorialResults = tutorials
          .filter(tutorial => 
            tutorial.title.toLowerCase().includes(query.toLowerCase()) ||
            tutorial.description.toLowerCase().includes(query.toLowerCase())
          )
          .map(tutorial => ({
            id: tutorial.id,
            title: tutorial.title,
            type: "tutorial",
            description: tutorial.description,
            url: `/tutorials/${tutorial.slug}`
          }));

        // Combine results
        setResults([...courseResults, ...tutorialResults]);
      } catch (error) {
        console.error('Error fetching search results:', error);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchResults();
    } else {
      setResults([]);
      setLoading(false);
    }
  }, [query]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  if (!query) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Search for Courses, Tutorials, and More</h2>
        <p className="text-gray-600">Enter a search term to find content on CodersHub</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">No results found</h2>
        <p className="text-gray-600">We couldn't find any matches for &quot;{query}&quot;</p>
        <p className="text-gray-600 mt-2">Try different keywords or browse our categories</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Search Results for &quot;{query}&quot;</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {results.map((result) => (
          <Link 
            key={result.id} 
            href={result.url}
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                result.type === 'course' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
              }`}>
                {result.type === 'course' ? 'Course' : 'Tutorial'}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{result.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

// Main search page component
export default function SearchPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Search</h1>
      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
        </div>
      }>
        <SearchResults />
      </Suspense>
    </div>
  );
} 