import { motion } from "framer-motion";
import Image from "next/image";
import Emoji from "../Party/Emoji";

export default function Header() {
    return (
        <motion.header
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            initial={{ top: "-10px", opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            className="fixed z-50 m-4 flex h-[72px] w-[calc(100%_-_32px)] flex-col justify-center rounded-2xl border-[1px] border-white/20 bg-gradient-to-r from-blue-400/10 to-blue-700/30 backdrop-blur-md">
            <div className="image relative ml-[4px] h-16 w-16">
                <div className="emoji_lock relative flex h-full w-full items-center justify-center">
                    <Emoji />
                </div>
                <Image src="/images/logo.svg" layout="fill" alt="My logo." />
            </div>
        </motion.header>
    );
}
