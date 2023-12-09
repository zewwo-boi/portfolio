/* eslint-disable react/no-unknown-property */
import { MeshProps, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh } from "three";

import vertexShader from "@/components/Party/Blob/vertexShader";

interface Props {
    fragment_shader: string;
    intensity?: number;
    args?: Partial<MeshProps>;
}

function Blob({ fragment_shader, intensity = 0.8, args }: Props) {
    const mesh = useRef<Mesh>();
    const uniforms = useMemo(() => {
        return {
            u_time: { value: 0 },
            u_intensity: { value: intensity },
            u_seed: { value: Math.random() * 1000 },
        };
    }, []);

    useFrame((cb) => {
        const { clock } = cb;

        if (mesh.current) {
            mesh.current.material.uniforms.u_time.value = 0.04 * clock.getElapsedTime();
        }
    });

    return (
        <mesh ref={mesh} scale={1.5} {...args}>
            <icosahedronGeometry args={[2, 20]} />
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragment_shader}
                uniforms={uniforms}
            />
        </mesh>
    );
}

export default Blob;
