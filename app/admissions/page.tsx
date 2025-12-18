"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { FileText, CheckCircle, Calendar, Download } from "lucide-react";

export default function AdmissionsPage() {
    return (
        <>
            <Section background="blue" className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Admissions</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Join the BrightFuture family. The first step towards a brilliant future starts here.
                    </p>
                </motion.div>
            </Section>

            <Section background="white">
                <div className="max-w-4xl mx-auto">
                    {/* Process Steps */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Admission Process</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                            {[
                                { step: "01", title: "Fill Form", desc: "Collect and fill the admission form from the school office or download online." },
                                { step: "02", title: "Submit Docs", desc: "Submit the completed form along with necessary documents." },
                                { step: "03", title: "Assessment", desc: "Student appears for a basic assessment/interview." },
                                { step: "04", title: "Fee Payment", desc: "Pay the admission fee to confirm the seat." },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-soft-gray p-6 rounded-xl relative"
                                >
                                    <span className="text-4xl font-bold text-gray-200 absolute top-4 right-4">{item.step}</span>
                                    <h3 className="text-xl font-bold text-primary-blue mb-2 relative z-10">{item.title}</h3>
                                    <p className="text-gray-600 text-sm relative z-10">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-8 text-center">
                            <Button size="lg" className="gap-2">
                                <Download size={20} />
                                Download Admission Form
                            </Button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        {/* Eligibility */}
                        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <CheckCircle className="text-fresh-green" size={28} />
                                <h3 className="text-2xl font-bold text-gray-800">Eligibility Criteria</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-fresh-green shrink-0" />
                                    <span className="text-gray-600"><strong>Play Group:</strong> Minimum age 3+ years as of March 31st.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-fresh-green shrink-0" />
                                    <span className="text-gray-600"><strong>Nursery & KG:</strong> Age appropriate as per class requirements.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-fresh-green shrink-0" />
                                    <span className="text-gray-600"><strong>Primary & Above:</strong> Based on previous school leaving certificate and assessment.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Documents */}
                        <div className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <FileText className="text-primary-blue" size={28} />
                                <h3 className="text-2xl font-bold text-gray-800">Required Documents</h3>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-blue shrink-0" />
                                    <span className="text-gray-600">Birth Certificate (Copy)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-blue shrink-0" />
                                    <span className="text-gray-600">Previous School Report Card / SLC (if applicable)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-blue shrink-0" />
                                    <span className="text-gray-600">2 Passport Size Recent Photographs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="w-2 h-2 mt-2 rounded-full bg-primary-blue shrink-0" />
                                    <span className="text-gray-600">CNIC Copy of Parents</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Important Dates */}
                    <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                        <div className="flex items-center gap-3 mb-6 justify-center">
                            <Calendar className="text-primary-blue" size={28} />
                            <h3 className="text-2xl font-bold text-gray-800">Important Dates</h3>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 text-center">
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Admissions Open</p>
                                <p className="text-2xl font-bold text-primary-blue">March 1st, 2024</p>
                            </div>
                            <div className="hidden md:block w-px bg-blue-200" />
                            <div>
                                <p className="text-sm text-gray-500 uppercase tracking-wider font-semibold mb-1">Session Starts</p>
                                <p className="text-2xl font-bold text-fresh-green">April 15th, 2024</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Section>
        </>
    );
}
