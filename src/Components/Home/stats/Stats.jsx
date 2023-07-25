import React from 'react'
import GaugeChart from 'react-gauge-chart'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

function Stats() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    });

    return (
        <motion.div
            className=''
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div role='status' className='flex flex-col md:flex-row md:justify-center md:items-center gap-8 text-lg mt-5'>
                <div id='CPU' className='flex flex-col gap-3 md:border-2 md:border-[var(--creamy)] md:p-5 md:rounded-2xl md:text-center'>
                    <div className='md:flex md:flex-col md:items-center'>
                        <span className='font-bold text-[var(--lex-green)] md:text-3xl mb-2'>{isDesktopOrLaptop ? "CPU" : "CPU:"}</span>
                        <div className='animate-pulse h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                        <span className='text-2xl hidden'>i9-13900K</span>
                    </div>

                    <div className='flex flex-col justify-center self-center items-center'>
                        <div className='w-56'>
                            <GaugeChart id="gauge-chart2"
                                nrOfLevels={20}
                                percent={0.26}
                            />
                        </div>
                    </div>
                </div>

                <div id='RAM' className='flex flex-col gap-3 md:border-2 md:border-[var(--creamy)] md:p-5 md:rounded-2xl md:text-center'>
                    <div className='md:flex md:flex-col md:items-center'>
                        <span className='font-bold text-[var(--lex-green)] md:text-3xl mb-2'>{isDesktopOrLaptop ? "RAM" : "RAM:"}</span>
                        <div className='animate-pulse  h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                        <span className='text-2xl hidden'>128GB</span>
                    </div>
                    <div className='flex flex-col justify-center self-center items-center'>
                        <div className='w-56'>
                            <GaugeChart id="gauge-chart2"
                                nrOfLevels={20}
                                percent={0.52}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row p-4 justify-center gap-8 mt-5'>
                <div className='flex flex-col items-center md:border-2 md:border-[var(--creamy)] md:p-5 md:rounded-2xl md:text-center'>
                    <span className='text-2xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>Download</span>
                    <div className='animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mt-2'></div>
                </div>

                <div className='flex flex-col items-center md:border-2 md:border-[var(--creamy)] md:p-5 md:rounded-2xl md:text-center'>
                    <span className='text-2xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>Upload</span>
                    <div className='animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mt-2'></div>
                </div>
            </div>

            <div className='flex flex-row p-4 justify-center gap-8 mt-5'>
                <div className='flex flex-col items-center md:border-2 md:border-[var(--creamy)] md:p-5 md:rounded-2xl md:text-center'>
                    <span className='text-2xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>Open FDs</span>
                    <div className='animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mt-2'></div>
                </div>
            </div>
        </motion.div>

    )
}

export default Stats

