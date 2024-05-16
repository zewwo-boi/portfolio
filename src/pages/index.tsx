import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import Disclaimer from "@/components/Common/Disclaimer";
import RouteNavigation from "@/components/Layouts/RouteNavigation";
import DefaultProps from "@/utils/types/Props";

// TODO: Add responsive ui for mobile
// TODO: Refine the design of the app

const hero = css({
    position: "relative",
    height: "100vh",
    width: "100vw",
    padding: "1.5rem 3rem",
    overflow: "hidden",
});

function Home({ route }: DefaultProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(route === "/");
    }, [route]);

    return (
        <section css={hero} className="hero">
            <section className="introduction relative top-[40vh] w-auto md:top-[53vh] md:-translate-y-1/2">
                <p className="text-left">
                    <AnimatePresence>
                        {visible && (
                            <>
                                <motion.span
                                    className="block text-[5vw] sm:text-3xl md:text-4xl"
                                    transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                                    initial={{ y: "105%", opacity: 0 }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.2, ease: "easeInOut" },
                                    }}
                                    animate={{ y: "0%", opacity: 1 }}
                                    key="intro">
                                    <span>👋</span>{" "}
                                    <span>
                                        <strong>Hello!</strong> I&apos;m zewwo
                                    </span>
                                </motion.span>
                                <motion.span
                                    className="mt-16 block text-[4vw] sm:mt-12 sm:text-lg md:mt-12 md:text-2xl"
                                    transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
                                    initial={{ y: "-20%", opacity: 0 }}
                                    exit={{
                                        opacity: 0,
                                        transition: { duration: 0.2, ease: "easeInOut" },
                                    }}
                                    animate={{ y: "-100%", opacity: 1 }}
                                    key="intro_1">
                                    <span className="hidden select-none text-3xl opacity-0 sm:inline md:text-4xl">
                                        &nbsp;&nbsp; &nbsp; &nbsp;
                                    </span>
                                    I am a self-taught developer located in 🇰🇷
                                </motion.span>
                            </>
                        )}
                    </AnimatePresence>
                </p>
            </section>
            <AnimatePresence>{visible && <Disclaimer />}</AnimatePresence>
        </section>
    );
}

Home.getLayout = function getLayout(page) {
    return <RouteNavigation>{page}</RouteNavigation>;
};

export default Home;
