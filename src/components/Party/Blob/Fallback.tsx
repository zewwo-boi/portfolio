import { css } from "@emotion/react";
import classnames from "classnames";
import { AnimationOptions, motion } from "framer-motion";
import Image from "next/image";

const blob = css({
    position: "absolute",
    height: "480px",
    width: "480px",
});

interface Props {
    overflow_hidden?: boolean;
}

function Blobs({ overflow_hidden = true }: Props) {
    const settings: AnimationOptions<any> = {
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
    };

    return (
        <motion.div
            className={classnames(
                "blobs absolute h-full w-full overflow-x-clip",
                overflow_hidden && "overflow-hidden"
            )}
            transition={{ delay: 0.8, duration: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}>
            <motion.div
                css={blob}
                className="blob_1 -left-72 -top-32"
                transition={{ ...settings, duration: 8 }}
                animate={{ x: 10, y: 10, z: -13 }}>
                <Image src="/images/blobs/1.svg" alt="Blob" fill={true} />
            </motion.div>
            <motion.div
                css={blob}
                className="blob_2 -bottom-64 -left-24"
                transition={{ ...settings, duration: 7 }}
                animate={{ x: -10, y: -15, z: 15 }}>
                <Image src="/images/blobs/2.svg" alt="Blob" fill={true} />
            </motion.div>
            <motion.div
                css={blob}
                className="blob_3 -right-48 -top-44 lg:right-[1vw] lg:top-0"
                transition={{ ...settings, duration: 5 }}
                animate={{ x: 15, y: 10, z: -18 }}>
                <Image src="/images/blobs/3.svg" alt="Blob" fill={true} />
            </motion.div>
        </motion.div>
    );
}

export default Blobs;
