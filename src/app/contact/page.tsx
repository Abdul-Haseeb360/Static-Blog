export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm border focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50" required></textarea>
            </div>
            <div>
              <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                Send Message
              </button>
            </div>
          </form>
        </div>
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Contact Information</h2>
          <p className="text-gray-600 mb-2">Email: abdulhaseebshaikh1234@gmail.com</p>
          <p className="text-gray-600 mb-2">Phone: 0318-6835430</p>
          <p className="text-gray-600">Address: Choti giti Hyderabad, Sindh </p>
        </div>
      </main>
    </div>
  )
}

