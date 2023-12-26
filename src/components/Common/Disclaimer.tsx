import { motion } from "framer-motion";

export default function Disclaimer() {
    return (
        <motion.div
            className="disclaimer absolute bottom-4 left-1/2 -translate-x-1/2 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            exit={{ opacity: 0, transition: { delay: 0, duration: 0.2 } }}>
            🚧 This website is a work in progress 🚧
        </motion.div>
    );
}
