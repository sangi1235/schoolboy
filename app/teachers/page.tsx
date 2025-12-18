"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const teachers = [
    { name: "Ms. Ayesha Khan", qual: "M.A, B.Ed", exp: "8 Years", subject: "English", color: "bg-blue-100 text-blue-600" },
    { name: "Mr. Ali Raza", qual: "M.Sc Mathematics", exp: "10 Years", subject: "Mathematics", color: "bg-green-100 text-green-600" },
    { name: "Ms. Sarah Ahmed", qual: "M.Sc Physics", exp: "5 Years", subject: "Science", color: "bg-purple-100 text-purple-600" },
    { name: "Mr. Kamran Akmal", qual: "BS Sports Science", exp: "4 Years", subject: "Physical Education", color: "bg-orange-100 text-orange-600" },
    { name: "Ms. Hina Altaf", qual: "BFA", exp: "6 Years", subject: "Arts & Crafts", color: "bg-pink-100 text-pink-600" },
    { name: "Mrs. Nida Yasir", qual: "M.A Urdu", exp: "12 Years", subject: "Urdu", color: "bg-teal-100 text-teal-600" },
];

export default function TeachersPage() {
    return (
        <>
            <Section background="blue" className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Our Faculty</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Highly qualified, experienced, and trained to handle children with care and professionalism.
                    </p>
                </motion.div>
            </Section>

            <Section background="white">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teachers.map((teacher, idx) => {
                        const initials = teacher.name.split(' ').map(n => n[0]).join('').slice(0, 2);

                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -8 }}
                                transition={{ delay: idx * 0.1, duration: 0.3 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-lg transition-all"
                            >
                                <div className={`h-24 ${teacher.color.split(' ')[0]} flex items-center justify-center`}>
                                    <GraduationCap size={40} className={teacher.color.split(' ')[1]} />
                                </div>
                                <div className="px-6 py-6 text-center -mt-12">
                                    <div className={`w-20 h-20 mx-auto rounded-full border-4 border-white shadow-sm flex items-center justify-center text-2xl font-bold ${teacher.color}`}>
                                        {initials}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mt-4 mb-1">{teacher.name}</h3>
                                    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full mb-4">
                                        {teacher.subject}
                                    </span>

                                    <div className="border-t border-gray-100 pt-4 grid grid-cols-2 gap-4 text-sm">
                                        <div className="text-center">
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">Qualification</p>
                                            <p className="font-semibold text-gray-700">{teacher.qual}</p>
                                        </div>
                                        <div className="text-center border-l border-gray-100">
                                            <p className="text-gray-400 text-xs uppercase tracking-wider">Experience</p>
                                            <p className="font-semibold text-gray-700">{teacher.exp}</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>
        </>
    );
}
