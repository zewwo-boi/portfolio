import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";
import { css } from "@emotion/react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const social = css({
    position: "relative",
    height: "300vh",
    width: "100vw",
    overflow: "hidden",
});

const content = css({
    position: "relative",
    height: "calc(100% - 85vh)",
    width: "100%",
    top: "115vh",
    background: "#fffff00f",
});

function Social({ route }) {
    const titleWords = "My collection of social";

    const [visible, setVisible] = useState(true);
    const router = useRouter();

    useEffect(() => {
        let delay = 200;

        if (route !== "/social") {
            setVisible(false);
        } else {
            setVisible(true);
        }

        if (window.scrollY !== 0) {
            window.scrollTo(0, 0);
            delay = 500;
        }

        setTimeout(() => {
            router.push(route);
        }, delay);
    }, [route]);

    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <section css={social} className="social">
            <section className="introduction absolute top-[50vh] left-1/2 w-auto -translate-x-1/2 -translate-y-1/2">
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
            <section className="content" css={content} ref={ref}></section>
        </section>
    );
}

Social.getLayout = function getLayout(page) {
    return (
        <BlobsLayout overflow_hidden={false}>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default Social;
