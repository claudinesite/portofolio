"use client";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { projets } from "@/data/projets";

export default function Projets() {
    return (
        <div className="max-w-6xl mx-auto">

            {/* HEADER */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12"
            >
                <h1 className="text-5xl font-bold mb-4">Mes Projets</h1>
                <p className="text-xl text-neutral-600">
                    Une sélection de mes dernières solutions.
                </p>
            </motion.div>

            {/* GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projets.map((projet, index) => {
                    const live =
                        projet.demo && projet.demo !== "#";

                    return (
                        <motion.div
                            key={projet.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition flex flex-col"
                        >
                            {/* IMAGE */}
                            <Link href={`/projets/${projet.slug}`} className="relative h-48 w-full block overflow-hidden">
                                <Image
                                    src={projet.image}
                                    alt={projet.titre}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                />

                                {/* STATUS */}
                                {projet.status && (
                                    <div className="absolute top-3 left-3 bg-black/80 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                                        {projet.status}
                                    </div>
                                )}

                                {/* PRODUCTION BADGE */}
                                <div className="absolute top-3 right-3">
                                    {live ? (
                                        <span className="bg-[#00ff00] text-black font-medium text-xs px-3 py-1 rounded-full shadow-sm">
                                            Live
                                        </span>
                                    ) : (
                                        <span className="bg-neutral-800 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                                            Bientôt
                                        </span>
                                    )}
                                </div>
                            </Link>

                            {/* CONTENT */}
                            <div className="p-6 flex flex-col grow">
                                <Link href={`/projets/${projet.slug}`} className="hover:text-neutral-700 transition">
                                    <h3 className="text-xl font-bold mb-2">
                                        {projet.titre}
                                    </h3>
                                </Link>

                                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                                    {projet.description}
                                </p>

                                {/* TECH */}
                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {projet.tech.slice(0, 3).map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 bg-neutral-100 text-neutral-700 text-xs rounded-full"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                    {projet.tech.length > 3 && (
                                        <span className="text-xs text-neutral-400 self-center">
                                            +{projet.tech.length - 3}
                                        </span>
                                    )}
                                </div>

                                {/* LINKS */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-neutral-50">
                                    <Link
                                        href={`/projets/${projet.slug}`}
                                        className="flex items-center gap-2 text-sm font-medium text-black hover:gap-3 transition-all"
                                    >
                                        Détails <ArrowRight size={14} />
                                    </Link>

                                    {live && (
                                        <a
                                            href={projet.demo || "#"}
                                            target="_blank"
                                            className="flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition"
                                        >
                                            <ExternalLink size={14} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
