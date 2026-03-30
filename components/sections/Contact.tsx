"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage("Envoi en cours...");

        // Vous devez créer un compte sur https://web3forms.com/ pour obtenir une clé d'accès
        // Et l'ajouter dans votre fichier .env.local comme: NEXT_PUBLIC_WEB3FORMS_KEY=votre_clé
        const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "a5425f85-be2c-4a77-962a-94fb9953aad5";

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: accessKey,
                    name: formData.nom,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();
            if (result.success) {
                setSubmitMessage("✅ Message envoyé avec succès !");
                setFormData({ nom: "", email: "", message: "" });

                // Effacer le message de succès après 5 secondes
                setTimeout(() => {
                    setSubmitMessage("");
                }, 5000);
            } else {
                setSubmitMessage("❌ Une erreur s'est produite. Veuillez réessayer.");
            }
        } catch (error) {
            setSubmitMessage("❌ Une erreur s'est produite. Vérifiez votre connexion.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-4xl">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-12"
            >
                <h1 className="text-5xl font-bold mb-4">Contact</h1>
                <p className="text-xl text-neutral-600">
                    Travaillons ensemble sur votre prochain projet.
                </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">

                {/* Infos de contact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="space-y-6">
                        {/* CARD EMAIL */}
                        <div className="flex items-center gap-4 p-6 bg-white border border-neutral-200 rounded-2xl hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center">
                                <Mail size={22} />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Email</p>
                                <p className="font-medium">claudiaaboki@gmail.com</p>
                            </div>
                        </div>

                        {/* CARD LOCATION */}
                        <div className="flex items-center gap-4 p-6 bg-white border border-neutral-200 rounded-2xl hover:shadow-lg transition">
                            <div className="w-12 h-12 bg-neutral-900 text-white rounded-xl flex items-center justify-center">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p className="text-sm text-neutral-500">Localisation</p>
                                <p className="font-medium">Canada, NB</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Formulaire */}
                <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm"
                >
                    <div>
                        <label className="block text-sm font-medium mb-2">Nom</label>
                        <input
                            type="text"
                            value={formData.nom}
                            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 transition-colors"
                            placeholder="Votre nom"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 transition-colors"
                            placeholder="votre@email.com"
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-2">Message</label>
                        <textarea
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:border-neutral-400 transition-colors resize-none"
                            rows={5}
                            placeholder="Votre message..."
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    {submitMessage && (
                        <div className={`p-4 rounded-xl text-sm ${submitMessage.includes("❌") ? "bg-red-50 text-red-600" : submitMessage.includes("✅") ? "bg-green-50 text-green-600" : "bg-blue-50 text-blue-600"}`}>
                            {submitMessage}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 text-white font-medium rounded-xl hover:bg-neutral-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        <Send size={18} className={isSubmitting ? "animate-pulse" : ""} />
                        <span>{isSubmitting ? "Envoi..." : "Envoyer"}</span>
                    </button>
                </motion.form>

            </div>
        </div>
    );
}