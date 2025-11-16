import React from 'react'
import { Link } from 'react-router-dom'

const Hero4 = () => {
  const menuList = ["Reviews", "Our Process", "Book a Event", "Book a Chef", "Our Story", "Sign Up"];

  return (
    <div>
      {/* Header */}
      <header className="relative w-full h-[60px] bg-[#7C8F10] flex items-center z-50">
        <nav className="w-[90%] mx-auto flex justify-between items-center">
          
          {/* Brand Logo (same overflow design) */}
          <div className="absolute top-0 w-[140px] h-[90px] bg-[#7C8F10] rounded-b-full flex flex-col justify-center items-center pb-2 pt-2 px-2">
            <img src="/images/logo4.png" alt="logo" className="w-[60px] h-auto" />
            <span className="text-white/90 mt-1 uppercase font-khand text-sm">Foody M.</span>
          </div>

          {/* Menu List */}
          <ul className="flex gap-5 ml-auto pr-2">
            {menuList.map((item, index) => (
              <li key={index}>
                <Link className="text-white/90 hover:text-white uppercase font-khand text-sm">{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='relative w-full min-h-[calc(100vh-60px)] mx-auto bg-[#060608]'>
            <div className='w-[90%] mx-auto flex justify-between items-center'>
                {/* Card */}
                <div className='w-1/2'>
                  Card
                </div>

                {/* Image container */}
                <img src="/images/her0-4.png" alt="hero4" className='absolute  bottom-0 right-0 w-[1/2] h-[100%] border-none backdrop-opacity-10 opacity-90 mix-blend-lighten' />
            </div>
      </section>
    </div>
  )
}

export default Hero4;
