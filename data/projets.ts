export interface Projet {
    id: number;
    slug: string;
    titre: string;
    description: string;
    longDescription?: string;
    tech: string[];
    image: string;
    gallery?: string[];
    demo?: string | null;
    status?: string;
    github?: string;
    features?: string[];
}

export const projets: Projet[] = [
    {
        id: 1,
        slug: "doc-emploi",
        titre: "DocEmploi",
        description: "Plateforme de recherche d’emploi dans le domaine de la santé.",
        longDescription: "DocEmploi est une solution complète permettant aux professionnels de la santé de trouver des opportunités de carrière adaptées. La plateforme intègre un système de filtrage avancé, une gestion de profil candidat et un tableau de bord pour les recruteurs.",
        tech: ["Next.js", "TypeScript", "Supabase", "Motion framer"],
        image: "/images/projects/docemploi.png",
        gallery: ["/images/projects/docemploi.png", "/images/projects/docadmin.png"],
        demo: "https://docemploi.com",
        features: [
            "Recherche multicritères (spécialité, lieu, type de contrat)",
            "Gestion de CV et lettres de motivation",
            "Espace recruteur avec suivi des candidatures",
            "Notifications email en temps réel"
        ]
    },
    {
        id: 2,
        slug: "claudine-dev",
        titre: "Claudine.Dev",
        description: "Portfolio développeur présentant mes compétences full-stack et mes projets SaaS.",
        longDescription: "Mon portfolio personnel conçu avec Next.js pour une performance optimale. Il met en avant mes réalisations avec des animations fluides grâce à Framer Motion et un design épuré.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        image: "/images/projects/porto.png",
        gallery: ["/images/projects/proj1.png", "/images/projects/proj2.png"],
        demo: "https://claudiadev.vercel.app/",
        features: [
            "Design responsive et mode sombre",
            "Animations interactives",
            "Optimisation SEO et performance (Core Web Vitals)",
            "Architecture moderne avec App Router"
        ]
    },
    {
        id: 3,
        slug: "stockpilote",
        titre: "StockPilote",
        description: "Solution SaaS de gestion de stock et POS avec Laravel/FilamentPHP et application mobile React Native.",
        longDescription: "StockPilote est un écosystème moderne de gestion de stock et de point de vente (POS). Il combine une application web puissante sous Laravel et FilamentPHP, un site SaaS d'acquisition clients, et une application mobile en React Native conçue spécifiquement pour le scan rapide des produits via l'appareil photo.",
        tech: ["Laravel", "FilamentPHP", "React Native", "MySQL", "Tailwind CSS"],
        image: "/images/projects/stockpilote.png",
        gallery: [
            "/images/projects/stockpilote.png",
            "/images/projects/stockpilote_login.png"
        ],
        demo: "https://www.stockpilote.shop/",
        features: [
            "Gestion de stock centralisée et point de vente (POS) complet",
            "Application mobile compagnon React Native pour le scan de codes-barres",
            "Interface d'administration intuitive développée avec FilamentPHP",
            "Site vitrine et plateforme SaaS pour la gestion des abonnements",
            "Suivi des ventes, rapports financiers et alertes de stock bas en temps réel"
        ]
    },
    {
        id: 4,
        slug: "portfolio-data-analyst",
        titre: "Portfolio Data Analyst",
        description: "Portfolio moderne pour un analyste BI & Data avec présentation de projets et dashboards.",
        longDescription: "Un vitrine élégante pour les experts en données, mettant l'accent sur la visualisation et l'interprétation des informations. Intègre des sections pour les études de cas et les visualisations interactives.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Recharts"],
        image: "/images/projects/portofolio-data.png",
        gallery: ["/images/projects/portofolio-data.png", "/images/projects/porto.png"],
        demo: "https://claudeportofolio.vercel.app/",
        features: [
            "Visualisations de données interactives",
            "Présentation de cas d'études",
            "Layout fluide et moderne",
            "Navigation optimisée"
        ]
    },
    {
        id: 5,
        slug: "maya",
        titre: "Maya",
        description: "Application de prise de rendez-vous médicaux via assistant IA conversationnel.",
        longDescription: "Maya est une application intelligente qui révolutionne la prise de rendez-vous médicaux. Grâce à un assistant IA conversationnel propulsé par Gemini, les patients peuvent réserver, modifier ou annuler leurs rendez-vous en langage naturel, simplifiant ainsi la gestion des plannings médicaux.",
        tech: ["Laravel 13", "Vue 3", "Inertia v3", "Tailwind CSS v4", "Laravel AI SDK (Gemini)"],
        image: "/images/projects/maya.png",
        gallery: ["/images/projects/maya.png", "/images/projects/chat.png"],
        demo: null,
        features: [
            "Prise de rendez-vous via assistant IA conversationnel",
            "Reconnaissance du langage naturel avec Gemini",
            "Gestion des disponibilités et plannings médicaux",
            "Notifications et rappels automatiques"
        ]
    },
    {
        id: 6,
        slug: "axion",
        titre: "Axion",
        description: "Application de gestion de projet et de timesheet pour équipes.",
        longDescription: "Axion est une solution complète de gestion de projet et de suivi du temps. Elle permet aux équipes de planifier leurs tâches, suivre le temps passé, générer des rapports et collaborer efficacement. L'interface moderne et réactive offre une expérience utilisateur fluide.",
        tech: ["Laravel", "Vue.js", "Inertia", "Tailwind CSS"],
        image: "/images/projects/project.png",
        gallery: ["/images/projects/tasks.png", "/images/projects/timeentry.png"],
        status: "",
        demo: null,
        features: [
            "Gestion de projets, tâches et jalons",
            "Saisie et validation de timesheet",
            "Rapports et tableaux de bord",
            "Gestion des utilisateurs et rôles"
        ]
    },
];
