import { css } from "@emotion/react";
import { AnimationOptions, motion } from "framer-motion";
import Blob1 from "/public/images/blobs/1.svg";
import Blob2 from "/public/images/blobs/2.svg";
import Blob3 from "/public/images/blobs/3.svg";

// TODO: Add animation to waving hand emoji

const hero = css({
    position: "relative",
    height: "100vh",
    width: "100vw",
    padding: "1.5rem 3rem",
    overflow: "hidden",
});

const scroller = css({
    position: "absolute",
    bottom: "15px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
});

const blob = css({
    position: "absolute",
    height: "480px",
    width: "480px",
});

function Hero() {
    const settings: AnimationOptions<any> = {
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    };

    return (
        <div css={hero}>
            <motion.div
                className="blobs absolute -mx-12 -my-6 h-full w-full"
                transition={{ delay: 0.8, duration: 0.8 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <motion.div
                    css={blob}
                    className="blob_1 -top-32 -left-72"
                    transition={{ ...settings, duration: 8 }}
                    animate={{ x: 10, y: 10, z: -13 }}>
                    <Blob1 />
                </motion.div>
                <motion.div
                    css={blob}
                    className="blob_2 -bottom-64 -left-24"
                    transition={{ ...settings, duration: 7 }}
                    animate={{ x: -10, y: -15, z: 15 }}>
                    <Blob2 />
                </motion.div>
                <motion.div
                    css={blob}
                    className="blob_3 -right-48 -top-44 lg:right-[1vw] lg:top-0"
                    transition={{ ...settings, duration: 5 }}
                    animate={{ x: 15, y: 10, z: -18 }}>
                    <Blob3 />
                </motion.div>
            </motion.div>
            <div className="introduction relative top-[40vh] w-auto md:top-[53vh] md:-translate-y-1/2">
                <p className="text-left">
                    <motion.span
                        className="block text-[5vw] sm:text-3xl md:text-4xl"
                        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        initial={{ y: "105%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}>
                        <span>👋</span> <span>Hello! I go by the name of &quot;zewwo&quot;</span>
                    </motion.span>
                    <motion.span
                        className="mt-16 block text-[4vw] sm:mt-12 sm:text-lg md:mt-12 md:text-2xl"
                        transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                        initial={{ y: "-20%", opacity: 0 }}
                        animate={{ y: "-100%", opacity: 1 }}>
                        <span className="hidden select-none text-3xl opacity-0 sm:inline md:text-4xl">
                            &nbsp;&nbsp; &nbsp; &nbsp;
                        </span>
                        I am a self-taught web-developer located in Seoul.
                    </motion.span>
                </p>
                <div className="spacing"></div>
            </div>
        </div>
    );
}

export default Hero;
