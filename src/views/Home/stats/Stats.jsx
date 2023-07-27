import React from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import GaugeBox from '../../../Components/elements/ControlBox'

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
                <GaugeBox id="CPU" name={isDesktopOrLaptop ? "CPU" : "CPU:"} value={"i9-13900K"} percentage={0.26}/>
                
                
                <GaugeBox id="RAM" name={isDesktopOrLaptop ? "RAM" : "RAM:"} value={"128GB"} percentage={0.52}/>
                
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

