"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Github, X, Download } from "lucide-react";

const projects = [
  {
    title: "Tanina",
    subtitle: "Fintech Platform",
    description:
      "A scalable fintech platform managing user accounts, digital wallets, payments, transactions, analytics, notifications, and administrative operations. Built with a modern microservices architecture using Java 21+ and Spring Boot 3, emphasizing security and high performance for robust financial services delivery.",
    techStack: [
      "Java 21+",
      "Spring Boot 3",
      "Microservices",
      "PostgreSQL",
      "React Native",
      "TypeScript",
      "JWT/OAuth",
    ],
    images: [
      "/projects/tanina1.jpeg",
      "/projects/tanina3.jpeg",
      "/projects/tanina4.jpeg",
      "/projects/tanina5.jpeg",
    ],
    captions: [
      "User Dashboard & Wallet Overview",
      "Payment Processing Interface",
      "Transaction History & Analytics",
      "Admin Operations Panel",
    ],
    gradient: "from-amber-500/30 via-orange-500/10 to-transparent",
    accent: "text-amber-400",
    accentBg: "bg-amber-500/10 border-amber-500/20 text-amber-300",
    glowColor: "bg-amber-500/20",
    githubUrl: "https://github.com/shakotgabriel/tanina-mobile",
    liveUrl: "https://github.com/shakotgabriel/tanina-mobile",
    apkUrl: "/projects/Taninademo",
    number: "01",
    features: [
      "Microservices architecture with independent deployment",
      "Digital wallet with balance management & transaction history",
      "Secure payment processing with third-party gateway integration",
      "Real-time analytics & spending pattern visualization",
      "Push/email/SMS notifications for transactions & alerts",
      "Admin dashboard for user management & auditing",
    ],
    demoCredentials: {
      password: "Tanina@Demo2026!",
      users: [
        { role: "Customer", phone: "abuk.customer@example.com" },
        { role: "Customer", phone: "mabior.customer@example.com" },
        { role: "Merchant", phone: "nyamal.merchant@example.com" },
        { role: "Agent", phone: "achol.agent@example.com" },
      ],
    },
  },
  {
    title: "Ejar",
    subtitle: "Real Estate Marketplace",
    description:
      "A full-stack real estate marketplace enabling property owners to list rentals and buyers to discover, filter, and inquire about properties. Features advanced search with geolocation filters, real-time chat, Zustand state management, and a Django REST API backed by PostgreSQL with spatial queries.",
    techStack: [
      "React.js",
      "Zustand",
      "Django",
      "Django REST Framework",
      "PostgreSQL",
      "PostGIS",
      "Tailwind CSS",
    ],
    images: [
      "/projects/ejar1.png",
      "/projects/ejar2.png",
      "/projects/ejar3.png",
      "/projects/ejar4.png",
    ],
    captions: [
      "Property Listings Dashboard",
      "Search & Filters",
      "Property Detail View",
      "Admin Dashboard & Analytics",
    ],
    gradient: "from-rose-500/30 via-pink-500/10 to-transparent",
    accent: "text-rose-400",
    accentBg: "bg-rose-500/10 border-rose-500/20 text-rose-300",
    glowColor: "bg-rose-500/20",
    githubUrl: "https://github.com/shakotgabriel/EJAR-PROPERTY-",
    liveUrl: "https://ejar-property.onrender.com",
    number: "02",
    features: [
      "Advanced search with geolocation & spatial filters",
      "Real-time chat between buyers and property owners",
      "PostGIS-powered location-based property discovery",
      "Zustand state management for seamless UX",
      "Role-based dashboards for users and admins",
    ],
  },
  {
    title: "POS System",
    subtitle: "Offline-Capable Desktop App",
    description:
      "An offline-capable point-of-sale desktop application for retail businesses. Built with Electron for cross-platform deployment, NestJS for business logic, and React.js for the cashier interface. Supports barcode scanning, inventory management, receipt printing, and automatic cloud sync.",
    techStack: [
      "Electron",
      "NestJS",
      "React.js",
      "TypeScript",
      "SQLite",
      "IndexedDB",
    ],
    images: [
      "/projects/pos1.png",
      "/projects/pos2.png",
      "/projects/pos3.png",
      "/projects/pos4.png",
    ],
    captions: [
      "Product Inventory",
      "Checkout & Cart",
      "Sales Reports",
      "Settings & Configuration",
    ],
    gradient: "from-violet-500/30 via-purple-500/10 to-transparent",
    accent: "text-violet-400",
    accentBg: "bg-violet-500/10 border-violet-500/20 text-violet-300",
    glowColor: "bg-violet-500/20",
    githubUrl: "https://github.com/shakotgabriel/Possystem",
    liveUrl: "https://github.com/shakotgabriel/Possystem",
    number: "03",
    features: [
      "Offline capability with local SQLite database",
      "Barcode scanning for quick product lookup",
      "Real-time inventory tracking and alerts",
      "Receipt printing with customizable templates",
      "Automatic cloud sync when online",
      "Multi-platform desktop deployment via Electron",
    ],
  },
  {
    title: "HMS",
    subtitle: "Hospital Management System",
    description:
      "A production-grade, security-first REST API for real hospital operations — built with Java Spring Boot and PostgreSQL. Features JWT-based auth with explicit role-gated routes, full staff lifecycle management (admin, receptionist, doctor, cashier), patient records, appointments, billing, and prescription workflows with clean layered architecture.",
    techStack: [
      "Java 17+",
      "Spring Boot",
      "Spring Security",
      "PostgreSQL",
      "Spring Data JPA",
      "JWT",
      "Maven",
      "Docker",
    ],
    images: [
      "/projects/careconnect-1.svg",
      "/projects/careconnect-2.svg",
      "/projects/careconnect-3.svg",
      "/projects/careconnect-4.svg",
    ],
    captions: [
      "Auth & Role-Based Access",
      "Patient & Appointment Workflows",
      "Billing & Prescription Management",
      "Admin Operations Dashboard",
    ],
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
    accent: "text-emerald-400",
    accentBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
    glowColor: "bg-emerald-500/20",
    githubUrl: "https://github.com/shakotgabriel/Hospital-management-system",
    liveUrl: "https://github.com/shakotgabriel/Hospital-management-system",
    number: "04",
    features: [
      "JWT-based authentication with explicit role-gated routes",
      "Full staff lifecycle: admin, receptionist, doctor, cashier roles",
      "Patient records, appointments, and prescription workflows",
      "Billing lifecycle — issue, partial payment, paid, void",
      "Consistent API response envelope & centralized exception handling",
      "Dockerized deployment with PostgreSQL",
    ],
  },
  
];


function ImageCarousel({
  images,
  captions,
  accent,
}: {
  images: string[];
  captions: string[];
  accent: string;
}) {
  const [current, setCurrent] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxOpen, current, prev, next]);

  return (
    <div className="relative w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/50 shadow-2xl shadow-black/50">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08 }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 0.4] }}
            className="absolute inset-0 cursor-zoom-in"
            onClick={() => setLightboxOpen(true)}
          >
            <Image
              src={images[current]}
              alt={captions[current]}
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
              priority
            />
          </motion.div>
        </AnimatePresence>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 backdrop-blur-md transition-all hover:bg-black/80 hover:scale-110"
        >
          <ChevronLeft className="h-5 w-5 text-white" />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 backdrop-blur-md transition-all hover:bg-black/80 hover:scale-110"
        >
          <ChevronRight className="h-5 w-5 text-white" />
        </button>

        <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/90 via-black/40 to-transparent px-5 py-4">
          <p className={`text-sm font-medium ${accent}`}>
            {captions[current]}
          </p>
        </div>
      </div>

      <div className="mt-4 flex gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`relative aspect-video w-1/4 overflow-hidden rounded-xl border-2 transition-all duration-300 ${
              i === current
                ? "border-white/50 brightness-100 scale-[1.03]"
                : "border-white/5 brightness-[0.35] hover:brightness-[0.6]"
            }`}
          >
            <Image
              src={img}
              alt={captions[i]}
              fill
              sizes="(max-width: 1024px) 25vw, 14vw"
              className="object-cover"
            />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={() => setLightboxOpen(false)}
          >
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxOpen(false); }}
              className="absolute top-4 right-4 z-[60] rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white hover:bg-white/20 z-50"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex items-center justify-center w-[90vw] h-[85vh]"
            >
              <Image
                src={images[current]}
                alt={captions[current]}
                fill
                className="object-contain"
                sizes="90vw"
              />
            </motion.div>
            <p className={`absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-sm font-medium ${accent} bg-black/50 px-4 py-2 rounded-full backdrop-blur-md z-50`}>
              {captions[current]}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ProjectSection({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["5%", "-3%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-5%"]);
 
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0, 1, 1]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    [0.98, 1, 1]
  );
  const numberX = useTransform(scrollYProgress, [0, 0.5, 1], ["-100%", "0%", "100%"]);

 
  const isReversed = index % 2 !== 0;

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
  
      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0"
      >
        <div
          className={`absolute ${
            isReversed ? "right-0" : "left-0"
          } top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full ${project.glowColor} blur-[180px] opacity-40`}
        />
        <div
          className={`absolute ${
            isReversed ? "left-1/4" : "right-1/4"
          } bottom-0 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[150px] opacity-30`}
        />
      </motion.div>

      
      <motion.div
        style={{ x: numberX, opacity: useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 0.08, 0.08, 0]) }}
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none"
      >
        <span className="text-[20rem] font-bold leading-none text-white md:text-[28rem]">
          {project.number}
        </span>
      </motion.div>

      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20 lg:px-12"
      >
        <div
          className={`flex w-full flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 ${
            isReversed ? "lg:flex-row-reverse" : ""
          }`}
        >
        
          <motion.div style={{ y: contentY }} className="flex-1 min-w-0 space-y-6">
          
            <motion.div
              initial={{ opacity: 0, x: isReversed ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <span className={`text-sm font-mono font-bold ${project.accent}`}>
                {project.number}
              </span>
              <div className={`h-px flex-1 max-w-16 ${project.accent} opacity-30 bg-current`} />
              <span className="text-sm text-white/60 uppercase tracking-widest">
                {project.subtitle}
              </span>
            </motion.div>

      
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
              className="text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              {project.title}
            </motion.h2>

        
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="max-w-lg text-base leading-relaxed text-white/70 md:text-lg"
            >
              {project.description}
            </motion.p>

            {/* Features List */}
            {project.features && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider">
                  Key Features
                </h4>
                <ul className="space-y-1.5">
                  {project.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-2 text-sm text-white/60"
                    >
                      <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${project.accent.replace('text-', 'bg-').replace('400', '500')}`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2 pt-2"
            >
              {project.techStack.map((tech, i) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35 + i * 0.06, duration: 0.4 }}
                  viewport={{ once: true }}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium ${project.accentBg}`}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>

       
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-3 pt-4"
            >
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <Github className="h-4 w-4" />
                Source Code
              </motion.a>
              {project.apkUrl ? (
                <motion.a
                  href={project.apkUrl}
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <Download className="h-4 w-4" />
                  Download App
                </motion.a>
              ) : (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </motion.a>
              )}
            </motion.div>

            {/* Demo Credentials */}
            {"demoCredentials" in project && project.demoCredentials && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                viewport={{ once: true }}
                className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
              >
                <h4 className="text-sm font-medium text-white/50 uppercase tracking-wider mb-3">
                  Demo Login Credentials
                </h4>
                <p className="text-xs text-white/40 mb-2">
                  Download the APK and use any of these accounts to explore the app:
                </p>
                <div className="space-y-1.5">
                  {project.demoCredentials.users.map((user: { role: string; phone: string }) => (
                    <div key={user.phone} className="flex items-center gap-2 text-sm">
                      <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${project.accentBg}`}>
                        {user.role}
                      </span>
                      <span className="text-white/70 font-mono text-xs">{user.phone}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-3 flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2">
                  <span className="text-xs text-white/40">Password:</span>
                  <code className="text-xs font-mono text-amber-300">{project.demoCredentials.password}</code>
                </div>
              </motion.div>
            )}
          </motion.div>

     
          <motion.div style={{ y: imageY }} className="flex-1 min-w-0 lg:max-w-[80%] w-full">
            <motion.div
              initial={{ opacity: 0, x: isReversed ? -60 : 60, rotateY: isReversed ? 5 : -5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              viewport={{ once: true }}
            >
              <ImageCarousel
                images={project.images}
                captions={project.captions}
                accent={project.accent}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl px-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
          className="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent origin-left"
        />
      </div>
    </section>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-3">
      <div className="relative h-32 w-[2px] rounded-full bg-white/10 overflow-hidden">
        <motion.div
          style={{ scaleY, transformOrigin: "top" }}
          className="absolute inset-0 bg-linear-to-b from-blue-400 to-violet-400 rounded-full"
        />
      </div>
      {projects.map((p, i) => (
        <a
          key={p.number}
          href={`#project-${i}`}
          className="group relative flex items-center"
        >
          <div className="h-2 w-2 rounded-full bg-white/20 transition-all group-hover:bg-white/60 group-hover:scale-150" />
          <span className="absolute right-5 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-xs text-white/60 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm border border-white/10">
            {p.title}
          </span>
        </a>
      ))}
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <div className="relative bg-black">
      <ScrollProgress />

     
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-blue-500/10 blur-[180px]" />
          <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[150px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-mono text-blue-400 uppercase tracking-[0.3em] mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Featured{" "}
            <span className="bg-linear-to-r from-blue-400 via-violet-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-white/40 max-w-xl mx-auto"
          >
            Scroll down to explore each project in detail
          </motion.p>

        
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="mt-12"
          >
            <div className="mx-auto h-10 w-6 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-1.5 rounded-full bg-white/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

     
      {projects.map((project, i) => (
        <div key={project.title} id={`project-${i}`} className="relative">
          <ProjectSection project={project} index={i} />
        </div>
      ))}

    
      <section className="relative flex items-center justify-center py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 bottom-0 -translate-x-1/2 h-[300px] w-[600px] rounded-full bg-blue-500/5 blur-[150px]" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 text-center"
        >
          <p className="text-white/30 text-sm">
            More projects on{" "}
            <a
              href="https://github.com/shakotgabriel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}