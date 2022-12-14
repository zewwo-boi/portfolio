import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Emoji from "../Party/Emoji";

// TODO: Add an animated selected link indicator

export default function Header() {
    return (
        <motion.header
            transition={{ delay: 1, duration: 1.2, ease: "easeOut" }}
            initial={{ top: "-10px", opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            className="fixed z-50 m-4 flex h-[8vh] max-h-[84px] min-h-[64px] w-[calc(100%_-_32px)] flex-row items-center justify-center rounded-2xl border-[1px] border-white/20 bg-gradient-to-r from-blue-400/30 to-blue-700/30 backdrop-blur-md">
            <div className="_image relative ml-[4px] mr-auto h-16 w-16 cursor-pointer">
                <div className="emoji_lock relative flex h-full w-full items-center justify-center">
                    <Emoji />
                </div>
                <Link href="/">
                    <Image src="/images/logo.svg" layout="fill" alt="My logo." />
                </Link>
            </div>
            <div className="_nav mr-[25%] flex h-full w-1/2 items-center justify-evenly">
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
            </div>
        </motion.header>
    );
}
