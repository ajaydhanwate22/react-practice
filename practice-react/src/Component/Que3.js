import React, { useState } from 'react';

export default function Que3({items}) {
    const [expandedItem, setExpandedItem] = useState(null);

    const toggleItem = (index) => {
      if (expandedItem === index) {
        setExpandedItem(null); // Collapse if clicking again
      } else {
        setExpandedItem(index); // Expand the clicked item
      }
    };
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
    {items.map((item, index) => (
      <div key={index} className="mb-2">
        <button
          className="w-full flex justify-between items-center p-2 bg-gray-200 rounded-md focus:outline-none"
          onClick={() => toggleItem(index)}
        >
          <span className="text-lg font-medium">{item.title}</span>
          <svg
            className={`w-6 h-6 transition-transform transform ${
              expandedItem === index ? 'rotate-0' : 'rotate-180'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={expandedItem === index ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
            />
          </svg>
        </button>
        {expandedItem === index && (
          <div className="bg-gray-100 p-2 mt-2 rounded-md">
            <p className="text-sm">{item.content}</p>
          </div>
        )}
      </div>
    ))}
  </div>
);
};



// 3.    Write a component called Accordion that renders an accordion-style UI. It should receive an array of items as a prop, and each item should have a title and content. Only one item should be expanded at a time.