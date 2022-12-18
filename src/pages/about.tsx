import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const about = css({
    position: "relative",
    height: "300vh",
    width: "100%",
    overflow: "hidden",
});

const content = css({
    position: "relative",
    height: "calc(100% - 100vh)",
    width: "100%",
    top: "130vh",
});

const path = css({
    position: "absolute",
    width: "2px",
    height: "calc(100% - 40vh)",
    left: "11vw",
});

const diamond = css({
    position: "absolute",
    left: "-35px",
    height: "72px",
    width: "72px",
});

function TimelineObject() {
    return <div></div>;
}

function About({ route }) {
    const titleWords = "Who exactly am I?";

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
            // window.scrollTo(0, 0); // TODO: Re-toggle on production
            delay = 500;
        }

        setTimeout(() => {
            router.push(route);
        }, delay);
    }, [route]);

    return (
        <section css={about} className="about">
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
            <section className="content" css={content}>
                <div className="_timeline">
                    <div className="__path bg-slate-600" css={path}>
                        <motion.div
                            className="diamond_top -top-14"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                            css={diamond}>
                            <Image src="/images/icon-diamond.png" fill={true} alt="Diamond shape" />
                        </motion.div>
                        <motion.div
                            className="diamond_bottom -bottom-14"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            viewport={{ once: true }}
                            css={diamond}>
                            <Image src="/images/icon-diamond.png" fill={true} alt="Diamond shape" />
                        </motion.div>
                    </div>
                    <div className="__timeline_objects">
                        <TimelineObject />
                    </div>
                </div>
                <div className="_main"></div>
            </section>
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
