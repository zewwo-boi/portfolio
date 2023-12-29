import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import RouteNavigation from "@/components/Layouts/RouteNavigation";
import Parallax from "@/pages/about.parallax";
import DefaultProps from "@/utils/types/Props";

// TODO: Smoother effects

function About({ route }: DefaultProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        setVisible(route === "/about");
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
    return <RouteNavigation>{page}</RouteNavigation>;
};

export default About;
