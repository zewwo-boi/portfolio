import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Parallax from "@/pages/about.parallax";

// TODO: Smoother effects

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

About.layouts = {
    blobs: false,
    header: true,
};

export default About;
