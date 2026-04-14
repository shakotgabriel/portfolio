'use client'

import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Timeline', href: '#timeline' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact Me', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-lg">
              CG
            </div>
            <span className="text-lg font-bold bg-linear-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Chakuothbel
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <motion.div
            className="hidden md:flex items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                {item.label}
                <motion.span
                  className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-primary to-accent"
                  whileHover={{ width: '100%' }}
                  initial={{ width: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-6 h-6" />
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 pb-4 border-t border-border/50"
            >
              <motion.div
                className="flex flex-col gap-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    whileHover={{ x: 4 }}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
