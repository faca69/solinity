"use client";

import { motion } from "framer-motion";

export default function ContactUsSection() {
  return (
    <>
      <motion.h6
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-[35px]  sm:text-[65px] font-semibold pb-10 bg-clip-text text-transparent bg-gradient-to-b from-gray-100 to-gray-400 "
      >
        Contact Us
      </motion.h6>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className="pb-28"
      >
        <form
          className="flex flex-col justify-center max-w-screen-md mx-auto p-8 bg-gradient-to-br from-gray-900/60 to-transparent  shadow-emerald-800/40 shadow-inner rounded-xl text-white space-y-6"
          action="https://formspree.io/f/xanwvgbw"
          method="POST"
        >
          <label className="flex flex-col">
            <span className="mb-2 text-lg font-semibold text-left">
              Your Email:
            </span>
            <input
              type="email"
              name="email"
              className="p-4 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white bg-transparent"
              placeholder="Enter your email"
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-2 text-lg font-semibold text-left">
              Your Message:
            </span>
            <textarea
              name="message"
              rows={5}
              className="p-4 rounded-xl bg-transparent border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white"
              placeholder="What would you like to tell us?"
              required
            ></textarea>
          </label>
          <button className="p-[3px] relative " type="submit">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-emerald-700 rounded-lg " />
            <div className="px-8 py-2  bg-[#151516] rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent font-bold w-full">
              Send Message
            </div>
          </button>
        </form>
      </motion.div>
    </>
  );
}
