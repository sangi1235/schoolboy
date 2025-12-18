"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

export default function GalleryPage() {
    const images = [
        { cat: "Events", text: "Annual Day Celebration" },
        { cat: "Sports", text: "Sports Day 2023" },
        { cat: "Academics", text: "Science Exhibition" },
        { cat: "Classrooms", text: "Interactive Learning" },
        { cat: "Events", text: "Independence Day" },
        { cat: "Sports", text: "Football Tournament" },
    ];

    return (
        <>
            <Section background="blue" className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Gallery</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Glimpses of life at BrightFuture International School.
                    </p>
                </motion.div>
            </Section>

            <Section background="white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative aspect-video bg-gray-200 rounded-xl overflow-hidden cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500 font-medium group-hover:scale-105 transition-transform duration-500">
                                [Image: {img.text}]
                            </div>
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                                <p className="font-bold text-lg">{img.text}</p>
                                <span className="text-sm bg-primary-blue px-2 py-1 rounded mt-2">{img.cat}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
