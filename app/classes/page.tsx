"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Baby, BookOpen, Brain, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

const levels = [
    {
        id: "pre-primary",
        title: "Pre-Primary",
        classes: "Play Group, Nursery, KG",
        desc: "A fun-based learning environment where children explore through storytelling, activities, and basic literacy.",
        features: ["Fun-based learning", "Storytelling & activities", "Basic literacy & numeracy"],
        icon: Baby,
        color: "blue"
    },
    {
        id: "primary",
        title: "Primary",
        classes: "Class 1 - 5",
        desc: "Building a strong foundation in core subjects like English, Math, and Science while fostering creativity.",
        features: ["Strong foundation in core subjects", "Moral education", "Creative activities"],
        icon: BookOpen,
        color: "green"
    },
    {
        id: "middle",
        title: "Middle",
        classes: "Class 6 - 8",
        desc: "Focusing on concept-based learning, project work, and building confidence for higher studies.",
        features: ["Concept-based learning", "Project work", "Confidence building"],
        icon: Brain,
        color: "blue"
    },
    {
        id: "secondary",
        title: "Secondary",
        classes: "Class 9 - 10",
        desc: "Rigorous preparation for board exams along with career guidance and academic excellence.",
        features: ["Board exam preparation", "Career guidance", "Academic excellence"],
        icon: Trophy,
        color: "green"
    }
];

export default function ClassesPage() {
    return (
        <>
            <Section background="blue" className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Classes</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Comprehensive education structure from Play Group to Class 10.
                    </p>
                </motion.div>
            </Section>

            <Section background="white">
                <div className="space-y-12">
                    {levels.map((level, idx) => (
                        <motion.div
                            key={level.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={cn(
                                "flex flex-col md:flex-row gap-8 items-center p-8 rounded-2xl border border-gray-100 shadow-soft",
                                idx % 2 === 1 ? "md:flex-row-reverse" : ""
                            )}
                        >
                            <div className={cn(
                                "w-full md:w-1/3 aspect-video md:aspect-square rounded-xl flex items-center justify-center",
                                level.color === "blue" ? "bg-blue-50 text-primary-blue" : "bg-green-50 text-fresh-green"
                            )}>
                                <level.icon size={80} strokeWidth={1.5} />
                            </div>

                            <div className="w-full md:w-2/3 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                    <h2 className="text-3xl font-bold text-gray-800">{level.title}</h2>
                                    <span className={cn(
                                        "px-3 py-1 rounded-full text-sm font-medium w-fit",
                                        level.color === "blue" ? "bg-blue-100 text-primary-blue" : "bg-green-100 text-fresh-green"
                                    )}>
                                        {level.classes}
                                    </span>
                                </div>
                                <p className="text-gray-600 text-lg">{level.desc}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                                    {level.features.map((feat, fIdx) => (
                                        <div key={fIdx} className="flex items-center gap-2">
                                            <div className={cn(
                                                "w-2 h-2 rounded-full",
                                                level.color === "blue" ? "bg-primary-blue" : "bg-fresh-green"
                                            )} />
                                            <span className="text-gray-700 font-medium">{feat}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
