'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from 'react-icons/ai'
import { useRef, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ContactPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 1])
  const y = useTransform(scrollYProgress, [0, 0.1, 1], [100, 0, 0])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Failed to send message')
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shakotgabriel1@gmail.com',
      href: 'mailto:shakotgabriel1@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 717 620 509',
      href: 'tel:+254717620509',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      href: '#',
    },
  ]

  const socialLinks = [
    {
      icon: AiFillGithub,
      label: 'GitHub',
      href: 'https://github.com/shakotgabriel',
      color: 'hover:text-gray-400',
    },
    {
      icon: AiFillLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/chakuothbel-g-daniel-046b22179/',
      color: 'hover:text-blue-400',
    },
    {
      icon: AiFillInstagram,
      label: 'Instagram',
      href: 'https://www.instagram.com/shakot_g',
      color: 'hover:text-pink-400',
    },
  ]

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      id="contact"
      className="relative min-h-screen w-full overflow-hidden bg-black py-20 md:py-32"
    >

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[180px]" />
        <div className="absolute right-1/3 bottom-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
   
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-mono uppercase tracking-[0.3em] text-blue-400">
            Get In Touch
          </p>
          <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Let&apos;s{' '}
            <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
  
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
    
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-blue-500/30 hover:bg-white/10"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                      <Icon className="h-6 w-6 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/60">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </motion.a>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <h3 className="mb-4 text-lg font-semibold text-white">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all ${social.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>

     
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
            >
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Name</label>
                <Input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-blue-500/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/40 focus:border-blue-500/50"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">
                  Message
                </label>
                <textarea
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-white placeholder:text-white/40 focus:border-blue-500/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 p-3 text-green-400 text-sm"
                >
                  <CheckCircle className="h-4 w-4" />
                  Message sent successfully! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 p-3 text-red-400 text-sm"
                >
                  <AlertCircle className="h-4 w-4" />
                  {errorMsg}
                </motion.div>
              )}

              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-linear-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="mr-2 h-4 w-4" /> Send Message</>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}