import React, { useState, useEffect } from 'react'
import './Home.scss'
import axios from '../../api/axios'
import GaugeChart from 'react-gauge-chart'

const servers = {
    "stats": {

    }
}

function Home() {
    const [isloaded, setLoad] = useState(false)
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
        <div className='dark p-3 flex flex-col'>
            <div className='flex flex-col text-[var(--creamy)] p-3 min-h-[85vh] w-[100%] border-solid rounded-2xl bg-[var(--creamy)] dark:bg-[var(--wash-black)] shadow-lg shadow-black'>
                <div className='flex flex-row items-center'>
                    <h1 className='mr-auto text-3xl font-bold text-[var(--wash-black)] dark:text-[var(--creamy)]'>Stats</h1>
                    <button className='ml-auto border-solid border-[var(--creamy)] bg-[var(--wash-black)] text-[var(--creamy)] dark:bg-[var(--creamy)] dark:text-[var(--wash-black)] rounded-2xl text-sm text-center w-20 h-7'>gdfgdg</button>
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


        </div>
    )
}

export default Home