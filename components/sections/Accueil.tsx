"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, ArrowUpRight, Sparkles } from "lucide-react";
import Face from "../Face";

// Icônes des technologies
import { 
  SiHtml5, 
  SiCss3, 
  SiPhp, 
  SiLaravel, 
  SiPython,  
  SiDjango, 
  SiVuedotjs, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiBootstrap, 
  SiPostgresql,
  SiMysql,
  SiGit, 
  SiPostman,
  
} from "react-icons/si";
import { VscAzureDevops } from "react-icons/vsc";
import TfsIcon from "../icons/TfsIcon";

export default function Accueil() {
  const techStack = [
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS", icon: SiCss3, color: "#1572B6" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
    { name: "Vue.js", icon: SiVuedotjs, color: "#4FC08D" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "Git", icon: SiGit, color: "#F05032" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Azure DevOps", icon: VscAzureDevops, color: "#0078D4" },
    { name: "TFS Server", icon: TfsIcon, color: "#5C2D91" },

  ];

  const doubledStack = [...techStack, ...techStack];

  return (
    <div 
      className="flex flex-col justify-start relative min-h-[80vh]"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    >

      {/* Section 2 colonnes */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center mb-16">
        
        {/* Colonne gauche - Textes (3/5) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff00] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00ff00]" />
            </span>
            <span className="text-xs font-medium text-neutral-600">Disponible pour projets</span>
          </motion.div>
          
          {/* Titre Zigzag */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mb-8"
          >
            {/* SVG Zigzag Line */}
            <svg
              className="absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 340"
              fill="none"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M 180 35 
                   L 320 35 
                   L 320 90 
                   L 50 90 
                   L 50 150 
                   L 280 150 
                   L 280 210 
                   L 80 210
                   L 80 270
                   L 250 270"
                stroke="#00ff00"
                strokeWidth="2"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.5, delay: 0.5, ease: "easeInOut" }}
                style={{
                  filter: "drop-shadow(0 0 8px #00ff00)"
                }}
              />
              {/* Points lumineux */}
              <motion.circle
                cx="180"
                cy="35"
                r="4"
                fill="#00ff00"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
                style={{ filter: "drop-shadow(0 0 6px #00ff00)" }}
              />
              <motion.circle
                cx="50"
                cy="90"
                r="4"
                fill="#00ff00"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1 }}
                style={{ filter: "drop-shadow(0 0 6px #00ff00)" }}
              />
              <motion.circle
                cx="280"
                cy="150"
                r="4"
                fill="#00ff00"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 1.5 }}
                style={{ filter: "drop-shadow(0 0 6px #00ff00)" }}
              />
              <motion.circle
                cx="80"
                cy="210"
                r="4"
                fill="#00ff00"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2 }}
                style={{ filter: "drop-shadow(0 0 6px #00ff00)" }}
              />
              <motion.circle
                cx="250"
                cy="270"
                r="4"
                fill="#00ff00"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 2.5 }}
                style={{ filter: "drop-shadow(0 0 6px #00ff00)" }}
              />
            </svg>

            {/* Textes */}
            <div className="relative z-10 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.2]">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-neutral-900"
              >
                Développeuse
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-neutral-900 text-right"
              >
                Web
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-[#00ff00] text-center text-5xl md:text-6xl lg:text-7xl"
                style={{ textShadow: "0 0 20px rgba(0,255,0,0.5)" }}
              >
                &
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="text-neutral-400"
              >
                Assurance
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="text-neutral-900 text-right"
              >
                Qualité
              </motion.div>
            </div>
          </motion.div>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="text-neutral-500 text-lg leading-relaxed mb-8 max-w-lg"
          >
            Je développe des applications web performantes et garantis leur qualité à travers des tests rigoureux.
          </motion.p>

          {/* CTA + Réseaux */}

          {/* CTA + Réseaux */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 1.4 }}
  className="flex flex-wrap items-center gap-4"
>
  <motion.button
    onClick={() => {
      window.dispatchEvent(new CustomEvent("navigateTo", { detail: "contact" }));
    }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white text-sm font-medium rounded-full hover:shadow-[0_0_30px_rgba(0,255,0,0.2)] transition-all duration-300"
  >
    Me contacter
    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
  </motion.button>

  <motion.button
    onClick={() => {
      window.dispatchEvent(new CustomEvent("navigateTo", { detail: "projets" }));
    }}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="flex items-center gap-2 px-6 py-3 text-neutral-600 text-sm font-medium rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm hover:border-neutral-300 hover:bg-white transition-all"
  >
    Voir projets
  </motion.button>
  
  <div className="hidden sm:block w-[1px] h-8 bg-neutral-200 mx-2" />
  
  <div className="flex items-center gap-1">
    {[
      { href: "#", icon: Github },
      { href: "https://www.linkedin.com/in/claudine-aboki/", icon: Linkedin },
    ].map((social, index) => (
      <motion.a
        key={index}
        href={social.href}
        target="_blank"
        whileHover={{ y: -3, scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-10 h-10 text-neutral-400 rounded-xl flex items-center justify-center hover:text-neutral-900 hover:bg-white/80 transition-all"
      >
        <social.icon size={18} />
      </motion.a>
    ))}
  </div>
</motion.div>
        </motion.div>

        {/* Colonne droite - Carte (2/5) */}
        <motion.div
  initial={{ opacity: 0, x: 30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.5 }}
  className="lg:col-span-2 flex justify-center lg:justify-end"
>
  <Face />
</motion.div>

      </div>

      {/* Stack technique */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="w-full"
      >
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-medium text-neutral-400 uppercase tracking-[0.2em]">
            Technologies
          </span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-neutral-200 to-transparent" />
        </div>

        <div className="relative overflow-hidden py-3">
          
          {/* Gradient fade gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#fafafa] to-transparent z-10 pointer-events-none" />
          
          {/* Gradient fade droite */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#fafafa] to-transparent z-10 pointer-events-none" />
          
          {/* Marquee */}
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex gap-6 w-max items-center"
          >
            {doubledStack.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-neutral-100 shadow-sm hover:shadow-md hover:border-neutral-200 transition-all group"
                >
                  <IconComponent 
                    size={18} 
                    style={{ color: tech.color }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors whitespace-nowrap">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>

    </div>
  );
}