"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaHtml5, FaArrowRight, FaChevronDown, FaChevronUp } from 'react-icons/fa';

export default function HTMLTutorialPage() {
  const [isIntroductionOpen, setIsIntroductionOpen] = useState(false);
  const [isBasicTagsOpen, setIsBasicTagsOpen] = useState(false);
  const [isInlineBlockTagsOpen, setIsInlineBlockTagsOpen] = useState(false);
  const [isListsOpen, setIsListsOpen] = useState(false);
  const [isTablesOpen,setIsTablesOpen] = useState(false);
  const [isFormsOpen,setIsFormsOpen] = useState(false);
  const [isHeadElementsOpen,setIsHeadElementsOpen] = useState(false);
  const [isMediaOpen,setIsMediaOpen] = useState(false);
  const [isMiscellaneousOpen,setIsMiscellaneousOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaHtml5 className="text-4xl text-orange-500" />
              <h1 className="text-2xl font-bold text-gray-900">HTML Tutorial</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/tutorials" className="text-gray-600 hover:text-gray-900">
                <FaArrowRight className="rotate-180" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Table of Contents</h2>
              <nav className="space-y-2">
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsIntroductionOpen(!isIntroductionOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>Introduction</span>
                    {isIntroductionOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isIntroductionOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                        HTML Working
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                        HTML Installation
                      </Link>
                      <Link href="#html-execution" className="block text-gray-600 hover:text-orange-500">
                        HTML Execution
                      </Link>
                      <Link href="#html-page-structure" className="block text-gray-600 hover:text-orange-500">
                        HTML Page Structure
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsBasicTagsOpen(!isBasicTagsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>HTML Basic Tags</span>
                    {isBasicTagsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isBasicTagsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                        Skeletal Tags
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                        Heading Tags
                      </Link>
                      <Link href="#html-execution" className="block text-gray-600 hover:text-orange-500">
                        Paragraph Tag
                      </Link>
                      <Link href="#html-page-structure" className="block text-gray-600 hover:text-orange-500">
                        Horizontal Line Tag
                      </Link>
                      <Link href="#html-page-structure" className="block text-gray-600 hover:text-orange-500">
                        Line Break Tag
                      </Link>
                      <Link href="#html-page-structure" className="block text-gray-600 hover:text-orange-500">
                        Anchor Tag
                      </Link>
                      <Link href="#html-page-structure" className="block text-gray-600 hover:text-orange-500">
                        Image Tag
                      </Link>
                      <Link href="#html-page-structure" className="block text-gray-600 hover:text-orange-500">
                        Break Tag
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsInlineBlockTagsOpen(!isInlineBlockTagsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>Inline & Block Elements</span>
                    {isInlineBlockTagsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isInlineBlockTagsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                        HTML Inline Elements
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                        HTML Block Elements
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsListsOpen(!isListsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>HTML Lists</span>
                    {isListsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isListsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                      HTML Lists
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                      HTML Unordered List
                      </Link>
                      <Link href="#html-execution" className="block text-gray-600 hover:text-orange-500">
                      HTML Ordered List
                      </Link>
                      <Link href="#html-page-structure" className="block text-gray-600 hover:text-orange-500">
                      HTML Definition List
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsTablesOpen(!isTablesOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>HTML Tables</span>
                    {isTablesOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isTablesOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                        HTML Table
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                       More on Tables 
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsFormsOpen(!isFormsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>HTML Forms</span>
                    {isFormsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isFormsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                      Introduction to HTML Forms
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                      HTML Input Types

                      </Link>
                      <Link href="#html-execution" className="block text-gray-600 hover:text-orange-500">
                      Textarea & Select
                      </Link>
                      <Link href="#html-page-structure" className="block text-gray-600 hover:text-orange-500">
                      More on forms
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsHeadElementsOpen(!isHeadElementsOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>Head Elements</span>
                    {isHeadElementsOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isHeadElementsOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                      HTML Meta Tags
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                      Link & Script Tags
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsMediaOpen(!isMediaOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>Media</span>
                    {isMediaOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isMediaOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                      Video & Audio Tags
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                      SVG in HTML
                      </Link>
                      <Link href="#html-installation" className="block text-gray-600 hover:text-orange-500">
                      iFrames in HTML
                      </Link>
                    </div>
                  )}
                </div>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsMiscellaneousOpen(!isMiscellaneousOpen)}
                    className="flex items-center justify-between w-full text-gray-600 hover:text-orange-500"
                  >
                    <span>Miscellaneous</span>
                    {isMiscellaneousOpen ? <FaChevronUp className="text-sm" /> : <FaChevronDown className="text-sm" />}
                  </button>
                  {isMiscellaneousOpen && (
                    <div className="pl-4 space-y-2">
                      <Link href="#html-working" className="block text-gray-600 hover:text-orange-500">
                      HTML Code Tag
                      </Link>
                    </div>
                  )}
                </div>


               
               
               
                
              </nav>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose max-w-none">
                <h1 className="text-3xl font-bold text-gray-900 mb-6">HTML Tutorial</h1>
                
                <div className="mb-8">
                  <p className="text-gray-600 mb-4">
                    The word hypertext markup language is composed of the words "hypertext" and "markup language". 
                    The term "hypertext" refers to the linking of text with other documents and "markup language" 
                    refers to a language that uses a set of tags.
                  </p>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Started</h3>
                  <p className="text-gray-600">
                    Welcome to the HTML Tutorial tutorial series! To begin learning:
                  </p>
                  <ol className="list-decimal list-inside mt-2 space-y-2 text-gray-600">
                    <li>Select a lesson from the sidebar on the left</li>
                    <li>Work through the lessons in order for the best learning experience</li>
                    <li>Each lesson contains detailed explanations and examples</li>
                  </ol>
                </div>

                {/* Placeholder for content sections */}
                <div id="introduction" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                  {/* Content will be added here */}
                </div>

                <div id="basic-tags" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">HTML Basic Tags</h2>
                  {/* Content will be added here */}
                </div>

                <div id="inline-block" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Inline & Block Elements</h2>
                  {/* Content will be added here */}
                </div>

                <div id="lists" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">HTML Lists</h2>
                  {/* Content will be added here */}
                </div>

                <div id="tables" className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">HTML Tables</h2>
                  {/* Content will be added here */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}