'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
const blog = "/assets/blog-word-cloud1.png"
export default function Navbar() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-4  ">
            <Image src={blog} alt="Blog Logo" width={50} height={50} className='rounded-full' />
            <span className="text-xl font-bold">MyBlog</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/" className="font-semibold">Home</Link>
            <Link href="/about" className="font-semibold">About</Link>
            <Link href="/contact" className="font-semibold">Contact</Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <Link href="/" className="block py-2 hover:text-primary">Home</Link>
            <Link href="/about" className="block py-2 hover:text-primary">About</Link>
            <Link href="/contact" className="block py-2 hover:text-primary">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

