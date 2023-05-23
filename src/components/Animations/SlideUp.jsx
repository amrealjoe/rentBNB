import React from 'react'
import { motion } from "framer-motion"

export function SlideUp({ children }) {
    return (
        <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        >{children}</motion.div>
    )
}

export default SlideUp