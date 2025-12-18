import Link from 'next/link';
import { GraduationCap, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Brand & About */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="bg-primary-blue text-white p-2 rounded-lg">
                                <GraduationCap size={24} />
                            </div>
                            <span className="text-xl font-bold">BrightFuture</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Shaping Bright Minds for a Better Tomorrow. We provide quality education from Play Group to Class 10, focusing on academic excellence and moral values.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-primary-blue transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/admissions" className="text-gray-400 hover:text-white transition-colors">Admissions</Link></li>
                            <li><Link href="/classes" className="text-gray-400 hover:text-white transition-colors">Academics</Link></li>
                            <li><Link href="/teachers" className="text-gray-400 hover:text-white transition-colors">Our Team</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="shrink-0 text-primary-blue" size={20} />
                                <span>Main Road, City Name, Pakistan</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="shrink-0 text-primary-blue" size={20} />
                                <span>+92 300 1234567</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="shrink-0 text-primary-blue" size={20} />
                                <a href="mailto:info@brightfuture.edu.pk" className="hover:text-white transition-colors">info@brightfuture.edu.pk</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Map placeholder */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Locate Us</h3>
                        <div className="bg-gray-800 h-40 rounded-lg flex items-center justify-center text-gray-500 text-sm">
                            Google Maps Embed Placeholder
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} BrightFuture International School. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
