import BlobsLayout from "@/components/layouts/Blobs";
import Layout from "@/components/layouts/Header";
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

const load = ({ src, width, quality }) => {
    return `https://images.unsplash.com/${src}&w=${width}&q=${quality || 75}`;
};

const images = [
    "https://images.unsplash.com/photo-1670245363917-5b12dc9c0f57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1667722952889-6d17a37b36e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1667722313656-c0c2d032db29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1667722961882-4280efeadf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
    "https://images.unsplash.com/photo-1667722379763-db88922ec941?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=60",
];

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
            delay += 300;
        }

        setTimeout(() => {
            router.push(route);
        }, delay);
    }, [route]);

    return (
        <section css={gallery} className="gallery">
            <section className="introduction absolute top-[50vh] left-1/2 w-auto -translate-x-1/2 -translate-y-1/2">
                <p className="text-left">
                    <AnimatePresence>
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
                                    src={`/images/raster/${i + 1}.jpg`}
                                    fill={true}
                                    style={{
                                        objectFit: "contain",
                                    }}
                                    alt="Image"
                                    quality={30}
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
