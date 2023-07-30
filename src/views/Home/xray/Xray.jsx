import { useState } from 'react'
import { motion } from 'framer-motion'

const data = {
  "xray": {
    "status": "active",
    "pid": "1218451",
    "memory": "41.3M",
    "uptime": "5 days ago",
  }
}

function Xray() {
  const [xray, setXrayStatus] = useState(data)

  return (
    <motion.div
      className='p-1 md:p-4'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

      <div className='flex flex-col items-center mt-4'>
        <span className='text-2xl'>Xray Service</span>
      </div>

    </motion.div>
  )
}

export default Xray