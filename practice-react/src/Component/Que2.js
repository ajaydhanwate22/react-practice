import React, { useState } from 'react';

export default function Que2() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
      const [submittedData, setSubmittedData] = useState(null);
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      };
      return (
        <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-lg shadow-lg">
          <h1 className="text-center text-3xl font-bold mb-4">Contact Form</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
          {submittedData && (
            <div className="mt-4 bg-white p-4 border border-gray-300 rounded-md">
              <h2 className="text-lg font-bold mb-2">Submitted Information</h2>
              <p><span className="font-medium">Name:</span> {submittedData.name}</p>
              <p><span className="font-medium">Email:</span> {submittedData.email}</p>
              <p><span className="font-medium">Message:</span> {submittedData.message}</p>
            </div>
          )}
        </div>
      );
    };


// 2.Create a Contact Form where users can submit their name, email, and message. Display the submitted information below the form.