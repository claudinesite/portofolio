// components/Navbar.tsx
"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
    Home,
    Briefcase,
    User,
    Mail,
    ArrowLeft,
    ArrowRight,
    RotateCw,
    Lock,
    X,
    Minus,
    Maximize2,
    Plus,
    Star,
    Share,
    Shield,
    Wifi,
    Globe,
    Zap,
    Code2,
    Sparkles,
    Terminal,
    Coffee,
    Heart,
    Eye
} from "lucide-react";

import Accueil from "./sections/Accueil";
import Apropos from "./sections/Apropos";
import Projets from "./sections/Projets";
import Contact from "./sections/Contact";

import { useSearchParams } from "next/navigation";

const tabs = [
    { id: "accueil", name: "Accueil", icon: Home, color: "#00ff00" },
    { id: "apropos", name: "À propos", icon: User, color: "#00d4ff" },
    { id: "projets", name: "Projets", icon: Briefcase, color: "#ff6b00" },
    { id: "contact", name: "Contact", icon: Mail, color: "#ff00aa" },
];

export default function Navbar() {
    const searchParams = useSearchParams();

    const initialTab = searchParams.get("tab") || "accueil";
    const [activeTab, setActiveTab] = useState(initialTab);
    const [isLoading, setIsLoading] = useState(false);
    const [currentTime, setCurrentTime] = useState("");

    // Mettre à jour l'onglet si l'URL change
    useEffect(() => {
        const tab = searchParams.get("tab");
        if (tab && tabs.some(t => t.id === tab)) {
            setActiveTab(tab);
        }
    }, [searchParams]);

    // Écouter les changements du hash (#projets, #accueil, etc.)
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash.substring(1); // Enlever le #
            if (hash && tabs.some(t => t.id === hash)) {
                setIsLoading(true);
                setTimeout(() => {
                    setActiveTab(hash);
                    setIsLoading(false);
                }, 400);
            } else if (!hash) {
                // Si pas de hash, revenir à l'accueil
                setIsLoading(true);
                setTimeout(() => {
                    setActiveTab("accueil");
                    setIsLoading(false);
                }, 400);
            }
        };

        // Vérifier le hash initial
        handleHashChange();

        // Écouter les changements du hash
        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // Mettre à jour l'heure
    useEffect(() => {
        const updateTime = () => {
            setCurrentTime(new Date().toLocaleTimeString('fr-FR', {
                hour: '2-digit',
                minute: '2-digit'
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    // Écoute les événements de navigation
    useEffect(() => {
        const handleNavigation = (event: CustomEvent) => {
            handleTabChange(event.detail);
        };

        window.addEventListener("navigateTo" as any, handleNavigation);
        return () => window.removeEventListener("navigateTo" as any, handleNavigation);
    }, []);

    // Simuler un chargement lors du changement d'onglet
    const handleTabChange = (tabId: string) => {
        window.location.hash = tabId;
    };

    const currentTab = tabs.find(t => t.id === activeTab);
    const CurrentIcon = currentTab?.icon || Home;

    return (
        <div className="min-h-screen flex flex-col bg-neutral-100">

            {/* ========== BARRE DE TITRE (Style macOS) ========== */}
            <div className="bg-linear-to-b from-neutral-800 to-neutral-900 border-b border-neutral-700">
                <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-between">

                    {/* Traffic lights (macOS style) */}
                    <div className="flex items-center gap-2">
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="group w-3 h-3 rounded-full bg-[#ff5f57] flex items-center justify-center shadow-lg"
                            style={{ boxShadow: "0 0 6px rgba(255,95,87,0.5)" }}
                        >
                            <X size={6} className="text-[#820005] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="group w-3 h-3 rounded-full bg-[#febc2e] flex items-center justify-center shadow-lg"
                            style={{ boxShadow: "0 0 6px rgba(254,188,46,0.5)" }}
                        >
                            <Minus size={6} className="text-[#9a6a00] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className="group w-3 h-3 rounded-full bg-[#28c840] flex items-center justify-center shadow-lg"
                            style={{ boxShadow: "0 0 6px rgba(40,200,64,0.5)" }}
                        >
                            <Maximize2 size={6} className="text-[#006500] opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.button>
                    </div>

                    {/* Titre central avec icône */}
                    <motion.div
                        className="flex items-center gap-3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <motion.div
                            key={activeTab}
                            initial={{ rotate: -180, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                            className="w-6 h-6 rounded-md flex items-center justify-center"
                            style={{
                                backgroundColor: `${currentTab?.color}20`,
                                boxShadow: `0 0 10px ${currentTab?.color}40`
                            }}
                        >
                            <CurrentIcon size={14} style={{ color: currentTab?.color }} />
                        </motion.div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white">
                                {currentTab?.name}
                            </span>
                            <span className="text-neutral-500">—</span>
                            <span className="text-sm text-neutral-400">
                                Claudine Portfolio
                            </span>
                        </div>
                    </motion.div>

                    {/* Actions droite */}
                    <div className="flex items-center gap-4">
                        <motion.div
                            className="flex items-center gap-1.5"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Wifi size={12} className="text-[#00ff00]" />
                            <span className="text-[10px] text-[#00ff00] font-medium">100%</span>
                        </motion.div>
                        <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-neutral-800">
                            <Terminal size={12} className="text-neutral-400" />
                            <span className="text-xs text-neutral-300 font-mono">
                                {currentTime}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* ========== BARRE D'ONGLETS ========== */}
            <div className="bg-neutral-800 px-4 pt-2 pb-0 border-b border-neutral-700">
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-end gap-1">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            const isActive = activeTab === tab.id;

                            return (
                                <motion.button
                                    key={tab.id}
                                    onClick={() => handleTabChange(tab.id)}
                                    className={`
                    relative px-4 py-2.5 rounded-t-xl text-sm font-medium
                    transition-all duration-300 min-w-[130px]
                    flex items-center gap-2.5 group
                    ${isActive
                                            ? "bg-[#fafafa] text-neutral-900"
                                            : "bg-neutral-700/50 text-neutral-400 hover:bg-neutral-700 hover:text-neutral-200"
                                        }
                  `}
                                    whileHover={{ y: isActive ? 0 : -2 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {/* Glow effect pour l'onglet actif */}
                                    {isActive && (
                                        <motion.div
                                            layoutId="tabGlow"
                                            className="absolute -top-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full"
                                            style={{
                                                backgroundColor: tab.color,
                                                boxShadow: `0 0 20px ${tab.color}, 0 0 40px ${tab.color}`
                                            }}
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}

                                    {/* Icône avec couleur */}
                                    <motion.div
                                        whileHover={{ rotate: isActive ? 0 : 15 }}
                                        transition={{ type: "spring", stiffness: 300 }}
                                    >
                                        <Icon
                                            size={16}
                                            style={{ color: isActive ? tab.color : "currentColor" }}
                                            className="transition-colors"
                                        />
                                    </motion.div>

                                    {/* Nom de l'onglet */}
                                    <span className="truncate hidden sm:inline">{tab.name}</span>

                                    {/* Loading spinner */}
                                    {isLoading && isActive && (
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                                            className="ml-auto"
                                        >
                                            <RotateCw size={12} style={{ color: tab.color }} />
                                        </motion.div>
                                    )}

                                    {/* Bouton fermer */}
                                    {!isLoading && (
                                        <motion.span
                                            className="ml-auto w-5 h-5 rounded-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-neutral-200/50"
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <X size={12} />
                                        </motion.span>
                                    )}
                                </motion.button>
                            );
                        })}

                        {/* Bouton nouveau onglet */}
                        <motion.button
                            whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                            whileTap={{ scale: 0.9 }}
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 hover:text-[#00ff00] transition-colors ml-2"
                        >
                            <Plus size={18} />
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* ========== BARRE D'ADRESSE ========== */}
            <div className="bg-white border-b border-neutral-200 shadow-sm">
                <div className="max-w-6xl mx-auto px-4 py-2 flex items-center gap-3">

                    {/* Navigation buttons */}
                    <div className="flex items-center gap-0.5">
                        {[
                            { icon: ArrowLeft, disabled: true, label: "Retour" },
                            { icon: ArrowRight, disabled: true, label: "Avancer" },
                            { icon: RotateCw, disabled: false, label: "Actualiser" },
                        ].map((btn, i) => (
                            <motion.button
                                key={i}
                                whileHover={{ scale: btn.disabled ? 1 : 1.1 }}
                                whileTap={{ scale: btn.disabled ? 1 : 0.9 }}
                                className={`
                  w-9 h-9 rounded-xl flex items-center justify-center transition-all
                  ${btn.disabled
                                        ? "text-neutral-300 cursor-not-allowed"
                                        : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800"
                                    }
                `}
                                disabled={btn.disabled}
                                title={btn.label}
                            >
                                <btn.icon size={18} />
                            </motion.button>
                        ))}
                    </div>

                    {/* Séparateur */}
                    <div className="w-px h-6 bg-neutral-200" />

                    {/* Barre d'URL */}
                    <motion.div
                        className="flex-1 flex items-center gap-3 px-4 py-2.5 bg-neutral-100 hover:bg-neutral-50 rounded-xl border border-neutral-200 hover:border-neutral-300 transition-all group relative overflow-hidden"
                        whileHover={{ scale: 1.002 }}
                    >
                        {/* Barre de chargement */}
                        <AnimatePresence>
                            {isLoading && (
                                <motion.div
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "200%" }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-linear-to-r from-transparent via-[#00ff00]/30 to-transparent"
                                />
                            )}
                        </AnimatePresence>

                        {/* Icônes sécurité */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#00ff00]/10"
                        >
                            <Shield size={14} className="text-[#00ff00]" />
                            <Lock size={12} className="text-[#00ff00]" />
                        </motion.div>

                        {/* URL */}
                        <div className="flex items-center gap-1.5 text-sm font-medium">
                            <Globe size={14} className="text-neutral-400" />
                            <span className="text-neutral-400">https://</span>
                            <span className="text-neutral-800">claudine</span>
                            <span className="text-[#00ff00] font-bold">.dev</span>
                            <span className="text-neutral-300">/</span>
                            <motion.span
                                key={activeTab}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="font-semibold"
                                style={{ color: currentTab?.color }}
                            >
                                {activeTab}
                            </motion.span>
                        </div>

                        {/* Badge sécurisé */}
                        <motion.div
                            className="ml-auto flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all"
                            initial={{ x: 10 }}
                            whileHover={{ x: 0 }}
                        >
                            <div className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-[#00ff00]/10 text-[#00ff00]">
                                <Zap size={12} />
                                <span className="text-xs font-medium">Sécurisé</span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Séparateur */}
                    <div className="w-px h-6 bg-neutral-200" />

                    {/* Actions droite */}
                    <div className="flex items-center gap-1">
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 15 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-400 hover:text-yellow-500 hover:bg-yellow-50 transition-all"
                            title="Favoris"
                        >
                            <Star size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-400 hover:text-blue-500 hover:bg-blue-50 transition-all"
                            title="Partager"
                        >
                            <Share size={18} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-9 h-9 rounded-xl flex items-center justify-center text-neutral-400 hover:text-purple-500 hover:bg-purple-50 transition-all"
                            title="Extensions"
                        >
                            <Sparkles size={18} />
                        </motion.button>

                        {/* Avatar */}
                        <motion.div
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-9 h-9 rounded-xl bg-linear-to-br from-[#00ff00] to-emerald-600 flex items-center justify-center text-white text-sm font-bold ml-2 cursor-pointer"
                            style={{ boxShadow: "0 4px 15px rgba(0,255,0,0.3)" }}
                        >
                            <Code2 size={18} />
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ========== CONTENU ========== */}
            <div className="flex-1 bg-[#fafafa]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-6xl mx-auto px-6 py-12"
                    >
                        {activeTab === "accueil" && <Accueil />}
                        {activeTab === "apropos" && <Apropos />}
                        {activeTab === "projets" && <Projets />}
                        {activeTab === "contact" && <Contact />}
                    </motion.div>
                </AnimatePresence>
            </div>

        </div>
    );
}