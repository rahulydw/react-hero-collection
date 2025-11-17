import React from 'react'

const hero5 = () => {
    return (
        <section className='relative w-full h-screen overflow-hidden'>
            {/* Header */}
            <header className='relative z-[20] bg-white/20 backdrop-blur-sm h-[60px] flex justify-center items-center select-none'>
                <nav className='relative z-[25] w-full h-full md:6xl xl:w-7xl mx-auto flex justify-between items-center px-2 md:px-0'>
                    <div><img src="/images/Logo5.png" alt="Logo" className='w-32 md:w-40 h-8' /></div>
                    <ul className='hidden md:flex list-none justify-center items-center gap-8 font-libre text-lg cursor-pointer'>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Contact</li>
                        <li>Services</li>
                    </ul>
                    <button className='border-1 border-gray-500/80 md:border-white/90 px-3 py-1 rounded-lg text-black/80 md:text-white font-libre cursor-pointer'>SignUp</button>
                </nav>
            </header>

            <div className='select-none'>
                {/* Mobile Layout - Pizza at top */}
                <div className='md:hidden relative w-full h-1/2 flex justify-center items-center'>
                    {/* Circle Pizza */}
                    <div className='relative w-80 h-80 rounded-full flex justify-center items-center bg-gray-200/80'>
                        <div className='w-[95%] h-[95%] rounded-full bg-[#B53322]/90 relative'>
                            <img src="/images/PizzaPlate.png" alt="Pizza" className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]' />
                        </div>

                        {/* Tomoto */}
                        <div className='bg-white/30 rounded-lg backdrop-blur-sm px-3 py-2 absolute z-[25] flex justify-center items-center gap-4 -left-8 top-4'>
                            <img src="/images/tomoto.png" alt="tomoto" className='w-8 h-8' />
                            <div className='flex flex-col justify-center items-start text-neutral-900/80 font-libre text-sm'>
                                <label>Tomato</label>
                                <label><span className='text-orange-400'>280</span> Proteins</label>
                            </div>
                        </div>

                        {/* Chizz */}
                        <div className='bg-white/60 rounded-lg backdrop-blur-sm px-3 py-2 absolute z-[25] flex justify-center items-center gap-4 -right-6 top-4'>
                            <img src="/images/chiz.png" alt="Chizz" className='w-8 h-8' />
                            <div className='flex flex-col justify-center items-start text-neutral-900/80 font-libre text-sm'>
                                <label>Chesse</label>
                                <label><span className='text-orange-400'>280</span> Proteins</label>
                            </div>
                        </div>

                        {/* Onion */}
                        <div className='bg-white/60 rounded-lg backdrop-blur-sm px-3 py-2 absolute z-[25] flex justify-center items-center gap-4 left-1/4 -bottom-2'>
                            <img src="/images/onine.png" alt="Onine" className='w-8 h-8' />
                            <div className='flex flex-col justify-center items-start text-neutral-900/80 font-libre text-sm'>
                                <label>Onion</label>
                                <label><span className='text-orange-400'>280</span> Proteins</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Original Design */}
                <div className='hidden md:block'>
                    {/* Circle Pizza */}
                    <div className='absolute -top-35 -right-35 w-220 h-220 rounded-full 
                            flex justify-center items-center 
                            bg-gray-200/80 z-[5]'>

                        <div className='w-[95%] h-[95%] rounded-full bg-[#B53322]/90 z-[10] relative'>
                            <img src="/images/PizzaPlate.png" alt="Pizza" className='absolute top-50 -left-32 w-[85%] h-[85%]' />
                        </div>

                        {/* Tomoto */}
                        <div className='bg-white/30 rounded-lg backdrop-blur-sm px-3 py-2 absolute z-[25] flex justify-center items-center gap-4 left-50 top-60'>
                            <img src="/images/tomoto.png" alt="tomoto" className='w-10 h-10' />
                            <div className='flex flex-col justify-center items-start text-neutral-900/80 font-libre'>
                                <label>Tomato</label>
                                <label><span className='text-orange-400'>280</span> Proteins</label>
                            </div>
                        </div>

                        {/* Chizz */}
                        <div className='bg-white/60 rounded-lg backdrop-blur-sm px-3 py-2 absolute z-[25] flex justify-center items-center gap-4 right-70 bottom-80'>
                            <img src="/images/chiz.png" alt="Chizz" className='w-10 h-10' />
                            <div className='flex flex-col justify-center items-start text-neutral-900/80 font-libre'>
                                <label>Chesse</label>
                                <label><span className='text-orange-400'>280</span> Proteins</label>
                            </div>
                        </div>

                        {/* Onion */}
                        <div className='bg-white/60 rounded-lg backdrop-blur-sm px-3 py-2 absolute z-[25] flex justify-center items-center gap-4 -left-15 bottom-30'>
                            <img src="/images/onine.png" alt="Onine" className='w-10 h-10' />
                            <div className='flex flex-col justify-center items-start text-neutral-900/80 font-libre'>
                                <label>Onion</label>
                                <label><span className='text-orange-400'>280</span> Proteins</label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Container */}
                <div className='relative h-[calc(100vh-60px)] w-full md:6xl xl:w-7xl mx-auto flex flex-col md:flex-row justify-center items-center'>
                    {/* Mobile: Content below pizza */}
                    <div className='md:hidden w-full flex-1 flex justify-center items-start pt-8'>
                        <div className='w-full px-4 flex flex-col justify-center items-start text-[#B53322] space-y-2 text-center'>
                            <p className='text-6xl font-extrabold font-lobster tracking-wider'>Pizza</p>
                            <p className='text-2xl font-libre'>Perfection Every Time</p>
                            <p className='text-sm max-w-md text-left'>Lorem ipsum dolor sit amet consectetur. Quis imperdiet urna sollicitudin ac nunc pharetra pharetra tincidunt neque.</p>

                            {/* Button */}
                            <button className='px-4 py-2 bg-[#EA5C0B] rounded-lg text-white mt-4 cursor-pointer font-libre'>View Our Menu</button>
                        </div>
                    </div>

                    {/* Desktop: Original layout */}
                    <div className='hidden md:flex w-1/2 justify-center items-center'>
                        <div className='w-md flex flex-col justify-center items-start text-[#B53322] space-y-2'>
                            <p className='text-9xl font-extrabold font-lobster tracking-wider'>Pizza</p>
                            <p className='text-4xl font-libre'>Perfection Every Time</p>
                            <p className='text-md'>Lorem ipsum dolor sit amet consectetur. Quis imperdiet urna <br /> sollicitudin ac nunc pharetra pharetra tincidunt neque.</p>

                            {/* Button */}
                            <button className='px-4 py-2 bg-[#EA5C0B] rounded-lg text-white mt-8 cursor-pointer font-libre'>View Our Menu</button>
                        </div>
                    </div>
                    <div className='hidden md:block w-1/2' />
                </div>
            </div>
        </section>
    )
}

export default hero5;