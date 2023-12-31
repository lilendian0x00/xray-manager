import React, { useState, useEffect } from 'react'
import './Home.scss'
import axios from '../../api/axios'
import { motion } from 'framer-motion'
import { Routes, Route, Link, Navigate } from 'react-router-dom'
import Stats from './stats/Stats'
import Xray from './xray/Xray'

const servers = {
    "stats": {

    }
}

function Home() {
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
            className='dark flex flex-col flex-shrink justify-center items-center h-[100%] px-1 py-4 md:p-6 md:h-full md:w-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >

            <div className='flex flex-col text-[var(--creamy)] p-2 w-[93%] md:h-full border-solid rounded-xl bg-[var(--creamy)] dark:bg-[var(--wash-black)] shadow-lg shadow-black'>

                <div className='flex flex-row items-center text-center'>
                    <h1 className='mr-auto text-3xl md:text-4xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>{page.charAt(0).toUpperCase() + page.slice(1)}</h1>

                    <div className='flex flex-row outline-none border-solid border-2 border-[var(--creamy)] rounded-xl bg-transparent'>

                        <Link to={"/home/stats"} onClick={() => setPage("stats")} className={`flex flex-col outline-none justify-center border-solid border-[var(--wash-black)] border-2 rounded-xl text-sm md:text-xl font-bold w-20 h-7 transition duration-150 ease-in-out hover:ease-in ${(page === "stats") ? "bg-[#D9D9D9] text-[#0D0D0D]" : "text-[#D9D9D9]"}`} >
                            <span>stats</span>
                        </Link>

                        <Link to={"/home/xray"} onClick={() => setPage("xray")} className={`flex flex-col outline-none justify-center border-solid border-[var(--wash-black)] border-2 rounded-xl text-sm md:text-xl font-bold w-20 h-7 transition duration-150 ease-in-out hover:ease-in ${(page === "xray") ? "bg-[#D9D9D9] text-[#0D0D0D]" : "text-[#D9D9D9]"}`} >
                            <span>xray</span>
                        </Link>

                    </div>

                </div>
                {console.log()}
                <Routes>
                    <Route path="/" element={<Navigate to="/home/stats" />} />
                    <Route path="/stats" element={<Stats />} />
                    <Route path="/xray" element={<Xray />} />
                </Routes>
            </div>
        </motion.div>
    )
}

export default Home