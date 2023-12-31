import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { SimpleBox, GaugeBox } from '../../../Components/elements/ControlBox'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BsFillCpuFill, BsArrowLeftRight } from 'react-icons/bs';


const data = {
    "cpu": {
        "model": "i9-13900K",
        "cores": 24,
        "usage": 0.24,
        "load_avg": "0.74 | 0.65 | 0.58" // top -n 1 | awk 'NR==1 { for (i = 13; i <= NF; i++) { printf "%s ", $i } printf "\n" }' FS=" " OFS=" "
    },
    "ram": {
        "total": 128,
        "inuse": 8.24
    },
    "network": {
        "total_recv": 104,      // Gigabytes
        "total_send": 79,       // Gigabytes
        "downlink": 23.12,      // Megabit
        "uplink": 7.46,         // Megabit
        "fds": 1045,
    }
}

function Stats() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    });

    const [stats, setStats] = useState(data)

    return (
        <motion.div
            className='p-1 md:p-4'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div role='status' className='flex flex-col md:flex-row md:justify-center md:items-center gap-4 text-lg mt-2'>
                <GaugeBox id="CPU" name={isDesktopOrLaptop ? "CPU" : "CPU"} value={`${stats.cpu.model} - ${stats.cpu.cores.toString()}c`} percentage={(stats.cpu.usage)} />


                <GaugeBox id="RAM" name={isDesktopOrLaptop ? "RAM" : "RAM"} value={`${stats.ram.inuse.toString()}GB / ${stats.ram.total.toString()}GB`} percentage={(stats.ram.inuse / stats.ram.total)} />

            </div>

            <div className='flex flex-col mt-6'>
                <div className='flex flex-row p-4 justify-center gap-4 md:gap-4'>
                    <SimpleBox className="w-1/2" icon={AiOutlineArrowDown} size={24} name={"Download"} value={`${stats.network.downlink} Mb/s`} />

                    <SimpleBox className="w-1/2" icon={AiOutlineArrowUp} size={24} name={"Upload"} value={`${stats.network.uplink}  Mb/s`} />
                </div>

                <div className='flex flex-row p-4 justify-center gap-4 md:gap-4'>
                    <SimpleBox className="w-1/2" valueClassName="text-lg" icon={BsArrowLeftRight} size={24} name={"Open Files"} value={`${stats.network.fds}`} />

                    <SimpleBox className="w-1/2" valueClassName="text-sm" icon={BsFillCpuFill} size={24} name={"Load Avg"} value={`${stats.cpu.load_avg}`} />

                </div>
            </div>


        </motion.div>

    )
}

export default Stats

