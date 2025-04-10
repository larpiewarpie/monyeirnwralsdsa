"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion"
import ParticleBackground from "@/components/particle-background"
import TechGrid from "@/components/tech-grid"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 2000], [0, 1])
  const smoothProgress = useSpring(scrollProgress, { damping: 20, stiffness: 100 })

  // Refs for each section
  const homeRef = useRef(null)
  const experienceRef = useRef(null)
  const technologiesRef = useRef(null)

  // Check if sections are in view
  const homeInView = useInView(homeRef, { amount: 0.5 })
  const experienceInView = useInView(experienceRef, { amount: 0.3 })
  const technologiesInView = useInView(technologiesRef, { amount: 0.3 })

  // Update active section based on which section is in view
  useEffect(() => {
    if (homeInView) setActiveSection("home")
    else if (experienceInView) setActiveSection("experience")
    else if (technologiesInView) setActiveSection("technologies")
  }, [homeInView, experienceInView, technologiesInView])

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-black to-black pointer-events-none z-0" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <section id="home" ref={homeRef} className="min-h-[90vh] flex flex-col justify-center">
          <motion.div
            initial="hidden"
            animate={homeInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeInUp} className="text-gray-400 mb-2">
              hello, i'm
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            >
              eljefe
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 mb-8 leading-relaxed">
              cybersecurity specialist and polyglot developer with expertise in OSINT and penetration testing.
              passionate about building secure, scalable applications and uncovering digital footprints through
              innovative reconnaissance techniques.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex space-x-8 border-t border-gray-800 pt-6 mt-12">
              <button
                onClick={() => scrollToSection("home")}
                className={`${activeSection === "home" ? "text-white border-b-2 border-purple-500" : "text-gray-500"} pb-1 transition-colors duration-300`}
              >
                home
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className={`${activeSection === "experience" ? "text-white border-b-2 border-purple-500" : "text-gray-500"} pb-1 transition-colors duration-300`}
              >
                experience
              </button>
              <button
                onClick={() => scrollToSection("technologies")}
                className={`${activeSection === "technologies" ? "text-white border-b-2 border-purple-500" : "text-gray-500"} pb-1 transition-colors duration-300`}
              >
                technologies
              </button>
            </motion.div>
          </motion.div>
        </section>

        <section id="experience" ref={experienceRef} className="min-h-screen py-20">
          <motion.div
            initial="hidden"
            animate={experienceInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8">
              Experience
            </motion.h2>

            <motion.div variants={staggerContainer} className="space-y-12">
              <motion.div variants={fadeInUp} className="relative pl-8 border-l border-gray-800">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-purple-500"></div>
                <h3 className="text-xl font-semibold mb-2">Lead Developer at csint.ing</h3>
                <p className="text-gray-400 mb-4">2025 - Present</p>
                <p className="text-gray-300 leading-relaxed">
                  In 2025, I started developing csint.ing, a comprehensive OSINT platform designed for digital
                  investigators and security researchers. The platform integrates multiple data sources and provides
                  advanced reconnaissance tools for ethical intelligence gathering and threat analysis.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative pl-8 border-l border-gray-800">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-purple-500"></div>
                <h3 className="text-xl font-semibold mb-2">Self-taught Developer</h3>
                <p className="text-gray-400 mb-4">2020 - 2022</p>
                <p className="text-gray-300 leading-relaxed">
                  Started my coding journey, teaching myself programming fundamentals and web development. Focused on
                  learning JavaScript and Python while building small projects to strengthen my skills. This period laid
                  the foundation for my career in software development and cybersecurity.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        <section id="technologies" ref={technologiesRef} className="min-h-screen py-20">
          <motion.div initial="hidden" animate={technologiesInView ? "visible" : "hidden"} variants={staggerContainer}>
            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-12">
              Technologies & Tools
            </motion.h2>
            <TechGrid inView={technologiesInView} />
          </motion.div>
        </section>
      </div>

      {/* Progress indicator */}
      <motion.div
        className="fixed left-0 top-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 z-50"
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
      />
    </main>
  )
}
