import React from 'react'
import { motion } from "framer-motion"

function SlowMotion({ children }) {
    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{
                width: "100%",
                transition: { duration: .6 }
            }}
            exit={{
                opacity: 0,
                transition: { duration: .2 }
            }}
        >{children}</motion.div>
    )
}

export default SlowMotion