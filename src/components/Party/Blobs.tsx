import { css } from "@emotion/react";
import { AnimationOptions, motion } from "framer-motion";
import Blob1 from "/public/images/blobs/1.svg";
import Blob2 from "/public/images/blobs/2.svg";
import Blob3 from "/public/images/blobs/3.svg";

const blob = css({
    position: "absolute",
    height: "480px",
    width: "480px",
});

interface Props {
    overflow_hidden?: boolean;
}

function Blobs({ overflow_hidden }: Props) {
    const settings: AnimationOptions<any> = {
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    };

    if (overflow_hidden == null) overflow_hidden = true;

    return (
        <motion.div
            className={`blobs absolute h-full w-full ${overflow_hidden ? "overflow-hidden" : ""}`}
            transition={{ delay: 0.8, duration: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <motion.div
                css={blob}
                className="blob_1 -top-32 -left-72"
                transition={{ ...settings, duration: 8 }}
                animate={{ x: 10, y: 10, z: -13 }}>
                <Blob1 />
            </motion.div>
            <motion.div
                css={blob}
                className="blob_2 -bottom-64 -left-24"
                transition={{ ...settings, duration: 7 }}
                animate={{ x: -10, y: -15, z: 15 }}>
                <Blob2 />
            </motion.div>
            <motion.div
                css={blob}
                className="blob_3 -right-48 -top-44 lg:right-[1vw] lg:top-0"
                transition={{ ...settings, duration: 5 }}
                animate={{ x: 15, y: 10, z: -18 }}>
                <Blob3 />
            </motion.div>
        </motion.div>
    );
}

export default Blobs;
