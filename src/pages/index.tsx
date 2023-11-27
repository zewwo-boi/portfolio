import BlobsLayout from "@/components/layouts/Blobs";
import Layout from "@/components/layouts/Header";
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// TODO: Add responsive ui for mobile
// TODO: Refine the design of the app

const hero = css({
    position: "relative",
    height: "100vh",
    width: "100vw",
    padding: "1.5rem 3rem",
    overflow: "hidden",
});

function Home({ route }) {
    const [visible, setVisible] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (route !== "/") {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setTimeout(() => {
            router.push(route);
        }, 200);
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
                                        <strong>Hello!</strong> My name is Nathaniel
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
            <AnimatePresence>
                {visible && (
                    <>
                        <motion.div
                            className="disclaimer absolute bottom-4 left-1/2 -translate-x-1/2 text-sm"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.5, duration: 1 }}
                            exit={{ opacity: 0, transition: { delay: 0, duration: 0.2 } }}>
                            🚧 This website is a work in progress 🚧
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}

Home.getLayout = function getLayout(page) {
    return (
        <BlobsLayout>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default Home;
