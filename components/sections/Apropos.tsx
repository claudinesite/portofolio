"use client";
import { motion } from "framer-motion";
import { Code, Shield, TestTube, GraduationCap, Briefcase, Calendar, Database, Users } from "lucide-react";

const experiences = [
  {
    annee: "Mai 2025 - Présent",
    titre: "Bénévole - Projet communautaire",
    entreprise: "Civic Tech – Moncton, N.-B.",
    description: "Contribuer à la sécurité des projets civiques open source, mettre en œuvre des contrôles de sécurité et sensibiliser l'équipe.",
    technologies: ["Sécurité", "Open Source", "Contrôles"],
    icon: Users,
    couleur: "#00ff00",
  },
  {
    annee: "Avr. 2022 - Nov. 2024",
    titre: "QA Testeur",
    entreprise: "DLGL-Technologies Corporation – Blainville, QC (Télétravail)",
    description: "Tests logiciels complets, gestion des anomalies avec TFS et Azure DevOps, planification de campagnes Bug Bash, gestion des versions et amélioration continue des processus QA.",
    technologies: ["TFS", "Azure DevOps", "Visual Studio", "Tests Fonctionnels"],
    icon: TestTube,
    couleur: "#0078D4",
  },
  {
    annee: "Sept. - Déc. 2021",
    titre: "Instructrice en sécurité des bases de données",
    entreprise: "CCNB - Campus de Dieppe – Dieppe, N.-B.",
    description: "Enseignement à temps partiel du cours de sécurité des bases de données aux étudiants de première année.",
    technologies: ["Enseignement", "Sécurité BD", "SQL"],
    icon: GraduationCap,
    couleur: "#F7DF1E",
  },
  {
    annee: "Juin - Déc. 2021",
    titre: "DBA / Développeur Web",
    entreprise: "Société les jeux de l'Acadie – Moncton, N.-B.",
    description: "Modélisation et conceptualisation de base de données, création de formulaires de gestion des participants, travail collaboratif.",
    technologies: ["Base de données", "Web", "Modélisation"],
    icon: Database,
    couleur: "#FF2D20",
  },
  {
    annee: "Jan. - Juin 2021",
    titre: "Stagiaire en Cybersécurité",
    entreprise: "Bioscript Solution – Moncton, N.-B.",
    description: "Audit des comptes d'accès utilisateurs, extraction des rôles et privilèges, analyse des vulnérabilités.",
    technologies: ["Audit", "Vulnérabilités", "Sécurité"],
    icon: Shield,
    couleur: "#5C2D91",
  },
];

const competences = [
  { 
    categorie: "Développement", 
    skills: ["HTML/CSS", "PHP","Laravel", "Python", "Vue.js", "Next.js", "Django","tailwind","bootstrap"],
    icon: Code,
  },
  { 
    categorie: "Testing & QA", 
    skills: ["Tests Fonctionnels", "Tests de Régression", "Tests d'Intégration", "Bug Bash","Android","IOS","Windows","Linux", "Postman"],
    icon: TestTube,
  },
  { 
    categorie: "Outils", 
    skills: ["Intelligence Artificielle","Git", "Azure DevOps", "TFS 2013/2017", "Visual Studio", "VS Code"],
    icon: Briefcase,
  },
  { 
    categorie: "Sécurité & BD", 
    skills: ["Sécurité BD", "Audit", "Analyse de Vulnérabilités", "PostgreSQL", "MySQL", "Modélisation"],
    icon: Shield,
  },
];

export default function Apropos() {
  return (
    <div className="max-w-5xl">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#00ff00] shadow-[0_0_8px_#00ff00]" />
          <span className="text-sm text-neutral-500 uppercase tracking-wider">À propos</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Qui suis-je<span className="text-[#00ff00]">?</span>
        </h1>
        <p className="text-neutral-600 leading-relaxed max-w-7xl">
          Développeuse web et QA Tester basée au Canada avec une passion pour créer des applications performantes et garantir leur qualité.
        </p>
      </motion.div>

      {/* Stats rapides */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="grid grid-cols-3 gap-3 mb-12"
      >
        {[
          { nombre: "2+", label: "Années QA" },
          { nombre: "2+", label: "Années Dev" },
          { nombre: "1+", label: "Année Cyber" },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            className="text-center p-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl"
          >
            <div className="text-2xl md:text-3xl font-bold text-neutral-900">{stat.nombre}</div>
            <div className="text-xs text-neutral-500">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Timeline Parcours */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-12"
      >
        <div className="flex items-center gap-2 mb-6">
          <Calendar size={18} className="text-[#00ff00]" />
          <h2 className="text-xl font-bold">Mon Parcours</h2>
        </div>

        <div className="relative">
          {/* Ligne verticale centrale */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff00] via-neutral-300 to-transparent" />

          {/* Expériences */}
          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={exp.titre}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative flex ${isLeft ? 'justify-end' : 'justify-start'}`}
                >
                  {/* Point sur la timeline */}
                  <div 
                    className="absolute left-1/2 -translate-x-1/2 top-4 w-3 h-3 rounded-full border-2 border-white z-10"
                    style={{ 
                      backgroundColor: exp.couleur, 
                      boxShadow: `0 0 10px ${exp.couleur}60` 
                    }}
                  />

                  {/* Carte expérience */}
                  <div 
                    className={`w-[calc(50%-24px)] p-4 bg-white/90 backdrop-blur-sm border border-neutral-200 rounded-xl hover:shadow-md transition-all duration-300 ${isLeft ? 'mr-6' : 'ml-6'}`}
                  >
                    <div className="flex items-start gap-3">
                      <div 
                        className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                        style={{ backgroundColor: `${exp.couleur}15` }}
                      >
                        <Icon size={16} style={{ color: exp.couleur }} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span 
                            className="text-[10px] font-medium px-2 py-0.5 rounded-full shrink-0"
                            style={{ backgroundColor: `${exp.couleur}20`, color: exp.couleur }}
                          >
                            {exp.annee}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-neutral-900">{exp.titre}</h3>
                        <p className="text-xs text-neutral-500 mb-2">{exp.entreprise}</p>
                        <p className="text-xs text-neutral-600 leading-relaxed mb-3">{exp.description}</p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-1">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="text-[10px] px-2 py-0.5 bg-neutral-100 text-neutral-500 rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Compétences */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex items-center gap-2 mb-6">
          <Code size={18} className="text-[#00ff00]" />
          <h2 className="text-xl font-bold">Compétences</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {competences.map((comp, index) => {
            const Icon = comp.icon;
            return (
              <motion.div
                key={comp.categorie}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="p-4 bg-white/80 backdrop-blur-sm border border-neutral-200 rounded-xl hover:border-[#00ff00]/30 hover:shadow-[0_0_20px_rgba(0,255,0,0.1)] transition-all duration-300 group"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-neutral-900 text-[#00ff00] rounded-lg flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all">
                    <Icon size={16} />
                  </div>
                  <h3 className="font-bold text-sm text-neutral-900">{comp.categorie}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {comp.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="text-[11px] px-2 py-1 bg-neutral-100 text-neutral-600 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

    </div>
  );
}