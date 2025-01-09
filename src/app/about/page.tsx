import React from 'react'


function page() {
  return (
    <div className="min-h-screen ">
    <main className="container mx-auto px-6 ">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <div className="bg-gray-100 shadow-lg rounded-lg p-6">
        <p className="text-gray-600 mb-4">
          Welcome to our company! We are a dedicated team of professionals committed to delivering high-quality solutions to our clients.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to innovate and excel in our field, providing cutting-edge products and services that meet the evolving needs of our customers.
        </p>
        <p className="text-gray-600 mb-4">
          With years of experience and a passion for what we do, we strive to make a positive impact in our industry and for our clients.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600">
          <li>Innovation</li>
          <li>Integrity</li>
          <li>Customer-focus</li>
          <li>Teamwork</li>
          <li>Excellence</li>
        </ul>
      </div>
    </main>
  </div>
  )
}

export default page
