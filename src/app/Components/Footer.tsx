import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">We are passionate about sharing knowledge and insights through our blog.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Facebook</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; 2023 MyBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

