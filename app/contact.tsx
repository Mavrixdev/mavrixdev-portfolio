"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-20 px-6 lg:px-20" id="contact">
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact 📬
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact form */}
        <motion.form
          className="space-y-4 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <label className="block text-sm font-medium mb-1">Tên Của Bạn</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-pink-500 dark:focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="your@gmail.com"
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-pink-500 dark:focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Lời Nhắn</label>
            <textarea
              placeholder="Write something..."
              rows={4}
              className="w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2 focus:ring-2 focus:ring-pink-500 dark:focus:ring-purple-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 py-2 text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Social links */}
        <motion.div
          className="flex flex-col items-center justify-center space-y-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
            Or connect with me on social media 👇
          </p>
          <div className="flex gap-6">
            <a
              href="https://t.me/mavrixdev"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 240 240"
                className="w-6 h-6 text-blue-400"
              >
                <circle cx="120" cy="120" r="120" fill="#0088cc"/>
                <path d="M50 120l120-50-30 110 60-90-100 80z" fill="white"/>
              </svg>
            </a>
            <a
              href="https://facebook.com/ntmdz08"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-6 h-6 text-blue-600"
              >
                <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 5 3.657 9.128 8.438 9.878v-6.987H7.898v-2.89h2.54V9.797c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.462h-1.26c-1.243 0-1.63.771-1.63 1.562v1.875h2.773l-.443 2.89h-2.33v6.987C18.343 21.128 22 17 22 12z"/>
              </svg>
            </a>
            <a
              href="https://github.com/mavrixdev"
              target="_blank"
              className="p-4 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
