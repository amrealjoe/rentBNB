import React from 'react'
import { motion } from "framer-motion"

function Spring({ children }) {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 2, type: "spring", stiffness: 100 }}
        >{children}</motion.div>
    )
}

export default Spring
