import React, { useState, useEffect } from 'react'
import './Home.scss'
import axios from '../../api/axios'
import GaugeChart from 'react-gauge-chart'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const servers = {
    "stats": {

    }
}

const pages = {
    "stats": {

    }, 
    "xray": {

    }
}

function Home() {
    const [isloaded, setLoad] = useState(false)
    const [page, setPage] = useState("stats")
    const [data, setData] = useState(servers)

    useEffect(() => {
        setInterval(() => {
            axios.get('/api/stats').then((resp) => {
                if (resp.status === 200) {
                    setData({ ...data, results: resp.data.results })
                }
            }).catch((err) => {
                //console.log("ERROR:", err)
            })
        }, 10000)

    }, [])

    return (
        <motion.div
            className='dark flex flex-col flex-shrink justify-center items-center h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className='flex flex-col text-[var(--creamy)] h-[95%] p-3 w-[90%] border-solid rounded-xl bg-[var(--creamy)] dark:bg-[var(--wash-black)] shadow-lg shadow-black'>


                <div className='flex flex-row items-center text-center'>
                    <h1 className='mr-auto text-3xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>Stats</h1>
                    <div className='flex flex-row outline-none border-solid border-2 border-[var(--creamy)] rounded-xl bg-transparent'>

                        <Link onClick={()=>setPage("stats")} className={`flex flex-col outline-none justify-center border-solid border-[var(--wash-black)] border-2 bg-[var(--wash-black)] text-[var(--creamy)] rounded-xl text-sm font-bold w-20 h-7 ${(page==="stats") ? "bg-[#D9D9D9] text-[#0D0D0D]" : "text-[#D9D9D9]"}`} >
                            <span>stats</span>
                        </Link>


                        <Link onClick={()=>setPage("xray")} className={`flex flex-col outline-none justify-center border-solid border-[var(--wash-black)] border-2 bg-[var(--wash-black)] text-[var(--creamy)] rounded-xl text-sm font-bold w-20 h-7 ${(page==="xray") ? "bg-[#D9D9D9] text-[#0D0D0D]" : "text-[#D9D9D9]"}`} >
                            <span>xray</span>
                        </Link>


                    </div>


                </div>


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
            </div>


        </motion.div>
    )
}

export default Home