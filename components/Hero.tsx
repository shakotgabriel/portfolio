'use client'

import { motion, easeOut, easeInOut } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { TypewriterEffect } from '@/components/ui/typewriter-effect'
import Globe3D from '@/components/ui/3d-globe'

const NAIROBI_MARKER_SRC =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16'><circle cx='8' cy='8' r='8' fill='%23ef4444'/></svg>"

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }


  const statCardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easeOut,
        delay: i * 0.18,
      },
    }),
  }

  const titleWords = [
    { text: 'SOFTWARE', className: 'text-yellow-400' },
    { text: 'Developer', className: 'bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent' },
  ]


  const subtitleWords = [
    { text: 'Transforming', className: 'text-white/60' },
    { text: 'ideas', className: 'text-white/60' },
    { text: 'into', className: 'text-white/60' },
    { text: 'elegant', className: 'text-cyan-400' },
    { text: 'digital', className: 'text-white/60' },
    { text: 'solutions', className: 'text-white/60' },
  ]

  return (
    <section className="min-h-screen pt-24 md:pt-32 pb-16 sm:pb-20 w-full flex relative overflow-hidden bg-black text-white">
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 px-4 sm:px-6">

      
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: easeOut }}
          className="w-full md:w-2/5 space-y-6 sm:space-y-8 text-center md:text-left"
        >
      
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6">
              CHAKUOTHBEL<br />GABRIEL
            </h2>
            
          
            <div className="space-y-3 mb-6 flex flex-col items-center md:items-start">
              <p className="text-white/60 text-sm md:text-base flex items-center gap-2">
                <span>📍</span> Based in Nairobi
              </p>

              <div className="space-y-3 flex flex-col items-center md:items-start">
                <p className="text-green-400 text-sm md:text-base font-medium flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Available for Projects
                </p>

                <Globe3D
                  className="h-24 w-24 md:h-48 md:w-48"
                  markers={[
                    {
                      lat: -1.286389,
                      lng: 36.817223,
                      src: NAIROBI_MARKER_SRC,
                      label: 'Nairobi',
                    },
                  ]}
                  config={{
                    backgroundColor: null,
                    enablePan: false,
                    enableZoom: false,
                    autoRotateSpeed: 0.9,
                    radius: 1.05,
                    showWireframe: false,
                    showAtmosphere: true,
                  }}
                />
              </div>
            </div>
          </div>

       
          <p className="text-white/70 text-base sm:text-lg md:text-lg leading-relaxed">
            Full Stack developer with a passion for crafting seamless and engaging digital experiences. Specializing in modern web technologies to build scalable solutions.
          </p>

         
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-pink-400 transition-all duration-300 text-3xl hover:scale-110 transform"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-blue-400 transition-all duration-300 text-3xl hover:scale-110 transform"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-gray-300 transition-all duration-300 text-3xl hover:scale-110 transform"
            >
              <AiFillGithub />
            </a>
          </div>
        </motion.div>

      
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col space-y-8 relative"
        >
        
          <div className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
            <TypewriterEffect words={titleWords} />
          </div>

         
          <div className="text-base sm:text-lg md:text-xl max-w-xl leading-relaxed">
            <TypewriterEffect words={subtitleWords} cursorClassName="bg-cyan-400" />
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 sm:pt-10">
            {[
              {
                color: 'red',
                value: '24+',
                label: 'Projects Completed',
                text: 'text-red-400',
                bg: 'from-red-500/20 to-red-600/10 border-red-500/30',
              },
              {
                color: 'cyan',
                value: '2+',
                label: 'Years Experience',
                text: 'text-cyan-400',
                bg: 'from-cyan-500/20 to-blue-600/10 border-cyan-500/30',
              },
              {
                color: 'green',
                value: '10+',
                label: 'Tech Skills',
                text: 'text-green-400',
                bg: 'from-green-500/20 to-emerald-600/10 border-green-500/30',
              },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
                variants={statCardVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.1, ease: easeOut }}
                className={`bg-gradient-to-br ${card.bg} border p-4 sm:p-6 rounded-xl backdrop-blur-sm flex flex-col items-center justify-center text-center`}
              >
                <span className={`text-3xl sm:text-4xl md:text-5xl font-bold ${card.text}`}>{card.value}</span>
                <span className="mt-2 text-xs sm:text-sm md:text-base text-white/80">
                  {card.label}
                </span>
              </motion.div>
            ))}
          </div>

          <div className="pt-6 flex justify-center md:justify-start">
            <a
              href="/Chakouthbel-Daniel_CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-300 hover:bg-cyan-500/20"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </motion.div>

    
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: easeInOut }}
        >
          <ArrowDown className="w-10 h-10 text-yellow-400/80" />
        </motion.div>
      </div>

   
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 bg-pink-500 opacity-10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: easeInOut }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-80 h-80 bg-purple-500 opacity-10 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: easeInOut }}
      />
    </section>
  )
}

export default Hero