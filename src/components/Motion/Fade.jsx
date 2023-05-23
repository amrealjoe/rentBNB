import React from 'react'
import { motion } from "framer-motion"

function FadeMotion({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: .6 }
            }}
            exit={{
                opacity: 0,
                transition: {duration: .2}
            }}
        >{children}</motion.div>
    )
}

export default FadeMotion