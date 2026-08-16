"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ExternalLink, Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { projets, type Projet } from "@/data/projets";

const INITIAL_VISIBLE_PROJECTS = 12;

function normalize(value: string) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function ProjectMeta({ projet }: { projet: Projet }) {
    const isLive = Boolean(projet.demo && projet.demo !== "#");

    return (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs font-medium text-neutral-500">
            <span className="text-[#c24f00]">{projet.categorie}</span>
            {projet.status?.trim() && <span>{projet.status}</span>}
            {isLive && <span className="text-emerald-700">En ligne</span>}
        </div>
    );
}

function ProjectCard({ projet }: { projet: Projet }) {
    const reduceMotion = useReducedMotion();
    const isLive = Boolean(projet.demo && projet.demo !== "#");

    return (
        <motion.article
            layout
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white transition-shadow hover:shadow-[0_14px_38px_rgba(38,28,18,0.08)]"
        >
            <Link
                href={`/projets/${projet.slug}`}
                className="relative block aspect-[16/10] overflow-hidden bg-neutral-100"
                aria-label={`Découvrir ${projet.titre}`}
            >
                <Image
                    src={projet.image}
                    alt={`Aperçu du projet ${projet.titre}`}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
            </Link>

            <div className="flex grow flex-col p-4">
                <ProjectMeta projet={projet} />
                <Link href={`/projets/${projet.slug}`} className="mt-3 w-fit">
                    <h2 className="text-lg font-bold tracking-tight text-neutral-900 transition-colors hover:text-[#c24f00]">
                        {projet.titre}
                    </h2>
                </Link>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-neutral-600">
                    {projet.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                    {projet.tech.slice(0, 2).map((tech) => (
                        <span
                            key={tech}
                            className="rounded-md bg-neutral-100 px-2 py-1 text-[11px] text-neutral-600"
                        >
                            {tech}
                        </span>
                    ))}
                    {projet.tech.length > 2 && (
                        <span className="px-1 py-1 text-[11px] text-neutral-400">
                            +{projet.tech.length - 2}
                        </span>
                    )}
                </div>

                <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                    <Link
                        href={`/projets/${projet.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900 transition hover:gap-2.5 hover:text-[#c24f00]"
                    >
                        Détails
                        <ArrowRight size={14} aria-hidden="true" />
                    </Link>
                    {isLive && (
                        <a
                            href={projet.demo ?? undefined}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Ouvrir ${projet.titre} dans un nouvel onglet`}
                            className="rounded-lg p-2 text-neutral-400 transition hover:bg-neutral-100 hover:text-neutral-900"
                        >
                            <ExternalLink size={15} aria-hidden="true" />
                        </a>
                    )}
                </div>
            </div>
        </motion.article>
    );
}

export default function Projets() {
    const reduceMotion = useReducedMotion();
    const [searchTerm, setSearchTerm] = useState("");
    const [activeCategory, setActiveCategory] = useState("Tous");
    const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);

    const categories = useMemo(
        () => ["Tous", ...Array.from(new Set(projets.map((projet) => projet.categorie)))],
        [],
    );

    const filteredProjects = useMemo(() => {
        const query = normalize(searchTerm.trim());

        return projets.filter((projet) => {
            const matchesCategory = activeCategory === "Tous" || projet.categorie === activeCategory;
            const searchableContent = normalize(
                [projet.titre, projet.description, projet.categorie, ...projet.tech].join(" "),
            );

            return matchesCategory && (!query || searchableContent.includes(query));
        });
    }, [activeCategory, searchTerm]);

    const visibleProjects = filteredProjects.slice(0, visibleCount);
    const hiddenProjectCount = filteredProjects.length - visibleProjects.length;

    const selectCategory = (category: string) => {
        setActiveCategory(category);
        setVisibleCount(INITIAL_VISIBLE_PROJECTS);
    };

    const resetFilters = () => {
        setSearchTerm("");
        setActiveCategory("Tous");
        setVisibleCount(INITIAL_VISIBLE_PROJECTS);
    };

    return (
        <section className="mx-auto w-full max-w-6xl" aria-labelledby="projects-title">
            <motion.header
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-3xl"
            >
                <h1 id="projects-title" className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl">
                    Mes Projets
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600 sm:text-lg">
                    Explorez mes applications web, produits SaaS et expériences numériques.
                </p>
            </motion.header>

            <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: reduceMotion ? 0 : 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 rounded-2xl border border-neutral-200 bg-white p-3 shadow-[0_10px_35px_rgba(38,28,18,0.05)] sm:p-4"
            >
                <div className="relative">
                    <label htmlFor="project-search" className="sr-only">
                        Rechercher un projet
                    </label>
                    <Search
                        size={18}
                        aria-hidden="true"
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
                    />
                    <input
                        id="project-search"
                        type="search"
                        value={searchTerm}
                        onChange={(event) => {
                            setSearchTerm(event.target.value);
                            setVisibleCount(INITIAL_VISIBLE_PROJECTS);
                        }}
                        placeholder="Rechercher par nom ou technologie"
                        className="h-12 w-full rounded-xl border border-neutral-200 bg-neutral-50 pl-11 pr-11 text-sm text-neutral-900 outline-none transition placeholder:text-neutral-400 hover:border-neutral-300 focus:border-[#c24f00] focus:bg-white focus:ring-3 focus:ring-[#c24f00]/15"
                    />
                    {searchTerm && (
                        <button
                            type="button"
                            onClick={() => setSearchTerm("")}
                            aria-label="Effacer la recherche"
                            className="absolute right-2 top-1/2 flex size-8 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-400 transition hover:bg-neutral-200 hover:text-neutral-900"
                        >
                            <X size={16} aria-hidden="true" />
                        </button>
                    )}
                </div>

                <div
                    className="mt-3 flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                    aria-label="Filtrer les projets par catégorie"
                >
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            onClick={() => selectCategory(category)}
                            aria-pressed={activeCategory === category}
                            className={`shrink-0 rounded-xl px-3.5 py-2 text-sm font-medium transition active:translate-y-px ${
                                activeCategory === category
                                    ? "bg-neutral-900 text-white"
                                    : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </motion.div>

            <div className="mt-6 flex items-center justify-between gap-4 text-sm text-neutral-500" aria-live="polite">
                <p>
                    <span className="font-semibold text-neutral-900">{filteredProjects.length}</span>{" "}
                    {filteredProjects.length > 1 ? "projets trouvés" : "projet trouvé"}
                </p>
                {(searchTerm || activeCategory !== "Tous") && (
                    <button
                        type="button"
                        onClick={resetFilters}
                        className="font-medium text-[#a94300] transition hover:text-neutral-900"
                    >
                        Réinitialiser
                    </button>
                )}
            </div>

            <AnimatePresence mode="popLayout">
                {visibleProjects.length > 0 ? (
                    <motion.div
                        key="results"
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                    >
                        {visibleProjects.map((projet) => (
                            <ProjectCard key={projet.id} projet={projet} />
                        ))}
                    </motion.div>
                ) : (
                    <motion.div
                        key="empty"
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="mt-5 rounded-2xl border border-dashed border-neutral-300 bg-white px-6 py-16 text-center"
                    >
                        <h2 className="text-xl font-bold text-neutral-900">Aucun projet trouvé</h2>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-600">
                            Essayez un autre mot-clé ou affichez à nouveau toutes les catégories.
                        </p>
                        <button
                            type="button"
                            onClick={resetFilters}
                            className="mt-6 rounded-xl bg-neutral-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700 active:translate-y-px"
                        >
                            Voir tous les projets
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            {hiddenProjectCount > 0 && (
                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        onClick={() => setVisibleCount((count) => count + INITIAL_VISIBLE_PROJECTS)}
                        className="rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 transition hover:border-neutral-400 hover:bg-neutral-50 active:translate-y-px"
                    >
                        Afficher {Math.min(hiddenProjectCount, INITIAL_VISIBLE_PROJECTS)} autre
                        {Math.min(hiddenProjectCount, INITIAL_VISIBLE_PROJECTS) > 1 ? "s" : ""} projet
                        {Math.min(hiddenProjectCount, INITIAL_VISIBLE_PROJECTS) > 1 ? "s" : ""}
                    </button>
                </div>
            )}
        </section>
    );
}
