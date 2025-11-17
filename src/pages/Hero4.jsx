import React from 'react'
import { MdMenu } from 'react-icons/md';
import { Link } from 'react-router-dom'
import { motion } from "motion/react";

const Hero4 = () => {
  const menuList = ["Reviews", "Our Process", "Book a Event", "Book a Chef", "Our Story", "Sign Up"];

  return (
    <div>
      {/* Header */}
      <header className="relative w-full h-[60px] bg-[#7C8F10] flex items-center z-50">
        <nav className="w-[90%] mx-auto flex justify-between items-center">

          {/* Brand Logo */}
          <div className="absolute top-0 w-[120px] lg:w-[140px] h-[90px] bg-[#7C8F10] rounded-b-full flex flex-col justify-center items-center pb-2 pt-2 px-2">
            <img src="/images/logo4.png" alt="logo" className="w-[50px] lg:w-[60px] h-auto" />
            <span className="text-white/90 mt-1 uppercase font-khand text-sm">Foody M.</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-5 ml-auto pr-2">
            {menuList.map((item, index) => (
              <li key={index}>
                <Link className="text-white/90 hover:text-white uppercase font-khand text-sm">{item}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden ml-auto z-[999]">
            <MdMenu className="text-white text-3xl cursor-pointer" />
          </div>

        </nav>

      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[calc(100vh-60px)] flex flex-col-reverse md:flex-row overflow-hidden bg-[#0f0f12]">

        {/* LEFT SIDE CONTENT */}
        <div className="relative w-full md:w-[48%] flex items-center justify-center z-20 
        bg-gradient-to-r md:bg-gradient-to-r from-[#0f0f12] via-[#121117] to-transparent p-6 md:p-0">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-white md:pl-10"
          >
            <p className="md:text-5xl lg:text-6xl xl:text-7xl text-4xl font-lobster font-extrabold leading-tight relative">
              Hire the{" "}
              <span className="relative inline-block">
                <span className="italic">best chef</span>

                {/* SVG underline motion */}
                <motion.svg
                  className="w-[160px] md:w-[180px] absolute left-0 -bottom-2"
                  viewBox="0 0 232 22"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                >
                  <motion.path
                    d="M0.0117188 1.81203C52.1831 1.19924 167.392 0.341338 210.857 1.81203C265.189 3.6504 195.904 3.65041 103.69 9.3953C11.4761 15.1402 135.591 13.1869 159.517 21"
                    stroke="#FFCB08"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                  />
                </motion.svg>
              </span>
              <br /> for any occassion.
            </p>

            <p className="font-khanda mt-4 tracking-wide text-sm md:text-base">
              Millions of people use chez You to make their parties awesome.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex gap-4">

              {/* Book a Chef */}
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="relative px-5 py-2 bg-[#7C8F10] text-white font-khand text-lg rounded-md 
                shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:bg-[#6f8010] transition-all overflow-hidden cursor-pointer"
              >
                <span className="absolute left-0 top-0 h-full w-[12%] bg-black/10"></span>
                <span className="relative z-10">Book a Chef</span>
              </motion.button>

              {/* Plan an Event */}
              <motion.button
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="relative px-5 py-2 bg-[#D47A1A] text-white font-khand text-lg rounded-md 
                shadow-[0_0_10px_rgba(0,0,0,0.3)] hover:bg-[#c46f14] transition-all overflow-hidden cursor-pointer"
              >
                <span className="absolute left-0 top-0 h-full w-[12%] bg-black/10"></span>
                <span className="relative z-10">Plan an Event</span>
              </motion.button>

            </div>
          </motion.div>

        </div>

        {/* RIGHT SIDE IMAGE AREA */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="relative w-full md:w-[52%] h-[50vh] md:h-full overflow-hidden"
        >

          {/* Dark fade */}
          <div className="absolute left-0 top-0 w-full md:w-[28%] h-full 
          bg-gradient-to-r from-[#0f0f12] via-[#121117]/50 to-transparent z-20"></div>

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-neutral-800/20 z-10"></div>

          {/* IMAGE */}
          <img
            src="/images/hero-4.png"
            className="w-full h-full object-cover z-0"
            alt="hero"
          />
        </motion.div>

      </section>

    </div>
  )
}

export default Hero4;
