/* eslint-disable react/no-unknown-property */
import vertexShader from "@/components/Party/Blob/vertexShader";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { Mesh, Vector3 } from "three";

interface Props {
    fragment_shader: string;
    coord?: Vector3;
}

function Blob({ fragment_shader, coord = new Vector3(0, 0, 0) }: Props) {
    const mesh = useRef<Mesh>();
    const uniforms = useMemo(() => {
        return {
            u_time: { value: 0 },
            u_intensity: { value: 0.8 },
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
        <mesh ref={mesh} scale={1.5} position={coord}>
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
