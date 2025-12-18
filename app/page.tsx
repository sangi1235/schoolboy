"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserCheck, ShieldCheck, BookOpen, Puzzle, Star, Monitor, MessageCircle, Wallet } from "lucide-react";
import { Button } from "@/components/Button";
import { Section } from "@/components/Section";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Happy children in classroom"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading tracking-tight">
              Shaping Bright Minds for a <span className="text-fresh-green">Better Tomorrow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-8 font-light">
              BrightFuture International School provides quality education from Play Group to Class 10,
              focusing on academic excellence, moral values, and disciplined learning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admissions">
                <Button size="lg" variant="secondary" className="shadow-lg shadow-green-900/20">
                  Admissions Open
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10 hover:text-white">
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <Section background="white" className="-mt-16 relative z-20 pt-16 pb-16 rounded-t-3xl md:rounded-none">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1 */}
          <motion.div variants={item} className="bg-soft-gray p-8 rounded-2xl shadow-soft hover:shadow-md transition-shadow text-center">
            <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-blue">
              <UserCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Qualified Teachers</h3>
            <p className="text-gray-600">Highly trained and experienced faculty dedicated to student growth and personalized attention.</p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={item} className="bg-soft-gray p-8 rounded-2xl shadow-soft hover:shadow-md transition-shadow text-center">
            <div className="bg-fresh-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-fresh-green">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Safe Environment</h3>
            <p className="text-gray-600">Secure campus with 24/7 surveillance, child safety protocols, and a caring atmosphere.</p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={item} className="bg-soft-gray p-8 rounded-2xl shadow-soft hover:shadow-md transition-shadow text-center">
            <div className="bg-primary-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary-blue">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Quality Education</h3>
            <p className="text-gray-600">Modern English medium curriculum integrated with activity-based learning and smart tools.</p>
          </motion.div>
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section background="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">We go beyond textbooks to ensure holistic development of every child.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Puzzle, title: "Activity-Based Learning", desc: "Engaging curiosity through hands-on activities." },
            { icon: Star, title: "Values & Discipline", desc: "Instilling strong moral character and respect." },
            { icon: Monitor, title: "Smart Classrooms", desc: "Technology-integrated learning environments." },
            { icon: MessageCircle, title: "Parent Connectivity", desc: "Regular updates and parent-teacher meetings." },
            { icon: Wallet, title: "Affordable Fees", desc: "Quality education accessible to everyone." },
            { icon: UserCheck, title: "Student Support", desc: "Counseling and remedial classes for support." },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md border border-gray-100 flex items-start gap-4"
            >
              <div className="bg-blue-50 p-3 rounded-lg text-primary-blue">
                <feature.icon size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800 mb-1">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
