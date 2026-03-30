// components/Face.tsx
"use client";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Face() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [mouthOpen, setMouthOpen] = useState(0);
  
  // Position des yeux
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring pour des mouvements fluides
  const smoothMouseX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 300, damping: 30 });
  
  // Transformer la position de la souris en mouvement des yeux (limité)
  const leftEyeX = useTransform(smoothMouseX, [-200, 200], [-12, 12]);
  const leftEyeY = useTransform(smoothMouseY, [-200, 200], [-10, 10]);
  const rightEyeX = useTransform(smoothMouseX, [-200, 200], [-12, 12]);
  const rightEyeY = useTransform(smoothMouseY, [-200, 200], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Position relative au centre du visage
      const relativeX = e.clientX - centerX;
      const relativeY = e.clientY - centerY;
      
      mouseX.set(relativeX);
      mouseY.set(relativeY);
      
      // Calculer la distance pour l'ouverture de la bouche
      const distance = Math.sqrt(relativeX ** 2 + relativeY ** 2);
      const maxDistance = 500;
      const openAmount = Math.max(0, 1 - distance / maxDistance);
      
      // Vitesse du mouvement pour ouvrir la bouche
      const speed = Math.sqrt(
        Math.pow(e.movementX, 2) + Math.pow(e.movementY, 2)
      );
      const speedOpenAmount = Math.min(1, speed / 20);
      
      setMouthOpen(Math.max(openAmount * 0.3, speedOpenAmount));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Fermer la bouche progressivement quand on ne bouge pas
  useEffect(() => {
    const interval = setInterval(() => {
      setMouthOpen((prev) => Math.max(0, prev - 0.05));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-80 h-96 flex items-center justify-center"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glow effect */}
      <motion.div 
        className="absolute inset-0 bg-[#00ff00]/20 rounded-3xl blur-3xl"
        animate={{
          scale: isHovering ? 1.2 : 1,
          opacity: isHovering ? 0.5 : 0.2,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Container principal */}
      <motion.div
        className="relative bg-neutral-900 rounded-3xl border border-neutral-800 w-full h-full flex items-center justify-center overflow-hidden"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Gradient line top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff00]/60 to-transparent" />
        
        {/* Le visage avec accolades */}
        <div className="relative flex items-center justify-center gap-3">
          
          {/* Accolade gauche { */}
          <motion.span
            className="text-[#00ff00] text-9xl font-bold select-none leading-none"
            style={{ 
              textShadow: "0 0 30px rgba(0,255,0,0.6), 0 0 60px rgba(0,255,0,0.3)",
              fontFamily: "JetBrains Mono, monospace"
            }}
            animate={{
              x: isHovering ? -8 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {"{"}
          </motion.span>
          
          {/* Zone du visage (yeux + bouche) */}
          <div className="flex flex-col items-center gap-6 w-28">
            
            {/* Les yeux */}
            <div className="flex items-center gap-8">
              {/* Œil gauche */}
              <div className="relative w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center border-2 border-neutral-700 shadow-inner">
                <motion.div
                  className="w-6 h-6 bg-[#00ff00] rounded-full relative"
                  style={{
                    x: leftEyeX,
                    y: leftEyeY,
                    boxShadow: "0 0 15px #00ff00, 0 0 30px #00ff00, 0 0 45px #00ff00"
                  }}
                >
                  {/* Reflet */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-90" />
                </motion.div>
              </div>
              
              {/* Œil droit */}
              <div className="relative w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center border-2 border-neutral-700 shadow-inner">
                <motion.div
                  className="w-6 h-6 bg-[#00ff00] rounded-full relative"
                  style={{
                    x: rightEyeX,
                    y: rightEyeY,
                    boxShadow: "0 0 15px #00ff00, 0 0 30px #00ff00, 0 0 45px #00ff00"
                  }}
                >
                  {/* Reflet */}
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full opacity-90" />
                </motion.div>
              </div>
            </div>
            
            {/* La bouche */}
            <motion.div
              className="relative w-16 bg-neutral-800 rounded-full overflow-hidden border-2 border-neutral-700 flex items-center justify-center"
              animate={{
                height: 10 + mouthOpen * 32,
              }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              {/* Intérieur de la bouche */}
              <motion.div
                className="absolute inset-1.5 bg-red-900/60 rounded-full"
                animate={{
                  opacity: mouthOpen > 0.2 ? 1 : 0,
                }}
              />
              
              {/* "Langue" ou effet intérieur */}
              <motion.div
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-6 h-3 bg-red-400/70 rounded-t-full"
                animate={{
                  opacity: mouthOpen > 0.4 ? 1 : 0,
                  scale: mouthOpen > 0.4 ? 1 : 0.5,
                }}
              />
            </motion.div>
          </div>
          
          {/* Accolade droite } */}
          <motion.span
            className="text-[#00ff00] text-9xl font-bold select-none leading-none"
            style={{ 
              textShadow: "0 0 30px rgba(0,255,0,0.6), 0 0 60px rgba(0,255,0,0.3)",
              fontFamily: "JetBrains Mono, monospace"
            }}
            animate={{
              x: isHovering ? 8 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {"}"}
          </motion.span>
        </div>
        
        {/* Infos en bas de la carte */}
        <div className="absolute bottom-6 left-6 right-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500">Projets</span>
              <span className="text-white font-semibold text-base">12+</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-neutral-500">Expérience</span>
              <span className="text-white font-semibold text-base">4+ ans</span>
            </div>
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ff00] opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#00ff00]" />
                </span>
                <span className="text-neutral-400 text-sm">Open to work</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Nom en haut */}
        <div className="absolute top-6 left-6">
          <h2 className="text-white text-2xl font-bold">Claudine</h2>
          <p className="text-neutral-500 text-sm font-medium">Dev & QA Tester</p>
        </div>
      </motion.div>
      
      {/* Cartes arrière-plan */}
      <div className="absolute top-4 -left-4 w-80 h-96 bg-neutral-200 rounded-3xl -z-10" />
      <div className="absolute top-8 -left-8 w-80 h-96 bg-neutral-100 rounded-3xl -z-20" />
    </div>
  );
}