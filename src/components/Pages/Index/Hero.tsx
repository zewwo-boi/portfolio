import Blob1 from "/public/images/blobs/1.svg";
import Blob2 from "/public/images/blobs/2.svg";
import Blob3 from "/public/images/blobs/3.svg";
import { css } from "@emotion/react";
import ArrowDownwardRounded from "@mui/icons-material/ArrowDownwardRounded";
import { AnimationOptions, motion } from "framer-motion";

// TODO: Add animation to waving hand emoji

const hero = css({
    position: "relative",
    height: "100vh",
    width: "100vw",
    padding: "1.5rem 3rem",
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

const scrollerTextMotion = {
    hover: {
        y: "-8%",
    },
};

const scrollerIconMotion = {
    hover: {
        y: "8%",
    },
};

function Hero() {
    function smoothScroll() {
        document.body.scrollTop = window.innerHeight * 1.2;
        document.documentElement.scrollTop = window.innerHeight * 1.2;
    }

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
                    className="blob_3 -right-48 -top-44 md:right-[2vw] md:top-0"
                    transition={{ ...settings, duration: 5 }}
                    animate={{ x: 15, y: 10, z: -18 }}>
                    <Blob3 />
                </motion.div>
            </motion.div>
            <div className="introduction relative top-[40vh] w-auto sm:top-1/2 sm:-translate-y-1/2">
                <p className="text-left">
                    <motion.span
                        className="block text-3xl sm:text-4xl"
                        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        initial={{ y: "105%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}>
                        <span>👋</span> <span>Hello! My name is Nathaniel.</span>
                    </motion.span>
                    <motion.span
                        className="mt-16 block text-lg sm:mt-20 sm:text-2xl"
                        transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
                        initial={{ y: "-55%", opacity: 0 }}
                        animate={{ y: "-100%", opacity: 1 }}>
                        I am a self-taught web-developer located at Seoul.
                        <br />I specialize in web development.
                    </motion.span>
                </p>
            </div>
            <motion.div
                css={scroller}
                className="scroll-down h-16 w-36 select-none text-neutral-300"
                transition={{ delay: 1.2, duration: 0.6, type: "spring", bounce: 0.6 }}
                initial={{ y: "-55%", x: "-50%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1, cursor: "pointer" }}
                whileHover="hover"
                onClick={() => smoothScroll()}>
                <motion.span variants={scrollerTextMotion}>Scroll down</motion.span>
                <motion.div variants={scrollerIconMotion}>
                    <ArrowDownwardRounded />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Hero;
