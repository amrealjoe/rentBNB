import React from 'react'
import { motion } from "framer-motion"

function SlideRight({ children }) {
    return (
        <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
        >{children}</motion.div>
    )
}

export default SlideRight