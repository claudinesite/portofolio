"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import {
    ArrowLeft,
    ExternalLink,
    Github,
    ArrowRight,
    Calendar,
    Sparkles,
    ChevronRight,
    Layers,
    Zap
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projets } from "@/data/projets";

export default function ProjetDetails() {
    const params = useParams();
    const slug = params.slug as string;
    const projectIndex = projets.findIndex((p) => p.slug === slug);
    const projet = projets[projectIndex];

    if (!projet) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#050505]">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center p-12"
                >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
                        <Sparkles className="w-8 h-8 text-neutral-400" />
                    </div>
                    <h1 className="text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                        Projet non trouvé
                    </h1>
                    <p className="text-neutral-500 mb-8">
                        Ce projet n'existe pas ou a été déplacé.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 dark:text-white hover:opacity-70 transition"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Retour à l'accueil
                    </Link>
                </motion.div>
            </div>
        );
    }

    const nextProject = projets[(projectIndex + 1) % projets.length];
    const prevProject = projets[(projectIndex - 1 + projets.length) % projets.length];

    return (
        <div className="min-h-screen bg-white dark:bg-[#050505]">

            {/* === NAVIGATION === */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-[#050505]/80 backdrop-blur-xl border-b border-neutral-100 dark:border-neutral-900">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link
                        href="/#projets"
                        className="group flex items-center gap-3 text-sm text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        <span>Retour</span>
                    </Link>

                    <div className="flex items-center gap-3">
                        {projet.github && (
                            <a
                                href={projet.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2.5 rounded-full border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
                            >
                                <Github className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                            </a>
                        )}
                        {projet.demo && (
                            <a
                                href={projet.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-4 py-2 bg-[#00FF00] dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm font-medium hover:opacity-90 transition"
                            >
                                Live Demo
                                <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>
            </nav>

            {/* === HERO === */}
            <header className="pt-32 pb-16 px-6">
                <div className="max-w-6xl mx-auto">

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 text-sm text-neutral-400 mb-8"
                    >
                        <Link href="/" className="hover:text-neutral-900 dark:hover:text-white transition">
                            Accueil
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <Link href="/#projets" className="hover:text-neutral-900 dark:hover:text-white transition">
                            Projets
                        </Link>
                        <ChevronRight className="w-3.5 h-3.5" />
                        <span className="text-neutral-900 dark:text-white">{projet.titre}</span>
                    </motion.div>

                    {/* Title & Description */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-4xl"
                    >
                        <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white tracking-tight mb-6">
                            {projet.titre}
                        </h1>
                        <p className="text-base md:text-lg text-neutral-500 dark:text-neutral-400 leading-relaxed">
                            {projet.longDescription || projet.description}
                        </p>
                    </motion.div>

                    {/* Meta info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap items-center gap-6 mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-900"
                    >
                        <div className="flex items-center gap-2 text-sm text-neutral-500">
                            <Calendar className="w-4 h-4" />
                            <span>2024</span>
                        </div>
                        <div className="flex items-center gap-2">
                            {projet.tech.slice(0, 4).map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 rounded-full"
                                >
                                    {t}
                                </span>
                            ))}
                            {projet.tech.length > 4 && (
                                <span className="text-xs text-neutral-400">
                                    +{projet.tech.length - 4}
                                </span>
                            )}
                        </div>
                    </motion.div>
                </div>
            </header>



            {/* GALLERIE D'IMAGES */}
            {projet.gallery && projet.gallery.length > 0 && (
                <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="px-6 pb-20"
                >
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-400 mb-8">
                            Galerie du projet
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {projet.gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative aspect-video rounded-xl overflow-hidden bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
                                >
                                    <Image
                                        src={img}
                                        alt={`${projet.titre} gallery ${i}`}
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>
            )}

            {/* === CONTENT GRID === */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">

                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-16">

                            {/* Features */}
                            {projet.features && projet.features.length > 0 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <h2 className="text-sm font-medium uppercase tracking-wider text-neutral-400 mb-8">
                                        Fonctionnalités
                                    </h2>
                                    <div className="space-y-4">
                                        {projet.features.map((feature, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.1 }}
                                                className="flex items-start gap-4 p-5 bg-neutral-50 dark:bg-neutral-900/50 rounded-xl border border-neutral-100 dark:border-neutral-800"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
                                                    <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                                    {feature}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-6">
                            <div className="sticky top-24 space-y-6">

                                {/* Stack */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800"
                                >
                                    <h3 className="flex items-center gap-2 text-sm font-medium text-neutral-400 mb-4">
                                        <Layers className="w-4 h-4" />
                                        Stack technique
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {projet.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1.5 text-sm font-medium bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg border border-neutral-200 dark:border-neutral-700"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Links */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                    className="space-y-3"
                                >
                                    {projet.demo && (
                                        <a
                                            href={projet.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between w-full p-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-xl font-medium hover:opacity-90 transition"
                                        >
                                            <span className="flex items-center gap-3">
                                                <ExternalLink className="w-4 h-4" />
                                                Voir le projet
                                            </span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                    {projet.github && (
                                        <a
                                            href={projet.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group flex items-center justify-between w-full p-4 bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white rounded-xl font-medium hover:bg-neutral-200 dark:hover:bg-neutral-800 transition"
                                        >
                                            <span className="flex items-center gap-3">
                                                <Github className="w-4 h-4" />
                                                Code source
                                            </span>
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    )}
                                </motion.div>

                                {/* Next Project */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <Link
                                        href={`/projets/${nextProject.slug}`}
                                        className="group block p-6 bg-neutral-900 dark:bg-white rounded-2xl text-white dark:text-neutral-900 hover:opacity-95 transition"
                                    >
                                        <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500 uppercase tracking-wider mb-2">
                                            Projet suivant
                                        </p>
                                        <h4 className="text-lg font-semibold group-hover:translate-x-1 transition-transform">
                                            {nextProject.titre}
                                        </h4>
                                        <div className="flex items-center gap-1 mt-4 text-sm font-medium text-blue-400 dark:text-blue-600">
                                            Découvrir
                                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </motion.div>

                            </div>
                        </aside>

                    </div>
                </div>
            </section>

            {/* === NAVIGATION BOTTOM === */}
            <section className="px-6 pb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-4">

                        {/* Previous */}
                        <Link
                            href={`/projets/${prevProject.slug}`}
                            className="group flex items-center gap-4 p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition"
                        >
                            <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition">
                                <ArrowLeft className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                            </div>
                            <div>
                                <p className="text-xs text-neutral-400 mb-1">Précédent</p>
                                <p className="font-medium text-neutral-900 dark:text-white">{prevProject.titre}</p>
                            </div>
                        </Link>

                        {/* Next */}
                        <Link
                            href={`/projets/${nextProject.slug}`}
                            className="group flex items-center justify-end gap-4 p-6 bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition text-right"
                        >
                            <div>
                                <p className="text-xs text-neutral-400 mb-1">Suivant</p>
                                <p className="font-medium text-neutral-900 dark:text-white">{nextProject.titre}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-300 dark:group-hover:bg-neutral-700 transition">
                                <ArrowRight className="w-4 h-4 text-neutral-600 dark:text-neutral-400" />
                            </div>
                        </Link>

                    </div>
                </div>
            </section>

            {/* === CTA FOOTER === */}
            <footer className="px-6 py-20 border-t border-neutral-100 dark:border-neutral-900">
                <div className="max-w-6xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
                            Un projet en tête ?
                        </h3>
                        <p className="text-neutral-500 dark:text-neutral-400 max-w-md mx-auto">
                            Je suis disponible pour de nouvelles opportunités et collaborations.
                        </p>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full font-medium hover:opacity-90 transition"
                        >
                            Me contacter
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                </div>
            </footer>

        </div>
    );
}