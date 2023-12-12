import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// TODO: Replace about page

const about = css({
    position: "relative",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
});

function About({ route }) {
    const titleWords = "About me";

    const [visible, setVisible] = useState(true);
    const router = useRouter();

    useEffect(() => {
        let delay = 200;

        if (route !== "/about") {
            setVisible(false);
        } else {
            setVisible(true);
        }

        if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
            delay += 300;
        }

        setTimeout(() => {
            router.push(route);
        }, delay);
    }, [route]);

    return (
        <section css={about} className="about">
            <section className="introduction absolute left-1/2 top-[55vh] w-auto -translate-x-1/2 -translate-y-1/2">
                <p className="text-left">
                    <AnimatePresence mode="sync">
                        {visible &&
                            titleWords.split(" ").map((value, index) => {
                                return (
                                    <motion.span
                                        className="text-[5vw] font-bold sm:text-3xl md:text-4xl"
                                        transition={{
                                            delay: index * 0.15 + 0.2,
                                            duration: 1,
                                            ease: "easeOut",
                                        }}
                                        initial={{ opacity: 0 }}
                                        exit={{
                                            opacity: 0,
                                            transition: { duration: 0.2, ease: "easeInOut" },
                                        }}
                                        animate={{ opacity: 1 }}
                                        key={value}>
                                        {value}{" "}
                                    </motion.span>
                                );
                            })}
                    </AnimatePresence>
                </p>
            </section>
        </section>
    );
}

About.getLayout = function getLayout(page) {
    return (
        <BlobsLayout overflow_hidden={true}>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default About;
