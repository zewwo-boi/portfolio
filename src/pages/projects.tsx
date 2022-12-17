import BlobsLayout from "@/components/Layouts/Blobs";
import Layout from "@/components/Layouts/Header";
import { css } from "@emotion/react";
import { motion } from "framer-motion";

const projects = css({
    position: "relative",
    height: "300vh",
    width: "100vw",
    padding: "1.5rem 3rem",
    overflow: "hidden",
});

function Projects() {
    return (
        <section css={projects} className="Projects">
            <div className="introduction absolute top-[40vh] left-1/2 w-auto -translate-x-1/2 md:top-[53vh] md:-translate-y-1/2">
                <p className="text-left">
                    <motion.span
                        className="block text-[5vw] sm:text-3xl md:text-4xl"
                        transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
                        initial={{ y: "105%", opacity: 0 }}
                        exit={{ y: "105%", opacity: 0 }}
                        animate={{ y: "0%", opacity: 1 }}
                        key="lol">
                        <span>Projects me</span>
                    </motion.span>
                </p>
            </div>
        </section>
    );
}

Projects.getLayout = function getLayout(page) {
    return (
        <BlobsLayout overflow_hidden={false}>
            <Layout>{page}</Layout>
        </BlobsLayout>
    );
};

export default Projects;
