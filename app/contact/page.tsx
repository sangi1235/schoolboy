"use client";

import { Section } from "@/components/Section";
import { Button } from "@/components/Button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <>
            <Section background="blue" className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Contact Us</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        We'd love to hear from you. Reach out to us for any queries.
                    </p>
                </motion.div>
            </Section>

            <Section background="white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
                            <p className="text-gray-600 mb-8">
                                Have questions about admissions, curriculum, or anything else? Our team is here to help.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary-blue">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">Visit Us</h3>
                                        <p className="text-gray-600">Main Road, City Name, Pakistan</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary-blue">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">Call Us</h3>
                                        <p className="text-gray-600">+92 300 1234567</p>
                                        <p className="text-gray-600">+92 300 7654321</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary-blue">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">Email Us</h3>
                                        <a href="mailto:info@brightfuture.edu.pk" className="text-primary-blue hover:underline">info@brightfuture.edu.pk</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-lg text-primary-blue">
                                        <Clock size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-800 mb-1">Office Hours</h3>
                                        <p className="text-gray-600">Mon - Sat: 8:00 AM - 2:00 PM</p>
                                        <p className="text-gray-600">Friday: 8:00 AM - 12:00 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center text-gray-500">
                            <p>Google Maps Embed Placeholder</p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-soft-gray p-8 rounded-2xl shadow-sm"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
                                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all" placeholder="+92 300..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" id="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-blue focus:ring-2 focus:ring-primary-blue/20 outline-none transition-all" placeholder="How can we help you?" />
                            </div>

                            <Button type="submit" fullWidth>
                                Send Message
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </Section>
        </>
    );
}
