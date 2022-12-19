import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";
import { css } from "@emotion/react";
import ArrowDownwardRounded from "@mui/icons-material/ArrowDownwardRounded";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const about = css({
    position: "relative",
    height: "220vh",
    width: "100%",
    overflow: "hidden",
});

const content = css({
    position: "relative",
    height: "calc(100% - 100vh)",
    width: "100%",
    top: "130vh",
});

const timeline = css({
    position: "absolute",
    width: "85vw",
    height: "calc(100% - 40vh)",
    left: "7.5vw",
});

const path = css({
    position: "relative",
    width: "2px",
    height: "100%",
    left: "3.5vw",
});

const diamond = css({
    position: "absolute",
    left: "-35px",
    height: "72px",
    width: "72px",
});

function TimelineObject({ text }) {
    const timelineCircle = css({
        position: "relative",
        height: "16px",
        width: "16px",
        top: "24px",
        left: "calc(3.5vw - 7px)",
        borderRadius: "100px",
    });

    return (
        <div className="mb-[2vh] h-[calc(25%_-_2vh)]">
            <div className="border-4 border-body-primary bg-slate-600" css={timelineCircle}></div>
            <motion.div
                className="relative left-[calc(4.5vw_+_9px)] text-xl"
                initial={{ x: "-1%", opacity: 0 }}
                whileInView={{ x: "0%", opacity: 1 }}
                transition={{ delay: 0.1, duration: 0.7 }}
                viewport={{ once: true }}>
                {text}
            </motion.div>
        </div>
    );
}

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
            <AnimatePresence>
                {visible && false && (
                    <motion.div
                        className="absolute bottom-[calc(16px_+_120vh)] left-1/2 flex -translate-x-1/2 cursor-pointer flex-col items-center text-sm"
                        whileHover={{ gap: "12px", transition: { duration: 0.2 } }}
                        onHoverStart={(e) => {}}
                        onHoverEnd={(e) => {}}
                        initial={{ opacity: 0, gap: "8px" }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        exit={{ opacity: 0, transition: { delay: 0, duration: 0.2 } }}>
                        Scroll Down
                        <ArrowDownwardRounded className="block" />
                    </motion.div>
                )}
            </AnimatePresence>
            <section className="content" css={content}>
                <div className="_timeline" css={timeline}>
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
                    <div className="__timeline_objects relative -top-[90%] h-[90%]">
                        <TimelineObject text="I am a young student passionate about learning new things" />
                        <TimelineObject text="I am thinking of majoring in C.S. and physics" />
                        <TimelineObject text="I am always working on creating and improving my projects" />
                        <TimelineObject text="I am lazy" />
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
