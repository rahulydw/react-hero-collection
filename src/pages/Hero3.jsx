import { RiMenuLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Hero3 = () => {
    const menuList = [
        { title: "Home", link: "#" },
        { title: "Menu", link: "#" },
        { title: "About Us", link: "#" },
        { title: "Order Now", link: "#" },
        { title: "Contact us", link: "#" },
    ];

    return (
        <div className='w-full h-screen select-none'>
            {/* header */}
            <header className='w-full h-[60px] lg:h-[70px] bg-[#FFFCF6] flex justify-center items-center'>
                <nav className='w-full px-4 flex justify-between items-center md:w-[90%] mx-auto'>
                    {/* Logo */}
                    <div className="flex justify-center items-center">
                        <img src="/images/logo3.png" alt="Logo" className='w-16 h-13 lg:w-18 lg:h-15' />
                    </div>
                    {/* Menu Container */}
                    <div className="flex items-center">
                        <ul className="hidden md:flex justify-center items-start gap-6 font-playfair text-md md:text-xl font-semibold text-[#373737]">
                            {menuList.map((items, index) => (
                                <li key={index} className="hover:bg-[#E7DDCD] rounded-xl px-2 py-1 hover:text-black">
                                    <a href={items.link}>{items.title}</a>
                                </li>
                            ))}
                        </ul>
                        {/* Menu Icon */}
                        <RiMenuLine className="md:hidden text-3xl" />
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <section className='relative w-full flex flex-col lg:flex-row h-[calc(100vh-60px)] lg:h-[calc(100vh-70px)] bg-gradient-to-b to-[#E7DDCD] via-[#FFFCF6] from-[#FFFCF6]'>

                {/* Box-1 */}
                <div className='w-full sm:w-[90%] md:mx-auto lg:w-3/6 h-2/5 lg:h-full lg:order-3 lg:flex flex-col justify-start items-start lg:py-30 lg:pl-10 lg:bg-[#FFFCF6]'>

                    {/* Motion Heading */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className='text-4xl sm:text-5xl text-[#373737] font-playfair font-semibold pt-5 px-3 leading-12 w-[90%] sm:w-[80%] sm:leading-12 md:w-[50%] lg:w-[73%] lg:text-7xl lg:leading-18'
                    >
                        Where Every Bite Tells A <span className='text-[#D17537]'>Story</span>
                    </motion.p>

                    {/* Motion Paragraph */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                        className='w-[90%] pl-3 pt-4 text-justify text-sm text-[#373737] font-tinos leading-7 sm::leading-10 sm:w-[70%] md:w-[50%] lg:w-[80%] lg:text-xl lg:leading-8'
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id ante eget diam dapibus volutpat a vitae mi. Vivamus sit amet nibh vitae neque blandit consectetur vel sed dui. Maecenas imperdiet risus leo.
                    </motion.p>
                </div>

                {/* Box-2 */}
                <div className='w-full lg:w-2/6 relative lg:static h-2/5 lg:h-full lg:order-2 lg:bg-[#E7DDCD] lg:flex justify-end'>
                    {/* Motion Label */}
                    <motion.img
                        src="/images/label3.png"
                        alt="label"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.2, duration: 0.5 }}
                        className='absolute right-10 h-25 w-25 top-5 md:top-8 md:left-20 lg:left-[60%] lg:top-[65%] lg:h-30 lg:w-30'
                    />

                    {/* Fresh Label */}
                    <motion.div
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.7 }}
                        className="hidden absolute w-2/6 -top-[70px] h-screen lg:bg-[#E7DDCD] lg:flex justify-end"
                    >
                        <img src="/images/fresh3.png" alt="fresh" className="h-[99%] my-auto" />
                    </motion.div>
                </div>

                {/* Box-3 */}
                <div className='w-full lg:w-1/6 h-1/5 lg:h-full lg:order-1 lg:bg-[#FFFCF6]' />

                {/* Basket Image */}
                <motion.img
                    src="/images/img3.png"
                    alt="basket"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 0.7 }}
                    className='absolute bottom-0 h-[40%] sm:left-10 md:left-50 sm:h-[50%] md:h-[50%] lg:-left-0 lg:h-[55%] lg:w-[40%]'
                />
            </section>
        </div>
    );
};

export default Hero3;
