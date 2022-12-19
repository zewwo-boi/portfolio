import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";
import { css } from "@emotion/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const gallery = css({
    position: "relative",
    height: "300vh",
    width: "100%",
    overflow: "hidden",
});

const images = ["1", "3", "4", "5", "2"];

function Gallery({ route }) {
    const titleWords = "Gallery";

    const [visible, setVisible] = useState(true);
    const router = useRouter();

    useEffect(() => {
        let delay = 200;

        if (route !== "/gallery") {
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
        <section css={gallery} className="gallery">
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
            <section className="absolute top-[140vh] h-[160vh] w-full">
                <div className="_gallery -gap-4 grid h-full grid-cols-3 items-start justify-start">
                    {images.map((v, i) => {
                        return (
                            <motion.div
                                className="relative m-4 h-full w-auto self-start"
                                key={v}
                                initial={{ y: "10%", opacity: 0 }}
                                whileInView={{ y: "0%", opacity: 1 }}
                                transition={{ delay: i * 0.2 + 0.1, duration: 1 }}
                                viewport={{ once: true }}>
                                <Image
                                    src={`/images/raster/${v}.jpg`}
                                    fill={true}
                                    style={{
                                        objectFit: "contain",
                                    }}
                                    alt="Image"
                                />
                            </motion.div>
                        );
                    })}
                </div>
            </section>
        </section>
    );
}

Gallery.getLayout = function getLayout(page) {
    return (
        <BlobsLayout overflow_hidden={false}>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default Gallery;
