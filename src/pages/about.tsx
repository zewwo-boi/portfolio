import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Main";
import Parallax from "@/pages/about.parallax";

function About({ route }) {
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
        <section className="about">
            <AnimatePresence mode="sync">
                {visible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                        <Parallax />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

About.getLayout = function getLayout(page) {
    return (
        <BlobsLayout hidden={true}>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default About;
