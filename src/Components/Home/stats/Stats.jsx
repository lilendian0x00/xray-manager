import React from 'react'
import GaugeChart from 'react-gauge-chart'
import { motion } from 'framer-motion'

function Stats() {
    return (
        <motion.div
            className=''
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div role='status' className='flex flex-col gap-8 text-lg mt-5'>
                <div id='CPU' className='flex flex-col gap-2'>
                    <div className=''>
                        <span className='font-bold text-[var(--lex-green)]'>CPU: </span>
                        <div className='animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                    </div>

                    <div className='flex flex-col justify-center self-center items-center'>
                        <div className='w-56'>
                            <GaugeChart id="gauge-chart2"
                                nrOfLevels={20}
                                percent={0.86}
                            />
                        </div>
                    </div>
                </div>

                <div id='RAM' className='flex flex-col gap-2'>
                    <div className=''>
                        <span className='font-bold text-[var(--lex-green)]'>RAM: </span>
                        <div className='animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                    </div>
                    <div className='flex flex-col justify-center self-center items-center'>
                        <div className='w-56'>
                            <GaugeChart id="gauge-chart2"
                                nrOfLevels={20}
                                percent={0.32}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row p-4 justify-center gap-8 mt-5'>
                <div className='flex flex-col items-center'>
                    <span className='text-2xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>Download</span>
                    <div className='animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mt-2'></div>
                </div>

                <div className='flex flex-col items-center'>
                    <span className='text-2xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>Upload</span>
                    <div className='animate-pulse h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mt-2'></div>
                </div>
            </div>
        </motion.div>

    )
}

export default Stats

