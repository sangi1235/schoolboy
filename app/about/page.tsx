"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Compass, Heart, User, Award, Book } from "lucide-react";

export default function AboutPage() {
    return (
        <>
            <Section background="blue" className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">About Us</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Nurturing confident, responsible, and knowledgeable students prepared for future challenges.
                    </p>
                </motion.div>
            </Section>

            <Section background="white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg text-primary-blue">
                                <Target size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Vision</h2>
                                <p className="text-gray-600 leading-relaxed">
                                    To nurture confident, responsible, and knowledgeable students prepared for future challenges. We aim to create a learning environment that fosters innovation and critical thinking.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="bg-green-100 p-3 rounded-lg text-fresh-green">
                                <Compass size={32} />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">Our Mission</h2>
                                <ul className="space-y-2 text-gray-600 list-disc list-inside">
                                    <li>Deliver high‑quality education standards.</li>
                                    <li>Build strong moral character and integrity.</li>
                                    <li>Encourage curiosity, creativity and innovation.</li>
                                    <li>Maintain discipline, respect and inclusivity.</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-soft-gray p-8 rounded-2xl relative"
                    >
                        <div className="absolute -top-4 -left-4 text-primary-blue opacity-20">
                            <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00001 15 9.00001 14 9.00001 13C9.00001 10.6438 10.6698 8.68117 12.8795 8.16912L13.1328 10.0691C11.5594 10.5925 10.8732 12.2572 10.99 13.7915C11.0028 13.96 11.1436 14.0909 11.313 14.0909H12.017C14.2261 14.0909 16.017 15.8817 16.017 18.0909V21.0001H14.017ZM21 21L21 18C21 16.8954 20.1046 16 19 16H15.983C15.983 15 15.983 14 15.983 13C15.983 10.6438 17.6528 8.68117 19.8625 8.16912L20.1158 10.0691C18.5424 10.5925 17.8562 12.2572 17.973 13.7915C17.9858 13.96 18.1265 14.0909 18.2959 14.0909H19C21.2091 14.0909 23 15.8817 23 18.0909V21.0001H21Z" /></svg>
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-gray-800">Principal’s Message</h3>
                        <blockquote className="text-gray-600 italic mb-6">
                            "At BrightFuture International School, we believe every child has unique potential. Our dedicated teachers, safe environment, and structured learning help students grow academically and morally."
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md relative">
                                <Image
                                    src="/images/principal.png"
                                    alt="Principal"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800">Mr. John Doe</p>
                                <p className="text-sm text-gray-500">Principal</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            <Section background="gray">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Core Values</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {[
                        { icon: Award, label: "Discipline" },
                        { icon: Heart, label: "Respect" },
                        { icon: User, label: "Honesty" },
                        { icon: Target, label: "Responsibility" },
                        { icon: Book, label: "Lifelong Learning" },
                    ].map((val, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -5 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-sm text-center border border-gray-100"
                        >
                            <div className="mx-auto bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-primary-blue mb-3">
                                <val.icon size={24} />
                            </div>
                            <h3 className="font-semibold text-gray-800">{val.label}</h3>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
