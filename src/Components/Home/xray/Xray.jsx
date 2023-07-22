import React from 'react'
import { motion } from 'framer-motion'

function Xray() {
  return (
    <motion.div
      className=''
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >

    </motion.div>
  )
}

export default Xray