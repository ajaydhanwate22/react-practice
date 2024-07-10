import React from 'react'

export default function Que5({links }) {
    return (
        <nav className="bg-gray-800 p-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <span className="text-white text-xl font-bold">Navbar</span>
            </div>
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md transition-colors duration-300"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      );
    };
    

    // 5.    Write a functional component called Navbar that renders a navigation bar with links. It should receive an array of links as a prop, and each link should be displayed as an anchor tag within a list item.