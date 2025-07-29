import React from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import { motion } from "framer-motion";

// Variants for animation
const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.3
        }
    }
};

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: "easeOut" } }
};

const Hero2 = () => {
    const menuItems = [
        { title: "Home", link: "/home" },
        { title: "About Us", link: "/about" },
        { title: "Recommended Wines", link: "/wines" },
        {
            title: "Articles",
            link: "/articles",
            items: [
                { title: "Wine Tips", link: "/articles/wine-tips" },
                { title: "Food Pairing", link: "/articles/food-pairing" },
                { title: "Winery Tours", link: "/articles/winery-tours" },
            ],
        },
        { title: "Contact Us", link: "/contact" },
    ];

    return (
        <div className='w-full relative overflow-hidden'>
            {/* Header */}
            <header className='sticky top-0 w-full h-[60px] z-40 bg-white opacity-90 flex justify-center items-center'>
                <nav className='w-full xl:w-[90%] flex justify-between items-center px-5'>
                    {/* Brand Logo */}
                    <div className='flex justify-center items-center text-xl lg:text-2xl font-semibold lg:font-black text-[#355030] lg:gap-1'>
                        <span>logo</span>
                        <div className='w-5 h-5 lg:w-8 lg:h-8'><img src="images/headerglass.png" alt="logo" /></div>
                        <span>ipsum</span>
                    </div>

                    {/* Menu + Action */}
                    <div className='flex justify-center items-center gap-4 sm:gap-8'>
                        {/* MenuList */}
                        <ul className="hidden xl:flex justify-center items-center gap-3 font-tinos text-md">
                            {menuItems.map((item, index) => (
                                <li key={index} className="relative group flex items-center justify-center">
                                    <a href={item.link} className="flex items-center gap-1 px-2 py-1 hover:bg-gray-200 rounded-md transition">
                                        {item.title} {item.items && <RiArrowDropDownLine className="text-xl" />}
                                    </a>
                                    {item.items && (
                                        <ul className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-md min-w-[180px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-50">
                                            {item.items.map((dropdownItem, idx) => (
                                                <li key={idx} className="w-full">
                                                    <a href={dropdownItem.link} className="block px-4 py-2 hover:bg-gray-100 w-full text-left transition">{dropdownItem.title}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>

                        <button className='hidden md:block py-1 px-2 border border-[#355030] text-md font-tinos rounded-md'>Get Premium Access</button>
                        <button className='hidden sm:block border-none text-md sm:text-xl text-blue-500 font-tinos hover:bg-gray-200/60 rounded-md px-2 py-1 cursor-pointer font-semibold'>Login</button>
                        <CiSearch className='hidden sm:block border-none text-xl sm:text-2xl rounded-full hover:bg-gray-200/60 cursor-pointer font-semibold' />
                        <div><TiThMenu className='text-xl text-[#355030] sm:text-2xl lg:hidden' /></div>
                    </div>
                </nav>
            </header>

            {/* Section */}
            <section className='w-full h-[calc(100vh-60px)] bg-[url(/images/bghero2.png)] lg:bg-center lg:bg-cover'>
                <div className='w-full h-full'>
                    <motion.div
                        variants={container}
                        initial="hidden"
                        animate="visible"
                        className='w-full h-1/3 xl:h-full xl:w-[90%] mx-auto flex flex-col justify-center items-start pt-10 md:pt-25 lg:pt-30 pl-5 md:pl-8 xl:pt-0 xl:pl-0'
                    >
                        <motion.p variants={fadeUp} className='text-[#1E1E1E] text-4xl sm:text-5xl xl:text-6xl tracking-wide font-serif mt-8 sm:mt-2 mb-1 md:mb-2 lg:mb-4'>
                            Cheers to Life's Finer
                        </motion.p>
                        <motion.p variants={fadeUp} className='text-[#AB3630] text-5xl sm:text-6xl xl:text-8xl tracking-widest font-dmSerif font-extrabold uppercase'>
                            Moments
                        </motion.p>
                        <motion.p variants={fadeUp} className='text-[#848484] text-sm sm:leading-loose mt-3 lg:mt-5 xl:mt-2 w-[90%] md:w-[50%] lg:w-[40%] xl:w-[40%] text-justify'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar lorem vel lectus lobortis, at condimentum diam vestibulum. Morbi auctor porta pretium. Ut tristique vel mauris vel finibus.
                        </motion.p>
                        <motion.button
                            variants={fadeUp}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='px-4 py-2 bg-[#AB3630] text-white font-playfair font-semibold rounded-md mt-10 md:mt-15 xl:mt-5'
                        >
                            Lets Get Started
                        </motion.button>
                    </motion.div>
                </div>
            </section>

            {/* Glass Image */}
            <motion.img
                src="images/glass.png"
                alt="glass"
                className='absolute bottom-0 right-0 sm:right-0 h-[50%] sm:h-[70%] md:h-[70%] lg:h-[100%] lg:top-0'
                variants={slideRight}
                initial="hidden"
                animate="visible"
            />
        </div>
    );
};

export default Hero2;
