"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaSearch, FaFilter, FaStar, FaClock, FaUserGraduate, FaCode, FaDatabase, FaBrain, FaRocket, FaLaptopCode, FaMobile, FaServer, FaShieldAlt, FaCloud } from 'react-icons/fa';
import { SiJavascript, SiPython, SiReact, SiNodedotjs, SiMongodb, SiDocker, SiTypescript, SiNextdotjs, SiTailwindcss, SiRedux, SiGraphql, SiFirebase } from 'react-icons/si';

// Course data
const courses = [
  {
    id: 1,
    title: "Full-Stack Development with MERN Stack",
    description: "Master HTML, CSS, JavaScript, React, Node.js, and MongoDB in one comprehensive course.",
    image: "/course-web-dev.jpg",
    instructor: "Vikash dubey",
    rating: 4.8,
    students: 1200,
    duration: "8 Weeks",
    level: "Beginner to Advanced",
    price: 149,
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    featured: true
  },
  {
    id: 2,
    title: "Java with Data Structures & Algorithms",
    description: "Master Java programming and Data Structures & Algorithms. Build a strong foundation for software development and ace technical interviews.",
    image: "/course-java.jpg",
    instructor: "Vikash dubey",
    rating: 4.7,
    students: 500,
    duration: "12 Weeks",
    level: "Beginner to Advanced",
    price: 129,
    category: "Java Development",
    tags: ["Java", "Data Structures", "Algorithms", "OOP", "Problem Solving"],
    featured: false
  }
];

// Categories for filter
const categories = [
  "All Courses",
  "Mern Stack Web Development",
  "Java Full Stack Development"
];

export default function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [isLoading, setIsLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Filter courses based on search and category
  useEffect(() => {
    let result = courses;
    
    // Filter by category
    if (selectedCategory !== "All Courses") {
      result = result.filter(course => course.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    // Filter by active filter (featured, newest, etc.)
    if (activeFilter === "featured") {
      result = result.filter(course => course.featured);
    } else if (activeFilter === "newest") {
      // Sort by newest (assuming id is higher for newer courses)
      result = [...result].sort((a, b) => b.id - a.id);
    } else if (activeFilter === "popular") {
      // Sort by number of students
      result = [...result].sort((a, b) => b.students - a.students);
    } else if (activeFilter === "price-low") {
      // Sort by price low to high
      result = [...result].sort((a, b) => a.price - b.price);
    } else if (activeFilter === "price-high") {
      // Sort by price high to low
      result = [...result].sort((a, b) => b.price - a.price);
    }
    
    setFilteredCourses(result);
  }, [searchTerm, selectedCategory, activeFilter]);

  return (
    <main className="min-h-screen pt-8 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-20 translate-x-1/2 translate-y-1/2 animate-pulse"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Explore Our Courses
            </h1>
            <p className="text-xl mb-8 text-amber-100">
              Discover a wide range of programming courses designed to help you master new skills and advance your career.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for courses, topics, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 pl-12 pr-4 rounded-full border-2 border-indigo-300 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300 shadow-lg"
                  suppressHydrationWarning
                />
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-indigo-500 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <FaFilter className="text-indigo-600" />
              <span className="font-medium text-gray-700">Filters:</span>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95 ${
                    selectedCategory === category
                      ? "bg-indigo-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                  suppressHydrationWarning
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="flex items-center space-x-2">
              <span className="font-medium text-indigo-600">Sort by:</span>
              <select 
                title="Sort courses by"
                className="px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-indigo-600"
                value={activeFilter}
                onChange={(e) => setActiveFilter(e.target.value)}
                suppressHydrationWarning
              >
                <option value="all" className="text-indigo-600">All Courses</option>
                <option value="newest" className="text-indigo-600">Newest</option>
                <option value="popular" className="text-indigo-600">Most Popular</option>
                <option value="price-low" className="text-indigo-600">Price: Low to High</option>
                <option value="price-high" className="text-indigo-600">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-600"></div>
            </div>
          ) : filteredCourses.length > 0 ? (
            <div className="grid grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <div 
                  key={course.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 text-white">
                    <div className="bg-amber-400 text-indigo-900 px-3 py-1 rounded-full text-xs font-bold inline-block mb-4 uppercase">
                      {course.category}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                    <p className="text-lg mb-4 opacity-90">{course.instructor}</p>
                    <div className="bg-white text-indigo-900 px-3 py-1 rounded-full text-sm font-bold inline-flex items-center">
                      <FaStar className="text-amber-400 mr-1" />
                      <span>{course.rating}</span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center text-gray-600">
                        <FaClock className="text-lg mr-2" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <FaUserGraduate className="text-lg mr-2" />
                        <span>{course.students.toLocaleString()} students</span>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {course.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {course.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="bg-indigo-50 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between items-center mt-auto">
                      <div className="text-3xl font-bold text-indigo-900">
                        <span className="text-amber-500">₹</span>{course.price}
                      </div>
                      <Link 
                        href={course.id === 1 ? '/courses/complete-web-development-bootcamp' : course.id === 2 ? '/courses/java-full-stack-development' : `/courses/${course.title.toLowerCase().replace(/ /g, '-')}`}
                        className="bg-amber-400 hover:bg-amber-500 text-indigo-900 px-6 py-2.5 rounded-full text-lg font-semibold transition-all duration-300"
                      >
                        View Course
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">No courses found</h3>
              <p className="text-gray-600 mb-8">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Courses");
                  setActiveFilter("featured");
                }}
                className="bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-all duration-300"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-indigo-900">Browse by Category</h2>
          
          <div className="flex flex-row justify-center items-stretch space-x-6">
            <div className="flex-1 max-w-sm bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Full-Stack Development with MERN Stack</h3>
              <p className="text-gray-600 text-sm">Master HTML, CSS, JavaScript, React, Node.js, and MongoDB</p>
            </div>
            
            <div className="flex-1 max-w-sm bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-teal-500 rounded-xl flex items-center justify-center mb-4 mx-auto transform group-hover:scale-110 transition-transform">
                <FaLaptopCode className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-indigo-900 mb-2">Java Full Stack Development</h3>
              <p className="text-gray-600 text-sm">Learn Java, Spring Boot, Hibernate, and build complete web applications</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent">Technologies You'll Learn</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiJavascript className="w-12 h-12 text-yellow-400 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">JavaScript</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiReact className="w-12 h-12 text-blue-400 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">React</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiNodedotjs className="w-12 h-12 text-green-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Node.js</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiMongodb className="w-12 h-12 text-green-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">MongoDB</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiDocker className="w-12 h-12 text-blue-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Docker</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiTypescript className="w-12 h-12 text-blue-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">TypeScript</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiNextdotjs className="w-12 h-12 text-white mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Next.js</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiTailwindcss className="w-12 h-12 text-cyan-400 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Tailwind CSS</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiRedux className="w-12 h-12 text-purple-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Redux</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiGraphql className="w-12 h-12 text-pink-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">GraphQL</h3>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center hover:bg-white/10 transition-all duration-300 group">
              <SiFirebase className="w-12 h-12 text-yellow-500 mb-3 transform group-hover:scale-110 transition-transform" />
              <h3 className="text-amber-300 font-medium">Firebase</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">Ready to Start Learning?</h2>
            <p className="text-gray-600 text-xl mb-8">
              Join thousands of students who have already transformed their careers with our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-amber-400 to-yellow-300 text-indigo-900 px-8 py-4 rounded-full font-semibold hover:from-amber-500 hover:to-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg text-lg"
              >
                Get Started Today
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 hover:scale-105 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 