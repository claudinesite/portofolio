export interface Projet {
    id: number;
    slug: string;
    titre: string;
    description: string;
    categorie: string;
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
        categorie: "Plateforme web",
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
        categorie: "Portfolio",
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
        categorie: "SaaS",
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
        categorie: "Portfolio",
        description: "Portfolio moderne pour un analyste BI & Data avec présentation de projets et dashboards.",
        longDescription: "Un vitrine élégante pour les experts en données, mettant l'accent sur la visualisation et l'interprétation des informations. Intègre des sections pour les études de cas et les visualisations interactives.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Recharts", "Claude Opus 4.6", "Gemini 3.5"],
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
        categorie: "SDK",
        description: "Application de prise de rendez-vous médicaux via assistant IA conversationnel.",
        longDescription: "Maya est une application intelligente qui révolutionne la prise de rendez-vous médicaux. Grâce à un assistant IA conversationnel propulsé par Gemini, les patients peuvent réserver, modifier ou annuler leurs rendez-vous en langage naturel, simplifiant ainsi la gestion des plannings médicaux.",
        tech: ["Laravel 13", "Vue 3", "Inertia v3", "Tailwind CSS v4", "Laravel AI SDK", "Gemini 3.6", "DeepSeek V4 Flash"],
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
        categorie: "SaaS",
        description: "Application de gestion de projet et de timesheet pour équipes.",
        longDescription: "Axion est une solution complète de gestion de projet et de suivi du temps. Elle permet aux équipes de planifier leurs tâches, suivre le temps passé, générer des rapports et collaborer efficacement. L'interface moderne et réactive offre une expérience utilisateur fluide.",
        tech: ["Laravel", "Vue.js", "Inertia", "Tailwind CSS", "DeepSeek V4 Flash", "GLM 5-2"],
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
    {
        id: 7,
        slug: "descake-bakery",
        titre: "Descake Bakery",
        categorie: "Landing page",
        description: "Landing page gourmande pour une boulangerie afro-canadienne et sa sélection de produits maison.",
        longDescription: "Descake Bakery présente une collection de saveurs préparées au Canada, du Chin-Chin aux Meat Pies en passant par les douceurs et le Shawarma. La landing page structure l'offre, valorise les produits et guide les visiteurs vers la commande, le devis ou le contact WhatsApp.",
        tech: ["Next.js", "React", "Responsive Design", "Animations", "GPT-5.6"],
        image: "/images/projects/descakes.png",
        gallery: [
            "/images/projects/descakes.png",
            "/images/projects/descakes-detail.png"
        ],
        demo: "https://descakes.vercel.app/",
        features: [
            "Catalogue organisé entre produits signatures, douceurs et repas",
            "Parcours de commande avec prise de contact directe",
            "Demandes de devis pour buffets, événements et groupes",
            "Mise en avant des points de service au Nouveau-Brunswick"
        ]
    },
    {
        id: 8,
        slug: "lecorce",
        titre: "L'Écorce",
        categorie: "Landing page",
        description: "Site vitrine premium pour un atelier d'ébénisterie d'art et de mobilier sur mesure.",
        longDescription: "L'Écorce est une expérience éditoriale dédiée au mobilier d'art, aux agencements d'exception et aux pièces uniques en bois noble. Le site présente les prestations, le savoir-faire de l'atelier, son processus de création et une sélection de réalisations signatures.",
        tech: ["Next.js", "React", "Responsive Design", "Internationalisation", "GPT-5.6", "Gemini 3.7"],
        image: "/images/projects/ecorce-lac.png",
        gallery: [
            "/images/projects/ecorce-lac.png",
            "/images/projects/ecorce-lac-detail.png"
        ],
        demo: "https://ecorce-lac.vercel.app/",
        features: [
            "Présentation des services résidentiels, professionnels et hôteliers",
            "Processus de création expliqué de la rencontre à l'installation",
            "Galerie de pièces signatures et collections permanentes",
            "Navigation bilingue en français et en anglais"
        ]
    },
    {
        id: 9,
        slug: "malt-social",
        titre: "Malt Social",
        categorie: "Landing page",
        description: "Landing page immersive pour une marque de bière artisanale pensée autour du produit et du partage.",
        longDescription: "Malt Social développe un univers de marque fort autour de la bière artisanale, des longues tablées et des histoires partagées. L'expérience combine typographie expressive, scène produit animée, storytelling de marque et parcours vers la boutique, la newsletter et les points de vente.",
        tech: ["Astro", "WebGL", "JavaScript", "Animations 3D", "GPT-5.6"],
        image: "/images/projects/malt-social.png",
        gallery: [
            "/images/projects/malt-social.png",
            "/images/projects/malt-social-detail.png"
        ],
        demo: "https://malt-social.vercel.app/",
        features: [
            "Hero immersif centré sur le packaging de la bière",
            "Présentation détaillée d'une bière saisonnière",
            "Storytelling de marque et annuaire des points de vente",
            "Accès à la boutique et inscription à la newsletter"
        ]
    },
    {
        id: 10,
        slug: "dupliclean",
        titre: "DupliClean",
        categorie: "Landing page",
        description: "Site de présentation de DupliClean, une application Android pour repérer les doublons et libérer de l’espace.",
        longDescription: "DupliClean aide à repérer les doublons exacts, les photos similaires, les fichiers volumineux et les captures d’écran sur Android, OneDrive et Google Drive. Le site présente les fonctionnalités, les étapes d’analyse et la gestion des données dans un univers visuel chaleureux. L’utilisateur choisit les fichiers et confirme chaque suppression.",
        tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "Decap CMS"],
        image: "/images/projects/dupliclean.png",
        gallery: ["/images/projects/dupliclean.png"],
        demo: "https://dupliclean.ca/",
        features: [
            "Présentation des doublons, photos similaires et fichiers à trier",
            "Parcours d’analyse sur Android, OneDrive et Google Drive",
            "Design responsive et animations de circuits et d’arcs",
            "Contenus administrables, FAQ et informations sur la confidentialité"
        ]
    },
    {
        id: 11,
        slug: "le-petit-bleu",
        titre: "Le Petit Bleu",
        categorie: "Landing page",
        description: "Landing page éditoriale pour une donuterie artisanale de Moncton, entre identité gourmande, menu et commandes.",
        longDescription: "Le Petit Bleu présente une donuterie artisanale de Moncton à travers une identité visuelle colorée et généreuse. L'expérience raconte l'histoire de la marque, détaille les donuts et cafés de spécialité, valorise les offres pour événements et guide les visiteurs vers la commande, Instagram ou la boutique physique.",
        tech: ["Next.js", "React", "Responsive Design", "Internationalisation", "Animations"],
        image: "/images/projects/lepetitbleu.png",
        gallery: [
            "/images/projects/lepetitbleu.png",
            "/images/projects/lepetitbleu-detail.png"
        ],
        demo: "https://lepetitbleu.vercel.app/",
        features: [
            "Hero immersif centré sur l'identité de la donuterie",
            "Menu complet de donuts artisanaux et cafés de spécialité",
            "Présentation des commandes personnalisées pour événements",
            "Navigation bilingue et informations pratiques pour la boutique de Moncton"
        ]
    },
    {
        id: 12,
        slug: "gratte-moi-le-dos",
        titre: "Gratte moi le dos",
        categorie: "Projet créatif",
        description: "Expérience publicitaire interactive autour d’un t-shirt à coordonnées pour demander exactement où gratter.",
        longDescription: "Gratte moi le dos est une identité créative présentée par Ryan et Claudine dans le cadre d’un projet publicitaire. Le site transforme un geste complice en interface : une grille imprimée sur le t-shirt permet de choisir une coordonnée, de C-4 à J-10, et de guider la personne qui gratte le dos.",
        tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript"],
        image: "/images/projects/gratte-moi-le-dos.webp",
        gallery: [
            "/images/projects/gratte-moi-le-dos.webp",
            "/images/projects/gratte-moi-le-dos-product.webp",
            "/images/projects/gratte-moi-le-dos-shirt.webp"
        ],
        demo: "https://grattemoiledos.vercel.app/",
        features: [
            "Grille interactive de A à J et de 1 à 10",
            "Coordonnée sélectionnée et annoncée instantanément",
            "Direction artistique éditoriale inspirée des lookbooks indépendants",
            "Interface responsive pensée pour une démonstration rapide"
        ]
    },
];
