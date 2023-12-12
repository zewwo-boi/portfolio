/* eslint-disable react/no-unknown-property */
import { MeshProps, useFrame } from "@react-three/fiber";
import { MotionProps } from "framer-motion";
import { motion } from "framer-motion-3d";
import { useMemo, useRef } from "react";
import { Mesh } from "three";

import vertexShader from "@/components/Party/Blob/vertexShader.vert";

interface Props extends Partial<MotionProps & MeshProps> {
    fragment_shader: string;
    intensity?: number;
}

function Blob({ intensity = 0.8, fragment_shader, ...props }: Props) {
    const mesh = useRef<Mesh>(null!);
    const uniforms = useMemo(() => {
        return {
            u_time: { value: 0 },
            u_intensity: { value: intensity ?? 0.8 },
            u_seed: { value: Math.random() * 1000 },
        };
    }, []);

    useFrame((cb) => {
        const { clock } = cb;

        if (mesh.current) {
            // TODO: There has got to be a better way than this
            // @ts-expect-error
            mesh.current.material.uniforms.u_time.value = 0.04 * clock.getElapsedTime();
        }
    });

    return (
        // @ts-expect-error
        <motion.mesh ref={mesh} scale={1.5} {...props}>
            <icosahedronGeometry args={[2, 20]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragment_shader}
                uniforms={uniforms}
            />
        </motion.mesh>
    );
}

export default Blob;
