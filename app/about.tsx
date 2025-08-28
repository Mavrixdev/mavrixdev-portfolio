'use client'

import { motion } from 'framer-motion'
import { CalendarCheck, Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../components/ui/button'

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg shadow-purple-500/30">
            <Image
              src="/avatar.jpg"
              alt="Avatar"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <h2 className="text-4xl md:text-5xl text-center font-bold text-white">
            About Me ✨
          </h2>
          {/* Card giới thiệu + thông tin cá nhân */}
          <div className="bg-gray-900/50 p-6 rounded-xl shadow-md text-gray-200 space-y-4">
            {/* Giới thiệu */}
            <p className="text-lg text-gray-300 leading-relaxed">
              Xin chào 👋, mình là một lập trình viên Gen Z đam mê <span className="text-purple-400">Tool, Web Development</span>,
              thích xây dựng sản phẩm đẹp, mượt và đầy sáng tạo. Mục tiêu của mình
              là biến những ý tưởng điên rồ thành trải nghiệm người dùng tuyệt vời 🚀.
            </p>

            {/* Thông tin cá nhân */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="inline-flex items-center gap-1">
                <span className="font-semibold text-purple-400">Full Name:</span> Nguyễn Thạc Mậu
              </div>
              <div className="inline-flex items-center gap-2">
                <Mail className="w-5 h-5 text-purple-400" />
                accvippro208@gmail.com
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin className="w-5 h-5 text-purple-400" /> Viet Nam 🇻🇳
              </div>
              <div className="inline-flex items-center gap-2">
                <CalendarCheck className="w-5 h-5 text-purple-400" /> Open to opportunities
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">
              <a href="#contact">
                <Button
                  size="lg"
                  className="bg-purple-600 hover:bg-purple-700 shadow-md shadow-purple-500/30"
                >
                  Liên hệ
                </Button>
              </a>
              <a href="/NguyenthacmauCV.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                >
                  Xem CV
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
