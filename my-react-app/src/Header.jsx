import { useState } from 'react'
import './index.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-800">MyApp</h1>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </a>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Get Started
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Home
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </a>
              <button className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
