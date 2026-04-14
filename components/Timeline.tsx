'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, GraduationCap, Rocket, BookOpen, Layers } from 'lucide-react'
import { useRef } from 'react'

const timelineData = [
  {
    year: '2025 – Present',
    type: 'work',
    title: 'Full-Stack Developer',
    company: 'Freelance & Projects',
    description:
      'Building and deploying production applications across web and mobile. Experienced with real-world deployments, debugging production issues, React Native / Expo mobile apps, and enterprise backend systems.',
    icon: Rocket,
  },
  {
    year: '2025',
    type: 'work',
    title: 'Full-Stack Transition',
    company: 'Backend Expansion',
    description:
      'Expanded into backend development with Node.js, Express, and Java. Worked with PostgreSQL and MongoDB. Built full systems like Tanina, a fintech platform. Transformed from frontend dev to full-stack engineer.',
    icon: Layers,
  },
  {
    year: '2024',
    type: 'project',
    title: 'Frontend Developer',
    company: 'Building Real Applications',
    description:
      'Started building real projects as a frontend developer using React and Tailwind CSS. Built systems like CareConnect, a Hospital Management System. Shifted from learning to building real applications.',
    icon: Code,
  },
  {
    year: '2023',
    type: 'education',
    title: 'Intensive Learning Phase',
    company: 'Udemy / Coursera / Frontend Masters',
    description:
      'Took professional online courses focused on JavaScript, modern frontend development, and best practices. This is where skills became solid and industry-relevant.',
    icon: BookOpen,
  },
  {
    year: '2022',
    type: 'education',
    title: 'University + Foundation',
    company: 'Kenya Methodist University',
    description:
      'Began formal studies in Computer Information Systems. Strengthened programming fundamentals and problem-solving skills. Combined university education with self-learning.',
    icon: GraduationCap,
  },
  {
    year: '2021',
    type: 'learning',
    title: 'Early Curiosity',
    company: 'Self-Taught',
    description:
      'Started learning HTML, CSS, and basic programming concepts. Built initial interest in software development and began the journey into tech.',
    icon: Code,
  },
]



export default function TimelinePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [100, 0, 0, 100])

  return (
    <motion.div
      ref={containerRef}
      style={{ opacity, y }}
      id="timeline"
      className="relative min-h-screen w-full overflow-hidden bg-black py-20 md:py-32"
    >
   
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/4 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[150px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-mono uppercase tracking-[0.3em] text-purple-400">
            Journey
          </p>
          <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            My{' '}
            <span className="bg-linear-to-rrom-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Timeline
            </span>
          </h2>
        </motion.div>

   
        <div className="relative">
     
          <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-linear-to-b from-purple-500/20 via-cyan-500/20 to-purple-500/20" />

          <div className="space-y-12">
            {timelineData.map((item, index) => {
              const isLeft = index % 2 === 0
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    isLeft ? 'justify-start' : 'justify-end'
                  }`}
                >
                 
                  <div
                    className={`w-full md:w-[45%] ${
                      isLeft ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-purple-500/30 hover:bg-white/10"
                    >
                      <div
                        className={`mb-3 flex items-center gap-3 ${
                          isLeft ? 'md:justify-end' : 'justify-start'
                        }`}
                      >
                        <span className="rounded-full bg-purple-500/20 px-4 py-1 text-sm font-bold text-purple-300">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-bold text-white md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mb-3 text-sm font-medium text-cyan-400">
                        {item.company}
                      </p>
                      <p className="text-sm leading-relaxed text-white/60">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

              
                  <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-black ${
                        item.type === 'work'
                          ? 'bg-purple-500'
                          : item.type === 'project'
                          ? 'bg-blue-500'
                          : item.type === 'education'
                          ? 'bg-cyan-500'
                          : 'bg-emerald-500'
                      }`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
