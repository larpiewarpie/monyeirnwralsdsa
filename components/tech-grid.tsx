"use client"

import { motion } from "framer-motion"

type TechGridProps = {
  inView: boolean
}

export default function TechGrid({ inView }: TechGridProps) {
  const technologies = [
    {
      name: "TypeScript",
      icon: "devicon-typescript-plain colored",
    },
    {
      name: "JavaScript",
      icon: "devicon-javascript-plain colored",
    },
    {
      name: "Python",
      icon: "devicon-python-plain colored",
    },
    {
      name: "React",
      icon: "devicon-react-original colored",
    },
    {
      name: "Next.js",
      customIcon: true,
      svgPath:
        "M119.616 80.771l-56.331 31.224-56.331-31.24 56.331-31.24 56.331 31.24zM7.905 95.306v31.368l48.419 27.442v-31.129L7.905 95.306zm103.737 31.368v-31.368l-48.419 27.682v31.129l48.419-27.442z M7.905 71.446l48.419 27.682 48.419-27.682-48.419-27.682L7.905 71.446z",
      viewBox: "0 0 128 128",
      color: "#ffffff",
    },
    {
      name: "Node.js",
      icon: "devicon-nodejs-plain colored",
    },
    {
      name: "C#",
      icon: "devicon-csharp-plain colored",
    },
    {
      name: "C++",
      icon: "devicon-cplusplus-plain colored",
    },
    {
      name: "C",
      icon: "devicon-c-plain colored",
    },
    {
      name: "Rust",
      customIcon: true,
      svgPath:
        "M64 0C28.64 0 0 28.64 0 64c0 35.36 28.64 64 64 64 35.36 0 64-28.64 64-64C128 28.64 99.36 0 64 0zm-1.252 14.752c1.584 0 2.976.576 4.128 1.728 1.152 1.152 1.728 2.544 1.728 4.128 0 1.584-.576 2.976-1.728 4.128-1.152 1.152-2.544 1.728-4.128 1.728-1.584 0-2.976-.576-4.128-1.728-1.152-1.152-1.728-2.544-1.728-4.128 0-1.584.576-2.976 1.728-4.128 1.152-1.152 2.544-1.728 4.128-1.728zm-9.504 22.464c.576-1.152 1.44-1.728 2.688-1.728h15.552c1.152 0 2.016.576 2.592 1.728.576 1.152.576 2.304 0 3.456l-8.064 27.36c1.728.576 3.456 1.44 5.184 2.592 1.728 1.152 3.264 2.496 4.608 4.032l13.824-4.032c1.152-.288 2.304 0 3.168.864.864.864 1.152 1.92.864 3.168l-2.304 9.216c-.288 1.152-1.152 1.92-2.304 2.304-1.152.288-2.304 0-3.168-.864l-8.64-8.64c-2.016-1.728-4.32-3.072-6.912-3.744-2.592-.864-5.184-.864-7.776-.288-2.592.576-4.896 1.728-6.912 3.456-2.016 1.728-3.456 3.744-4.32 6.048-.864 2.304-1.152 4.608-.864 7.2.288 2.592 1.152 4.896 2.592 6.912 1.44 2.016 3.456 3.744 5.76 4.896 2.304 1.152 4.896 1.728 7.488 1.44 2.592-.288 4.896-1.152 6.912-2.592 2.016-1.44 3.744-3.456 4.608-5.76.864-2.304 1.152-4.896.576-7.488h10.368c.576 3.744.288 7.488-.864 10.944-1.152 3.456-3.168 6.624-5.76 9.216-2.592 2.592-5.76 4.608-9.216 5.76-3.456 1.152-7.2 1.44-10.944.864-3.744-.576-7.2-2.016-10.08-4.32-2.88-2.304-5.184-5.184-6.624-8.64-1.44-3.456-2.016-7.2-1.44-10.944.576-3.744 2.016-7.2 4.32-10.08 2.304-2.88 5.184-5.184 8.64-6.624l-8.064-27.36c-.576-1.152-.576-2.304 0-3.456zm44.928 0c.576-1.152 1.44-1.728 2.688-1.728h15.552c1.152 0 2.016.576 2.592 1.728.576 1.152.576 2.304 0 3.456l-8.064 27.36c1.728.576 3.456 1.44 5.184 2.592 1.728 1.152 3.264 2.496 4.608 4.032l13.824-4.032c1.152-.288 2.304 0 3.168.864.864.864 1.152 1.92.864 3.168l-2.304 9.216c-.288 1.152-1.152 1.92-2.304 2.304-1.152.288-2.304 0-3.168-.864l-8.64-8.64c-2.016-1.728-4.32-3.072-6.912-3.744-2.592-.864-5.184-.864-7.776-.288-2.592.576-4.896 1.728-6.912 3.456-2.016 1.728-3.456 3.744-4.32 6.048-.864 2.304-1.152 4.608-.864 7.2.288 2.592 1.152 4.896 2.592 6.912 1.44 2.016 3.456 3.744 5.76 4.896 2.304 1.152 4.896 1.728 7.488 1.44 2.592-.288 4.896-1.152 6.912-2.592 2.016-1.44 3.744-3.456 4.608-5.76.864-2.304 1.152-4.896.576-7.488h10.368c.576 3.744.288 7.488-.864 10.944-1.152 3.456-3.168 6.624-5.76 9.216-2.592 2.592-5.76 4.608-9.216 5.76-3.456 1.152-7.2 1.44-10.944.864-3.744-.576-7.2-2.016-10.08-4.32-2.88-2.304-5.184-5.184-6.624-8.64-1.44-3.456-2.016-7.2-1.44-10.944.576-3.744 2.016-7.2 4.32-10.08 2.304-2.88 5.184-5.184 8.64-6.624l-8.064-27.36c-.576-1.152-.576-2.304 0-3.456z",
      viewBox: "0 0 128 128",
      color: "#DE4B25",
    },
    {
      name: "Go",
      icon: "devicon-go-original-wordmark colored",
    },
    {
      name: "PHP",
      icon: "devicon-php-plain colored",
    },
    {
      name: "Ruby",
      icon: "devicon-ruby-plain colored",
    },
    {
      name: "Perl",
      icon: "devicon-perl-plain colored",
    },
    {
      name: "MySQL",
      icon: "devicon-mysql-plain colored",
    },
    {
      name: "MongoDB",
      icon: "devicon-mongodb-plain colored",
    },
    {
      name: "Git",
      icon: "devicon-git-plain colored",
    },
    {
      name: "GitHub",
      icon: "devicon-github-original colored",
    },
    {
      name: "HTML",
      icon: "devicon-html5-plain colored",
    },
    {
      name: "CSS",
      icon: "devicon-css3-plain colored",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {technologies.map((tech, index) => (
          <motion.div key={index} variants={item} className="group">
            <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-lg p-4 h-full flex flex-col items-center justify-center text-center hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:-translate-y-1">
              {tech.customIcon ? (
                <svg viewBox={tech.viewBox} className="w-10 h-10 mb-3" fill={tech.color}>
                  <path d={tech.svgPath} />
                </svg>
              ) : (
                <i className={`${tech.icon} text-3xl mb-3`}></i>
              )}
              <span className="text-gray-400 group-hover:text-white transition-colors">{tech.name}</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  )
}
