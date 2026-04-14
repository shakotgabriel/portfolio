'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Code, Clock, Star, Mail, Home } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/', icon: <Home className="w-5 h-5 text-white" />, isPage: true },
    { label: 'Projects', href: '/projects', icon: <Code className="w-5 h-5 text-white" />, isPage: true },
    { label: 'Timeline', href: '/#timeline', icon: <Clock className="w-5 h-5 text-white" />, isPage: true },
    { label: 'Skills', href: '/#skills', icon: <Star className="w-5 h-5 text-white" />, isPage: true },
    { label: 'Contact', href: '/#contact', icon: <Mail className="w-5 h-5 text-white" />, isPage: true },
  ]

  const handleNav = () => {
    setIsOpen(false)
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-gray-700"
    >
      <nav className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-center gap-8">
          
          <div className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleNav}
                whileHover={{ scale: 1.05 }}
                className="relative flex flex-col items-center group"
              >
                <span className="p-2 rounded-full hover:bg-white/10 transition-all">
                  {item.icon}
                </span>

                <span className="absolute top-full mt-2 opacity-0 translate-y-[-5px] group-hover:opacity-100 group-hover:translate-y-0 text-lg font-semibold text-white transition-all duration-300 ease-out">
                  {item.label}
                </span>

                <span className="absolute bottom-[-2px] w-0 h-1 bg-primary rounded-full group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

        
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-white/10 transition-all"
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 h-6 text-white" />
          </motion.button>
        </div>

   
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-gray-700"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={handleNav}
                    className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary hover:bg-white/10 p-2 rounded-md transition-all"
                  >
                    {item.icon}
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
