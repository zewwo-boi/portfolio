/* eslint-disable react/no-unknown-property */
import Blob from "@/components/Party/Blob/Blob";
import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import classnames from "classnames";
import { motion } from "framer-motion";

import fragmentShaderBlue from "@/components/Party/Blob/blue.frag";
import fragmentShaderPink from "@/components/Party/Blob/pink.frag";
import fragmentShaderYellow from "@/components/Party/Blob/yellow.frag";
import { Vector3 } from "three";

const blob = css({
    position: "absolute",
    height: "480px",
    width: "480px",
});

interface Props {
    overflow_hidden: boolean;
}

export default function Blobs({ overflow_hidden = true }: Props) {
    type Dpr = [min: number, max: number];
    const canvasOptions = {
        camera: {
            position: new Vector3(0, 0, 8),
        },
        dpr: [1, 2] as Dpr,
        flat: true,
        linear: true,
    };

    return (
        <motion.div
            transition={{ duration: 0.8 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.8 } }}
            exit={{ opacity: 0 }}
            className={classnames(
                "blobs absolute h-full w-full overflow-x-clip",
                overflow_hidden && "overflow-hidden"
            )}>
            <div className="blob_1 -left-72 -top-32" css={blob}>
                <Canvas {...canvasOptions}>
                    <Blob fragment_shader={fragmentShaderPink} />
                </Canvas>
            </div>
            <div className="blob_2 -bottom-32 -left-24" css={blob}>
                <Canvas {...canvasOptions}>
                    <Blob fragment_shader={fragmentShaderBlue} />
                </Canvas>
            </div>
            <div className="blob_3 -right-48 -top-44 lg:right-[1vw] lg:top-0" css={blob}>
                <Canvas {...canvasOptions}>
                    <Blob fragment_shader={fragmentShaderYellow} />
                </Canvas>
            </div>
        </motion.div>
    );
}
