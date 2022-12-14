import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";

// TODO: Add animation to waving hand emoji

const hero = css({
    position: "relative",
    height: "100vh",
    width: "100vw",
    padding: "1.5rem 3rem",
    overflow: "hidden",
});

function Hero() {
    return (
        <div css={hero}>
            <div className="introduction relative top-[40vh] w-auto md:top-[53vh] md:-translate-y-1/2">
                <p className="text-left">
                    <AnimatePresence>
                        <motion.span
                            className="block text-[5vw] sm:text-3xl md:text-4xl"
                            transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                            initial={{ y: "105%", opacity: 0 }}
                            exit={{ y: "105%", opacity: 0 }}
                            animate={{ y: "0%", opacity: 1 }}
                            key="lol">
                            <span>👋</span>{" "}
                            <span>Hello! I go by the name of &quot;zewwo&quot;</span>
                        </motion.span>{" "}
                        <motion.span
                            className="mt-16 block text-[4vw] sm:mt-12 sm:text-lg md:mt-12 md:text-2xl"
                            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                            initial={{ y: "-20%", opacity: 0 }}
                            exit={{ y: "-20%", opacity: 0 }}
                            animate={{ y: "-100%", opacity: 1 }}
                            key="lol2">
                            <span className="hidden select-none text-3xl opacity-0 sm:inline md:text-4xl">
                                &nbsp;&nbsp; &nbsp; &nbsp;
                            </span>
                            I am a self-taught web-developer located in 🇰🇷
                        </motion.span>
                    </AnimatePresence>
                </p>
            </div>
        </div>
    );
}

export default Hero;
