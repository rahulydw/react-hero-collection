import { TiThMenu } from "react-icons/ti";
import { motion } from 'framer-motion';

const Hero1 = () => {
  const menuItem = [
    { title: "About Us", link: "#" },
    { title: "Blogs", link: "#" },
    { title: "FAQs", link: "#" },
    { title: "Contact Us", link: "#" },
  ];

  return (
    <div className='w-full h-scree'>
      {/* header */}
      <header className='w-full h-[60px] bg-[#F6F1ED] flex justify-center items-center border-b'>
        <nav className='w-[90%] lg:w-[80%] mx-auto h-full flex justify-between items-center'>
          {/* Brand Logo */}
          <div className='flex justify-center items-center'>
            <img src="images/Logo.png" alt="logo" className='w-15 h-10' />
          </div>

          {/* Menu Conatiner + Icon */}
          <div className='flex justify-between items-center gap-10'>
            {/* Menu List */}
            <ul className='hidden lg:flex justify-center items-center gap-5'>
              {menuItem.map((items, index) => (
                <li key={index} className='lg:text-md font-tinos font-semibold text-[#373737]'>
                  <a href={items.link}>{items.title}</a>
                </li>
              ))}
            </ul>

            {/* icon */}
            <div className='flex justify-center items-center gap-10'>
              <img src="images/cart.png" alt="cart" className='cursor-pointer' />
              <TiThMenu className='block lg:hidden text-2xl focus-within:outline-1' />
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className='relative w-full h-[calc(100vh-60px)] flex flex-col justify-center items-center'>
        {/* Top Box */}
        <div className='w-full h-1/2 md:h-1/2 bg-[#F6F1ED] lg:flex justify-start items-center'>
          <div className='md:hidden flex flex-col justify-center items-start px-4 mt-5 sm:mt-10'>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }} 
              className='font-playfair text-5xl sm:text-6xl'>
              Fresh Lemon
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.2 }} 
              className='font-playfair text-5xl sm:text-6xl'>
              Soft Drink
            </motion.p>
            <motion.span 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 1.4 }} 
              className='font-playfair text-md sm:text-xl mt-5 sm:w-[80%]'>
              ELEVATE YOUR CULINARY RITUALS WITH OUR THE TOUCH OF SOFT DRINK
            </motion.span>
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              className='w-40 h-10 font-playfair text-md mt-5  px-8 py-2 rounded-xl bg-[#E2BB3D] font-semibold cursor-pointer'>
              Buy Now
            </motion.button>
          </div>
          {/* Desktop-version */}
          <div className='hidden md:block md:w-full lg:w-[80%] mx-auto'>
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className='font-playfair text-2xl md:text-xl md:w-[80%] md:mt-5 md:px-5 lg:w-[30%]'>
              ELEVATE YOUR CULINARY RITUALS WITH OUR THE TOUCH OF SOFT DRINK
            </motion.p>
          </div>
        </div>

        {/* Bottom Box */}
        <div className='w-full h-1/2 md:h-1/2 bg-[#478947] z-0 md:flex justify-center items-center'>
          <div className='hidden md:w-[90%] lg:w-[80%] mx-auto md:flex justify-between items-start'>
            <motion.button
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5 }}
              className='w-35 h-10 font-playfair text-md px-5 py-2 rounded-xl bg-[#E2BB3D] font-semibold cursor-pointer'>
              Buy Now
            </motion.button>
            <motion.span
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.7 }}
              className='font-playfair lg:text-2xl text-white lg:tracking-widest md:text-base md:tracking-normal'>
              INFUSED WITH MINT FLAVOUR
            </motion.span>
          </div>
        </div>

        {/* Fresh Title */}
        <motion.img
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          src="images/fresh.png"
          alt="fresh"
          className='absolute left-1/2 top-1/2 -translate-y-1/2 md:-translate-y-[50%] -translate-x-1/2'
        />

        {/* Pepsi Can */}
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          src="images/drink.png"
          alt="drink"
          className='absolute left-1/2 -translate-x-1/2 bottom-0 h-[42%] w-110%] md:h-[90%]'
        />

        {/* Lemon */}
        <motion.img
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          src="images/lemon.png"
          alt="lemon"
          className='absolute left-[15%] sm:left-[24%] top-[60%] md:left-[20%] md:top-[10%] -translate-x-1/2  lg:left-[30%] lg:top-[5%]'
        />

        {/* Lemon-slice */}
        <motion.img
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4 }}
          src="images/lemon-slice.png"
          alt="sliceLemon"
          className='absolute right-5 sm:right-25 top-[65%] md:right-[15%] md:top-[15%] -translate-x-1/2  lg:right-[22%] lg:top-[18%]'
        />
      </section>
    </div>
  )
}

export default Hero1;
