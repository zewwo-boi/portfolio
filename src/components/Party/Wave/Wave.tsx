/* eslint-disable react/no-unknown-property */
import { MeshProps, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useMemo, useRef } from "react";
import { Mesh } from "three";

import vertexShader from "@/components/Party/Wave/wave.vert";
import { MotionProps } from "framer-motion";

interface Props extends Partial<MotionProps & MeshProps> {
    fragment_shader: string;
    intensity?: number;
}

function Wave({ fragment_shader, intensity = 0.2, ...props }: Props) {
    const mesh = useRef<Mesh>();
    const uniforms = useMemo(() => {
        return {
            u_time: { value: 0 },
            u_intensity: { value: intensity },
        };
    }, []);

    useFrame((cb) => {
        const { clock } = cb;

        if (mesh.current) {
            // @ts-expect-error
            mesh.current.material.uniforms.u_time.value = 0.6 * clock.getElapsedTime();
        }
    });

    return (
        // @ts-expect-error
        <motion.mesh ref={mesh} scale={1} {...props} rotation={[Math.PI / -2, 0, 0]}>
            <planeGeometry args={[16, 4, 160, 40]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragment_shader}
                uniforms={uniforms}
            />
        </motion.mesh>
    );
}

export default Wave;
