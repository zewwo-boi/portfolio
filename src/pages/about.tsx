import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const about = css({
    position: "relative",
    height: "300vh",
    width: "100vw",
    padding: "1.5rem 3rem",
    overflow: "hidden",
});

function About({ route }) {
    const titleWords = ["Who", "exactly", "am", "I?"];

    const [visible, setVisible] = useState(true);
    const router = useRouter();

    useEffect(() => {
        if (route !== "/about") {
            setVisible(false);
        } else {
            setVisible(true);
        }

        setTimeout(() => {
            router.push(route);
        }, 200);
    }, [route]);

    return (
        <section css={about} className="about">
            <section className="introduction absolute top-[50vh] left-1/2 w-auto -translate-x-1/2 -translate-y-1/2">
                <p className="text-left">
                    <AnimatePresence mode="sync">
                        {visible &&
                            titleWords.map((value, index) => {
                                return (
                                    <motion.span
                                        className="text-[5vw] font-bold sm:text-3xl md:text-4xl"
                                        transition={{
                                            delay: index * 0.15 + 0.2,
                                            duration: 1,
                                            ease: "easeOut",
                                        }}
                                        initial={{ y: "105%", opacity: 0 }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.2, ease: "easeInOut" },
                                        }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        key={value}>
                                        {value}{" "}
                                    </motion.span>
                                );
                            })}
                    </AnimatePresence>
                </p>
            </section>
            <section className="content"></section>
        </section>
    );
}

About.getLayout = function getLayout(page) {
    return (
        <BlobsLayout overflow_hidden={false}>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default About;
