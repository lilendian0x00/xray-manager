import { useState } from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { SimpleBox, GaugeBox } from '../../../Components/elements/ControlBox'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai';
import { BsFillCpuFill, BsArrowLeftRight } from 'react-icons/bs';


const pages = {
    "stats": {
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
}

function Stats() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 768px)'
    });

    const [stats, setStats] = useState(pages)

    return (
        <motion.div
            className=''
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div role='status' className='flex flex-col md:flex-row md:justify-center md:items-center gap-8 text-lg mt-5'>
                <GaugeBox id="CPU" name={isDesktopOrLaptop ? "CPU" : "CPU"} value={`${stats.stats.cpu.model} - ${stats.stats.cpu.cores.toString()}c`} percentage={(stats.stats.cpu.usage)} />


                <GaugeBox id="RAM" name={isDesktopOrLaptop ? "RAM" : "RAM"} value={`${stats.stats.ram.inuse.toString()}GB / ${stats.stats.ram.total.toString()}GB`} percentage={(stats.stats.ram.inuse / stats.stats.ram.total)} />

            </div>

            <div className='flex flex-row p-4 justify-center gap-8 mt-5'>
                <SimpleBox className="w-1/2" icon={AiOutlineArrowDown} size={24} name={"Download"} value={`${stats.stats.network.downlink} Mb/s`} />
                
                <SimpleBox className="w-1/2" icon={AiOutlineArrowUp} size={24} name={"Upload"} value={`${stats.stats.network.uplink}  Mb/s`} />
            </div>

            <div className='flex flex-row p-4 justify-center gap-8 mt-5'>
                <SimpleBox className="w-1/2" valueClassName="text-sm" icon={BsArrowLeftRight} size={20} name={"FDs"} value={`${stats.stats.network.fds}`} />

                <SimpleBox className="w-1/2" valueClassName="text-sm" icon={BsFillCpuFill} size={20} name={"Load"} value={`${stats.stats.cpu.load_avg}`} />

            </div>

        </motion.div>

    )
}

export default Stats

