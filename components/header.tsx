'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Code, Clock, Star, Mail } from 'lucide-react'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Projects', href: '#projects', icon: <Code className="w-5 h-5" /> },
    { label: 'Timeline', href: '#timeline', icon: <Clock className="w-5 h-5" /> },
    { label: 'Skills', href: '#skills', icon: <Star className="w-5 h-5" /> },
    { label: 'Contact', href: '#contact', icon: <Mail className="w-5 h-5" /> },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-center justify-center gap-8">
   
          <div className="hidden md:flex items-center gap-20">
            {navItems.map((item) => (
              <div key={item.label} className="relative flex flex-col items-center group">
            
                <div className="cursor-pointer">{item.icon}</div>

           
                <a
                  href={item.href}
                  className="absolute top-full mt-2 opacity-0 translate-y-[-5px] group-hover:opacity-100 group-hover:translate-y-0 text-lg font-bold text-primary transition-all duration-300 ease-out"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>

         
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>

      
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-border/50"
            >
              <div className="flex flex-col gap-4 pt-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
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
