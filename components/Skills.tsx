
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiDjango,
  SiNestjs,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiLinux,
  SiJest,
  SiSpringboot,
  SiPostman,
  SiGraphql,
  SiPrisma,
  SiRedis,
  SiMysql,
  SiElectron,
  SiJenkins,
  SiKubernetes,
} from 'react-icons/si'


const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-cyan-400 to-blue-500',
    skills: [
      { name: 'React.js', icon: SiReact },
      { name: 'Next.js', icon: SiNextdotjs },
      { name: 'React Native', icon: SiReact },
      { name: 'Electron', icon: SiElectron },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      
      { name: 'Zustand', icon: SiReact },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-400 to-emerald-500',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs },
      { name: 'Django', icon: SiDjango },
      { name: 'NestJS', icon: SiNestjs },
      { name: 'Spring Boot', icon: SiSpringboot },

  
    ],
  },
  {
    title: 'Database & APIs',
    color: 'from-orange-400 to-red-500',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Redis', icon: SiRedis },
      { name: 'REST APIs', icon: SiPostman },
      { name: 'GraphQL', icon: SiGraphql },
      { name: 'Prisma', icon: SiPrisma },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    title: 'DevOps & Tools',
    color: 'from-purple-400 to-pink-500',
    skills: [
      { name: 'Docker', icon: SiDocker },
      { name: 'Git', icon: SiGit },

      { name: 'GitHub Actions', icon: SiGithubactions },
      { name: 'Linux', icon: SiLinux },
      { name: 'Jest', icon: SiJest },
      { name: 'Jenkins', icon: SiJenkins },
      { name: 'Kubernetes', icon: SiKubernetes },
    ],
  },
]



export default function SkillsPage() {
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
      id="skills"
      className="relative min-h-screen w-full overflow-hidden bg-black py-20 md:py-32"
    >
     
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[180px]" />
        <div className="absolute left-1/3 bottom-1/3 h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
     
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-sm font-mono uppercase tracking-[0.3em] text-cyan-400">
            Expertise
          </p>
          <h2 className="text-5xl font-bold text-white md:text-6xl lg:text-7xl">
            Technical{' '}
            <span className="bg-linear-to-r from-cyan-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="space-y-10 w-full max-w-xl">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: catIndex * 0.15 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3
                  className={`mb-6 text-2xl font-bold bg-linear-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = skill.icon
                    return (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: catIndex * 0.1 + skillIndex * 0.05,
                          ease: 'easeOut',
                        }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                      >
                        <Icon className="text-xl text-white/80" />
                        <span className="text-sm font-medium text-white">
                          {skill.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
