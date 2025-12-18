"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, GraduationCap } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Classes', href: '/classes' },
    { name: 'Admissions', href: '/admissions' },
    { name: 'Teachers', href: '/teachers' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Notices', href: '/notices' },
    { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary-blue text-white p-2 rounded-lg group-hover:bg-blue-700 transition-colors">
                            <GraduationCap size={28} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold text-primary-blue leading-tight">BrightFuture</span>
                            <span className="text-xs text-gray-500 font-medium tracking-wider">International School</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary-blue relative py-1",
                                    pathname === link.href ? "text-primary-blue" : "text-gray-600"
                                )}
                            >
                                {link.name}
                                {pathname === link.href && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-primary-blue rounded-full"
                                    />
                                )}
                            </Link>
                        ))}
                        <Button size="sm" variant="primary" className="ml-2">
                            Admissions Open
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="p-2 text-gray-600 hover:text-primary-blue transition-colors focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "block text-base font-medium px-4 py-3 rounded-lg transition-colors",
                                        pathname === link.href
                                            ? "bg-blue-50 text-primary-blue"
                                            : "text-gray-600 hover:bg-gray-50"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 px-4">
                                <Button fullWidth variant="primary">
                                    Admissions Open
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
