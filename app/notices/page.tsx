"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Bell, Calendar, ChevronRight } from "lucide-react";

export default function NoticesPage() {
    const notices = [
        { title: "Mid-Term Examination Schedule", date: "March 10, 2024", type: "Exam", desc: "The mid-term examinations for classes 5-10 will commence from March 20th. Date sheet attached." },
        { title: "School Reopening Notice", date: "April 01, 2024", type: "General", desc: "School will reopen for the new session on April 15th, 2024. All students are requested to be present." },
        { title: "Summer Vacation Announcement", date: "May 25, 2024", type: "Holiday", desc: "Summer vacations are scheduled from June 1st to August 14th." },
        { title: "Parent-Teacher Meeting", date: "March 15, 2024", type: "Meeting", desc: "PTM regarding final term results will be held on Saturday, 9am - 12pm." },
    ];

    return (
        <>
            <Section background="blue" className="py-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4">Notices & Announcements</h1>
                    <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                        Stay updated with the latest news, events, and schedules.
                    </p>
                </motion.div>
            </Section>

            <Section background="white">
                <div className="max-w-4xl mx-auto space-y-6">
                    {notices.map((notice, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group cursor-pointer"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div className="flex gap-4 items-start">
                                    <div className="bg-blue-50 text-primary-blue p-3 rounded-lg group-hover:bg-primary-blue group-hover:text-white transition-colors">
                                        <Bell size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-primary-blue transition-colors">
                                            {notice.title}
                                        </h3>
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar size={14} />
                                                {notice.date}
                                            </span>
                                            <span className="px-2 py-0.5 bg-gray-100 rounded-full text-xs font-medium">
                                                {notice.type}
                                            </span>
                                        </div>
                                        <p className="text-gray-600">
                                            {notice.desc}
                                        </p>
                                    </div>
                                </div>
                                <ChevronRight className="text-gray-300 group-hover:text-primary-blue transition-colors" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>
        </>
    );
}
